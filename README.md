# 🌍 helloworlds.io

**A beautiful, curated collection of "Hello, World!" implementations across every programming language imaginable.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Languages](https://img.shields.io/badge/languages-128-gold.svg)
![Binary](https://img.shields.io/badge/0b10000000-128%20languages-brightgreen.svg)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

## 10000000 Ways to Say Hello
**That's 128 in binary** 🤓

*The perfect gift for the programmer in your life*

---

## 🎨 About

helloworlds.io celebrates the universal tradition of "Hello, World!"—the first program every developer writes when learning a new language. This project showcases these greetings in a stunning, museum-quality interface that makes code beautiful.

### Features

🎊 **128 Programming Languages** (`0b10000000`), exactly the binary milestone that gives the project its name  
🎁 **Perfect gift** for the programmer in your life  
🏆 **Complete Timeline** - From Assembly (1949) to Bend (2024)  
🌟 **Every Era** - Including 2019-2025 modern languages (Mojo, Carbon, Gleam, Roc, Bend, Odin, Unison)  
🎯 **Complete Lineage** - TeX→PostScript→PDF, Eiffel→Java/C#, FALSE→Brainfuck  
🎨 **19 Esoteric Languages** - Chef (recipes!), Rockstar (lyrics!), ArnoldC (Schwarzenegger!), Velato (music!)  
🔧 **Six Architectures** - Assembly, x86, ARM, 6502, MIPS, RISC-V  
📖 **Origin Story** - Brian Kernighan's "Hello, World!" tradition  
👥 **Creator Biographies** - Meet 128+ legendary programmers  
🌳 **Interactive Lineage Graph** - Explore influence relationships  
🗳️ **Honorable Mentions** - Vote for languages to include next!  
🎯 **Smart Filtering** - By paradigm, decade, and use case  
🔍 **Instant Search** - Find any language by name, creator, or description  
🎭 **Beautiful Syntax Highlighting** - Every snippet properly highlighted  
📋 **One-Click Copy** - Copy any code to clipboard instantly  
🌙 **Dark Theme** - Museum-quality aesthetic  
⚡ **Smooth Animations** - Delightful micro-interactions  
🎹 **Keyboard Shortcuts** - `/` to search, `Escape` to clear  

---

## 🚀 Quick Start

### View the Website

Simply open `index.html` in your browser. No build process, no dependencies—just pure HTML, CSS, and JavaScript.

```bash
# Clone the repository
git clone https://github.com/yourusername/helloworlds.git

# Navigate to the directory
cd helloworlds

# Open in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Or Host it Locally

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

---

## 📖 The Origins Page

Discover the fascinating history of "Hello, World!" itself:

- **The First Hello** - Brian Kernighan's 1972 tutorial for the B language
- **K&R C** - How the 1978 book "The C Programming Language" immortalized the tradition
- **Why This Phrase?** - The pedagogical genius behind the simplest first program
- **Cultural Impact** - How it became a universal rite of passage
- **Brian Kernighan** - Meet the man who (probably) started it all
- **Evolution** - From "hello, world" to "Hello, World!"

The Origins page is a lovingly-crafted deep dive into programming culture, designed with a magazine-editorial aesthetic.

---

## 🌳 Language Lineage Visualization

The **Lineage** page features an interactive force-directed graph showing how programming languages influenced each other through history.

### How to Use
- **Hover** over any node to see its details and connections
- **Click and drag** nodes to rearrange the graph
- **Scroll** to zoom in and out
- **Click** a language to view it in the main gallery

### Color Coding by Era
- 🔴 **1950s-1960s** - The Dawn (Fortran, BASIC, COBOL)
- 🟣 **1970s** - The Revolution (C, Pascal, Smalltalk, Prolog)
- 🟪 **1980s** - Expansion (C++, Objective-C, Perl, Ada)
- 🔵 **1990s** - Internet Age (Python, Java, JavaScript, Ruby, PHP)
- 🔷 **2000s** - Modern Era (C#, Scala, Clojure, F#)
- 🟢 **2010s+** - Innovation (Rust, Go, Swift, Kotlin, Julia)

### Node Size
Larger nodes represent languages that influenced more descendants. For example, C and Lisp have large nodes because they influenced countless modern languages.

---

## 👥 Meet the Creators

Each language card now features biographical information about its creator(s):

**Assembly & Hardware Pioneers:**
- **Sophie Wilson & Steve Furber** (ARM) - Designed the chip architecture in every smartphone
- **Chuck Peddle & Bill Mensch** (6502) - Made computing affordable for the masses
- **John L. Hennessy** (MIPS) - Stanford president and Turing Award winner
- **David Patterson et al.** (RISC-V) - Creating an open-source processor future

**Modern Language Pioneers:**
- **Guido van Rossum** (Python) - The "Benevolent Dictator For Life"
- **Brendan Eich** (JavaScript) - Created in just 10 days at Netscape
- **James Gosling** (Java) - "Dr. Java" and the "write once, run anywhere" vision
- **Chris Lattner** (Swift) - Also created LLVM compiler infrastructure

**Systems Programming Legends:**
- **Dennis Ritchie** (C) - The father of C and co-creator of Unix
- **Ken Thompson** (B, Go) - Unix pioneer and Turing Award winner
- **Bjarne Stroustrup** (C++) - Combined C with object-oriented features
- **Martin Richards** (BCPL) - Grandfather of C, introduced /* */ comments

**Functional Programming Visionaries:**
- **John McCarthy** (Lisp) - Who coined "artificial intelligence"
- **Robin Milner** (ML) - Pioneer of type inference and polymorphic types
- **Rich Hickey** (Clojure) - Spent 2 years of savings to build it
- **David Turner** (Miranda) - Pioneered lazy functional programming

**Historical Trailblazers:**
- **John Backus** (Fortran) - Led the team that created the first high-level language
- **Grace Hopper** (COBOL) - Rear Admiral and compiler inventor
- **Ole-Johan Dahl & Kristen Nygaard** (Simula) - Invented object-oriented programming
- **Alan Kay, Dan Ingalls, Adele Goldberg** (Smalltalk) - The Xerox PARC legends

**And 40+ more** brilliant, eccentric, and legendary programmers who shaped computing history. Each bio is carefully researched and written to be engaging and informative.

---

## 🤝 Contributing

We'd love your help expanding this collection! Here's how to contribute:

### Adding a New Language

1. Fork this repository
2. Edit `languages.js`
3. Add your language following this structure:

```javascript
{
    name: "YourLanguage",
    year: 2024,
    tags: ["compiled", "oop"], // Choose from: compiled, interpreted, functional, oop, esoteric, web, system
    code: `your code here`,
    filename: "hello.ext",
    description: "A compelling description of the language and what makes its Hello World unique."
}
```

4. Test your changes locally
5. Submit a pull request

### Guidelines

- **Code**: Use idiomatic "Hello, World!" for the language
- **Filename**: Use the standard file extension
- **Description**: 1-2 sentences that capture the essence of the language
- **Tags**: Be accurate and consistent
- **Year**: Use the year of first public release

---

## 📚 Language Categories

### By Paradigm
- **Compiled**: C, C++, Rust, Go, Java, Kotlin, and more
- **Interpreted**: Python, JavaScript, Ruby, PHP, Perl, and more
- **Functional**: Haskell, Lisp, Clojure, Elixir, F#, and more
- **Object-Oriented**: Java, C++, Ruby, Python, and more
- **Esoteric**: Brainfuck, Whitespace, LOLCODE, Shakespeare, Piet

### By Domain
- **Web**: JavaScript, TypeScript, PHP, Dart, Elm
- **Systems**: C, C++, Rust, Assembly, Go, Zig
- **Scientific**: Fortran, MATLAB, R, Julia
- **Enterprise**: Java, C#, COBOL, Ada

---

## 🎨 Design Philosophy

helloworlds.io is designed with several principles:

1. **Code as Art** - Each snippet is presented like a gallery piece
2. **Educational** - Descriptions provide context and history
3. **Accessible** - Clean, readable interface with strong contrast
4. **Performant** - No frameworks, just optimized vanilla JavaScript
5. **Distinctive** - Custom typography, sophisticated color palette, thoughtful animations

### Typography
- **Display**: Playfair Display (elegant serif for headings)
- **Body**: DM Sans (clean, readable sans-serif)
- **Code**: JetBrains Mono (crisp monospace with ligatures)

### Colors
- **Background**: Deep dark blues (#0a0a0f)
- **Accent**: Gold (#ffd700)
- **Highlight**: Cyan (#00d9ff)
- **Text**: Off-white (#e8e8f0)

---

## 🗺️ Roadmap

- [x] ~~Language family tree visualization~~ ✅ **Complete!**
- [ ] Add 100+ languages
- [ ] Implement "Run in Browser" for select languages (using WebAssembly)
- [ ] Add historical timeline view (chronological gallery)
- [ ] Community voting for favorite implementations
- [ ] Dark/Light theme toggle
- [ ] Multiple "Hello, World!" variants per language
- [ ] Export collection as PDF
- [ ] Mobile app version
- [ ] API for programmatic access
- [ ] Language comparison view (side-by-side)

---

## 🎯 Fun Features

### Easter Eggs
- Try the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) to reveal all esoteric languages
- Use keyboard shortcuts for faster navigation
- Hover effects reveal the craftsmanship in each card

### 📊 Current Collection

**128 languages** = `0b10000000` = **10000000 Ways to Say Hello**

*Exactly 128 languages, because every programmer will smile at that binary joke.*

### 🆕 Latest Additions (2019-2025)

The collection now includes cutting-edge languages from the past 6 years:

**Modern Systems (2):**
- **Odin (2016)** - Ginger Bill's joyful alternative to C for game development
- **Carbon (2022)** - Google's experimental C++ successor with modern syntax

**AI & Performance (1):**
- **Mojo (2023)** - Chris Lattner's Python superset with C-level performance for AI/ML

**Functional Evolution (4):**
- **Gleam (2016)** - Type-safe, friendly language for Erlang VM
- **Roc (2020)** - Richard Feldman's fast, friendly functional language
- **Unison (2019)** - Revolutionary content-addressed code storage
- **Bend (2024)** - Massively parallel functional programming for GPUs!

### The Complete Collection Stats:

- **128 programming languages** across 75 years (1949-2024)
- **6 processor architectures** - Assembly, x86, 6502, ARM, MIPS, RISC-V
- **19 esoteric languages** - From INTERCAL (1972, the first!) to Bend (2024)
- **19+ programming paradigms** - Including musical, culinary, and cinematic!
- **Complete lineage** - All influence relationships documented
- **128+ creators** - From Knuth to Lattner to Schwarzenegger

---

### Assembly Language Coverage

Programming didn't start with high-level languages—it started with assembly. We've included the most historically and culturally significant architectures:

- **Assembly (1949)** - The original, representing early computing's symbolic languages
- **6502 Assembly (1975)** - The chip that powered the home computer revolution (Apple II, C64, NES)
- **x86 Assembly (1978)** - The PC's foundation, still dominant in desktops and servers
- **ARM Assembly (1985)** - Powers virtually every smartphone, tablet, and modern Mac
- **MIPS Assembly (1985)** - The professor's favorite, plus PlayStation and N64
- **RISC-V Assembly (2010)** - The open-source future of processor architectures

Each includes working code and creator biographies, showing how assembly evolved from the first computers to modern open-source architectures.

### The Journey to 127 (0x7F)

**Initial Collection (50):**
Modern popular languages

**First Expansion (50→63):**
Historical ancestors + Assembly architectures

**Second Expansion (63→83):**
Essential 20 - Major omissions filled

**Third Expansion (83→100):**
Final push to the century mark

**Fourth Expansion - THE PERFECT NUMBER (100→127):**

**Essential Lineage (7):**
- **Eiffel (1985)** - Design-by-contract → Java/C# contracts
- **TeX (1978)** - Knuth's masterpiece → PostScript → PDF
- **RPG (1959)** - Business automation still running today
- **INTERCAL (1972)** - FIRST parody language! Spawned all esoterics
- **Dylan (1992)** - Apple's Lisp evolution
- **Io (2002)** - Prototype-based → influenced Scala
- **J (1990)** - APL successor by Iverson (Turing winner)

**Creative Esoterics (11):**
- **Chef (2002)** - Programs as cooking recipes (same author as Piet!)
- **Rockstar (2018)** - Programs as 80s rock lyrics
- **ArnoldC (2013)** - "IT'S SHOWTIME" to "YOU HAVE BEEN TERMINATED"
- **Velato (2009)** - Programs as MIDI music files
- **FALSE (1993)** - The language that inspired Brainfuck!
- **Ook! (2002)** - Brainfuck for orangutans (Terry Pratchett tribute)
- **Emojicode (2014)** - Full OOP in pure emoji 🏁🍇😀🍉
- **Cow (2006)** - Only "moo" variants allowed
- **Inform (1993)** - Interactive fiction language
- **Whenever (2013)** - Non-deterministic execution order

**Practical & Historical (9):**
- **HyperTalk (1987)** - HyperCard scripting → influenced web
- **Q (2003)** - Wall Street's time-series database language
- **Rebol (2000)** - Distributed computing pioneer
- **Red (2011)** - Full-stack Rebol successor
- **Pike (1994)** - From MUDs to networking
- **Ring (2016)** - Natural language programming
- **Wren (2013)** - Fast embeddable by 'Crafting Interpreters' author
- **NewtonScript (1993)** - Apple Newton PDA pioneer

---

## 📄 License

MIT License - feel free to use this project for learning, inspiration, or your own collections.

---

## 🙏 Acknowledgments

- The countless developers who created these languages
- Brian Kernighan for popularizing "Hello, World!" in *The C Programming Language* (1978)
- Everyone who's ever typed their first program

---

## 💬 Contact & Community

- **Issues**: Found a bug? [Open an issue](https://github.com/yourusername/helloworlds/issues)
- **Discussions**: Have ideas? [Start a discussion](https://github.com/yourusername/helloworlds/discussions)
- **Twitter**: Share your favorite language with #helloworldsio

---

<div align="center">

**Made with ♥ for developers everywhere**

*"Hello, World!" - The universal first words of every programmer's journey*

</div>
