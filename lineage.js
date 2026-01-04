// Get era color based on year
function getEraColor(year) {
    if (year < 1970) return 'var(--era-1950s)';
    if (year < 1980) return 'var(--era-1970s)';
    if (year < 1990) return 'var(--era-1980s)';
    if (year < 2000) return 'var(--era-1990s)';
    if (year < 2010) return 'var(--era-2000s)';
    return 'var(--era-2010s)';
}

// Convert era color to actual hex
function getActualColor(cssVar) {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar.replace('var(', '').replace(')', '')).trim();
}

// Build graph data from languages
function buildGraphData() {
    const nodes = languages.map(lang => ({
        id: lang.name,
        year: lang.year,
        color: getActualColor(getEraColor(lang.year)),
        influences: lang.influences || [],
        influenced: lang.influenced || [],
        description: lang.description,
        tags: lang.tags
    }));
    
    const links = [];
    languages.forEach(lang => {
        if (lang.influences && lang.influences.length > 0) {
            lang.influences.forEach(influence => {
                // Only create link if both nodes exist
                if (nodes.find(n => n.id === influence)) {
                    links.push({
                        source: influence,
                        target: lang.name
                    });
                }
            });
        }
    });
    
    return { nodes, links };
}

// Setup SVG and simulation
const container = document.getElementById('lineage-graph');
const width = container.clientWidth;
const height = container.clientHeight;

const svg = d3.select('#lineage-graph')
    .attr('viewBox', [0, 0, width, height])
    .call(d3.zoom()
        .scaleExtent([0.3, 3])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        })
    );

const g = svg.append('g');

// Build data
const data = buildGraphData();

// Create force simulation
let simulation = d3.forceSimulation(data.nodes)
    .force('link', d3.forceLink(data.links)
        .id(d => d.id)
        .distance(100)
        .strength(0.5)
    )
    .force('charge', d3.forceManyBody()
        .strength(-300)
        .distanceMax(400)
    )
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(30));

// Create links
const link = g.append('g')
    .selectAll('path')
    .data(data.links)
    .join('path')
    .attr('class', 'link')
    .attr('marker-end', 'url(#arrowhead)');

// Add arrowhead marker
svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 20)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim())
    .attr('opacity', 0.3);

// Create nodes
const node = g.append('g')
    .selectAll('g')
    .data(data.nodes)
    .join('g')
    .attr('class', 'node')
    .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    );

// Add circles to nodes
node.append('circle')
    .attr('r', d => {
        // Bigger nodes for more influential languages
        const influenceCount = d.influenced.length;
        return 8 + Math.min(influenceCount * 2, 15);
    })
    .attr('fill', d => d.color);

// Add labels to nodes
const labels = node.append('text')
    .attr('dy', d => {
        const influenceCount = d.influenced.length;
        const radius = 8 + Math.min(influenceCount * 2, 15);
        return radius + 15;
    })
    .text(d => d.id);

// Tooltip
const tooltip = d3.select('#tooltip');

// Node interactions
node.on('mouseover', function(event, d) {
    // Highlight connected nodes and links
    const connectedNodes = new Set([d.id, ...d.influences, ...d.influenced]);
    
    node.classed('highlighted', n => connectedNodes.has(n.id));
    link.classed('highlighted', l => 
        (l.source.id === d.id || l.target.id === d.id)
    );
    
    // Show tooltip
    const influences = d.influences.length > 0 
        ? `<div class="influences"><strong>Influenced by:</strong> ${d.influences.join(', ')}</div>`
        : '';
    
    const influenced = d.influenced.length > 0 
        ? `<div class="influences"><strong>Influenced:</strong> ${d.influenced.join(', ')}</div>`
        : '';
    
    tooltip
        .html(`
            <h4>${d.id}</h4>
            <p class="year">${d.year}</p>
            <p>${d.description}</p>
            ${influences}
            ${influenced}
        `)
        .classed('show', true)
        .style('left', (event.pageX + 15) + 'px')
        .style('top', (event.pageY + 15) + 'px');
})
.on('mouseout', function() {
    node.classed('highlighted', false);
    link.classed('highlighted', false);
    tooltip.classed('show', false);
})
.on('click', function(event, d) {
    // Navigate to main gallery with search parameter
    window.location.href = `/?search=${encodeURIComponent(d.id)}`;
});

// Update positions
simulation.on('tick', () => {
    link.attr('d', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
    });
    
    node.attr('transform', d => `translate(${d.x},${d.y})`);
});

// Drag functions
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// Controls
let physicsRunning = true;

document.getElementById('resetView').addEventListener('click', () => {
    svg.transition()
        .duration(750)
        .call(
            d3.zoom().transform,
            d3.zoomIdentity
        );
    
    // Restart simulation to recenter
    simulation.alpha(1).restart();
});

document.getElementById('togglePhysics').addEventListener('click', function() {
    physicsRunning = !physicsRunning;
    
    if (physicsRunning) {
        simulation.alpha(0.3).restart();
        this.textContent = 'Pause Physics';
    } else {
        simulation.stop();
        this.textContent = 'Resume Physics';
    }
});

document.getElementById('showLabels').addEventListener('change', function() {
    labels.style('display', this.checked ? 'block' : 'none');
});

// Responsive handling
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        
        svg.attr('viewBox', [0, 0, newWidth, newHeight]);
        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.alpha(0.3).restart();
    }, 250);
});

// Initial animation
setTimeout(() => {
    node.selectAll('circle')
        .transition()
        .duration(1000)
        .delay((d, i) => i * 20)
        .attr('r', d => {
            const influenceCount = d.influenced.length;
            return 8 + Math.min(influenceCount * 2, 15);
        });
}, 500);
