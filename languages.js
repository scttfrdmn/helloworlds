const languages = [
    {
        name: "Python",
        year: 1991,
        authors: [
            {
                name: "Guido van Rossum",
                org: "",
                bio: "Dutch programmer who created Python while working at CWI in the Netherlands. Named after Monty Python's Flying Circus, he aimed to create a language emphasizing code readability. Served as Python's 'Benevolent Dictator For Life' until 2018, and joined Microsoft as a Distinguished Engineer in 2020.",
                sources: [
                    { title: "Wikipedia: Guido van Rossum", url: "https://en.wikipedia.org/wiki/Guido_van_Rossum", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop", "functional"],
        code: `print("Hello, World!")`,
        filename: "hello.py",
        description: "Python's elegant syntax makes the classic greeting refreshingly simple—just a single line that embodies its philosophy of readability.",
        influences: ["ABC", "Modula-3", "C", "Perl", "Smalltalk", "AWK"],
        influenced: ["Ruby", "Swift", "Go", "Julia", "Nim", "Groovy", "Ring", "Mojo", "Solidity"]
    },
    {
        name: "JavaScript",
        year: 1995,
        authors: [
            {
                name: "Brendan Eich",
                org: "",
                bio: "Created JavaScript in just 10 days at Netscape in 1995, originally calling it Mocha, then LiveScript. Despite the rushed development, it became the language of the web. Co-founded Mozilla and briefly served as its CEO in 2014 (resigning after about two weeks), later co-founding Brave Software.",
                sources: [
                    { title: "Wikipedia: Brendan Eich", url: "https://en.wikipedia.org/wiki/Brendan_Eich", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "web", "oop", "functional"],
        code: `console.log("Hello, World!");`,
        filename: "hello.js",
        description: "The language of the web speaks its first words through the console, a gateway to interactive experiences across billions of devices.",
        influences: ["Scheme", "Self", "Java", "C", "Lisp", "Perl"],
        influenced: ["TypeScript", "Dart", "ActionScript", "Solidity"]
    },
    {
        name: "C",
        year: 1972,
        authors: [
            {
                name: "Dennis Ritchie",
                org: "",
                bio: "Created C at Bell Labs while working on Unix. His work fundamentally shaped modern computing—C became the foundation for countless languages and operating systems. Received the Turing Award in 1983 alongside Ken Thompson. Passed away in 2011, one week after Steve Jobs.",
                sources: [
                    { title: "Wikipedia: Dennis Ritchie", url: "https://en.wikipedia.org/wiki/Dennis_Ritchie", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        filename: "hello.c",
        description: "The grandfather of modern programming. C's verbose ceremony teaches us that every greeting requires proper structure and explicit intention.",
        influences: ["BCPL", "B", "Assembly", "ALGOL", "PL/I"],
        influenced: ["C++", "Objective-C", "Java", "Go", "Rust", "JavaScript", "PHP", "Perl", "Python", "Bash", "Zig", "Crystal", "D", "Vala", "Chapel", "Pike", "Odin"]
    },
    {
        name: "C++",
        year: 1985,
        authors: [
            {
                name: "Bjarne Stroustrup",
                org: "",
                bio: "Danish computer scientist who created C++ at Bell Labs as 'C with Classes.' Wanted to combine the efficiency of C with object-oriented features. Remained active in C++'s evolution; he was a technical fellow at Morgan Stanley (2014–2022) and became a professor of computer science at Columbia University. Author of 'The C++ Programming Language.'",
                sources: [
                    { title: "Wikipedia: Bjarne Stroustrup", url: "https://en.wikipedia.org/wiki/Bjarne_Stroustrup", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop", "system"],
        code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
        filename: "hello.cpp",
        description: "Building on C's foundation, C++ streams its greeting with object-oriented elegance, showcasing the power of abstraction.",
        influences: ["C", "Simula"],
        influenced: ["Java", "Rust", "Zig", "C#", "D", "Carbon", "Solidity"]
    },
    {
        name: "Java",
        year: 1995,
        authors: [
            {
                name: "James Gosling",
                org: "",
                bio: "Canadian computer scientist known as 'Dr. Java.' Created Java at Sun Microsystems, originally called Oak and intended for interactive television. The 'write once, run anywhere' philosophy revolutionized cross-platform development. After Sun, he worked at Oracle, Google, Liquid Robotics, and Amazon Web Services (joining in 2017), before retiring in 2024.",
                sources: [
                    { title: "Wikipedia: James Gosling", url: "https://en.wikipedia.org/wiki/James_Gosling", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        filename: "HelloWorld.java",
        description: "Java's verbosity is deliberate—every greeting exists within a class, teaching the fundamentals of object-oriented design from day one.",
        influences: ["C++", "Smalltalk", "Objective-C", "Modula-3", "C", "Eiffel"],
        influenced: ["Kotlin", "Scala", "Dart", "JavaScript", "C#", "Groovy", "ActionScript"]
    },
    {
        name: "Rust",
        year: 2010,
        authors: [
            {
                name: "Graydon Hoare",
                org: "",
                bio: "Created Rust as a personal project in 2006, later sponsored by Mozilla. Aimed to solve memory safety issues in systems programming without garbage collection. Left the Rust project in 2013, but the language has flourished, ranking as Stack Overflow's most admired language every year from 2016 onward.",
                sources: [
                    { title: "Wikipedia: Rust (programming language)", url: "https://en.wikipedia.org/wiki/Rust_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `fn main() {
    println!("Hello, World!");
}`,
        filename: "hello.rs",
        description: "Modern systems programming with memory safety. Rust's greeting is terse yet powerful, backed by compile-time guarantees.",
        influences: ["C++", "ML", "Haskell", "C", "OCaml"],
        influenced: ["Swift", "Zig", "V", "Pony", "Carbon", "Gleam"]
    },
    {
        name: "Go",
        year: 2009,
        authors: [
            {
                name: "Robert Griesemer",
                org: "Google",
                bio: "Swiss computer scientist who earned his doctorate at ETH Zurich under Niklaus Wirth. Before co-designing Go at Google, he worked on the V8 JavaScript engine, the Java HotSpot virtual machine, and Google's Sawzall language.",
                sources: [
                    { title: "Wikipedia: Robert Griesemer", url: "https://en.wikipedia.org/wiki/Robert_Griesemer", type: "encyclopedia" }
                ]
            },
            {
                name: "Rob Pike",
                org: "Google",
                bio: "Canadian programmer who spent years at Bell Labs on the Unix team, where he built the first Unix window system and helped create the Plan 9 operating system. With Ken Thompson he co-designed the UTF-8 encoding. He joined Google in 2002 and became a co-designer of Go.",
                sources: [
                    { title: "Wikipedia: Rob Pike", url: "https://en.wikipedia.org/wiki/Rob_Pike", type: "encyclopedia" }
                ]
            },
            {
                name: "Ken Thompson",
                org: "Google",
                bio: "American computer scientist who designed and built the original Unix at Bell Labs and created the B language, a predecessor to C. He shared the 1983 ACM Turing Award with Dennis Ritchie and co-defined UTF-8. He joined Google in 2006 and co-designed Go.",
                sources: [
                    { title: "Wikipedia: Ken Thompson", url: "https://en.wikipedia.org/wiki/Ken_Thompson", type: "encyclopedia" },
                    { title: "ACM A.M. Turing Award: Kenneth Thompson", url: "https://amturing.acm.org/award_winners/thompson_4588371.cfm", type: "award" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
        filename: "hello.go",
        description: "Google's pragmatic language greets with simplicity and speed, designed for the cloud-native era of concurrent systems.",
        influences: ["C", "Pascal", "Python", "Oberon"],
        influenced: ["V", "Zig", "Odin"]
    },
    {
        name: "Ruby",
        year: 1995,
        authors: [
            {
                name: "Yukihiro Matsumoto",
                org: "",
                bio: "Japanese computer scientist, widely known as 'Matz,' who designed Ruby and released its first version in December 1995, leading its reference implementation MRI ever since. Largely self-taught before earning an information science degree, he built Ruby to emphasize programmer happiness and productivity, and later served as Chief Architect of Ruby at Heroku.",
                sources: [
                    { title: "Wikipedia: Yukihiro Matsumoto", url: "https://en.wikipedia.org/wiki/Yukihiro_Matsumoto", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop"],
        code: `puts "Hello, World!"`,
        filename: "hello.rb",
        description: "Designed for programmer happiness, Ruby's greeting reads like poetry—minimal syntax, maximum expressiveness.",
        influences: ["Perl", "Smalltalk", "Lisp", "Python", "Scheme"],
        influenced: ["Elixir", "Crystal", "Swift", "Groovy"]
    },
    {
        name: "PHP",
        year: 1995,
        authors: [
            {
                name: "Rasmus Lerdorf",
                org: "",
                bio: "Danish-Canadian programmer who created PHP (Personal Home Page Tools) to maintain his personal homepage. Never intended to create a programming language—it evolved organically as a template system. PHP now runs roughly 70% of all websites whose server-side language is known, including WordPress.",
                sources: [
                    { title: "W3Techs: Usage of PHP for websites", url: "https://w3techs.com/technologies/details/pl-php", type: "statistics" },
                    { title: "Wikipedia: PHP", url: "https://en.wikipedia.org/wiki/PHP", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "web"],
        code: `<?php
echo "Hello, World!";
?>`,
        filename: "hello.php",
        description: "Born for the web, PHP wraps its greeting in tags, a reminder of its roots in dynamic server-side content generation.",
        influences: ["C", "Perl"],
        influenced: ["Hack"]
    },
    {
        name: "Swift",
        year: 2014,
        authors: [
            {
                name: "Chris Lattner",
                org: "",
                bio: "Created Swift at Apple while also developing LLVM compiler infrastructure. Designed to be a safer, faster replacement for Objective-C with modern language features. Left Apple in 2017 for Tesla, then Google and SiFive, and in 2022 co-founded Modular, where he is CEO. Swift is now open source and runs on Linux.",
                sources: [
                    { title: "Wikipedia: Chris Lattner", url: "https://en.wikipedia.org/wiki/Chris_Lattner", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `print("Hello, World!")`,
        filename: "hello.swift",
        description: "Apple's modern language combines safety with simplicity. Swift's greeting is as clean as its emoji-friendly variable names.",
        influences: ["Objective-C", "Rust", "Haskell", "Ruby", "Python"],
        influenced: ["Mojo"]
    },
    {
        name: "Kotlin",
        year: 2011,
        authors: [
            {
                name: "JetBrains Team",
                org: "",
                bio: "Developed by JetBrains (creators of IntelliJ IDEA) to address Java's verbosity while maintaining full Java interoperability. Named after Kotlin Island near St. Petersburg. Google made it an official Android language in 2017, giving it mainstream adoption.",
                sources: [
                    { title: "Wikipedia: Kotlin (programming language)", url: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `fun main() {
    println("Hello, World!")
}`,
        filename: "hello.kt",
        description: "A more concise alternative to Java, Kotlin greets with modern sensibilities while maintaining JVM compatibility.",
        influences: ["Java", "Scala"],
        influenced: []
    },
    {
        name: "TypeScript",
        year: 2012,
        authors: [
            {
                name: "Anders Hejlsberg",
                org: "",
                bio: "Danish software engineer, the original author of Turbo Pascal and lead architect of C# and .NET Framework at Microsoft. Created TypeScript to bring static typing to JavaScript for large-scale application development. TypeScript is now the foundation of Angular and widely used in React.",
                sources: [
                    { title: "Wikipedia: Anders Hejlsberg", url: "https://en.wikipedia.org/wiki/Anders_Hejlsberg", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "web", "oop"],
        code: `console.log("Hello, World!");`,
        filename: "hello.ts",
        description: "JavaScript with types. The greeting looks familiar, but beneath lies a type system ensuring your 'Hello' is always a string.",
        influences: ["JavaScript", "C#"],
        influenced: []
    },
    {
        name: "Haskell",
        year: 1990,
        authors: [
            {
                name: "Simon Peyton Jones",
                org: "University of Glasgow",
                bio: "British computer scientist who was a major contributor to the design of Haskell, created by an international committee around 1990, and a lead developer of the Glasgow Haskell Compiler (GHC). A professor at Glasgow, he later spent two decades at Microsoft Research in Cambridge before joining Epic Games in 2021.",
                sources: [
                    { title: "Wikipedia: Simon Peyton Jones", url: "https://en.wikipedia.org/wiki/Simon_Peyton_Jones", type: "encyclopedia" }
                ]
            },
            {
                name: "Paul Hudak",
                org: "Yale University",
                bio: "American computer scientist (1952–2015) and professor at Yale, where he chaired the computer science department. He was a key figure on the committee that designed Haskell and a leading editor of its early reports, and co-authored the paper 'A History of Haskell.'",
                sources: [
                    { title: "Wikipedia: Paul Hudak", url: "https://en.wikipedia.org/wiki/Paul_Hudak", type: "encyclopedia" }
                ]
            },
            {
                name: "Philip Wadler",
                org: "University of Edinburgh",
                bio: "American computer scientist who helped design Haskell as part of its committee and brought monads and type classes into mainstream functional programming. He held posts at Glasgow and Bell Labs before becoming professor of theoretical computer science at Edinburgh in 2003, and also contributed generics to Java.",
                sources: [
                    { title: "Wikipedia: Philip Wadler", url: "https://en.wikipedia.org/wiki/Philip_Wadler", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `main :: IO ()
main = putStrLn "Hello, World!"`,
        filename: "hello.hs",
        description: "Pure functional programming greets through monadic IO actions—even 'Hello, World!' is a mathematical transformation.",
        influences: ["ML", "Miranda", "Standard ML"],
        influenced: ["Rust", "Swift", "F#", "Scala", "Raku", "Elm", "PureScript", "Idris", "Bend", "Unison"]
    },
    {
        name: "Lisp",
        year: 1958,
        authors: [
            {
                name: "John McCarthy",
                org: "",
                bio: "American computer scientist who coined the term 'artificial intelligence' and created Lisp while at MIT. Received the Turing Award in 1971. Lisp introduced groundbreaking concepts like garbage collection, tree data structures, and treating code as data. Passed away in 2011.",
                sources: [
                    { title: "Wikipedia: John McCarthy", url: "https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "functional"],
        code: `(print "Hello, World!")`,
        filename: "hello.lisp",
        description: "The second-oldest high-level language speaks in parentheses. Every greeting is a list, every list a possibility.",
        influences: ["Fortran"],
        influenced: ["Scheme", "Clojure", "JavaScript", "Ruby", "Nim", "Julia", "ML", "Common Lisp", "Racket", "Emacs Lisp", "Dylan", "Io", "Rebol", "Red"]
    },
    {
        name: "Scheme",
        year: 1975,
        authors: [
            {
                name: "Guy L. Steele Jr.",
                org: "MIT",
                bio: "American computer scientist who co-designed Scheme with Gerald Jay Sussman at the MIT AI Lab in 1975, producing the influential 'Lambda Papers.' He went on to write the original Common Lisp specification, co-author The Java Language Specification, and lead the Fortress language project.",
                sources: [
                    { title: "Wikipedia: Guy L. Steele Jr.", url: "https://en.wikipedia.org/wiki/Guy_L._Steele_Jr.", type: "encyclopedia" }
                ]
            },
            {
                name: "Gerald Jay Sussman",
                org: "MIT",
                bio: "American computer scientist and longtime MIT professor who co-invented Scheme with his student Guy Steele in 1975. He co-authored the landmark textbook Structure and Interpretation of Computer Programs and did pioneering work in artificial intelligence and constraint propagation.",
                sources: [
                    { title: "Wikipedia: Gerald Jay Sussman", url: "https://en.wikipedia.org/wiki/Gerald_Jay_Sussman", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "functional"],
        code: `(display "Hello, World!")
(newline)`,
        filename: "hello.scm",
        description: "A minimal Lisp dialect that proves simple can be powerful. Scheme greets with elegant s-expressions.",
        influences: ["Lisp"],
        influenced: ["JavaScript", "Ruby", "Clojure", "R", "Lua", "Common Lisp", "Racket", "Dylan"]
    },
    {
        name: "Clojure",
        year: 2007,
        authors: [
            {
                name: "Rich Hickey",
                org: "",
                bio: "Created Clojure after years of frustration with mutable state in C++/Java. Wanted a Lisp for the JVM with immutability by default. He spent roughly two and a half years working on Clojure full-time with no outside funding before its 2007 release. Known for thoughtful talks on software design and simplicity.",
                sources: [
                    { title: "Wikipedia: Rich Hickey", url: "https://en.wikipedia.org/wiki/Rich_Hickey", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `(println "Hello, World!")`,
        filename: "hello.clj",
        description: "A modern Lisp for the JVM. Clojure brings functional programming and immutability to enterprise systems.",
        influences: ["Lisp", "Scheme", "ML", "Common Lisp"],
        influenced: []
    },
    {
        name: "Elixir",
        year: 2011,
        authors: [
            {
                name: "José Valim",
                org: "",
                bio: "Brazilian programmer and Rails core team member who created Elixir to bring better tooling and a friendlier syntax to the Erlang VM. Wanted the productivity of Ruby with Erlang's concurrency model. Elixir has become popular for web development and real-time systems.",
                sources: [
                    { title: "Wikipedia: José Valim", url: "https://en.wikipedia.org/wiki/Jos%C3%A9_Valim", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `IO.puts "Hello, World!"`,
        filename: "hello.exs",
        description: "Built on Erlang's foundation, Elixir greets with fault-tolerant, concurrent elegance designed for distributed systems.",
        influences: ["Erlang", "Ruby"],
        influenced: []
    },
    {
        name: "Erlang",
        year: 1986,
        authors: [
            {
                name: "Joe Armstrong",
                org: "Ericsson",
                bio: "British-born computer scientist (1950–2019) who co-created Erlang at Ericsson's Computer Science Laboratory in 1986 and authored the thesis articulating its fault-tolerant, 'let it crash' philosophy. Trained as a physicist, he became Erlang's most prominent advocate. He died in 2019.",
                sources: [
                    { title: "Wikipedia: Joe Armstrong", url: "https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer)", type: "encyclopedia" }
                ]
            },
            {
                name: "Robert Virding",
                org: "Ericsson",
                bio: "Swedish computer scientist who co-designed Erlang at Ericsson in 1986 and worked on its early implementation and standard libraries. He later created Lisp Flavoured Erlang (LFE) and Luerl, a Lua implementation running on the Erlang BEAM virtual machine.",
                sources: [
                    { title: "Wikipedia: Erlang (programming language)", url: "https://en.wikipedia.org/wiki/Erlang_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Mike Williams",
                org: "Ericsson",
                bio: "One of the three original designers of Erlang at Ericsson in 1986, instrumental in its early runtime implementation. He went on to manage Erlang/OTP development at Ericsson.",
                sources: [
                    { title: "Wikipedia: Erlang (programming language)", url: "https://en.wikipedia.org/wiki/Erlang_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `-module(hello).
-export([world/0]).

world() -> io:fwrite("Hello, World!~n").`,
        filename: "hello.erl",
        description: "Designed for telecom systems, Erlang's greeting comes with built-in concurrency and fault tolerance.",
        influences: ["Prolog"],
        influenced: ["Elixir", "Pony", "Gleam"]
    },
    {
        name: "Scala",
        year: 2003,
        authors: [
            {
                name: "Martin Odersky",
                org: "",
                bio: "German computer scientist who previously worked on Generic Java and javac compiler. Created Scala to unify object-oriented and functional programming on the JVM. Founded Lightbend (formerly Typesafe) to support Scala commercially. Now professor at EPFL in Switzerland.",
                sources: [
                    { title: "Wikipedia: Martin Odersky", url: "https://en.wikipedia.org/wiki/Martin_Odersky", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop", "functional"],
        code: `object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}`,
        filename: "hello.scala",
        description: "Functional and object-oriented fusion on the JVM. Scala greets with the flexibility of multiple paradigms.",
        influences: ["Java", "Haskell", "ML", "Io"],
        influenced: ["Kotlin"]
    },
    {
        name: "Perl",
        year: 1987,
        authors: [
            {
                name: "Larry Wall",
                org: "",
                bio: "Created Perl in 1987 while working as a programmer at Unisys. Designed to make easy things easy and hard things possible. Known for the motto 'There's more than one way to do it.' Also a linguist who brought linguistic principles to language design.",
                sources: [
                    { title: "Wikipedia: Larry Wall", url: "https://en.wikipedia.org/wiki/Larry_Wall", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `print "Hello, World!\\n";`,
        filename: "hello.pl",
        description: "The duct tape of the internet. Perl's greeting is terse, practical, and reveals none of its text-processing power.",
        influences: ["C", "AWK", "SNOBOL"],
        influenced: ["PHP", "Python", "Ruby", "JavaScript", "Raku", "PowerShell"]
    },
    {
        name: "Raku",
        year: 2015,
        authors: [
            {
                name: "Larry Wall",
                org: "",
                bio: "Created by Larry Wall and the Perl community as 'Perl 6,' a ground-up redesign that took 15 years to reach a stable release. Renamed Raku in 2019 to acknowledge it had become a distinct language rather than a new Perl version. Introduces gradual typing, a powerful grammar engine, and first-class concurrency.",
                sources: [
                    { title: "Wikipedia: Raku (programming language)", url: "https://en.wikipedia.org/wiki/Raku_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "functional", "oop"],
        code: `say "Hello, World!";`,
        filename: "hello.raku",
        description: "Perl's ambitious reinvention. After a 15-year gestation, Raku emerged as its own language—gradually typed, grammar-driven, and unapologetically expressive.",
        influences: ["Perl", "Haskell", "Smalltalk"],
        influenced: []
    },
    {
        name: "R",
        year: 1993,
        authors: [
            {
                name: "Ross Ihaka",
                org: "University of Auckland",
                bio: "New Zealand statistician who co-created the R language with Robert Gentleman in the mid-1990s while an associate professor of statistics at the University of Auckland. He earned his PhD at UC Berkeley and received the Royal Society of New Zealand's Pickering Medal in 2008 for his work on R.",
                sources: [
                    { title: "Wikipedia: Ross Ihaka", url: "https://en.wikipedia.org/wiki/Ross_Ihaka", type: "encyclopedia" }
                ]
            },
            {
                name: "Robert Gentleman",
                org: "University of Auckland",
                bio: "Canadian statistician and bioinformatician who co-created R with Ross Ihaka while a professor at the University of Auckland. He later launched the Bioconductor project and held senior roles at Genentech and 23andMe before founding Harvard Medical School's Center for Computational Biomedicine.",
                sources: [
                    { title: "Wikipedia: Robert Gentleman", url: "https://en.wikipedia.org/wiki/Robert_Gentleman_(statistician)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `cat("Hello, World!\\n")`,
        filename: "hello.r",
        description: "The statistician's language. R greets before diving into data visualization and statistical computing.",
        influences: ["Scheme"],
        influenced: ["Julia"]
    },
    {
        name: "MATLAB",
        year: 1984,
        authors: [
            {
                name: "Cleve Moler",
                org: "",
                bio: "American mathematician and computer programmer who co-founded MathWorks and served as its chief mathematician. Created MATLAB as a teaching tool to give students easy access to LINPACK and EISPACK without learning Fortran. It became the standard in engineering and scientific computing. He died in 2026.",
                sources: [
                    { title: "Wikipedia: Cleve Moler", url: "https://en.wikipedia.org/wiki/Cleve_Moler", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `disp('Hello, World!')`,
        filename: "hello.m",
        description: "Engineering and scientific computing speak through matrices. Even 'Hello, World!' is displayed with mathematical precision.",
        influences: ["Fortran", "APL"],
        influenced: ["Julia"]
    },
    {
        name: "Julia",
        year: 2012,
        authors: [
            {
                name: "Jeff Bezanson",
                org: "MIT",
                bio: "Computer scientist and one of the four co-creators of Julia, which the team began in 2009 and launched publicly in 2012. He earned his PhD at MIT for work on Julia's design and later co-founded Julia Computing.",
                sources: [
                    { title: "Wikipedia: Julia (programming language)", url: "https://en.wikipedia.org/wiki/Julia_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Stefan Karpinski",
                org: "MIT",
                bio: "One of the four co-creators of Julia, released publicly in 2012, and the person who gave the language its name. A developer focused on the language's design, he co-founded Julia Computing in 2015.",
                sources: [
                    { title: "Wikipedia: Julia (programming language)", url: "https://en.wikipedia.org/wiki/Julia_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Viral B. Shah",
                org: "MIT",
                bio: "One of the four co-creators of Julia, contributing to its design and development. He co-founded Julia Computing (later JuliaHub) in 2015 and shared the 2019 James H. Wilkinson Prize for Numerical Software for developing Julia.",
                sources: [
                    { title: "Wikipedia: Julia (programming language)", url: "https://en.wikipedia.org/wiki/Julia_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Alan Edelman",
                org: "MIT",
                bio: "Professor of applied mathematics at MIT and one of the four co-creators of Julia. A specialist in numerical linear algebra and high-performance computing, he received the 2019 IEEE Computer Society Sidney Fernbach Award, in part for his contributions to Julia.",
                sources: [
                    { title: "Wikipedia: Julia (programming language)", url: "https://en.wikipedia.org/wiki/Julia_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `println("Hello, World!")`,
        filename: "hello.jl",
        description: "Designed for numerical computing with the speed of C and the ease of Python. Julia greets at near-native performance.",
        influences: ["Python", "MATLAB", "R", "Lisp"],
        influenced: []
    },
    {
        name: "Fortran",
        year: 1957,
        authors: [
            {
                name: "John Backus",
                org: "IBM",
                bio: "American computer scientist (1924–2007) who joined IBM in 1950 and in 1954 assembled the team that created Fortran for the IBM 704, the first widely used high-level programming language. He later invented Backus-Naur Form notation. He received the ACM Turing Award in 1977 and died in 2007.",
                sources: [
                    { title: "Wikipedia: John Backus", url: "https://en.wikipedia.org/wiki/John_Backus", type: "encyclopedia" },
                    { title: "ACM A.M. Turing Award: John Backus", url: "https://amturing.acm.org/award_winners/backus_0703524.cfm", type: "award" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `program hello
    print *, "Hello, World!"
end program hello`,
        filename: "hello.f90",
        description: "The original high-level language. Fortran pioneered programming itself, and its greeting echoes through decades of scientific computing.",
        influences: ["Assembly"],
        influenced: ["BASIC", "COBOL", "Lisp", "MATLAB", "ALGOL", "Chapel", "PL/I"]
    },
    {
        name: "COBOL",
        year: 1959,
        authors: [
            {
                name: "Grace Hopper",
                org: "U.S. Navy",
                bio: "American computer scientist and U.S. Navy rear admiral (1906–1992) who pioneered English-like programming and built early compilers, including the A-0 system and FLOW-MATIC. COBOL, defined in 1959 by the CODASYL short-range committee, drew heavily on her FLOW-MATIC; she served as a technical advisor rather than writing the specification, then championed and standardized the language. She died in 1992.",
                sources: [
                    { title: "Wikipedia: Grace Hopper", url: "https://en.wikipedia.org/wiki/Grace_Hopper", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY 'Hello, World!'.
    STOP RUN.`,
        filename: "hello.cob",
        description: "Business computing's backbone. COBOL's verbose greeting reflects an era when code was meant to read like English.",
        influences: ["Fortran", "RPG"],
        influenced: ["PL/I"]
    },
    {
        name: "Assembly",
        year: 1949,
        authors: [
            {
                name: "Various pioneers",
                org: "",
                bio: "Assembly language has no single creator; it emerged from the work of early computing pioneers in the late 1940s. Kathleen Booth is credited with inventing assembly language around 1947 through her work at Birkbeck, University of London, while David Wheeler is credited by the IEEE with creating the first 'assembler', the EDSAC initial orders, in 1948.",
                sources: [
                    { title: "Wikipedia: Assembly language", url: "https://en.wikipedia.org/wiki/Assembly_language", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `; Early-style assembly (conceptual)
        LOAD  HELLO
        PRINT
        HALT
HELLO:  "Hello, World!"`,
        filename: "hello.asm",
        description: "The original human-readable programming. Assembly languages preceded all high-level languages, making programming accessible beyond raw binary.",
        influences: [],
        influenced: ["Fortran", "BCPL", "B", "C", "x86 Assembly", "6502 Assembly", "ARM Assembly", "MIPS Assembly", "RISC-V Assembly", "RPG"]
    },
    {
        name: "x86 Assembly",
        year: 1978,
        authors: [
            {
                name: "Stephen Morse",
                org: "Intel",
                bio: "Stephen P. Morse was the principal architect of the Intel 8086 microprocessor, whose instruction set is the foundation of the x86 architecture, designing it between 1976 and its 1978 release. He had earlier worked at Bell Labs and IBM, and later became known for creating the widely used 'One-Step' genealogy web pages.",
                sources: [
                    { title: "Wikipedia: Stephen P. Morse", url: "https://en.wikipedia.org/wiki/Stephen_P._Morse", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `section .data
    msg db 'Hello, World!', 0xa
    len equ $ - msg

section .text
    global _start

_start:
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, len
    int 0x80
    
    mov eax, 1
    xor ebx, ebx
    int 0x80`,
        filename: "hello_x86.asm",
        description: "The PC revolution's foundation. x86 assembly powers desktop computing with its complex instruction set and decades of backward compatibility.",
        influences: ["Assembly"],
        influenced: []
    },
    {
        name: "6502 Assembly",
        year: 1975,
        authors: [
            {
                name: "Chuck Peddle",
                org: "MOS Technology",
                bio: "Chuck Peddle (1937–2019) was the lead designer of the MOS Technology 6502, which he developed in 1975 after leaving Motorola. He went on to design the KIM-1 single-board computer and the Commodore PET. He died in 2019.",
                sources: [
                    { title: "Wikipedia: Chuck Peddle", url: "https://en.wikipedia.org/wiki/Chuck_Peddle", type: "encyclopedia" }
                ]
            },
            {
                name: "Bill Mensch",
                org: "MOS Technology",
                bio: "Bill Mensch was a key engineer on the team that created the MOS Technology 6502 in 1975, designing core circuits and holding a patent on its decimal-correction logic. In 1978 he founded the Western Design Center, which has continued to develop and license 6502-family processors.",
                sources: [
                    { title: "Wikipedia: Bill Mensch", url: "https://en.wikipedia.org/wiki/Bill_Mensch", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `        LDX #0
loop:   LDA message,X
        BEQ done
        JSR $FFD2    ; CHROUT
        INX
        JMP loop
done:   RTS

message:
        .byte "Hello, World!", 0`,
        filename: "hello_6502.asm",
        description: "The chip that launched a thousand bedrooms coders. 6502 assembly powered the Apple II, C64, and NES, teaching millions to program.",
        influences: ["Assembly"],
        influenced: []
    },
    {
        name: "ARM Assembly",
        year: 1985,
        authors: [
            {
                name: "Sophie Wilson",
                org: "Acorn Computers",
                bio: "Sophie Wilson designed the original ARM instruction set at Acorn Computers, beginning in 1983; the ARM1 chip was delivered in April 1985. She had earlier written BBC BASIC. In 2022 she shared the Charles Stark Draper Prize for the invention and development of RISC chips.",
                sources: [
                    { title: "Wikipedia: Sophie Wilson", url: "https://en.wikipedia.org/wiki/Sophie_Wilson", type: "encyclopedia" }
                ]
            },
            {
                name: "Steve Furber",
                org: "Acorn Computers",
                bio: "Steve Furber was a principal hardware designer of the ARM processor at Acorn Computers, and also a principal designer of the BBC Micro. He moved to the University of Manchester in 1990, where he led the SpiNNaker brain-modelling project built from around a million ARM cores.",
                sources: [
                    { title: "Wikipedia: Steve Furber", url: "https://en.wikipedia.org/wiki/Steve_Furber", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `    .global _start
    .text

_start:
    mov r7, #4        @ syscall write
    mov r0, #1        @ stdout
    ldr r1, =msg      @ message address
    mov r2, #13       @ message length
    svc #0            @ syscall
    
    mov r7, #1        @ syscall exit
    mov r0, #0        @ return code
    svc #0

    .data
msg:
    .ascii "Hello, World!\\n"`,
        filename: "hello_arm.s",
        description: "The mobile revolution's heart. ARM's elegant RISC design powers virtually every smartphone and tablet, plus modern Macs.",
        influences: ["Assembly"],
        influenced: []
    },
    {
        name: "MIPS Assembly",
        year: 1985,
        authors: [
            {
                name: "John L. Hennessy",
                org: "Stanford University",
                bio: "John L. Hennessy initiated the MIPS RISC processor project at Stanford in 1981 and founded MIPS Computer Systems in 1984. He served as the tenth president of Stanford from 2000 to 2016 and became chairman of Alphabet in 2018. He shared the 2017 ACM Turing Award with David Patterson for their work on RISC.",
                sources: [
                    { title: "Wikipedia: John L. Hennessy", url: "https://en.wikipedia.org/wiki/John_L._Hennessy", type: "encyclopedia" },
                    { title: "ACM A.M. Turing Award: John L. Hennessy", url: "https://amturing.acm.org/award_winners/hennessy_1426931.cfm", type: "award" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `    .data
msg:    .asciiz "Hello, World!\\n"
    .text
    .globl main

main:
    li $v0, 4       # syscall print_string
    la $a0, msg     # load address of msg
    syscall
    
    li $v0, 10      # syscall exit
    syscall`,
        filename: "hello_mips.s",
        description: "The professor's RISC. MIPS taught computer architecture to generations of students and powered classic gaming consoles.",
        influences: ["Assembly"],
        influenced: ["RISC-V Assembly"]
    },
    {
        name: "RISC-V Assembly",
        year: 2010,
        authors: [
            {
                name: "Krste Asanović",
                org: "UC Berkeley",
                bio: "Krste Asanović initiated the RISC-V project at UC Berkeley in 2010, deciding to develop and publish an open-source instruction set. A professor in Berkeley's EECS department, he co-founded SiFive in 2015, where he is chief architect, and later chaired the board of the RISC-V Foundation.",
                sources: [
                    { title: "Wikipedia: Krste Asanović", url: "https://en.wikipedia.org/wiki/Krste_Asanovi%C4%87", type: "encyclopedia" }
                ]
            },
            {
                name: "Yunsup Lee",
                org: "UC Berkeley",
                bio: "Yunsup Lee was a graduate student in Krste Asanović's group at UC Berkeley who helped create RISC-V from 2010, working on early chip implementations including vector designs. He co-founded SiFive in 2015, where he serves as chief technology officer.",
                sources: [
                    { title: "Wikipedia: RISC-V", url: "https://en.wikipedia.org/wiki/RISC-V", type: "encyclopedia" }
                ]
            },
            {
                name: "Andrew Waterman",
                org: "UC Berkeley",
                bio: "Andrew Waterman was a graduate student at UC Berkeley who co-developed RISC-V from 2010 and co-authored its specification with Krste Asanović. He co-founded SiFive in 2015, where he serves as chief engineer.",
                sources: [
                    { title: "Wikipedia: RISC-V", url: "https://en.wikipedia.org/wiki/RISC-V", type: "encyclopedia" }
                ]
            },
            {
                name: "David Patterson",
                org: "UC Berkeley",
                bio: "David Patterson coined the term RISC and led the Berkeley RISC project from 1980, originating the line that RISC-V continued. A professor at Berkeley since 1976, he shared the 2017 ACM Turing Award with John Hennessy and also co-developed RAID storage.",
                sources: [
                    { title: "Wikipedia: David Patterson", url: "https://en.wikipedia.org/wiki/David_Patterson_(computer_scientist)", type: "encyclopedia" },
                    { title: "ACM A.M. Turing Award: David Patterson", url: "https://amturing.acm.org/award_winners/patterson_2316693.cfm", type: "award" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `    .global _start
    .text

_start:
    li a7, 64        # syscall write
    li a0, 1         # stdout
    la a1, msg       # message address
    li a2, 13        # length
    ecall
    
    li a7, 93        # syscall exit
    li a0, 0
    ecall

    .data
msg:
    .string "Hello, World!\\n"`,
        filename: "hello_riscv.s",
        description: "The open-source future. RISC-V represents a free, modern alternative to proprietary processor architectures.",
        influences: ["Assembly", "MIPS Assembly"],
        influenced: []
    },
    {
        name: "Bash",
        year: 1989,
        authors: [
            {
                name: "Brian Fox",
                org: "",
                bio: "Created Bash (Bourne Again Shell) as a free software replacement for the Bourne shell. Developed for the GNU Project while working at the Free Software Foundation. Bash became the default shell for most Linux distributions and for macOS until Apple switched its default to zsh in 2019.",
                sources: [
                    { title: "Wikipedia: Bash (Unix shell)", url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `#!/bin/bash
echo "Hello, World!"`,
        filename: "hello.sh",
        description: "The Unix shell's automation language. Bash greets with the simplicity that powers countless DevOps workflows.",
        influences: ["C"],
        influenced: ["PowerShell", "Zsh", "Fish"]
    },
    {
        name: "PowerShell",
        year: 2006,
        authors: [
            {
                name: "Jeffrey Snover",
                org: "",
                bio: "Microsoft architect who created PowerShell to bring powerful automation to Windows. Based on .NET framework with an object-oriented pipeline, unlike text-based Unix shells. Since 2016, PowerShell has been open-source and cross-platform, running on Windows, Linux, and macOS.",
                sources: [
                    { title: "Wikipedia: PowerShell", url: "https://en.wikipedia.org/wiki/PowerShell", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `Write-Host "Hello, World!"`,
        filename: "hello.ps1",
        description: "Windows automation meets object-oriented pipelines. PowerShell's greeting is an object, not just text.",
        influences: ["Bash", "Perl"],
        influenced: []
    },
    {
        name: "Lua",
        year: 1993,
        authors: [
            {
                name: "Roberto Ierusalimschy",
                org: "PUC-Rio",
                bio: "Brazilian computer scientist who co-created Lua in 1993 in the Tecgraf group at the Pontifical Catholic University of Rio de Janeiro (PUC-Rio). He is the leading architect of the language, author of Programming in Lua, and head of LabLua.",
                sources: [
                    { title: "Wikipedia: Roberto Ierusalimschy", url: "https://en.wikipedia.org/wiki/Roberto_Ierusalimschy", type: "encyclopedia" },
                    { title: "Lua: Authors", url: "https://www.lua.org/authors.html", type: "official" }
                ]
            },
            {
                name: "Luiz Henrique de Figueiredo",
                org: "PUC-Rio",
                bio: "Brazilian mathematician and computer scientist who co-created Lua in 1993 within the Tecgraf group at PUC-Rio and has been a core member of the development team since. He is a researcher at IMPA, the Institute for Pure and Applied Mathematics.",
                sources: [
                    { title: "Lua: Authors", url: "https://www.lua.org/authors.html", type: "official" }
                ]
            },
            {
                name: "Waldemar Celes",
                org: "PUC-Rio",
                bio: "Brazilian computer scientist who co-created Lua in 1993 in the Tecgraf group at PUC-Rio and has remained part of the core development team. He is a professor in PUC-Rio's computer science department and director of Tecgraf.",
                sources: [
                    { title: "Lua: Authors", url: "https://www.lua.org/authors.html", type: "official" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `print("Hello, World!")`,
        filename: "hello.lua",
        description: "The embedded scripting language of choice. Lua's lightweight greeting powers game engines and embedded systems worldwide.",
        influences: ["Scheme", "Self"],
        influenced: ["Ring", "Wren"]
    },
    {
        name: "Dart",
        year: 2011,
        authors: [
            {
                name: "Lars Bak",
                org: "Google",
                bio: "Danish programmer who co-designed Dart at Google, unveiled in 2011. Before Dart he led development of Google's V8 JavaScript engine and was technical lead of the HotSpot JVM team at Sun Microsystems. He left Google in 2017 to co-found the startup Toit.",
                sources: [
                    { title: "Wikipedia: Lars Bak", url: "https://en.wikipedia.org/wiki/Lars_Bak_(computer_programmer)", type: "encyclopedia" }
                ]
            },
            {
                name: "Kasper Lund",
                org: "Google",
                bio: "Danish programmer who co-designed Dart at Google, first presented in 2011, having previously worked with Lars Bak on the V8 JavaScript engine. In 2017 he co-founded the startup Toit with Bak.",
                sources: [
                    { title: "Wikipedia: Dart (programming language)", url: "https://en.wikipedia.org/wiki/Dart_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `void main() {
  print('Hello, World!');
}`,
        filename: "hello.dart",
        description: "Flutter's foundation. Dart greets with modern syntax designed for building beautiful UIs across all platforms.",
        influences: ["JavaScript", "Java"],
        influenced: []
    },
    {
        name: "OCaml",
        year: 1996,
        authors: [
            {
                name: "Xavier Leroy",
                org: "INRIA",
                bio: "French computer scientist and the primary developer of the OCaml system, released in 1996, building on his earlier Caml Light and its high-level module system. He leads the formally verified CompCert C compiler and became Professor of software science at the Collège de France in 2018.",
                sources: [
                    { title: "Wikipedia: Xavier Leroy", url: "https://en.wikipedia.org/wiki/Xavier_Leroy", type: "encyclopedia" }
                ]
            },
            {
                name: "Damien Doligez",
                org: "INRIA",
                bio: "French computer scientist who co-created OCaml at INRIA, where he wrote the memory management and garbage collection system underlying the Caml Light implementation OCaml grew from. He has continued as a member of the OCaml development team.",
                sources: [
                    { title: "Wikipedia: OCaml", url: "https://en.wikipedia.org/wiki/OCaml", type: "encyclopedia" }
                ]
            },
            {
                name: "Didier Rémy",
                org: "INRIA",
                bio: "French computer scientist who, with Jérôme Vouillon, designed the type system for objects and classes integrated into Caml Special Light to produce Objective Caml in 1996. He is a researcher at INRIA specializing in type systems.",
                sources: [
                    { title: "Wikipedia: OCaml", url: "https://en.wikipedia.org/wiki/OCaml", type: "encyclopedia" }
                ]
            },
            {
                name: "Jérôme Vouillon",
                org: "INRIA",
                bio: "French computer scientist who, with Didier Rémy, designed the object and class type system that gave rise to Objective Caml (OCaml) in 1996, enabling statically type-safe object-oriented programming. He carried out this work at INRIA.",
                sources: [
                    { title: "Wikipedia: OCaml", url: "https://en.wikipedia.org/wiki/OCaml", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional", "oop"],
        code: `print_endline "Hello, World!";;`,
        filename: "hello.ml",
        description: "Industrial-strength functional programming. OCaml combines ML's elegance with practical object-oriented features.",
        influences: ["ML", "Standard ML"],
        influenced: ["F#", "Rust", "Hack"]
    },
    {
        name: "F#",
        year: 2005,
        authors: [
            {
                name: "Don Syme",
                org: "Microsoft Research",
                bio: "Australian computer scientist who designed and architected F# at Microsoft Research in Cambridge, with version 1.0 appearing in 2005. Before F#, he created generics in the .NET Common Language Runtime and designed generics for C#. He holds a PhD from Cambridge and later joined GitHub Next.",
                sources: [
                    { title: "Wikipedia: Don Syme", url: "https://en.wikipedia.org/wiki/Don_Syme", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `printfn "Hello, World!"`,
        filename: "hello.fs",
        description: "Functional-first on .NET. F# greets with immutability and type inference on Microsoft's platform.",
        influences: ["OCaml", "ML", "Haskell"],
        influenced: []
    },
    {
        name: "Zig",
        year: 2016,
        authors: [
            {
                name: "Andrew Kelley",
                org: "",
                bio: "Created Zig as a better C, focusing on simplicity, safety, and performance without hidden control flow. Self-funded through donations and sponsorships. Zig aims to be a language for maintaining robust software and is gaining traction in systems programming.",
                sources: [
                    { title: "Wikipedia: Zig (programming language)", url: "https://en.wikipedia.org/wiki/Zig_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, World!\\n", .{});
}`,
        filename: "hello.zig",
        description: "A modern systems language focused on simplicity and performance. Zig greets with explicit error handling from the start.",
        influences: ["C", "C++", "Rust", "Go"],
        influenced: []
    },
    {
        name: "Crystal",
        year: 2014,
        authors: [
            {
                name: "Ary Borenszweig",
                org: "Manas Technology Solutions",
                bio: "Argentine software engineer who began designing Crystal in 2011 at Manas Technology Solutions in Buenos Aires, aiming to combine Ruby's elegance with the speed of a compiled language. He led its development through the first official release in 2014.",
                sources: [
                    { title: "Wikipedia: Crystal (programming language)", url: "https://en.wikipedia.org/wiki/Crystal_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Juan Wajnerman",
                org: "Manas Technology Solutions",
                bio: "Argentine software engineer and one of the three original designers of Crystal, which he helped create at Manas Technology Solutions starting in 2011, contributing to its core design and compiler.",
                sources: [
                    { title: "Wikipedia: Crystal (programming language)", url: "https://en.wikipedia.org/wiki/Crystal_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Brian Cardiff",
                org: "Manas Technology Solutions",
                bio: "Argentine software engineer and one of the three original designers of Crystal, developed at Manas Technology Solutions. He has been a long-standing core contributor to the language and its compiler.",
                sources: [
                    { title: "Wikipedia: Crystal (programming language)", url: "https://en.wikipedia.org/wiki/Crystal_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `puts "Hello, World!"`,
        filename: "hello.cr",
        description: "Ruby-like syntax with C-like performance. Crystal compiles to native code while maintaining expressive beauty.",
        influences: ["Ruby", "C"],
        influenced: []
    },
    {
        name: "Nim",
        year: 2008,
        authors: [
            {
                name: "Andreas Rumpf",
                org: "",
                bio: "German programmer who created Nim (originally Nimrod) as an efficient, expressive language compiling to C. Combines Python-like syntax with performance matching C. Developed largely as an open-source project with a passionate community.",
                sources: [
                    { title: "Wikipedia: Nim (programming language)", url: "https://en.wikipedia.org/wiki/Nim_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `echo "Hello, World!"`,
        filename: "hello.nim",
        description: "Elegant, efficient, expressive. Nim combines Python-like syntax with compiled performance and metaprogramming power.",
        influences: ["Python", "Lisp"],
        influenced: []
    },
    {
        name: "V",
        year: 2019,
        authors: [
            {
                name: "Alexander Medvednikov",
                org: "",
                bio: "Programmer who created V (released in 2019) seeking a simple, fast language with very fast compilation times. Initially met with skepticism over bold performance claims, V is now open-source (MIT-licensed) and developing steadily with a focus on simplicity and safety.",
                sources: [
                    { title: "Wikipedia: V (programming language)", url: "https://en.wikipedia.org/wiki/V_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `fn main() {
    println('Hello, World!')
}`,
        filename: "hello.v",
        description: "Simple, fast, safe. V aims to be the Go of systems programming with minimal syntax and blazing compile times.",
        influences: ["Go", "Rust"],
        influenced: []
    },
    {
        name: "Brainfuck",
        year: 1993,
        authors: [
            {
                name: "Urban Müller",
                org: "",
                bio: "Swiss student who created Brainfuck to design the smallest possible compiler—his original Amiga implementation was only a few hundred bytes. Consists of only 8 commands, making it Turing-complete but deliberately difficult to program in. A parody of minimalist language design.",
                sources: [
                    { title: "Wikipedia: Brainfuck", url: "https://en.wikipedia.org/wiki/Brainfuck", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.`,
        filename: "hello.bf",
        description: "The ultimate minimalist language. Brainfuck's greeting is a Turing-complete puzzle with just 8 commands.",
        influences: ["INTERCAL", "FALSE"],
        influenced: ["Ook!"]
    },
    {
        name: "Whitespace",
        year: 2003,
        authors: [
            {
                name: "Edwin Brady",
                org: "University of Durham",
                bio: "British computer scientist who co-created the esoteric Whitespace language in 2002 at the University of Durham, where only spaces, tabs, and line breaks are meaningful. He went on to design the dependently typed language Idris and continued type-systems research at the University of St Andrews.",
                sources: [
                    { title: "Wikipedia: Whitespace (programming language)", url: "https://en.wikipedia.org/wiki/Whitespace_(programming_language)", type: "encyclopedia" },
                    { title: "Wikipedia: Idris (programming language)", url: "https://en.wikipedia.org/wiki/Idris_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Chris Morris",
                org: "University of Durham",
                bio: "British computer scientist who co-created the esoteric Whitespace language in 2002 with Edwin Brady at the University of Durham. He also collaborated with Brady on the Kaya and Idris languages.",
                sources: [
                    { title: "Wikipedia: Whitespace (programming language)", url: "https://en.wikipedia.org/wiki/Whitespace_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `   \t  \t   \n\t\n     \t\t  \t \t\n\t\n     \t\t \t\t  \n\t\n     \t\t \t\t  \n\t\n     \t\t \t\t\t\t\n\t\n     \t \t\t  \n\t\n     \t     \n\t\n     \t\t\t \t\t\t\n\t\n     \t\t \t\t\t\t\n\t\n     \t\t\t  \t\n\t\n     \t\t \t\t  \n\t\n     \t\t  \t  \n\t\n  \n\n\n`,
        filename: "hello.ws",
        description: "Only whitespace characters are meaningful. The greeting is invisible to the human eye—a meditation on code's essence.",
        influences: [],
        influenced: []
    },
    {
        name: "LOLCODE",
        year: 2007,
        authors: [
            {
                name: "Adam Lindsay",
                org: "",
                bio: "Created by a researcher at Lancaster University as a parody based on lolcat memes. Designed to make programming deliberately humorous with keywords like HAI, KTHXBYE, and VISIBLE. Shows that programming languages can be fun and creative.",
                sources: [
                    { title: "Wikipedia: LOLCODE", url: "https://en.wikipedia.org/wiki/LOLCODE", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `HAI 1.2
    VISIBLE "Hello, World!"
KTHXBYE`,
        filename: "hello.lol",
        description: "Based on lolcat memes, LOLCODE greets with humor. Programming can be fun, even if deliberately absurd.",
        influences: [],
        influenced: []
    },
    {
        name: "Shakespeare",
        year: 2001,
        authors: [
            {
                name: "Jon Åslund",
                org: "",
                bio: "Swedish programmer who, with Karl Wiberg, designed the esoteric Shakespeare Programming Language in 2001, in which source code resembles the scripts of Shakespeare's plays. The two created it while connected to the Stacken computer club at the KTH Royal Institute of Technology in Stockholm.",
                sources: [
                    { title: "Wikipedia: Shakespeare Programming Language", url: "https://en.wikipedia.org/wiki/Shakespeare_Programming_Language", type: "encyclopedia" }
                ]
            },
            {
                name: "Karl Wiberg",
                org: "",
                bio: "Swedish programmer, formerly known as Karl Hasselström, who co-designed the esoteric Shakespeare Programming Language with Jon Åslund in 2001, styling its source code after Shakespearean play scripts. He developed it while connected to the Stacken club at KTH.",
                sources: [
                    { title: "Wikipedia: Shakespeare Programming Language", url: "https://en.wikipedia.org/wiki/Shakespeare_Programming_Language", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric"],
        code: `The Infamous Hello World Program.

Romeo, a young man with a remarkable patience.
Juliet, a likewise young woman of remarkable grace.
Ophelia, a remarkable woman much in dispute with Hamlet.
Hamlet, the flatterer of Andersen Insulting A/S.


                    Act I: Hamlet's insults and flattery.

                    Scene I: The insulting of Romeo.

[Enter Hamlet and Romeo]

Hamlet:
 You lying stupid fatherless big smelly half-witted coward!
 You are as stupid as the difference between a handsome rich brave
 hero and thyself! Speak your mind!

 You are as brave as the sum of your fat little stuffed misused dusty
 old rotten codpiece and a beautiful fair warm peaceful sunny summer's
 day. You are as healthy as the difference between the sum of the
 sweetest reddest rose and my father and yourself! Speak your mind!

 You are as cowardly as the sum of yourself and the difference
 between a big mighty proud kingdom and a horse. Speak your mind.

 Speak your mind!

[Exit Romeo]`,
        filename: "hello.spl",
        description: "Programs as Shakespearean plays. Each variable is a character, and the greeting unfolds through dramatic dialogue.",
        influences: [],
        influenced: []
    },
    {
        name: "Piet",
        year: 2001,
        authors: [
            {
                name: "David Morgan-Mar",
                org: "",
                bio: "Australian programmer who created Piet, named after artist Piet Mondrian. Programs are bitmap images where colors encode instructions. Also created Chef (recipes as programs) and other esoteric languages. Shows programming can be visual art.",
                sources: [
                    { title: "Wikipedia: David Morgan-Mar", url: "https://en.wikipedia.org/wiki/David_Morgan-Mar", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric"],
        code: `[Note: Piet programs are images. This would be a colorful bitmap image that outputs "Hello, World!" when interpreted as pixel color transitions.]`,
        filename: "hello.png",
        description: "Programs are abstract art. Piet's greeting is a painting where color blocks and transitions encode computation.",
        influences: [],
        influenced: []
    },
    {
        name: "SQL",
        year: 1974,
        authors: [
            {
                name: "Donald D. Chamberlin",
                org: "IBM",
                bio: "American computer scientist who, with Raymond Boyce, co-designed SQL (originally SEQUEL) in the mid-1970s at IBM Research in San Jose. As a manager on the System R project, he helped produce the first SQL implementation, and he later co-designed XQuery. He was named an IBM Fellow in 2003.",
                sources: [
                    { title: "Wikipedia: Donald D. Chamberlin", url: "https://en.wikipedia.org/wiki/Donald_D._Chamberlin", type: "encyclopedia" }
                ]
            },
            {
                name: "Raymond F. Boyce",
                org: "IBM",
                bio: "American computer scientist (1946–1974) at IBM who, with Donald Chamberlin, co-developed SQL based on the relational model. He also co-developed Boyce–Codd normal form. He died of a brain aneurysm in 1974 at the age of 27, only months after the foundational SQL work.",
                sources: [
                    { title: "Wikipedia: Raymond F. Boyce", url: "https://en.wikipedia.org/wiki/Raymond_F._Boyce", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `SELECT 'Hello, World!' AS greeting;`,
        filename: "hello.sql",
        description: "The language of data queries. SQL greets by selecting a string, hinting at the relational power beneath.",
        influences: [],
        influenced: ["PL/SQL"]
    },
    {
        name: "Prolog",
        year: 1972,
        authors: [
            {
                name: "Alain Colmerauer",
                org: "Aix-Marseille University",
                bio: "French computer scientist (1941–2017) who created Prolog in Marseille around 1972, with Philippe Roussel, building the first implementation of logic programming. He went on to pioneer constraint logic programming with the Prolog III system. He died in 2017.",
                sources: [
                    { title: "Wikipedia: Alain Colmerauer", url: "https://en.wikipedia.org/wiki/Alain_Colmerauer", type: "encyclopedia" }
                ]
            },
            {
                name: "Robert Kowalski",
                org: "University of Edinburgh",
                bio: "British-American logician and computer scientist whose procedural interpretation of Horn clauses provided the theoretical foundation for Prolog. He developed these ideas at the University of Edinburgh and later became a professor at Imperial College London, a leading figure in logic programming.",
                sources: [
                    { title: "Wikipedia: Robert Kowalski", url: "https://en.wikipedia.org/wiki/Robert_Kowalski", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "functional"],
        code: `:- initialization(main).

main :-
    write('Hello, World!'), nl,
    halt.`,
        filename: "hello.pl",
        description: "Logic programming declares facts and rules. Prolog's greeting is a logical consequence, not an imperative command.",
        influences: [],
        influenced: ["Erlang"]
    },
    {
        name: "Ada",
        year: 1980,
        authors: [
            {
                name: "Jean Ichbiah",
                org: "CII Honeywell Bull",
                bio: "French computer scientist (1940–2007) who led the design of Ada from 1977 to 1983 at CII Honeywell Bull. His team's proposal, code-named 'Green,' won the U.S. Department of Defense's language competition in 1978 and was renamed Ada after Ada Lovelace. He founded the company Alsys in 1980 and died in 2007.",
                sources: [
                    { title: "Wikipedia: Jean Ichbiah", url: "https://en.wikipedia.org/wiki/Jean_Ichbiah", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `with Ada.Text_IO; use Ada.Text_IO;

procedure Hello is
begin
   Put_Line("Hello, World!");
end Hello;`,
        filename: "hello.adb",
        description: "Named after Ada Lovelace, designed for safety-critical systems. Its greeting is formal, typed, and reliable.",
        influences: ["Pascal", "Modula-2"],
        influenced: ["PL/SQL", "Eiffel"]
    },
    {
        name: "Pascal",
        year: 1970,
        authors: [
            {
                name: "Niklaus Wirth",
                org: "",
                bio: "Swiss computer scientist who created Pascal to teach structured programming. Named after mathematician Blaise Pascal. Received the Turing Award in 1984. Also created Modula-2 and Oberon. Pascal became the teaching language of a generation. Wirth died in 2024.",
                sources: [
                    { title: "Wikipedia: Niklaus Wirth", url: "https://en.wikipedia.org/wiki/Niklaus_Wirth", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `program HelloWorld;
begin
  writeln('Hello, World!');
end.`,
        filename: "hello.pas",
        description: "Designed for teaching structured programming. Pascal's greeting is educational, clear, and historically significant.",
        influences: ["ALGOL", "PL/I"],
        influenced: ["Ada", "Go", "Modula-2", "Delphi"]
    },
    {
        name: "Objective-C",
        year: 1984,
        authors: [
            {
                name: "Brad Cox",
                org: "Stepstone",
                bio: "American computer scientist (1944–2021) who co-created Objective-C with Tom Love in the early 1980s, building a Smalltalk-inspired object layer atop C. They commercialized it through their company Stepstone, and Cox described the language in his 1986 book Object-Oriented Programming: An Evolutionary Approach. He died in 2021.",
                sources: [
                    { title: "Wikipedia: Brad Cox", url: "https://en.wikipedia.org/wiki/Brad_Cox", type: "encyclopedia" }
                ]
            },
            {
                name: "Tom Love",
                org: "Stepstone",
                bio: "American software engineer who co-created Objective-C with Brad Cox in the early 1980s, after both encountered Smalltalk at ITT Corporation in 1981. He co-founded Productivity Products International, later renamed Stepstone, to commercialize the language.",
                sources: [
                    { title: "Wikipedia: Objective-C", url: "https://en.wikipedia.org/wiki/Objective-C", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}`,
        filename: "hello.m",
        description: "The language that built iOS before Swift. Objective-C greets with Smalltalk messaging and C foundations.",
        influences: ["C", "Smalltalk"],
        influenced: ["Swift", "Java"]
    },
    {
        name: "Smalltalk",
        year: 1972,
        authors: [
            {
                name: "Alan Kay",
                org: "Xerox PARC",
                bio: "American computer scientist who led the development of Smalltalk at Xerox PARC and is credited with coining the term 'object-oriented programming.' He conceived the Dynabook concept, a precursor to laptops and tablets, and received the ACM Turing Award in 2003.",
                sources: [
                    { title: "Wikipedia: Alan Kay", url: "https://en.wikipedia.org/wiki/Alan_Kay", type: "encyclopedia" }
                ]
            },
            {
                name: "Dan Ingalls",
                org: "Xerox PARC",
                bio: "American computer scientist who was the principal architect and implementer of multiple generations of Smalltalk at Xerox PARC. He built the bytecoded virtual machine that made Smalltalk practical in 1976 and invented the BitBlt graphics operation. He received the ACM Grace Murray Hopper Award in 1984.",
                sources: [
                    { title: "Wikipedia: Dan Ingalls", url: "https://en.wikipedia.org/wiki/Dan_Ingalls", type: "encyclopedia" }
                ]
            },
            {
                name: "Adele Goldberg",
                org: "Xerox PARC",
                bio: "American computer scientist who joined Xerox PARC in 1973 and became a co-developer of Smalltalk-80, co-authoring its foundational reference books. She served as president of the ACM from 1984 to 1986 and in 1988 co-founded ParcPlace Systems to commercialize Smalltalk.",
                sources: [
                    { title: "Wikipedia: Adele Goldberg", url: "https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop"],
        code: `Transcript show: 'Hello, World!'; cr.`,
        filename: "hello.st",
        description: "Everything is an object, everything is a message. Smalltalk revolutionized OOP and greets through its transcript.",
        influences: ["Simula"],
        influenced: ["Objective-C", "Ruby", "Python", "Java", "Raku", "Self", "Io", "Wren"]
    },
    {
        name: "BASIC",
        year: 1964,
        authors: [
            {
                name: "John G. Kemeny",
                org: "Dartmouth College",
                bio: "Hungarian-born American mathematician (1926–1992) who co-created BASIC with Thomas Kurtz at Dartmouth in 1964 to make computing accessible to non-specialists. Earlier he worked on the Manhattan Project and served as Einstein's mathematical assistant. He was president of Dartmouth from 1970 to 1981.",
                sources: [
                    { title: "Wikipedia: John G. Kemeny", url: "https://en.wikipedia.org/wiki/John_G._Kemeny", type: "encyclopedia" }
                ]
            },
            {
                name: "Thomas E. Kurtz",
                org: "Dartmouth College",
                bio: "American computer scientist (1928–2024) and Dartmouth professor who co-created BASIC and the Dartmouth Time-Sharing System with John Kemeny; the first BASIC program ran on May 1, 1964. In 1983 he co-founded True BASIC. He died in 2024 at age 96.",
                sources: [
                    { title: "Wikipedia: Thomas E. Kurtz", url: "https://en.wikipedia.org/wiki/Thomas_E._Kurtz", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `10 PRINT "Hello, World!"
20 END`,
        filename: "hello.bas",
        description: "Beginner's All-purpose Symbolic Instruction Code. BASIC made programming accessible to millions with line-numbered simplicity.",
        influences: ["Fortran"],
        influenced: ["Visual Basic"]
    },
    {
        name: "Simula",
        year: 1967,
        authors: [
            {
                name: "Ole-Johan Dahl",
                org: "Norwegian Computing Center",
                bio: "Norwegian computer scientist (1931–2002) who, with Kristen Nygaard, developed Simula at the Norwegian Computing Center, pioneering object-oriented concepts such as classes and objects. Later a professor at the University of Oslo, he shared the 2001 ACM Turing Award with Nygaard. He died in 2002.",
                sources: [
                    { title: "Wikipedia: Ole-Johan Dahl", url: "https://en.wikipedia.org/wiki/Ole-Johan_Dahl", type: "encyclopedia" }
                ]
            },
            {
                name: "Kristen Nygaard",
                org: "Norwegian Computing Center",
                bio: "Norwegian computer scientist (1926–2002) who co-developed Simula with Ole-Johan Dahl at the Norwegian Computing Center, introducing ideas fundamental to object-oriented programming. The two received the 2001 ACM Turing Award. He died in 2002, the same year as Dahl.",
                sources: [
                    { title: "Wikipedia: Kristen Nygaard", url: "https://en.wikipedia.org/wiki/Kristen_Nygaard", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `Begin
   OutText("Hello, World!");
   OutImage;
End;`,
        filename: "hello.sim",
        description: "The world's first object-oriented language. Simula pioneered classes and objects, concepts that would reshape all of programming.",
        influences: ["ALGOL"],
        influenced: ["C++", "Smalltalk", "Eiffel"]
    },
    {
        name: "B",
        year: 1969,
        authors: [
            {
                name: "Ken Thompson",
                org: "",
                bio: "Created B at Bell Labs as a simplified version of BCPL for the PDP-7 computer. Co-creator of Unix with Dennis Ritchie. Also created the UTF-8 encoding and the Go language (with others). Received the Turing Award in 1983. B was the direct predecessor to C.",
                sources: [
                    { title: "Wikipedia: Ken Thompson", url: "https://en.wikipedia.org/wiki/Ken_Thompson", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `main() {
    extrn a, b, c;
    putchar(a); putchar(b); putchar(c);
    putchar('!*n');
}
a 'hell';
b 'o, w';
c 'orld';`,
        filename: "hello.b",
        description: "Ken Thompson's stepping stone between BCPL and C. B's simplicity paved the way for the language that would change everything.",
        influences: ["BCPL", "Assembly"],
        influenced: ["C"]
    },
    {
        name: "BCPL",
        year: 1967,
        authors: [
            {
                name: "Martin Richards",
                org: "",
                bio: "British computer scientist who created BCPL (Basic Combined Programming Language) at MIT and Cambridge. Designed for writing compilers and operating systems. BCPL introduced the // line-comment syntax later adopted by C++ and C99. Richards has continued to maintain and develop BCPL for decades.",
                sources: [
                    { title: "Wikipedia: BCPL", url: "https://en.wikipedia.org/wiki/BCPL", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `GET "libhdr"

LET start() = VALOF
{ writes("Hello, World!*n")
  RESULTIS 0
}`,
        filename: "hello.bcpl",
        description: "The grandfather of C. BCPL's systems programming heritage flows through B and C into countless modern languages.",
        influences: ["Assembly", "ALGOL"],
        influenced: ["B", "C"]
    },
    {
        name: "ML",
        year: 1973,
        authors: [
            {
                name: "Robin Milner",
                org: "",
                bio: "British computer scientist who created ML (Meta Language) at the University of Edinburgh for the LCF theorem prover. Pioneered type inference and polymorphic type systems. Received the Turing Award in 1991. ML's type system influenced countless modern functional languages. Milner died in 2010.",
                sources: [
                    { title: "Wikipedia: Robin Milner", url: "https://en.wikipedia.org/wiki/Robin_Milner", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `print "Hello, World!\\n";`,
        filename: "hello.ml",
        description: "The ML family introduced type inference and pattern matching. Its influence permeates Haskell, OCaml, F#, Rust, and Swift.",
        influences: ["Lisp"],
        influenced: ["OCaml", "Haskell", "F#", "Rust", "Scala", "Standard ML", "Clojure", "Elm", "Miranda", "Idris", "Roc"]
    },
    {
        name: "Standard ML",
        year: 1983,
        authors: [
            {
                name: "Robin Milner",
                org: "University of Edinburgh",
                bio: "British computer scientist (1934–2010) who created ML, the first language with polymorphic type inference, from which Standard ML descended. He also developed LCF, CCS, and the pi-calculus. Working at Edinburgh from 1973, he received the ACM Turing Award in 1991 and died in 2010.",
                sources: [
                    { title: "Wikipedia: Robin Milner", url: "https://en.wikipedia.org/wiki/Robin_Milner", type: "encyclopedia" }
                ]
            },
            {
                name: "Robert Harper",
                org: "Carnegie Mellon University",
                bio: "American computer scientist who made major contributions to the design of Standard ML and co-authored The Definition of Standard ML. After a fellowship at Edinburgh he joined Carnegie Mellon, where his research centers on type theory and the verification of programming languages.",
                sources: [
                    { title: "Wikipedia: Robert Harper", url: "https://en.wikipedia.org/wiki/Robert_Harper_(computer_scientist)", type: "encyclopedia" }
                ]
            },
            {
                name: "David MacQueen",
                org: "University of Edinburgh",
                bio: "American computer scientist who designed the influential module system of Standard ML and co-authored the 1997 revised Definition. A longtime Bell Labs researcher, he helped develop the Standard ML of New Jersey (SML/NJ) compiler and later taught at the University of Chicago.",
                sources: [
                    { title: "Wikipedia: Standard ML", url: "https://en.wikipedia.org/wiki/Standard_ML", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `print "Hello, World!\\n";`,
        filename: "hello.sml",
        description: "The ML with a rulebook. Standard ML's formal definition made it the language of choice for compiler researchers and type theorists for decades.",
        influences: ["ML"],
        influenced: ["OCaml", "Haskell"]
    },
    {
        name: "ABC",
        year: 1987,
        authors: [
            {
                name: "Leo Geurts",
                org: "CWI Amsterdam",
                bio: "Researcher at the Mathematical Centre (now CWI) in Amsterdam who co-designed the ABC programming language in the 1980s as a simple, teaching-oriented alternative to BASIC and Pascal. He co-authored the ABC language definition; ABC later became the acknowledged inspiration for Python.",
                sources: [
                    { title: "Wikipedia: ABC (programming language)", url: "https://en.wikipedia.org/wiki/ABC_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Lambert Meertens",
                org: "CWI Amsterdam",
                bio: "Dutch computer scientist who originated and co-designed ABC at the Mathematical Centre (now CWI) in Amsterdam, work that prefigured Python. He was also an editor of the Revised Report on ALGOL 68 and co-creator of the Bird–Meertens formalism for program derivation.",
                sources: [
                    { title: "Wikipedia: Lambert Meertens", url: "https://en.wikipedia.org/wiki/Lambert_Meertens", type: "encyclopedia" }
                ]
            },
            {
                name: "Steven Pemberton",
                org: "CWI Amsterdam",
                bio: "British-Dutch computer scientist at CWI who co-designed ABC, released in 1987, which influenced Python. He went on to contribute heavily to web standards at the W3C, chairing the HTML and XForms working groups and co-authoring HTML 4, XHTML, and CSS specifications.",
                sources: [
                    { title: "Wikipedia: Steven Pemberton", url: "https://en.wikipedia.org/wiki/Steven_Pemberton", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `WRITE "Hello, World!" /`,
        filename: "hello.abc",
        description: "Python's spiritual ancestor. ABC's emphasis on readability and simplicity lives on in Python's design philosophy.",
        influences: ["SETL"],
        influenced: ["Python"]
    },
    {
        name: "Modula-2",
        year: 1978,
        authors: [
            {
                name: "Niklaus Wirth",
                org: "",
                bio: "Wirth's successor to Pascal, created at ETH Zürich for the Lilith workstation. Added modules for separate compilation, coroutines, and low-level hardware access—turning Pascal's teaching language into a systems-programming tool. A key step on the road from Pascal to Oberon.",
                sources: [
                    { title: "Wikipedia: Niklaus Wirth", url: "https://en.wikipedia.org/wiki/Niklaus_Wirth", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `MODULE Hello;
FROM InOut IMPORT WriteString, WriteLn;
BEGIN
  WriteString("Hello, World!");
  WriteLn;
END Hello.`,
        filename: "hello.mod",
        description: "Pascal grows up. Modula-2 added modules and systems-level access, recasting Wirth's teaching language as a serious engineering tool.",
        influences: ["Pascal"],
        influenced: ["Modula-3", "Oberon", "Ada"]
    },
    {
        name: "Oberon",
        year: 1987,
        authors: [
            {
                name: "Niklaus Wirth",
                org: "",
                bio: "Wirth's final language, designed alongside the Oberon operating system at ETH Zürich. Distilled Modula-2 to its essence—'as simple as possible, but not simpler'—adding type extension for object orientation while removing features Wirth deemed unnecessary. The culmination of his lifelong pursuit of minimalism.",
                sources: [
                    { title: "Wikipedia: Niklaus Wirth", url: "https://en.wikipedia.org/wiki/Niklaus_Wirth", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system", "oop"],
        code: `MODULE Hello;
IMPORT Out;
BEGIN
  Out.String("Hello, World!");
  Out.Ln
END Hello.`,
        filename: "Hello.Mod",
        description: "Wirth's minimalist finale. Oberon pared Modula-2 down to its core and added type extension, embodying his belief that simplicity is the ultimate sophistication.",
        influences: ["Modula-2"],
        influenced: ["Go", "Component Pascal"]
    },
    {
        name: "Modula-3",
        year: 1988,
        authors: [
            {
                name: "Luca Cardelli",
                org: "DEC Systems Research Center",
                bio: "Italian computer scientist known for foundational research in type theory. He was one of the designers of Modula-3 at DEC's Systems Research Center, and earlier implemented the first compiler for ML. He joined Microsoft Research in 1997 and later became a research professor at the University of Oxford.",
                sources: [
                    { title: "Wikipedia: Luca Cardelli", url: "https://en.wikipedia.org/wiki/Luca_Cardelli", type: "encyclopedia" }
                ]
            },
            {
                name: "Greg Nelson",
                org: "DEC Systems Research Center",
                bio: "American computer scientist (1953–2015) who served on the design committee for Modula-3 at DEC's Systems Research Center. He is best known for pioneering work in automated theorem proving, including the Simplify prover used by ESC/Java. He received the Herbrand Award in 2013.",
                sources: [
                    { title: "Wikipedia: Greg Nelson", url: "https://en.wikipedia.org/wiki/Greg_Nelson_(computer_scientist)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `MODULE Hello EXPORTS Main;

IMPORT IO;

BEGIN
  IO.Put("Hello, World!\\n");
END Hello.`,
        filename: "hello.m3",
        description: "Modula-3 brought systems programming into the modern era with garbage collection and safety. Its ideas echo through Python, Go, and Rust.",
        influences: ["Modula-2", "Mesa"],
        influenced: ["Python", "Java"]
    },
    {
        name: "Self",
        year: 1987,
        authors: [
            {
                name: "David Ungar",
                org: "Stanford University",
                bio: "American computer scientist who co-created Self with Randall Smith, building the first working Self compiler at Stanford in 1987 after the project began at Xerox PARC. His earlier work introduced generational garbage collection, and his dissertation won the 1986 ACM Doctoral Dissertation Award. Self's prototype model influenced JavaScript.",
                sources: [
                    { title: "Wikipedia: David Ungar", url: "https://en.wikipedia.org/wiki/David_Ungar", type: "encyclopedia" }
                ]
            },
            {
                name: "Randall Smith",
                org: "Stanford University",
                bio: "Researcher who co-created Self with David Ungar, with the work beginning at Xerox PARC and continuing at Stanford, where the first compiler was built in 1987, before the team moved to Sun Microsystems. Self pioneered a pure prototype-based object model that later influenced JavaScript.",
                sources: [
                    { title: "Wikipedia: Self (programming language)", url: "https://en.wikipedia.org/wiki/Self_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop"],
        code: `'Hello, World!' printLine.`,
        filename: "hello.self",
        description: "Self's prototype-based inheritance revolutionized object-oriented thinking and gave JavaScript its unique object model.",
        influences: ["Smalltalk"],
        influenced: ["JavaScript", "Lua", "Io", "NewtonScript"]
    },
    {
        name: "C#",
        year: 2000,
        authors: [
            {
                name: "Anders Hejlsberg",
                org: "",
                bio: "Danish software engineer who also created Turbo Pascal and led development of Delphi before joining Microsoft. Designed C# as part of the .NET initiative, combining the best of C++, Java, and Delphi. Later created TypeScript. One of the most influential language designers of our era.",
                sources: [
                    { title: "Wikipedia: Anders Hejlsberg", url: "https://en.wikipedia.org/wiki/Anders_Hejlsberg", type: "encyclopedia" },
                    { title: "Wikipedia: C# (programming language)", url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`,
        filename: "hello.cs",
        description: "Microsoft's flagship language for .NET. C# combines the power of C++ with the safety of Java, becoming a favorite for enterprise and game development.",
        influences: ["C++", "Java", "Visual Basic", "Delphi", "Eiffel"],
        influenced: ["TypeScript", "Vala"]
    },
    {
        name: "ALGOL",
        year: 1958,
        authors: [
            {
                name: "Peter Naur",
                org: "Regnecentralen",
                bio: "Danish computer scientist (1928–2016) who served as editor of the Report on ALGOL 60, shaping the language and lending his name to Backus-Naur Form. He received the ACM Turing Award in 2005. ALGOL itself was the product of an international committee of European and American computer scientists.",
                sources: [
                    { title: "Wikipedia: Peter Naur", url: "https://en.wikipedia.org/wiki/Peter_Naur", type: "encyclopedia" },
                    { title: "ACM A.M. Turing Award: Peter Naur", url: "https://amturing.acm.org/award_winners/naur_1024454.cfm", type: "award" }
                ]
            },
            {
                name: "John Backus",
                org: "IBM",
                bio: "American computer scientist (1924–2007) at IBM who contributed to the design of ALGOL and devised the notation now known as Backus-Naur Form. He had earlier led the team that created Fortran and received the ACM Turing Award in 1977.",
                sources: [
                    { title: "Wikipedia: John Backus", url: "https://en.wikipedia.org/wiki/John_Backus", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `BEGIN
  print(("Hello, World!"))
END`,
        filename: "hello.algol",
        description: "The language that taught languages how to be structured. ALGOL's influence echoes through Pascal, C, and the entire family of block-structured languages.",
        influences: ["Fortran"],
        influenced: ["Simula", "Pascal", "C", "BCPL", "PL/I"]
    },
    {
        name: "Visual Basic",
        year: 1991,
        authors: [
            {
                name: "Alan Cooper",
                org: "Microsoft",
                bio: "American software designer often called the 'father of Visual Basic.' In 1988 he built a visual programming prototype code-named Ruby; after a demonstration to Bill Gates, Microsoft acquired it and reshaped it into Visual Basic, released in 1991. Cooper later helped pioneer interaction design and popularized the use of personas.",
                sources: [
                    { title: "Wikipedia: Alan Cooper", url: "https://en.wikipedia.org/wiki/Alan_Cooper_(software_designer)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `Module Program
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module`,
        filename: "hello.vb",
        description: "The language that democratized Windows programming. Visual Basic's drag-and-drop interface made GUI development accessible to millions.",
        influences: ["BASIC"],
        influenced: ["C#"]
    },
    {
        name: "Common Lisp",
        year: 1984,
        authors: [
            {
                name: "Guy L. Steele Jr.",
                org: "Carnegie Mellon University",
                bio: "American computer scientist who authored the original specification Common Lisp the Language (1984), the basis for the ANSI standard, and chaired the X3J13 committee that standardized the language. He had earlier co-designed Scheme and later co-authored the Java Language Specification.",
                sources: [
                    { title: "Wikipedia: Guy L. Steele Jr.", url: "https://en.wikipedia.org/wiki/Guy_L._Steele_Jr.", type: "encyclopedia" }
                ]
            },
            {
                name: "Scott Fahlman",
                org: "Carnegie Mellon University",
                bio: "American computer scientist at Carnegie Mellon who was central to the development and standardization of Common Lisp, including CMU Common Lisp, and served on the X3J13 committee. His research spans artificial intelligence, and he is also credited with proposing the first text emoticons in 1982.",
                sources: [
                    { title: "Wikipedia: Scott Fahlman", url: "https://en.wikipedia.org/wiki/Scott_Fahlman", type: "encyclopedia" }
                ]
            },
            {
                name: "Richard P. Gabriel",
                org: "Lucid Inc.",
                bio: "American computer scientist who served on the X3J13 committee that standardized Common Lisp and founded Lucid Inc. in 1984 to build Lisp tools. He is widely known for coining the phrase 'Worse is Better' and for the Gabriel benchmarks. He received the ACM-AAAI Allen Newell Award in 2004.",
                sources: [
                    { title: "Wikipedia: Richard P. Gabriel", url: "https://en.wikipedia.org/wiki/Richard_P._Gabriel", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `(format t "Hello, World!~%")`,
        filename: "hello.lisp",
        description: "The standardized powerhouse of Lisp. Common Lisp unified divergent dialects into one of the most feature-complete languages ever created.",
        influences: ["Lisp", "Scheme"],
        influenced: ["Racket", "Clojure"]
    },
    {
        name: "AWK",
        year: 1977,
        authors: [
            {
                name: "Alfred Aho",
                org: "Bell Labs",
                bio: "Canadian computer scientist and the 'A' in AWK, which he co-created at Bell Labs in 1977. He is also known for the Aho-Corasick string-matching algorithm and the 'dragon book' compiler textbooks. He received the ACM Turing Award in 2020, shared with Jeffrey Ullman, and has been a professor at Columbia since 1995.",
                sources: [
                    { title: "Wikipedia: Alfred Aho", url: "https://en.wikipedia.org/wiki/Alfred_Aho", type: "encyclopedia" }
                ]
            },
            {
                name: "Peter Weinberger",
                org: "Bell Labs",
                bio: "American computer scientist and the 'W' in AWK, co-created at Bell Labs in 1977, where he also worked on the f77 Fortran compiler. He later held research roles at Renaissance Technologies and Google.",
                sources: [
                    { title: "Wikipedia: Peter J. Weinberger", url: "https://en.wikipedia.org/wiki/Peter_J._Weinberger", type: "encyclopedia" }
                ]
            },
            {
                name: "Brian Kernighan",
                org: "Bell Labs",
                bio: "Canadian computer scientist and the 'K' in AWK, co-created at Bell Labs in 1977. He contributed to early Unix and co-authored The C Programming Language with Dennis Ritchie, popularizing 'Hello, World!' He has been a professor at Princeton since 2000.",
                sources: [
                    { title: "Wikipedia: Brian Kernighan", url: "https://en.wikipedia.org/wiki/Brian_Kernighan", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `BEGIN { print "Hello, World!" }`,
        filename: "hello.awk",
        description: "The Unix text processing master. AWK's pattern-action paradigm made complex text transformations simple and elegant.",
        influences: [],
        influenced: ["Perl", "Python"]
    },
    {
        name: "APL",
        year: 1966,
        authors: [
            {
                name: "Kenneth E. Iverson",
                org: "",
                bio: "Created APL (A Programming Language) while at Harvard, later developed at IBM. Received the Turing Award in 1979. APL's mathematical notation revolutionized array programming. Used a special character set requiring custom keyboards. Influenced modern array languages and spreadsheets. Iverson died in 2004.",
                sources: [
                    { title: "Wikipedia: Kenneth E. Iverson", url: "https://en.wikipedia.org/wiki/Kenneth_E._Iverson", type: "encyclopedia" },
                    { title: "Wikipedia: APL (programming language)", url: "https://en.wikipedia.org/wiki/APL_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `'Hello, World!'`,
        filename: "hello.apl",
        description: "The mathematical notation made executable. APL's cryptic symbols hide revolutionary array-processing power that influenced spreadsheets and data science.",
        influences: [],
        influenced: ["MATLAB", "J", "Q"]
    },
    {
        name: "Forth",
        year: 1970,
        authors: [
            {
                name: "Charles H. Moore",
                org: "",
                bio: "Developed Forth from his personal system in the late 1960s; it was first widely used to control radio telescopes and later flew on space missions including the Philae lander. Forth's stack-based design and extensibility made it perfect for embedded systems. Moore championed minimalism and direct hardware access. Forth bootstraps itself, making it ideal for resource-constrained environments.",
                sources: [
                    { title: "Wikipedia: Forth (programming language)", url: "https://en.wikipedia.org/wiki/Forth_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `: HELLO  ." Hello, World!" CR ;
HELLO`,
        filename: "hello.fth",
        description: "The space-faring stack language. Forth's minimalist elegance controlled telescopes and spacecraft with kilobytes of memory.",
        influences: [],
        influenced: ["FALSE"]
    },
    {
        name: "Racket",
        year: 1995,
        authors: [
            {
                name: "Matthias Felleisen",
                org: "Northeastern University",
                bio: "German-American computer scientist who founded the PLT research group, whose work gave rise to Racket. He spent fourteen years at Rice University before joining Northeastern as Trustee Professor, and led the TeachScheme! initiative behind How to Design Programs. He received the ACM SIGPLAN Programming Languages Achievement Award in 2012.",
                sources: [
                    { title: "Wikipedia: Matthias Felleisen", url: "https://en.wikipedia.org/wiki/Matthias_Felleisen", type: "encyclopedia" }
                ]
            },
            {
                name: "Matthew Flatt",
                org: "University of Utah",
                bio: "American computer scientist at the University of Utah who leads development of Racket. His integration of a macro system with a module system is a defining feature of the language. He shared the ACM SIGPLAN Programming Languages Software Award with the Racket team in 2018.",
                sources: [
                    { title: "Wikipedia: Matthew Flatt", url: "https://en.wikipedia.org/wiki/Matthew_Flatt", type: "encyclopedia" }
                ]
            },
            {
                name: "Robert Bruce Findler",
                org: "Northwestern University",
                bio: "American computer scientist and professor at Northwestern who, as a member of the PLT group, created and maintains DrRacket, the flagship development environment for Racket. His doctoral work developed the theory of higher-order software contracts.",
                sources: [
                    { title: "Wikipedia: Robert Bruce Findler", url: "https://en.wikipedia.org/wiki/Robert_Bruce_Findler", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `#lang racket
(displayln "Hello, World!")`,
        filename: "hello.rkt",
        description: "The language laboratory. Racket makes creating new languages as easy as writing programs, pioneering language-oriented programming.",
        influences: ["Scheme", "Lisp", "Common Lisp"],
        influenced: []
    },
    {
        name: "Emacs Lisp",
        year: 1985,
        authors: [
            {
                name: "Richard Stallman",
                org: "",
                bio: "Created Emacs Lisp for the GNU Emacs editor. Stallman founded the Free Software Foundation and launched the GNU Project. Emacs Lisp makes the editor infinitely extensible—it's been called 'an operating system disguised as a text editor.' Millions use Emacs daily, customizing it with Elisp.",
                sources: [
                    { title: "Wikipedia: Emacs Lisp", url: "https://en.wikipedia.org/wiki/Emacs_Lisp", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "functional"],
        code: `(message "Hello, World!")`,
        filename: "hello.el",
        description: "The editor's soul. Emacs Lisp turns a text editor into an infinitely customizable operating environment, beloved by millions.",
        influences: ["Lisp"],
        influenced: []
    },
    {
        name: "D",
        year: 2001,
        authors: [
            {
                name: "Walter Bright",
                org: "Digital Mars",
                bio: "American programmer who created the D programming language and its first compiler. He earlier wrote the Zortech C++ compiler, the first to translate C++ directly to object code, and founded Digital Mars. As a hobbyist he also wrote the classic strategy game Empire.",
                sources: [
                    { title: "Wikipedia: Walter Bright", url: "https://en.wikipedia.org/wiki/Walter_Bright", type: "encyclopedia" }
                ]
            },
            {
                name: "Andrei Alexandrescu",
                org: "",
                bio: "Romanian-American programmer who co-designed the D programming language alongside Walter Bright. He is widely known for his book Modern C++ Design, which popularized policy-based design and template metaprogramming. He worked at Facebook for several years and later joined Nvidia in 2022.",
                sources: [
                    { title: "Wikipedia: Andrei Alexandrescu", url: "https://en.wikipedia.org/wiki/Andrei_Alexandrescu", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop", "system"],
        code: `import std.stdio;

void main()
{
    writeln("Hello, World!");
}`,
        filename: "hello.d",
        description: "C++ reimagined. D keeps the power while adding safety, contracts, and modern conveniences that C++ took decades to adopt.",
        influences: ["C++", "C"],
        influenced: []
    },
    {
        name: "Hack",
        year: 2014,
        authors: [
            {
                name: "Julien Verlaguet",
                org: "Facebook",
                bio: "Software engineer who was a principal designer of Hack, the gradually typed dialect of PHP that Facebook released in 2014, and co-authored the company's announcement introducing the language and its static type checker for the HHVM runtime.",
                sources: [
                    { title: "Wikipedia: Hack (programming language)", url: "https://en.wikipedia.org/wiki/Hack_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Alok Menghrajani",
                org: "Facebook",
                bio: "Software engineer who was among the designers of Hack, the statically typed PHP dialect released by Facebook in 2014, and co-authored the official announcement. Hack was a Facebook team effort built to add static type checking to the HHVM runtime.",
                sources: [
                    { title: "Wikipedia: Hack (programming language)", url: "https://en.wikipedia.org/wiki/Hack_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "web", "oop"],
        code: `<?hh
echo "Hello, World!\\n";`,
        filename: "hello.hack",
        description: "PHP's typed evolution. Facebook created Hack to bring safety and modern features to their massive PHP codebase.",
        influences: ["PHP", "OCaml"],
        influenced: []
    },
    {
        name: "Groovy",
        year: 2003,
        authors: [
            {
                name: "James Strachan",
                org: "",
                bio: "Created Groovy to be a dynamic companion to Java, combining Python-like syntax with JVM power. Later acquired by Apache Software Foundation. Groovy powers Gradle (the build tool), Grails (web framework), and Jenkins pipelines. Brings scripting ease to the Java ecosystem.",
                sources: [
                    { title: "Wikipedia: Apache Groovy", url: "https://en.wikipedia.org/wiki/Apache_Groovy", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `println "Hello, World!"`,
        filename: "hello.groovy",
        description: "Java's dynamic companion. Groovy brings scripting simplicity to the JVM, powering Gradle and modern build systems.",
        influences: ["Java", "Python", "Ruby"],
        influenced: []
    },
    {
        name: "SNOBOL",
        year: 1962,
        authors: [
            {
                name: "Ralph Griswold",
                org: "Bell Labs",
                bio: "American computer scientist (1934–2006) who joined Bell Labs in 1962 to study non-numerical computation, producing SNOBOL with David Farber and Ivan Polonsky. He later became the University of Arizona's first computer science professor in 1971, where he created the Icon language.",
                sources: [
                    { title: "Wikipedia: Ralph Griswold", url: "https://en.wikipedia.org/wiki/Ralph_Griswold", type: "encyclopedia" }
                ]
            },
            {
                name: "David Farber",
                org: "Bell Labs",
                bio: "American computer scientist (1934–2026) who co-designed SNOBOL during his career at Bell Labs. He later became a pioneer of computer networking, helping organize CSNET and NSFNet, earning the nickname 'Grandfather of the Internet.' He was inducted into the Internet Hall of Fame in 2013.",
                sources: [
                    { title: "Wikipedia: David Farber", url: "https://en.wikipedia.org/wiki/David_Farber", type: "encyclopedia" }
                ]
            },
            {
                name: "Ivan Polonsky",
                org: "Bell Labs",
                bio: "Member of the Bell Labs team that designed and developed SNOBOL beginning in 1962, alongside Ralph Griswold and David Farber. He co-authored the 1968 book The SNOBOL4 Programming Language documenting the language's later major version.",
                sources: [
                    { title: "Wikipedia: SNOBOL", url: "https://en.wikipedia.org/wiki/SNOBOL", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `    OUTPUT = "Hello, World!"
END`,
        filename: "hello.sno",
        description: "The pattern-matching pioneer. SNOBOL brought powerful string processing to computing long before regex became ubiquitous.",
        influences: [],
        influenced: ["Perl", "Icon"]
    },
    {
        name: "Tcl",
        year: 1988,
        authors: [
            {
                name: "John Ousterhout",
                org: "",
                bio: "Created Tcl (Tool Command Language) at UC Berkeley while working on CAD tools. Also created Tk toolkit for GUIs. Tcl's 'everything is a string' philosophy made it simple and embeddable. Later founded Scriptics. Tcl/Tk became the standard for quick GUI development in the 1990s.",
                sources: [
                    { title: "Wikipedia: John Ousterhout", url: "https://en.wikipedia.org/wiki/John_Ousterhout", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `puts "Hello, World!"`,
        filename: "hello.tcl",
        description: "The glue language. Tcl's simplicity and Tk toolkit made it the goto for rapid GUI development and tool integration.",
        influences: [],
        influenced: []
    },
    {
        name: "Elm",
        year: 2012,
        authors: [
            {
                name: "Evan Czaplicki",
                org: "",
                bio: "Created Elm as his thesis project at Harvard. Designed for web frontend development with functional programming and no runtime exceptions. Pioneered The Elm Architecture, which inspired Redux and modern state management. Focuses on developer experience with famously helpful compiler error messages.",
                sources: [
                    { title: "Wikipedia: Elm (programming language)", url: "https://en.wikipedia.org/wiki/Elm_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional", "web"],
        code: `module Main exposing (..)
import Html exposing (text)

main =
    text "Hello, World!"`,
        filename: "hello.elm",
        description: "Functional frontend without fear. Elm's architecture and guarantees of no runtime exceptions revolutionized web development thinking.",
        influences: ["Haskell", "ML"],
        influenced: ["PureScript", "Gleam", "Roc", "Unison"]
    },
    {
        name: "PL/SQL",
        year: 1991,
        authors: [
            {
                name: "Oracle Corporation",
                org: "",
                bio: "Oracle developed PL/SQL (Procedural Language/SQL) to extend SQL with procedural programming. Tightly integrated with Oracle Database. Allows stored procedures, functions, and triggers written in a block-structured language. Remains the standard for Oracle database programming with millions of enterprise users.",
                sources: [
                    { title: "Wikipedia: PL/SQL", url: "https://en.wikipedia.org/wiki/PL/SQL", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello, World!');
END;
/`,
        filename: "hello.plsql",
        description: "SQL's procedural power. PL/SQL brings programming logic inside the database, powering enterprise systems worldwide.",
        influences: ["Ada", "SQL"],
        influenced: []
    },
    {
        name: "Miranda",
        year: 1985,
        authors: [
            {
                name: "David Turner",
                org: "",
                bio: "British computer scientist who created Miranda at the University of Kent—one of the first commercially supported purely functional lazy languages. Its clean design and list-comprehension notation (which Turner called 'ZF expressions') strongly influenced the creation of Haskell. Turner died in 2023.",
                sources: [
                    { title: "Wikipedia: Miranda (programming language)", url: "https://en.wikipedia.org/wiki/Miranda_(programming_language)", type: "encyclopedia" },
                    { title: "Wikipedia: David Turner", url: "https://en.wikipedia.org/wiki/David_Turner_(computer_scientist)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `main = [System.stdout "Hello, World!\\n"]`,
        filename: "hello.miranda",
        description: "Miranda perfected lazy functional programming. When researchers wanted to standardize functional languages, they based Haskell on Miranda's design.",
        influences: ["SASL", "ML"],
        influenced: ["Haskell"]
    },
    {
        name: "Vala",
        year: 2006,
        authors: [
            {
                name: "Jürg Billeter",
                org: "GNOME project",
                bio: "Conceived the Vala programming language, wanting a higher-level way to develop GNOME applications than writing C directly, and implemented it with Raffaele Sandrini, completing a working compiler in 2006. Vala targets the GObject type system without runtime overhead.",
                sources: [
                    { title: "Wikipedia: Vala (programming language)", url: "https://en.wikipedia.org/wiki/Vala_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Raffaele Sandrini",
                org: "GNOME project",
                bio: "Co-implemented the Vala programming language with Jürg Billeter, producing a working compiler in 2006. The pair drew on C#'s syntax while avoiding a dependency on Mono, instead compiling Vala to C atop the GObject system.",
                sources: [
                    { title: "Wikipedia: Vala (programming language)", url: "https://en.wikipedia.org/wiki/Vala_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `void main () {
    print ("Hello, World!\\n");
}`,
        filename: "hello.vala",
        description: "C# for GNOME. Vala compiles to C while offering modern language features, bridging high-level coding with system integration.",
        influences: ["C#", "C"],
        influenced: []
    },
    {
        name: "PureScript",
        year: 2013,
        authors: [
            {
                name: "Phil Freeman",
                org: "",
                bio: "Created PureScript as a strongly-typed functional language that compiles to JavaScript. Brings Haskell-style purity and type safety to web development. No runtime exceptions, all effects tracked by types. Used for building robust frontend applications with mathematical precision.",
                sources: [
                    { title: "Wikipedia: PureScript", url: "https://en.wikipedia.org/wiki/PureScript", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional", "web"],
        code: `module Main where

import Effect.Console (log)

main = log "Hello, World!"`,
        filename: "hello.purs",
        description: "Haskell for JavaScript. PureScript brings pure functional programming and strong typing to the web with no runtime exceptions.",
        influences: ["Haskell", "Elm"],
        influenced: []
    },
    {
        name: "Idris",
        year: 2007,
        authors: [
            {
                name: "Edwin Brady",
                org: "",
                bio: "Created Idris with dependent types that allow types to depend on values. Brady also co-created Whitespace esoteric language. Idris proves program correctness at compile time. Used in research and for writing provably correct software. Influenced by his research in type theory.",
                sources: [
                    { title: "Wikipedia: Idris (programming language)", url: "https://en.wikipedia.org/wiki/Idris_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `module Main

main : IO ()
main = putStrLn "Hello, World!"`,
        filename: "hello.idr",
        description: "Types that prove your code correct. Idris uses dependent types to mathematically verify program behavior at compile time.",
        influences: ["Haskell", "ML"],
        influenced: []
    },
    {
        name: "Wolfram Language",
        year: 1988,
        authors: [
            {
                name: "Stephen Wolfram",
                org: "",
                bio: "Created the Wolfram Language (originally Mathematica's language) emphasizing symbolic computation and knowledge-based programming. Wolfram is a physicist, computer scientist, and entrepreneur. The language integrates vast built-in knowledge and algorithms. Used in scientific computing, AI, and education.",
                sources: [
                    { title: "Wikipedia: Wolfram Language", url: "https://en.wikipedia.org/wiki/Wolfram_Language", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `Print["Hello, World!"]`,
        filename: "hello.wl",
        description: "Knowledge meets computation. Wolfram Language integrates massive algorithms and data into a symbolic programming paradigm.",
        influences: [],
        influenced: []
    },
    {
        name: "Zsh",
        year: 1990,
        authors: [
            {
                name: "Paul Falstad",
                org: "",
                bio: "Created Zsh (Z Shell) while a student at Princeton. Named after teaching assistant Zhong Shao. Extended Bash with powerful features: better completion, spelling correction, themes. Became macOS default shell in 2019, replacing Bash. Oh My Zsh framework has millions of users.",
                sources: [
                    { title: "Wikipedia: Z shell", url: "https://en.wikipedia.org/wiki/Z_shell", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `#!/bin/zsh
echo "Hello, World!"`,
        filename: "hello.zsh",
        description: "Bash's powerful successor. Zsh adds modern features and became macOS default, bringing better completion and customization to millions.",
        influences: ["Bash", "sh"],
        influenced: ["Fish"]
    },
    {
        name: "Fish",
        year: 2005,
        authors: [
            {
                name: "Axel Liljencrantz",
                org: "",
                bio: "Created Fish (Friendly Interactive Shell) to be user-friendly by default. Unlike Bash, prioritizes interactive use over scripting. Features autosuggestions, syntax highlighting, and web-based configuration. Philosophy: if a program can do something automatically, it should.",
                sources: [
                    { title: "Wikipedia: fish (Unix shell)", url: "https://en.wikipedia.org/wiki/Fish_(Unix_shell)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `#!/usr/bin/fish
echo "Hello, World!"`,
        filename: "hello.fish",
        description: "The friendly shell. Fish prioritizes interactive user experience with autosuggestions and sane defaults out of the box.",
        influences: ["Bash", "Zsh"],
        influenced: []
    },
    {
        name: "Delphi",
        year: 1995,
        authors: [
            {
                name: "Anders Hejlsberg",
                org: "Borland",
                bio: "Became Chief Engineer at Borland in 1989 and served as chief architect of the team that produced Delphi, building on his earlier authorship of Turbo Pascal. He left Borland for Microsoft in 1996, where he became lead architect of C# from 2000 and announced TypeScript in 2012.",
                sources: [
                    { title: "Wikipedia: Anders Hejlsberg", url: "https://en.wikipedia.org/wiki/Anders_Hejlsberg", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `program HelloWorld;

{$APPTYPE CONSOLE}

begin
  WriteLn('Hello, World!');
end.`,
        filename: "hello.pas",
        description: "Anders Hejlsberg's RAD masterpiece. Delphi brought visual development and native performance together, dominating 90s Windows dev.",
        influences: ["Pascal"],
        influenced: ["C#"]
    },
    {
        name: "ActionScript",
        year: 1998,
        authors: [
            {
                name: "Macromedia/Adobe",
                org: "",
                bio: "Created for Flash and Flex applications. Based on ECMAScript like JavaScript. ActionScript 3.0 (2006) added strong typing and better performance. Powered interactive web content, games, and rich internet applications. Flash's decline ended ActionScript's dominance, but it shaped early web interactivity.",
                sources: [
                    { title: "Wikipedia: ActionScript", url: "https://en.wikipedia.org/wiki/ActionScript", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `trace("Hello, World!");`,
        filename: "hello.as",
        description: "Flash's interactive soul. ActionScript powered the rich web experiences and browser games that defined the 2000s internet.",
        influences: ["JavaScript", "Java"],
        influenced: []
    },
    {
        name: "Icon",
        year: 1977,
        authors: [
            {
                name: "Ralph Griswold",
                org: "",
                bio: "Griswold created Icon after SNOBOL, focusing on string and structure manipulation with generators and goal-directed evaluation. Introduced innovative control structures. Used in text processing, AI, and rapid prototyping. Griswold spent his career at University of Arizona advancing programming language design.",
                sources: [
                    { title: "Wikipedia: Ralph Griswold", url: "https://en.wikipedia.org/wiki/Ralph_Griswold", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `procedure main()
    write("Hello, World!")
end`,
        filename: "hello.icn",
        description: "SNOBOL's elegant successor. Icon brought generators and goal-directed evaluation to string processing with cleaner syntax.",
        influences: ["SNOBOL"],
        influenced: []
    },
    {
        name: "SAS",
        year: 1976,
        authors: [
            {
                name: "Anthony Barr",
                org: "North Carolina State University",
                bio: "Co-leader of the statistical analysis project at North Carolina State University that became SAS, programming analysis-of-variance and regression routines for IBM System/360 computers from 1968. In 1976 he, with James Goodnight and others, incorporated it as SAS Institute.",
                sources: [
                    { title: "Wikipedia: SAS (software)", url: "https://en.wikipedia.org/wiki/SAS_(software)", type: "encyclopedia" }
                ]
            },
            {
                name: "James Goodnight",
                org: "North Carolina State University",
                bio: "Developed the statistical routines for SAS as a project leader at North Carolina State University, where he was on the faculty from 1972 to 1976. In 1976 he co-founded SAS Institute and has served as its CEO since, building it into one of the world's largest privately held software companies.",
                sources: [
                    { title: "Wikipedia: James Goodnight", url: "https://en.wikipedia.org/wiki/James_Goodnight", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `data _null_;
    put 'Hello, World!';
run;`,
        filename: "hello.sas",
        description: "Statistical analysis standard. SAS has been the enterprise choice for data analysis in pharma and finance for decades.",
        influences: [],
        influenced: []
    },
    {
        name: "Chapel",
        year: 2009,
        authors: [
            {
                name: "Brad Chamberlain",
                org: "Cray Inc.",
                bio: "Principal designer and technical lead of the Chapel parallel programming language, developed by Cray Inc. (later Hewlett Packard Enterprise) and first released in 2009. Chapel emerged from Cray's Cascade project under DARPA's High Productivity Computing Systems program.",
                sources: [
                    { title: "Wikipedia: Chapel (programming language)", url: "https://en.wikipedia.org/wiki/Chapel_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `writeln("Hello, World!");`,
        filename: "hello.chpl",
        description: "Supercomputing made accessible. Chapel brings high-level abstractions to parallel programming on the world's fastest machines.",
        influences: ["Fortran", "C"],
        influenced: []
    },
    {
        name: "Pony",
        year: 2012,
        authors: [
            {
                name: "Sylvan Clebsch",
                org: "",
                bio: "Created Pony to solve the problem of safe, efficient concurrent programming. Uses capabilities-based type system for memory safety without garbage collection pauses. Actor-model concurrency. Designed for high-performance while preventing data races at compile time. Open-source and evolving.",
                sources: [
                    { title: "Wikipedia: Pony (programming language)", url: "https://en.wikipedia.org/wiki/Pony_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `actor Main
  new create(env: Env) =>
    env.out.print("Hello, World!")`,
        filename: "hello.pony",
        description: "Concurrency without fear. Pony's capabilities system prevents data races at compile time while maintaining actor-model performance.",
        influences: ["Rust", "Erlang"],
        influenced: []
    },
    {
        name: "Befunge",
        year: 1993,
        authors: [
            {
                name: "Chris Pressey",
                org: "",
                bio: "Created Befunge as a two-dimensional esoteric language that's intentionally difficult to compile. Code moves in four directions across a 2D grid. Pressey wanted to create a language as hard to compile as possible. Part of the esoteric language movement exploring unusual computation models.",
                sources: [
                    { title: "Wikipedia: Befunge", url: "https://en.wikipedia.org/wiki/Befunge", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `"!dlroW ,olleH">:#,_@`,
        filename: "hello.bf93",
        description: "Code in two dimensions. Befunge executes by moving through a 2D grid, making it beautifully bizarre and compiler-hostile.",
        influences: [],
        influenced: []
    },
    {
        name: "Malbolge",
        year: 1998,
        authors: [
            {
                name: "Ben Olmstead",
                org: "",
                bio: "Created Malbolge (named after Dante's eighth circle of hell) to be the most difficult programming language possible. Self-modifying code, encryption, and base-3 arithmetic make it nearly impossible to write. First Hello World program took two years to create (found by a search algorithm). Pushing limits of obscurity.",
                sources: [
                    { title: "Wikipedia: Malbolge", url: "https://en.wikipedia.org/wiki/Malbolge", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `(=<\`#9]~6ZY32Vx/4Rs+0No-&Jk)"Fh}|Bcy?\`=*z]Kw%oG4UUS0/@-ejc(:'8dc`,
        filename: "hello.mal",
        description: "Dante's programming inferno. Malbolge is intentionally the hardest language—the first Hello World took two years to create.",
        influences: ["INTERCAL"],
        influenced: []
    },
    {
        name: "Chicken",
        year: 2002,
        authors: [
            {
                name: "Torbjörn Söderstedt",
                org: "",
                bio: "Created the Chicken language where the only valid keyword is 'chicken'. Number of 'chicken's and punctuation determine the operation. A brilliant parody of programming language minimalism. Demonstrates that syntax is just convention—computation can happen with any symbols.",
                sources: [
                    { title: "Esolang: Chicken", url: "https://esolangs.org/wiki/Chicken", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken
chicken chicken chicken chicken chicken chicken`,
        filename: "hello.chicken",
        description: "Only chickens allowed. Chicken proves that with enough determination (and chickens), any computation is possible.",
        influences: [],
        influenced: []
    },
    {
        name: "Eiffel",
        year: 1985,
        authors: [
            {
                name: "Bertrand Meyer",
                org: "",
                bio: "French computer scientist who created Eiffel with design-by-contract as a core principle. Meyer championed software engineering rigor and formal methods. Eiffel introduced contracts (preconditions, postconditions, invariants) that influenced Java, C#, and modern type systems. Meyer also wrote 'Object-Oriented Software Construction.'",
                sources: [
                    { title: "Wikipedia: Bertrand Meyer", url: "https://en.wikipedia.org/wiki/Bertrand_Meyer", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `class
    HELLO_WORLD

create
    make

feature
    make
        do
            print ("Hello, World!%N")
        end

end`,
        filename: "hello.e",
        description: "Design-by-contract pioneer. Eiffel's formal approach to correctness influenced modern type systems and contract programming.",
        influences: ["Simula", "Ada"],
        influenced: ["Java", "C#", "Spec#"]
    },
    {
        name: "RPG",
        year: 1959,
        authors: [
            {
                name: "IBM",
                org: "",
                bio: "RPG (Report Program Generator) was developed by IBM in 1959 as a high-level language for business applications, designed to generate reports from data files. It was first introduced for the IBM 1401 and later extended to the System/360. The FOLDOC dictionary credits Wilf Hey with the IBM work that resulted in RPG.",
                sources: [
                    { title: "Wikipedia: IBM RPG", url: "https://en.wikipedia.org/wiki/IBM_RPG", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `     H dftactgrp(*no)
     
     D msg             S             50A   inz('Hello, World!')
     
     C                   eval      *inlr = *on
     C                   dsply                   msg`,
        filename: "hello.rpgle",
        description: "Business automation pioneer. RPG still processes countless transactions in banking systems worldwide, a living fossil from the punch card era.",
        influences: ["Assembly"],
        influenced: ["COBOL"]
    },
    {
        name: "INTERCAL",
        year: 1972,
        authors: [
            {
                name: "Don Woods",
                org: "Princeton University",
                bio: "Co-created INTERCAL with James M. Lyon in 1972 while both were students at Princeton, conceiving it as a parody of the era's proliferating language constructs. He later expanded Colossal Cave Adventure into the influential text adventure that helped found the interactive fiction genre.",
                sources: [
                    { title: "Wikipedia: Don Woods (programmer)", url: "https://en.wikipedia.org/wiki/Don_Woods_(programmer)", type: "encyclopedia" }
                ]
            },
            {
                name: "James M. Lyon",
                org: "Princeton University",
                bio: "Co-created INTERCAL with Don Woods in 1972 while both were students at Princeton. The language was designed as a deliberate parody, mocking the many programming-language features proposed during the 1960s.",
                sources: [
                    { title: "Wikipedia: INTERCAL", url: "https://en.wikipedia.org/wiki/INTERCAL", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "compiled"],
        code: `DO ,1 <- #13
PLEASE DO ,1 SUB #1 <- #238
DO ,1 SUB #2 <- #112
DO ,1 SUB #3 <- #112
DO ,1 SUB #4 <- #0
DO ,1 SUB #5 <- #64
DO ,1 SUB #6 <- #238
DO ,1 SUB #7 <- #26
DO ,1 SUB #8 <- #248
DO ,1 SUB #9 <- #168
DO ,1 SUB #10 <- #24
DO ,1 SUB #11 <- #16
DO ,1 SUB #12 <- #158
DO ,1 SUB #13 <- #52
PLEASE READ OUT ,1
PLEASE GIVE UP`,
        filename: "hello.i",
        description: "The original parody language. INTERCAL requires PLEASE for politeness and pioneered deliberately difficult programming as art.",
        influences: [],
        influenced: ["Brainfuck", "Malbolge", "All esoteric languages"]
    },
    {
        name: "Dylan",
        year: 1992,
        authors: [
            {
                name: "Apple Computer",
                org: "",
                bio: "Dylan was created in the early 1990s by a group led by Apple Computer, with contributions from Harlequin and Carnegie Mellon University, first appearing in 1992. Derived from Scheme and Common Lisp, it adds a CLOS-based object system but uses an ALGOL-like syntax. Intended for the Apple Newton, Apple ended its development in 1995.",
                sources: [
                    { title: "Wikipedia: Dylan (programming language)", url: "https://en.wikipedia.org/wiki/Dylan_(programming_language)", type: "encyclopedia" }
                ]
            },
            {
                name: "Michael Kahl",
                org: "Apple Computer",
                bio: "Designed the infix, ALGOL-like syntax adopted for the Dylan programming language during its development by Apple Computer in the early 1990s, replacing Dylan's earlier Lisp-style prefix notation.",
                sources: [
                    { title: "Wikipedia: Dylan (programming language)", url: "https://en.wikipedia.org/wiki/Dylan_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop", "functional"],
        code: `module: hello-world

define function main (name, arguments)
  format-out("Hello, World!\\n");
  exit-application(0);
end function main;

main(application-name(), application-arguments());`,
        filename: "hello.dylan",
        description: "Apple's Lisp evolution. Dylan combined dynamic features with static typing, bridging Lisp and conventional syntax.",
        influences: ["Lisp", "Scheme", "CLOS"],
        influenced: ["NewtonScript"]
    },
    {
        name: "Io",
        year: 2002,
        authors: [
            {
                name: "Steve Dekorte",
                org: "",
                bio: "Created Io as a minimalist prototype-based language inspired by Self, Smalltalk, and Lisp. Everything is a message to an object, everything is an object. Influenced by actor model concurrency. Used Io's coroutines and concurrency features in various projects. Open source with a small but dedicated community.",
                sources: [
                    { title: "Wikipedia: Io (programming language)", url: "https://en.wikipedia.org/wiki/Io_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop"],
        code: `"Hello, World!" println`,
        filename: "hello.io",
        description: "Minimalist prototype-based beauty. Io's pure message-passing model influenced Scala and demonstrated prototype elegance.",
        influences: ["Self", "Smalltalk", "Lisp"],
        influenced: ["Scala"]
    },
    {
        name: "J",
        year: 1990,
        authors: [
            {
                name: "Kenneth E. Iverson",
                org: "Iverson Software",
                bio: "Canadian computer scientist (1920–2004) who created APL and received the 1979 Turing Award for his work on programming languages and mathematical notation. After a long IBM career, he co-created the J language, which appeared in 1990, and joined Iverson Software (later Jsoftware). He died in 2004.",
                sources: [
                    { title: "Wikipedia: Kenneth E. Iverson", url: "https://en.wikipedia.org/wiki/Kenneth_E._Iverson", type: "encyclopedia" }
                ]
            },
            {
                name: "Roger Hui",
                org: "Iverson Software",
                bio: "Canadian computer scientist (1953–2021) who, with Kenneth Iverson, co-created J in the early 1990s, writing its implementation as an APL-like array language that resolved APL's character-set issues. He received the Iverson Award in 1996 and died in 2021.",
                sources: [
                    { title: "Wikipedia: Roger Hui", url: "https://en.wikipedia.org/wiki/Roger_Hui", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `'Hello, World!'`,
        filename: "hello.ijs",
        description: "APL's ASCII successor by Iverson himself. J brings array programming power to standard keyboards, beloved by mathematicians.",
        influences: ["APL"],
        influenced: ["K", "Q"]
    },
    {
        name: "Chef",
        year: 2002,
        authors: [
            {
                name: "David Morgan-Mar",
                org: "",
                bio: "Australian programmer who creates esoteric languages as art. Also created Piet (programs as paintings). Chef programs are valid cooking recipes. Ingredients are data, method steps are instructions. Morgan-Mar explores the intersection of code, language, and other human endeavors. PhD in astrophysics.",
                sources: [
                    { title: "Wikipedia: David Morgan-Mar", url: "https://en.wikipedia.org/wiki/David_Morgan-Mar", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `Hello World Souffle.

This recipe prints the immortal words "Hello world!", in a basically brute force way. It also makes a lot of food for one person.

Ingredients.
72 g haricot beans
101 eggs
108 g lard
111 cups oil
32 zucchinis
119 ml water
114 g red salmon
100 g dijon mustard
33 potatoes

Method.
Put potatoes into the mixing bowl. Put dijon mustard into the mixing bowl. Put lard into the mixing bowl. Put red salmon into the mixing bowl. Put oil into the mixing bowl. Put water into the mixing bowl. Put zucchinis into the mixing bowl. Put oil into the mixing bowl. Put lard into the mixing bowl. Put lard into the mixing bowl. Put eggs into the mixing bowl. Put haricot beans into the mixing bowl. Liquefy contents of the mixing bowl. Pour contents of the mixing bowl into the baking dish.

Serves 1.`,
        filename: "hello.chef",
        description: "Programs as recipes. Chef proves code can be delicious—each program is a valid recipe you could actually cook.",
        influences: [],
        influenced: []
    },
    {
        name: "Rockstar",
        year: 2018,
        authors: [
            {
                name: "Dylan Beattie",
                org: "",
                bio: "British developer and musician who created Rockstar so programs read like 1980s rock song lyrics. Variables are poetic, operations use rock terminology. Beattie is a Microsoft MVP and conference speaker who combines programming with performance art. Rockstar has a working compiler and active community.",
                sources: [
                    { title: "Esolang: Rockstar", url: "https://esolangs.org/wiki/Rockstar", type: "encyclopedia" },
                    { title: "Dylan Beattie (personal site)", url: "https://dylanbeattie.net/", type: "official" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `Desire is a lovestruck ladykiller
My world is nothing 
Fire is ice
Hate is water
Until my world is Desire,
Build my world up
If Desire is fire
Shout "Hello "
If Desire is hate,
Say "World!"`,
        filename: "hello.rock",
        description: "Code that rocks. Rockstar lets you write programs as 80s power ballad lyrics—poetic variables and all.",
        influences: [],
        influenced: []
    },
    {
        name: "ArnoldC",
        year: 2013,
        authors: [
            {
                name: "Lauri Hartikka",
                org: "",
                bio: "Finnish programmer who created ArnoldC where all keywords are Arnold Schwarzenegger movie quotes. 'IT'S SHOWTIME' starts program, 'YOU HAVE BEEN TERMINATED' ends it. A tribute to action movies and programming humor. Built with Java and actively maintained on GitHub with enthusiastic community.",
                sources: [
                    { title: "Esolang: ArnoldC", url: "https://esolangs.org/wiki/ArnoldC", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "compiled"],
        code: `IT'S SHOWTIME
TALK TO THE HAND "Hello, World!"
YOU HAVE BEEN TERMINATED`,
        filename: "hello.arnoldc",
        description: "I'll be back... with Hello World! ArnoldC speaks only in Schwarzenegger quotes—IT'S SHOWTIME to begin, TERMINATED to end.",
        influences: [],
        influenced: []
    },
    {
        name: "Velato",
        year: 2009,
        authors: [
            {
                name: "Daniel Temkin",
                org: "",
                bio: "Artist and programmer exploring the aesthetic possibilities of code. Created Velato where programs are MIDI music files—pitch sequences encode instructions. Also created Entropy (code degrades over time) and other conceptual languages. Shows programming as performance art. Based in New York.",
                sources: [
                    { title: "Esolang: Velato", url: "https://esolangs.org/wiki/Velato", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `[Musical notation encoding: This would be a MIDI file where specific note sequences encode "Hello, World!" - the pitches C D E F G A B in specific patterns create the output]`,
        filename: "hello.velato",
        description: "Listen to your code. Velato programs are MIDI music—you can hear your Hello World as a melody.",
        influences: [],
        influenced: []
    },
    {
        name: "FALSE",
        year: 1993,
        authors: [
            {
                name: "Wouter van Oortmerssen",
                org: "",
                bio: "Dutch programmer who created FALSE as a tiny stack-based language. The entire compiler is 1024 bytes. FALSE's minimalism directly inspired Urban Müller to create Brainfuck. Van Oortmerssen later created the Cube game engine and worked at Google. FALSE demonstrated extreme language minimalism.",
                sources: [
                    { title: "Esolang: FALSE", url: "https://esolangs.org/wiki/FALSE", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "compiled"],
        code: `"Hello, World!
"`,
        filename: "hello.f",
        description: "The minimalism that spawned Brainfuck. FALSE's 1024-byte compiler proved how small a language could be.",
        influences: ["Forth"],
        influenced: ["Brainfuck"]
    },
    {
        name: "Ook!",
        year: 2002,
        authors: [
            {
                name: "David Morgan-Mar",
                org: "",
                bio: "Morgan-Mar strikes again! Ook! is Brainfuck for orangutans—only 'Ook.', 'Ook?', and 'Ook!' are valid tokens. Named after the Librarian from Terry Pratchett's Discworld who only says 'Ook!'. Demonstrates that even Brainfuck can be more obscure. Part of Morgan-Mar's exploration of code as creative expression.",
                sources: [
                    { title: "Esolang: Ook!", url: "https://esolangs.org/wiki/Ook!", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook.
Ook! Ook. Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook?
Ook! Ook! Ook? Ook! Ook? Ook. Ook. Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook. Ook! Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook.
Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook! Ook? Ook? Ook. Ook. Ook.
Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook. Ook? Ook! Ook! Ook? Ook! Ook? Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.
Ook? Ook. Ook? Ook. Ook? Ook. Ook? Ook. Ook! Ook. Ook. Ook. Ook. Ook. Ook. Ook.
Ook! Ook. Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook.
Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook! Ook!
Ook! Ook. Ook. Ook? Ook. Ook? Ook. Ook. Ook! Ook.`,
        filename: "hello.ook",
        description: "Brainfuck for orangutans. Ook! uses only 'Ook.', 'Ook?', and 'Ook!'—a tribute to Terry Pratchett's Librarian.",
        influences: ["Brainfuck"],
        influenced: []
    },
    {
        name: "Emojicode",
        year: 2014,
        authors: [
            {
                name: "Theo Weidmann",
                org: "",
                bio: "German developer who created Emojicode as a full-featured object-oriented language using only emoji. Classes, methods, variables—all emoji. Compiles to bytecode and runs on its own VM. Demonstrates that Unicode opens new possibilities for programming syntax. Actively developed with serious language features despite playful appearance.",
                sources: [
                    { title: "Emojicode official site", url: "https://www.emojicode.org/", type: "official" }
                ]
            }
        ],
        tags: ["esoteric", "compiled", "oop"],
        code: `🏁 🍇
  😀 🔤Hello, World!🔤❗️
🍉`,
        filename: "hello.emojic",
        description: "Programming in pure emoji. Emojicode is a full OOP language where 🏁 starts main and 😀 prints—seriously functional!",
        influences: [],
        influenced: []
    },
    {
        name: "Cow",
        year: 2006,
        authors: [
            {
                name: "Sean Heber",
                org: "",
                bio: "Created Cow as a humorous variant using only 'moo', 'mOo', 'moO', 'mOO', 'Moo', 'MOo', 'MoO', and 'MOO' commands. Similar concept to Chicken but with bovine vocabulary. Heber is an iOS developer who enjoys playful programming. Cow demonstrates that any consistent symbol set can encode computation.",
                sources: [
                    { title: "Esolang: COW", url: "https://esolangs.org/wiki/COW", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `MoO MoO MoO MoO MoO MoO MoO MoO MOo MOo MOo MOo MOo MOo MOo MOo
MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MoO MoO MoO
MoO MoO MoO MoO MoO Moo MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
MoO MoO MoO MoO MoO MoO MoO MoO Moo Moo Moo Moo Moo Moo Moo Moo
Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo
Moo MoO MoO MoO MoO MoO MoO MoO Moo Moo Moo Moo Moo Moo Moo Moo
Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo Moo MoO MoO
MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MOo MOo MOo`,
        filename: "hello.cow",
        description: "Only 'moo' variants allowed. Cow proves bovines can compute too—eight moo combinations create any program.",
        influences: [],
        influenced: []
    },
    {
        name: "Inform",
        year: 1993,
        authors: [
            {
                name: "Graham Nelson",
                org: "",
                bio: "British mathematician and poet who created Inform for writing interactive fiction (text adventures). Used by thousands to create games like 'Anchorhead' and 'Photopia'. Inform 7 (2006) uses natural language syntax. Nelson also created the Z-machine interpreter. Interactive fiction as serious literary form.",
                sources: [
                    { title: "Wikipedia: Graham Nelson", url: "https://en.wikipedia.org/wiki/Graham_Nelson", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `"Hello, World!"

[ Main;
    print "Hello, World!^";
];`,
        filename: "hello.inf",
        description: "Interactive fiction's language. Inform powers text adventures and has evolved into natural-language programming with Inform 7.",
        influences: [],
        influenced: ["Inform 7"]
    },
    {
        name: "Whenever",
        year: 2013,
        authors: [
            {
                name: "David Morgan-Mar",
                org: "",
                bio: "Australian programmer who created Whenever, a non-deterministic language where statement order doesn't matter—the interpreter executes them 'whenever' it wants. A prolific designer of esoteric languages, he also created Piet, Chef, and Ook!, exploring code as creative expression.",
                sources: [
                    { title: "Esolang: Whenever", url: "https://esolangs.org/wiki/Whenever", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["esoteric", "scripting"],
        code: `1 print("Hello, World!");`,
        filename: "hello.whenever",
        description: "Time is negotiable. Whenever executes statements in random order—your code runs whenever it feels like it.",
        influences: [],
        influenced: []
    },
    {
        name: "Q",
        year: 2003,
        authors: [
            {
                name: "Arthur Whitney",
                org: "Kx Systems",
                bio: "Designed the q programming language, released by Kx Systems in 2003 as a vector language built on his earlier k language and the kdb+ database. He first encountered APL at age 11 through Ken Iverson, created A+ at Morgan Stanley, and co-founded Kx Systems in 1993. In 2018 he co-founded Shakti.",
                sources: [
                    { title: "Wikipedia: Arthur Whitney", url: "https://en.wikipedia.org/wiki/Arthur_Whitney_(computer_scientist)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `"Hello, World!"`,
        filename: "hello.q",
        description: "Wall Street's secret weapon. Q powers high-frequency trading with terse array operations processing billions of records.",
        influences: ["APL", "K", "J"],
        influenced: []
    },
    {
        name: "Rebol",
        year: 2000,
        authors: [
            {
                name: "Carl Sassenrath",
                org: "",
                bio: "Created Rebol (Relative Expression Based Object Language) for distributed computing and messaging. Sassenrath previously designed the Amiga OS kernel. Rebol uses dialects—embedded domain-specific languages. Influenced modern data exchange formats. Open-sourced in 2012. Spawned Red language as spiritual successor.",
                sources: [
                    { title: "Wikipedia: Carl Sassenrath", url: "https://en.wikipedia.org/wiki/Carl_Sassenrath", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `print "Hello, World!"`,
        filename: "hello.rebol",
        description: "Messaging language ahead of its time. Rebol's dialects and data exchange philosophy influenced modern distributed systems.",
        influences: ["Lisp"],
        influenced: ["Red"]
    },
    {
        name: "Red",
        year: 2011,
        authors: [
            {
                name: "Nenad Rakocevic",
                org: "",
                bio: "Created Red as a full-stack language inspired by Rebol, compiling to native code. From system programming to GUI scripting in one language. Features a built-in reactive GUI framework. Red aims to be practical for everything from device drivers to web apps. Active open-source development.",
                sources: [
                    { title: "Wikipedia: Red (programming language)", url: "https://en.wikipedia.org/wiki/Red_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled"],
        code: `Red []
print "Hello, World!"`,
        filename: "hello.red",
        description: "Rebol reborn. Red is full-stack from device drivers to GUIs, compiled for performance while keeping expressiveness.",
        influences: ["Rebol", "Lisp"],
        influenced: []
    },
    {
        name: "Pike",
        year: 1994,
        authors: [
            {
                name: "Fredrik Hübinette",
                org: "",
                bio: "Co-created Pike with Per Hedbor, evolving it from the LPC MUD language (renamed from uLPC in 1996) into a general-purpose language. Combining C-like syntax with high-level features and automatic memory management, Pike powers the Roxen web server and networking applications.",
                sources: [
                    { title: "Wikipedia: Pike (programming language)", url: "https://en.wikipedia.org/wiki/Pike_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop"],
        code: `int main() {
    write("Hello, World!\\n");
    return 0;
}`,
        filename: "hello.pike",
        description: "From MUDs to the web. Pike evolved from game scripting to power real-world networking applications.",
        influences: ["C", "LPC"],
        influenced: []
    },
    {
        name: "Ring",
        year: 2016,
        authors: [
            {
                name: "Mahmoud Fayed",
                org: "",
                bio: "Egyptian computer scientist who created Ring as a practical general-purpose language. Designed to be simple, small, flexible. Features natural language programming option, visual development, works well for beginners and experts. Supports multiple programming paradigms. Growing community particularly in Arabic-speaking countries.",
                sources: [
                    { title: "Ring official site", url: "https://ring-lang.github.io/", type: "official" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `see "Hello, World!" + nl`,
        filename: "hello.ring",
        description: "Simplicity as philosophy. Ring brings approachable syntax and natural language programming to modern development.",
        influences: ["Lua", "Python"],
        influenced: []
    },
    {
        name: "Wren",
        year: 2013,
        authors: [
            {
                name: "Bob Nystrom",
                org: "",
                bio: "Created Wren as a small, fast scripting language for embedding in applications. Nystrom worked at Google, including on the Dart team, and is the author of 'Crafting Interpreters' and 'Game Programming Patterns'. Wren is class-based, concurrent, uses fibers. Designed for game development embedability.",
                sources: [
                    { title: "Wren official site", url: "https://wren.io/", type: "official" },
                    { title: "Crafting Interpreters (Bob Nystrom)", url: "https://craftinginterpreters.com/", type: "official" }
                ]
            }
        ],
        tags: ["scripting"],
        code: `System.print("Hello, World!")`,
        filename: "hello.wren",
        description: "Scripting perfected. Wren is small, fast, and embeddable—designed by the author of 'Crafting Interpreters' for game engines.",
        influences: ["Lua", "Smalltalk"],
        influenced: []
    },
    {
        name: "NewtonScript",
        year: 1993,
        authors: [
            {
                name: "Walter Smith",
                org: "Apple",
                bio: "Designed NewtonScript at Apple in 1993 as the application development language for the Newton platform of personal digital assistants. It was a prototype-based, dynamically typed object-oriented language influenced by Self and Dylan, built to run within the tight memory constraints of the MessagePad.",
                sources: [
                    { title: "Wikipedia: NewtonScript", url: "https://en.wikipedia.org/wiki/NewtonScript", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["scripting", "oop"],
        code: `Print("Hello, World!");`,
        filename: "hello.ns",
        description: "The PDA's brain. NewtonScript pioneered mobile development concepts that smartphones would reinvent decades later.",
        influences: ["Self", "Dylan"],
        influenced: []
    },
    {
        name: "Mojo",
        year: 2023,
        authors: [
            {
                name: "Chris Lattner",
                org: "Modular",
                bio: "Co-founded Modular in 2022 and serves as its CEO, where he created the Mojo programming language (first released 2023) to combine Python's usability with systems-level performance for AI workloads. Earlier he created LLVM, the Clang compiler, and the Swift language at Apple, and co-founded MLIR at Google.",
                sources: [
                    { title: "Wikipedia: Chris Lattner", url: "https://en.wikipedia.org/wiki/Chris_Lattner", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `def main():
    print("Hello, World!")`,
        filename: "hello.mojo",
        description: "Python meets performance. Mojo brings systems-level speed to Python syntax, built by Swift's creator for the AI era.",
        influences: ["Python", "Swift"],
        influenced: []
    },
    {
        name: "Carbon",
        year: 2022,
        authors: [
            {
                name: "Chandler Carruth",
                org: "Google",
                bio: "Google engineer who publicly introduced the Carbon language, an experimental successor to C++, at the CppNorth conference in Toronto in July 2022. The project remained experimental into the mid-2020s, with a production-ready 1.0 not anticipated until after 2028.",
                sources: [
                    { title: "Wikipedia: Carbon (programming language)", url: "https://en.wikipedia.org/wiki/Carbon_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `package Sample api;

fn Main() -> i32 {
    Print("Hello, World!");
    return 0;
}`,
        filename: "hello.carbon",
        description: "C++'s modern successor. Google's Carbon aims to be what TypeScript is to JavaScript—gradual evolution with full interop.",
        influences: ["C++", "Rust"],
        influenced: []
    },
    {
        name: "Gleam",
        year: 2016,
        authors: [
            {
                name: "Louis Pilfold",
                org: "",
                bio: "Created Gleam as a type-safe, friendly language for the Erlang VM (BEAM). Inspired by Elm, Rust, and OCaml. Focuses on developer experience with helpful error messages. Compiles to Erlang, runs alongside Elixir. Growing community building for web services and concurrent systems.",
                sources: [
                    { title: "Wikipedia: Gleam (programming language)", url: "https://en.wikipedia.org/wiki/Gleam_(programming_language)", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `import gleam/io

pub fn main() {
  io.println("Hello, World!")
}`,
        filename: "hello.gleam",
        description: "Type safety meets Erlang. Gleam brings friendly functional programming to the battle-tested BEAM VM.",
        influences: ["Elm", "Erlang", "Rust"],
        influenced: []
    },
    {
        name: "Roc",
        year: 2020,
        authors: [
            {
                name: "Richard Feldman",
                org: "",
                bio: "Elm core team member and author of 'Elm in Action' who created Roc as a fast, friendly, functional language; he later joined Zed Industries. Focuses on immediate feedback and beginner-friendliness while maintaining performance. Compiles ahead-of-time, targets WebAssembly and native. Influenced by Elm's philosophy but designed for broader use cases including servers and CLIs.",
                sources: [
                    { title: "Roc official site", url: "https://www.roc-lang.org/", type: "official" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `app "hello"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/download/0.7.0/bkGby8jb0tmZYsy2hg1E_B2QrCgcSTxdUlHtETwm5m4.tar.br" }
    imports [pf.Stdout]
    provides [main] to pf

main =
    Stdout.line "Hello, World!"`,
        filename: "hello.roc",
        description: "Fast, friendly, functional. Roc takes Elm's philosophy beyond the browser with ahead-of-time compilation and no runtime.",
        influences: ["Elm", "ML"],
        influenced: []
    },
    {
        name: "Bend",
        year: 2024,
        authors: [
            {
                name: "Victor Taelin",
                org: "Higher Order Company",
                bio: "Brazilian programmer who founded the Higher Order Company and created Bend, a high-level language released in 2024 that runs massively parallel programs on GPUs and CPUs without explicit threading. Bend is powered by his HVM2 runtime, an interaction-combinator evaluator.",
                sources: [
                    { title: "Bend (Higher Order Company)", url: "https://github.com/HigherOrderCO/Bend", type: "official" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `def main():
  return "Hello, World!"`,
        filename: "hello.bend",
        description: "Massively parallel functional. Bend automatically runs on GPUs with thousands of cores—write pure functions, get parallelism free.",
        influences: ["Haskell"],
        influenced: []
    },
    {
        name: "Odin",
        year: 2016,
        authors: [
            {
                name: "Ginger Bill",
                org: "",
                bio: "Created Odin as a better alternative to C for game development and systems programming. Focuses on joy of programming, simplicity, and high performance. No hidden control flow, explicit is better than implicit. Growing community in game development. Bill also maintains popular tutorials and articles on systems programming.",
                sources: [
                    { title: "Odin official site", url: "https://odin-lang.org/", type: "official" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `package main

import "core:fmt"

main :: proc() {
    fmt.println("Hello, World!")
}`,
        filename: "hello.odin",
        description: "Joy in systems programming. Odin reimagines C with modern features while keeping the metal close, beloved by game developers.",
        influences: ["C", "Go"],
        influenced: []
    },
    {
        name: "Unison",
        year: 2019,
        authors: [
            {
                name: "Paul Chiusano",
                org: "Unison Computing",
                bio: "Co-founded Unison Computing, the public-benefit corporation behind the Unison language, whose distinguishing feature is content-addressed code identified by the hash of its syntax tree. He is also co-author, with Rúnar Bjarnason, of the book Functional Programming in Scala.",
                sources: [
                    { title: "Unison Computing", url: "https://www.unison-lang.org/unison-computing/", type: "official" }
                ]
            },
            {
                name: "Rúnar Bjarnason",
                org: "Unison Computing",
                bio: "Co-founded Unison Computing, the public-benefit corporation that develops the Unison language and its content-addressed approach to code. He is also co-author, with Paul Chiusano, of the book Functional Programming in Scala.",
                sources: [
                    { title: "Unison Computing", url: "https://www.unison-lang.org/unison-computing/", type: "official" }
                ]
            },
            {
                name: "Arya Irani",
                org: "Unison Computing",
                bio: "Co-founded Unison Computing, the public-benefit corporation behind the Unison programming language, which stores and identifies code by content hash to enable effortless code sharing and append-only codebases.",
                sources: [
                    { title: "Unison Computing", url: "https://www.unison-lang.org/unison-computing/", type: "official" }
                ]
            }
        ],
        tags: ["compiled", "functional"],
        code: `main : '{IO, Exception} ()
main _ = printLine "Hello, World!"`,
        filename: "hello.u",
        description: "Content-addressed revolution. Unison identifies code by hash, not location—refactor fearlessly, distribute effortlessly.",
        influences: ["Haskell", "Elm"],
        influenced: []
    },
    {
        name: "PL/I",
        year: 1964,
        authors: [
            {
                name: "George Radin",
                org: "IBM",
                bio: "IBM member of the joint IBM–SHARE committee that designed PL/I, which first appeared in 1964 as an attempt to unify scientific, business, and systems programming in one language. He co-authored the early defining paper and later documented the language's origins in 'The Early History and Characteristics of PL/I' (1978).",
                sources: [
                    { title: "Wikipedia: PL/I", url: "https://en.wikipedia.org/wiki/PL/I", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "system"],
        code: `Hello: procedure options (main);
  put list ('Hello, World!');
end Hello;`,
        filename: "hello.pli",
        description: "The grand unifier. PL/I tried to be everything to everyone—merging Fortran's math and COBOL's business roots—and pioneered exceptions and pointers along the way.",
        influences: ["Fortran", "COBOL", "ALGOL"],
        influenced: ["C", "Pascal"]
    },
    {
        name: "Solidity",
        year: 2014,
        authors: [
            {
                name: "Gavin Wood",
                org: "Ethereum Foundation",
                bio: "Proposed Solidity in 2014 while serving as the Ethereum Foundation's first chief technology officer, having co-founded Ethereum and authored its Yellow Paper defining the Ethereum Virtual Machine. After leaving in 2016 he founded Parity Technologies and the Web3 Foundation, and created the Polkadot network.",
                sources: [
                    { title: "Wikipedia: Gavin Wood", url: "https://en.wikipedia.org/wiki/Gavin_Wood", type: "encyclopedia" }
                ]
            },
            {
                name: "Christian Reitwiessner",
                org: "Ethereum Foundation",
                bio: "Led the Ethereum project's Solidity team as the language's lead implementer, building out the contract-oriented language for the Ethereum Virtual Machine after Gavin Wood proposed it in 2014. Solidity became the dominant language for writing Ethereum smart contracts.",
                sources: [
                    { title: "Wikipedia: Solidity", url: "https://en.wikipedia.org/wiki/Solidity", type: "encyclopedia" }
                ]
            }
        ],
        tags: ["compiled", "oop"],
        code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    function greet() public pure returns (string memory) {
        return "Hello, World!";
    }
}`,
        filename: "HelloWorld.sol",
        description: "Code as contract. Solidity put programs on the blockchain, where a Hello World is a deployed, immutable contract rather than a line of output.",
        influences: ["JavaScript", "C++", "Python"],
        influenced: []
    }
];
