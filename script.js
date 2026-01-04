// Initialize highlight.js
document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
});

// Render language cards
function renderLanguages(languagesToRender) {
    const grid = document.getElementById('languagesGrid');
    grid.innerHTML = '';
    
    languagesToRender.forEach((lang, index) => {
        const card = document.createElement('div');
        card.className = 'language-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const tagsHTML = lang.tags.map(tag => 
            `<span class="language-tag">${tag}</span>`
        ).join('');
        
        // Author section
        let authorHTML = '';
        if (lang.authors && lang.authors.length > 0) {
            const authorNames = lang.authors.map(a => a.name).join(', ');
            const authorBio = lang.authors[0].bio; // Show first author's bio
            authorHTML = `
                <div class="language-author">
                    <div class="author-name">Created by ${authorNames}</div>
                    <div class="author-bio">${authorBio}</div>
                </div>
            `;
        }

        // Relationships section
        let relationshipsHTML = '';
        if ((lang.influences && lang.influences.length > 0) || (lang.influenced && lang.influenced.length > 0)) {
            let influencesHTML = '';
            let influencedHTML = '';

            if (lang.influences && lang.influences.length > 0) {
                const influenceLinks = lang.influences.map(name =>
                    `<span class="lang-link" data-lang="${name}">${name}</span>`
                ).join(', ');
                influencesHTML = `<div class="relationship-group"><strong>Influenced by:</strong> ${influenceLinks}</div>`;
            }

            if (lang.influenced && lang.influenced.length > 0) {
                const influencedLinks = lang.influenced.map(name =>
                    `<span class="lang-link" data-lang="${name}">${name}</span>`
                ).join(', ');
                influencedHTML = `<div class="relationship-group"><strong>Influenced:</strong> ${influencedLinks}</div>`;
            }

            relationshipsHTML = `
                <div class="language-relationships">
                    <button class="relationships-toggle">
                        <span class="toggle-icon">▶</span> Show Relationships
                    </button>
                    <div class="relationships-content">
                        ${influencesHTML}
                        ${influencedHTML}
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="language-header">
                <div class="language-info">
                    <h3>${lang.name}</h3>
                    <div class="language-meta">
                        ${tagsHTML}
                    </div>
                </div>
                <div class="language-year">${lang.year}</div>
            </div>
            <div class="code-block">
                <div class="code-header">
                    <span class="code-filename">${lang.filename}</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code class="language-${getLanguageClass(lang.name)}">${escapeHtml(lang.code)}</code></pre>
            </div>
            <div class="language-description">${lang.description}</div>
            ${authorHTML}
            ${relationshipsHTML}
        `;
        
        grid.appendChild(card);
    });

    // Re-highlight code blocks
    setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }, 50);

    // Add event listeners for relationship toggles
    document.querySelectorAll('.relationships-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.toggle-icon');
            const isOpen = content.style.display === 'block';

            content.style.display = isOpen ? 'none' : 'block';
            icon.textContent = isOpen ? '▶' : '▼';
            button.innerHTML = `<span class="toggle-icon">${isOpen ? '▶' : '▼'}</span> ${isOpen ? 'Show' : 'Hide'} Relationships`;
        });
    });

    // Add event listeners for language links
    document.querySelectorAll('.lang-link').forEach(link => {
        link.addEventListener('click', () => {
            const langName = link.dataset.lang;
            const searchInput = document.getElementById('search');
            const searchClear = document.getElementById('searchClear');
            searchInput.value = langName;
            currentSearch = langName;
            searchClear.style.display = 'block';
            filterLanguages();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
}

// Get appropriate language class for syntax highlighting
function getLanguageClass(langName) {
    const mapping = {
        'C': 'c',
        'C++': 'cpp',
        'JavaScript': 'javascript',
        'TypeScript': 'typescript',
        'Python': 'python',
        'Java': 'java',
        'Rust': 'rust',
        'Go': 'go',
        'Ruby': 'ruby',
        'PHP': 'php',
        'Swift': 'swift',
        'Kotlin': 'kotlin',
        'Haskell': 'haskell',
        'Lisp': 'lisp',
        'Scheme': 'scheme',
        'Clojure': 'clojure',
        'Elixir': 'elixir',
        'Erlang': 'erlang',
        'Scala': 'scala',
        'Perl': 'perl',
        'R': 'r',
        'MATLAB': 'matlab',
        'Julia': 'julia',
        'Fortran': 'fortran',
        'COBOL': 'cobol',
        'Assembly (x86)': 'x86asm',
        'Bash': 'bash',
        'PowerShell': 'powershell',
        'Lua': 'lua',
        'Dart': 'dart',
        'OCaml': 'ocaml',
        'F#': 'fsharp',
        'Zig': 'zig',
        'Crystal': 'crystal',
        'Nim': 'nim',
        'V': 'v',
        'HTML': 'html',
        'CSS': 'css',
        'SQL': 'sql',
        'Prolog': 'prolog',
        'Ada': 'ada',
        'Pascal': 'pascal',
        'Objective-C': 'objectivec',
        'Smalltalk': 'smalltalk',
        'BASIC': 'basic'
    };
    
    return mapping[langName] || 'plaintext';
}

// Escape HTML for safe rendering
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.borderColor = 'var(--color-accent)';
        button.style.color = 'var(--color-accent)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        button.textContent = 'Failed';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Filtering
let currentFilter = 'all';
let currentSearch = '';
let currentLanguageOrder = [];

function filterLanguages() {
    let filtered = currentLanguageOrder.length > 0 ? currentLanguageOrder : languages;

    // Apply tag filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(lang =>
            lang.tags.includes(currentFilter)
        );
    }

    // Apply search filter with relevance scoring
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();

        // Filter and score matches
        filtered = filtered.filter(lang =>
            lang.name.toLowerCase().includes(searchLower) ||
            lang.description.toLowerCase().includes(searchLower) ||
            lang.tags.some(tag => tag.toLowerCase().includes(searchLower))
        ).map(lang => {
            let score = 0;
            const nameLower = lang.name.toLowerCase();

            // Exact name match (highest priority)
            if (nameLower === searchLower) {
                score = 1000;
            }
            // Name starts with search (very high priority)
            else if (nameLower.startsWith(searchLower)) {
                score = 500;
            }
            // Name contains search (high priority)
            else if (nameLower.includes(searchLower)) {
                score = 100;
            }
            // Tag match (medium priority)
            else if (lang.tags.some(tag => tag.toLowerCase().includes(searchLower))) {
                score = 50;
            }
            // Description match (low priority)
            else if (lang.description.toLowerCase().includes(searchLower)) {
                score = 10;
            }

            return { lang, score };
        })
        // Sort by score (highest first)
        .sort((a, b) => b.score - a.score)
        // Extract just the language objects
        .map(item => item.lang);
    }

    renderLanguages(filtered);
}

// Set up filter buttons
document.querySelectorAll('.filter-tag').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-tag').forEach(btn => 
            btn.classList.remove('active')
        );
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        filterLanguages();
    });
});

// Set up search
const searchInput = document.getElementById('search');
const searchClear = document.getElementById('searchClear');

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterLanguages();

    // Show/hide clear button based on input value
    searchClear.style.display = currentSearch ? 'block' : 'none';
});

// Clear search button
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    filterLanguages();
    searchClear.style.display = 'none';
    searchInput.focus();
});

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.filter-bar').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Initialize stats counters on load
window.addEventListener('load', () => {
    document.querySelectorAll('.stat-number').forEach(element => {
        // Only animate if element has data-count attribute
        if (element.dataset.count) {
            setTimeout(() => {
                animateCounter(element);
            }, 1000);
        }
    });
});

// Update stats based on actual data
function updateStats() {
    const totalLanguages = languages.length;
    const uniqueParadigms = new Set();
    let earliestYear = Infinity;

    languages.forEach(lang => {
        lang.tags.forEach(tag => uniqueParadigms.add(tag));
        if (lang.year < earliestYear) {
            earliestYear = lang.year;
        }
    });

    // Update the counters with actual values
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers[0].dataset.count = totalLanguages;
    statNumbers[1].dataset.count = uniqueParadigms.size;
    // Skip statNumbers[2] - it's the year span with static text "1949-2024"
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get or create randomized language order
function getLanguageOrder() {
    const savedOrder = localStorage.getItem('language-order');
    const orderLocked = localStorage.getItem('order-locked') === 'true';

    if (savedOrder && orderLocked) {
        // Use saved order
        try {
            const orderIndices = JSON.parse(savedOrder);
            return orderIndices.map(i => languages[i]).filter(lang => lang);
        } catch (e) {
            console.error('Failed to load saved order:', e);
        }
    }

    // Create new randomized order
    const shuffled = shuffleArray(languages);
    const indices = shuffled.map(lang => languages.indexOf(lang));
    localStorage.setItem('language-order', JSON.stringify(indices));
    return shuffled;
}

// Order control functionality
function updateOrderControlButton() {
    const btn = document.getElementById('orderControlBtn');
    const isLocked = localStorage.getItem('order-locked') === 'true';

    if (isLocked) {
        btn.classList.add('locked');
        btn.querySelector('.btn-icon').textContent = '🔒';
        btn.querySelector('.btn-text').textContent = 'Unlock Order';
    } else {
        btn.classList.remove('locked');
        btn.querySelector('.btn-icon').textContent = '🔀';
        btn.querySelector('.btn-text').textContent = 'Shuffle Order';
    }
}

function shuffleOrder() {
    const shuffled = shuffleArray(languages);
    const indices = shuffled.map(lang => languages.indexOf(lang));
    localStorage.setItem('language-order', JSON.stringify(indices));
    localStorage.setItem('order-locked', 'false');
    currentLanguageOrder = shuffled;
    updateOrderControlButton();
    filterLanguages();
}

function toggleOrderLock() {
    const isLocked = localStorage.getItem('order-locked') === 'true';
    localStorage.setItem('order-locked', (!isLocked).toString());
    updateOrderControlButton();
}

// Set up order control button
document.getElementById('orderControlBtn')?.addEventListener('click', () => {
    const isLocked = localStorage.getItem('order-locked') === 'true';
    if (isLocked) {
        toggleOrderLock();
    } else {
        shuffleOrder();
    }
});

// Set up reset button
document.getElementById('resetBtn')?.addEventListener('click', () => {
    const searchInput = document.getElementById('search');
    const searchClear = document.getElementById('searchClear');

    // Clear search
    searchInput.value = '';
    currentSearch = '';
    searchClear.style.display = 'none';

    // Reset filter to "All"
    currentFilter = 'all';
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });

    // Re-render with original order
    filterLanguages();

    // Scroll to position where sticky header and filter bar are at top
    setTimeout(() => {
        const mainNav = document.querySelector('.main-nav');
        if (mainNav) {
            // Get the height of the sticky header
            const navHeight = mainNav.offsetHeight;
            // Scroll to just past the header so filter bar sticks at top
            window.scrollTo({
                top: navHeight + 1,
                behavior: 'smooth'
            });
        }
    }, 100);
});

// Initial render with randomized order
updateStats();
currentLanguageOrder = getLanguageOrder();
renderLanguages(currentLanguageOrder);
updateOrderControlButton();

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus search with '/'
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Clear search with Escape
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        currentSearch = '';
        filterLanguages();
        document.getElementById('searchClear').style.display = 'none';
        searchInput.blur();
    }
});

// Add parallax effect to hero on scroll and fade explore indicator
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            const scrollIndicator = document.querySelector('.scroll-indicator');

            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
            }

            // Fade out scroll indicator quickly when scrolling starts
            if (scrollIndicator) {
                if (scrolled > 50) {
                    scrollIndicator.style.opacity = '0';
                    scrollIndicator.style.transition = 'opacity 0.3s ease';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            }

            ticking = false;
        });
        ticking = true;
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Filter to only esoteric languages
        currentFilter = 'esoteric';
        document.querySelector('[data-filter="esoteric"]').click();
        
        // Add a fun visual effect
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// Add CSS for rainbow easter egg
const style = document.createElement('style');
style.textContent = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
`;
document.head.appendChild(style);
