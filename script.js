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
        `;
        
        grid.appendChild(card);
    });
    
    // Re-highlight code blocks
    setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }, 50);
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

function filterLanguages() {
    let filtered = languages;
    
    // Apply tag filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(lang => 
            lang.tags.includes(currentFilter)
        );
    }
    
    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(lang =>
            lang.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            lang.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
            lang.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase()))
        );
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
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    filterLanguages();
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
        setTimeout(() => {
            animateCounter(element);
        }, 1000);
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
    statNumbers[2].dataset.count = earliestYear;
}

// Initial render
updateStats();
renderLanguages(languages);

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
        searchInput.blur();
    }
});

// Add parallax effect to hero on scroll
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
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
