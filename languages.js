const languages = [
    {
        name: "Python",
        year: 1991,
        authors: [{
            name: "Guido van Rossum",
            bio: "Dutch programmer who created Python while working at CWI in the Netherlands. Named after Monty Python's Flying Circus, he aimed to create a language emphasizing code readability. Served as Python's 'Benevolent Dictator For Life' until 2018, now works at Microsoft."
        }],
        tags: ["interpreted", "oop", "functional"],
        code: `print("Hello, World!")`,
        filename: "hello.py",
        description: "Python's elegant syntax makes the classic greeting refreshingly simple—just a single line that embodies its philosophy of readability.",
        influences: ["ABC", "Modula-3", "C"],
        influenced: ["Ruby", "Swift", "Go", "Julia", "Nim"]
    },
    {
        name: "JavaScript",
        year: 1995,
        authors: [{
            name: "Brendan Eich",
            bio: "Created JavaScript in just 10 days at Netscape in May 1995, originally calling it Mocha, then LiveScript. Despite the rushed development, it became the language of the web. Co-founded Mozilla and served as CEO until 2014, later founding Brave Software."
        }],
        tags: ["interpreted", "web", "oop", "functional"],
        code: `console.log("Hello, World!");`,
        filename: "hello.js",
        description: "The language of the web speaks its first words through the console, a gateway to interactive experiences across billions of devices.",
        influences: ["Scheme", "Self", "Java"],
        influenced: ["TypeScript", "Dart"]
    },
    {
        name: "C",
        year: 1972,
        authors: [{
            name: "Dennis Ritchie",
            bio: "Created C at Bell Labs while working on Unix. His work fundamentally shaped modern computing—C became the foundation for countless languages and operating systems. Received the Turing Award in 1983 alongside Ken Thompson. Passed away in 2011, one week after Steve Jobs."
        }],
        tags: ["compiled", "system"],
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        filename: "hello.c",
        description: "The grandfather of modern programming. C's verbose ceremony teaches us that every greeting requires proper structure and explicit intention.",
        influences: ["BCPL", "B", "Assembly"],
        influenced: ["C++", "Objective-C", "Java", "Go", "Rust", "JavaScript", "PHP", "Perl", "Python"]
    },
    {
        name: "C++",
        year: 1985,
        authors: [{
            name: "Bjarne Stroustrup",
            bio: "Danish computer scientist who created C++ at Bell Labs as 'C with Classes.' Wanted to combine the efficiency of C with object-oriented features. Still actively involved in C++ evolution, working at Morgan Stanley and Columbia University. Author of 'The C++ Programming Language.'"
        }],
        tags: ["compiled", "oop", "system"],
        code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
        filename: "hello.cpp",
        description: "Building on C's foundation, C++ streams its greeting with object-oriented elegance, showcasing the power of abstraction.",
        influences: ["C", "Simula"],
        influenced: ["Java", "Rust", "Zig"]
    },
    {
        name: "Java",
        year: 1995,
        authors: [{
            name: "James Gosling",
            bio: "Canadian computer scientist known as 'Dr. Java.' Created Java at Sun Microsystems, originally called Oak and intended for interactive television. The 'write once, run anywhere' philosophy revolutionized cross-platform development. Now works at Amazon Web Services after stints at Google and Oracle."
        }],
        tags: ["compiled", "oop"],
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        filename: "HelloWorld.java",
        description: "Java's verbosity is deliberate—every greeting exists within a class, teaching the fundamentals of object-oriented design from day one.",
        influences: ["C++", "Smalltalk", "Objective-C", "Modula-3"],
        influenced: ["Kotlin", "Scala", "Dart"]
    },
    {
        name: "Rust",
        year: 2010,
        authors: [{
            name: "Graydon Hoare",
            bio: "Created Rust as a personal project in 2006, later sponsored by Mozilla. Aimed to solve memory safety issues in systems programming without garbage collection. Left the Rust project in 2013 but the language has flourished, becoming one of the most loved languages among developers."
        }],
        tags: ["compiled", "system"],
        code: `fn main() {
    println!("Hello, World!");
}`,
        filename: "hello.rs",
        description: "Modern systems programming with memory safety. Rust's greeting is terse yet powerful, backed by compile-time guarantees.",
        influences: ["C++", "ML", "Haskell"],
        influenced: ["Swift", "Zig"]
    },
    {
        name: "Go",
        year: 2009,
        authors: [
            {
                name: "Robert Griesemer, Rob Pike, Ken Thompson",
                bio: "Created at Google by a legendary team: Griesemer (V8, Java HotSpot), Pike (Unix, UTF-8), and Thompson (Unix, C, B). Designed to solve Google's scale problems with a simple, fast, concurrent language. Thompson also co-created Unix and won the Turing Award."
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
        influences: ["C", "Pascal"],
        influenced: ["V", "Zig"]
    },
    {
        name: "Ruby",
        year: 1995,
        authors: [{
            name: "Yukihiro Matsumoto (Matz)",
            bio: "Japanese computer scientist who created Ruby to emphasize programmer happiness over machine efficiency. Drew inspiration from Perl, Smalltalk, and Lisp to create a purely object-oriented language. Still actively leads Ruby development and advocates for developer joy in programming."
        }],
        tags: ["interpreted", "oop"],
        code: `puts "Hello, World!"`,
        filename: "hello.rb",
        description: "Designed for programmer happiness, Ruby's greeting reads like poetry—minimal syntax, maximum expressiveness.",
        influences: ["Perl", "Smalltalk", "Lisp", "Python"],
        influenced: ["Elixir", "Crystal", "Swift"]
    },
    {
        name: "PHP",
        year: 1995,
        authors: [{
            name: "Rasmus Lerdorf",
            bio: "Danish-Canadian programmer who created PHP (Personal Home Page Tools) to maintain his personal homepage. Never intended to create a programming language—it evolved organically as a template system. PHP now powers over 75% of websites including Facebook and WordPress."
        }],
        tags: ["interpreted", "web"],
        code: `<?php
echo "Hello, World!";
?>`,
        filename: "hello.php",
        description: "Born for the web, PHP wraps its greeting in tags, a reminder of its roots in dynamic server-side content generation.",
        influences: ["C", "Perl"],
        influenced: []
    },
    {
        name: "Swift",
        year: 2014,
        authors: [{
            name: "Chris Lattner",
            bio: "Created Swift at Apple while also developing LLVM compiler infrastructure. Designed to be a safer, faster replacement for Objective-C with modern language features. Left Apple in 2017 for Tesla, then Google, now at SiFive. Swift is now open source and runs on Linux."
        }],
        tags: ["compiled", "oop"],
        code: `print("Hello, World!")`,
        filename: "hello.swift",
        description: "Apple's modern language combines safety with simplicity. Swift's greeting is as clean as its emoji-friendly variable names.",
        influences: ["Objective-C", "Rust", "Haskell", "Ruby", "Python"],
        influenced: []
    },
    {
        name: "Kotlin",
        year: 2011,
        authors: [{
            name: "JetBrains Team",
            bio: "Developed by JetBrains (creators of IntelliJ IDEA) to address Java's verbosity while maintaining full Java interoperability. Named after Kotlin Island near St. Petersburg. Google made it an official Android language in 2017, giving it mainstream adoption."
        }],
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
        authors: [{
            name: "Anders Hejlsberg",
            bio: "Danish software engineer, the original author of Turbo Pascal and lead architect of C# and .NET Framework at Microsoft. Created TypeScript to bring static typing to JavaScript for large-scale application development. TypeScript is now the foundation of Angular and widely used in React."
        }],
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
        authors: [{
            name: "Committee (Simon Peyton Jones, Paul Hudak, et al.)",
            bio: "Named after logician Haskell Curry, created by a committee to consolidate functional programming research. Simon Peyton Jones at Microsoft Research has been the primary driving force. Haskell pioneered lazy evaluation and pure functional programming concepts."
        }],
        tags: ["compiled", "functional"],
        code: `main :: IO ()
main = putStrLn "Hello, World!"`,
        filename: "hello.hs",
        description: "Pure functional programming greets through monadic IO actions—even 'Hello, World!' is a mathematical transformation.",
        influences: ["ML", "Miranda"],
        influenced: ["Rust", "Swift", "F#"]
    },
    {
        name: "Lisp",
        year: 1958,
        authors: [{
            name: "John McCarthy",
            bio: "American computer scientist who coined the term 'artificial intelligence' and created Lisp while at MIT. Received the Turing Award in 1971. Lisp introduced groundbreaking concepts like garbage collection, tree data structures, and treating code as data. Passed away in 2011."
        }],
        tags: ["interpreted", "functional"],
        code: `(print "Hello, World!")`,
        filename: "hello.lisp",
        description: "The second-oldest high-level language speaks in parentheses. Every greeting is a list, every list a possibility.",
        influences: ["Fortran"],
        influenced: ["Scheme", "Clojure", "JavaScript", "Ruby", "Nim"]
    },
    {
        name: "Scheme",
        year: 1975,
        authors: [{
            name: "Guy L. Steele and Gerald Jay Sussman",
            bio: "Created at MIT as a minimalist Lisp dialect. Sussman co-authored 'Structure and Interpretation of Computer Programs' (SICP), one of the most influential CS textbooks. Steele went on to help design Java and Common Lisp. Scheme influenced JavaScript's functional features."
        }],
        tags: ["interpreted", "functional"],
        code: `(display "Hello, World!")
(newline)`,
        filename: "hello.scm",
        description: "A minimal Lisp dialect that proves simple can be powerful. Scheme greets with elegant s-expressions.",
        influences: ["Lisp"],
        influenced: ["JavaScript", "Ruby", "Clojure"]
    },
    {
        name: "Clojure",
        year: 2007,
        authors: [{
            name: "Rich Hickey",
            bio: "Created Clojure after years of frustration with mutable state in C++/Java. Wanted a Lisp for the JVM with immutability by default. Spent two years of savings to develop Clojure full-time. Known for thoughtful talks on software design and simplicity."
        }],
        tags: ["compiled", "functional"],
        code: `(println "Hello, World!")`,
        filename: "hello.clj",
        description: "A modern Lisp for the JVM. Clojure brings functional programming and immutability to enterprise systems.",
        influences: ["Lisp", "Scheme", "ML"],
        influenced: []
    },
    {
        name: "Elixir",
        year: 2011,
        authors: [{
            name: "José Valim",
            bio: "Brazilian programmer and Rails core team member who created Elixir to bring better tooling and a friendlier syntax to the Erlang VM. Wanted the productivity of Ruby with Erlang's concurrency model. Elixir has become popular for web development and real-time systems."
        }],
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
        authors: [{
            name: "Joe Armstrong, Robert Virding, Mike Williams",
            bio: "Created at Ericsson for telecom switches that needed to run without interruption. Armstrong championed functional programming and the 'let it crash' philosophy. Erlang powers systems requiring extreme reliability like WhatsApp and RabbitMQ. Armstrong passed away in 2019."
        }],
        tags: ["compiled", "functional"],
        code: `-module(hello).
-export([world/0]).

world() -> io:fwrite("Hello, World!~n").`,
        filename: "hello.erl",
        description: "Designed for telecom systems, Erlang's greeting comes with built-in concurrency and fault tolerance.",
        influences: ["Prolog"],
        influenced: ["Elixir"]
    },
    {
        name: "Scala",
        year: 2003,
        authors: [{
            name: "Martin Odersky",
            bio: "German computer scientist who previously worked on Generic Java and javac compiler. Created Scala to unify object-oriented and functional programming on the JVM. Founded Lightbend (formerly Typesafe) to support Scala commercially. Now professor at EPFL in Switzerland."
        }],
        tags: ["compiled", "oop", "functional"],
        code: `object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}`,
        filename: "hello.scala",
        description: "Functional and object-oriented fusion on the JVM. Scala greets with the flexibility of multiple paradigms.",
        influences: ["Java", "Haskell", "ML"],
        influenced: ["Kotlin"]
    },
    {
        name: "Perl",
        year: 1987,
        authors: [{
            name: "Larry Wall",
            bio: "Created Perl while working as a systems administrator at NASA's Jet Propulsion Laboratory. Designed to make easy things easy and hard things possible. Known for the motto 'There's more than one way to do it.' Also a linguist who brought linguistic principles to language design."
        }],
        tags: ["interpreted"],
        code: `print "Hello, World!\\n";`,
        filename: "hello.pl",
        description: "The duct tape of the internet. Perl's greeting is terse, practical, and reveals none of its text-processing power.",
        influences: ["C"],
        influenced: ["PHP", "Python", "Ruby", "JavaScript"]
    },
    {
        name: "R",
        year: 1993,
        authors: [{
            name: "Ross Ihaka and Robert Gentleman",
            bio: "Two statisticians at the University of Auckland, New Zealand, who created R as a free alternative to S language. Named R after their first names. R became the standard for statistical computing and data science, with over 2 million users worldwide."
        }],
        tags: ["interpreted"],
        code: `cat("Hello, World!\\n")`,
        filename: "hello.r",
        description: "The statistician's language. R greets before diving into data visualization and statistical computing.",
        influences: ["Scheme"],
        influenced: ["Julia"]
    },
    {
        name: "MATLAB",
        year: 1984,
        authors: [{
            name: "Cleve Moler",
            bio: "American mathematician and computer programmer, chairman and chief mathematician at MathWorks. Created MATLAB as a teaching tool to give students easy access to LINPACK and EISPACK without learning Fortran. Now the standard in engineering and scientific computing."
        }],
        tags: ["interpreted"],
        code: `disp('Hello, World!')`,
        filename: "hello.m",
        description: "Engineering and scientific computing speak through matrices. Even 'Hello, World!' is displayed with mathematical precision.",
        influences: ["Fortran"],
        influenced: ["Julia"]
    },
    {
        name: "Julia",
        year: 2012,
        authors: [{
            name: "Jeff Bezanson, Stefan Karpinski, Viral B. Shah, Alan Edelman",
            bio: "Created by four MIT researchers frustrated with the two-language problem: prototype in Python/MATLAB, then rewrite in C/Fortran for speed. Julia aims to be as fast as C while as easy as Python. Increasingly popular in scientific computing and machine learning."
        }],
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
        authors: [{
            name: "John Backus (IBM Team)",
            bio: "Led the IBM team that created Fortran (FORmula TRANslation), the first high-level programming language. Received the Turing Award in 1977. Backus later created BNF (Backus-Naur Form) notation. Fortran revolutionized computing by proving high-level languages could match assembly in speed."
        }],
        tags: ["compiled"],
        code: `program hello
    print *, "Hello, World!"
end program hello`,
        filename: "hello.f90",
        description: "The original high-level language. Fortran pioneered programming itself, and its greeting echoes through decades of scientific computing.",
        influences: ["Assembly"],
        influenced: ["BASIC", "COBOL", "Lisp", "MATLAB"]
    },
    {
        name: "COBOL",
        year: 1959,
        authors: [{
            name: "Grace Hopper (CODASYL Committee)",
            bio: "Rear Admiral Grace Hopper led the committee that created COBOL for business data processing. Pioneer who created the first compiler and coined the term 'debugging' after finding a moth in a computer. COBOL still processes an estimated 43% of banking systems today."
        }],
        tags: ["compiled"],
        code: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY 'Hello, World!'.
    STOP RUN.`,
        filename: "hello.cob",
        description: "Business computing's backbone. COBOL's verbose greeting reflects an era when code was meant to read like English.",
        influences: ["Fortran"],
        influenced: []
    },
    {
        name: "Assembly",
        year: 1949,
        authors: [{
            name: "Various (Early Computing Pioneers)",
            bio: "Assembly languages emerged in the late 1940s as symbolic alternatives to raw machine code. Early assemblers included those for EDSAC (1949) and UNIVAC (1951). Each computer architecture has its own assembly language. Assembly was the primary programming method before Fortran."
        }],
        tags: ["compiled", "system"],
        code: `; Early-style assembly (conceptual)
        LOAD  HELLO
        PRINT
        HALT
HELLO:  "Hello, World!"`,
        filename: "hello.asm",
        description: "The original human-readable programming. Assembly languages preceded all high-level languages, making programming accessible beyond raw binary.",
        influences: [],
        influenced: ["Fortran", "BCPL", "B", "C"]
    },
    {
        name: "x86 Assembly",
        year: 1978,
        authors: [{
            name: "Intel",
            bio: "Intel's x86 assembly language emerged with the 8086 processor in 1978. Became the dominant PC architecture through IBM PC (1981) and continues today as x86-64. Complex Instruction Set Computing (CISC) with variable-length instructions. Powers most desktop and server computers."
        }],
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
        authors: [{
            name: "MOS Technology (Chuck Peddle, Bill Mensch)",
            bio: "The 6502 processor and its assembly language powered the personal computer revolution. Used in the Apple II, Commodore 64, Atari 2600, and Nintendo Entertainment System. Known for its elegant design and affordability. Taught programming to a generation through home computers."
        }],
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
        authors: [{
            name: "Acorn Computers (Sophie Wilson, Steve Furber)",
            bio: "ARM (Acorn RISC Machine) was created for the BBC Micro successor. Sophie Wilson designed the instruction set with elegant simplicity. Now the world's most-used processor architecture, powering billions of smartphones, tablets, and embedded devices. Apple's M-series chips are ARM-based."
        }],
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
        authors: [{
            name: "MIPS Technologies (John L. Hennessy)",
            bio: "MIPS (Microprocessor without Interlocked Pipeline Stages) pioneered RISC architecture. Created by John Hennessy at Stanford, who later became university president and received the Turing Award. Widely used in education to teach computer architecture. Powered PlayStation 1, 2, and Nintendo 64."
        }],
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
        influenced: []
    },
    {
        name: "RISC-V Assembly",
        year: 2010,
        authors: [{
            name: "UC Berkeley (Krste Asanović, Yunsup Lee, Andrew Waterman, David Patterson)",
            bio: "Created at UC Berkeley as an open-source instruction set architecture. David Patterson (co-author of 'Computer Architecture' and Turing Award winner) led the effort. Designed to be free, simple, and extensible. Growing rapidly in academia and industry as an alternative to proprietary architectures."
        }],
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
        authors: [{
            name: "Brian Fox",
            bio: "Created Bash (Bourne Again Shell) as a free software replacement for the Bourne shell. Developed for the GNU Project while working at the Free Software Foundation. Bash became the default shell for most Linux distributions and macOS (until recently)."
        }],
        tags: ["interpreted"],
        code: `#!/bin/bash
echo "Hello, World!"`,
        filename: "hello.sh",
        description: "The Unix shell's automation language. Bash greets with the simplicity that powers countless DevOps workflows.",
        influences: ["C"],
        influenced: ["PowerShell"]
    },
    {
        name: "PowerShell",
        year: 2006,
        authors: [{
            name: "Jeffrey Snover",
            bio: "Microsoft architect who created PowerShell to bring powerful automation to Windows. Based on .NET framework with an object-oriented pipeline, unlike text-based Unix shells. PowerShell is now open-source and runs on Linux and macOS."
        }],
        tags: ["interpreted"],
        code: `Write-Host "Hello, World!"`,
        filename: "hello.ps1",
        description: "Windows automation meets object-oriented pipelines. PowerShell's greeting is an object, not just text.",
        influences: ["Bash", "Perl"],
        influenced: []
    },
    {
        name: "Lua",
        year: 1993,
        authors: [{
            name: "Roberto Ierusalimschy, Luiz Henrique de Figueiredo, Waldemar Celes",
            bio: "Created at the Pontifical Catholic University of Rio de Janeiro, Brazil. Designed to be embedded in other applications. Named after the Portuguese word for 'moon.' Powers game engines like World of Warcraft and Roblox, and network equipment."
        }],
        tags: ["interpreted"],
        code: `print("Hello, World!")`,
        filename: "hello.lua",
        description: "The embedded scripting language of choice. Lua's lightweight greeting powers game engines and embedded systems worldwide.",
        influences: ["Scheme", "Self"],
        influenced: []
    },
    {
        name: "Dart",
        year: 2011,
        authors: [{
            name: "Lars Bak and Kasper Lund (Google)",
            bio: "Created at Google initially as a JavaScript replacement for web apps. Gained new life as the language for Flutter, Google's UI framework. Lars Bak previously created V8 (Chrome's JavaScript engine) and HotSpot (Java VM)."
        }],
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
        authors: [{
            name: "Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy",
            bio: "Developed at INRIA, France, extending the Caml language. Combined functional programming with object-oriented features and an advanced type system. Used internally at Jane Street, Facebook (for Hack and Flow), and in academic research."
        }],
        tags: ["compiled", "functional", "oop"],
        code: `print_endline "Hello, World!";;`,
        filename: "hello.ml",
        description: "Industrial-strength functional programming. OCaml combines ML's elegance with practical object-oriented features.",
        influences: ["ML"],
        influenced: ["F#", "Rust"]
    },
    {
        name: "F#",
        year: 2005,
        authors: [{
            name: "Don Syme (Microsoft Research)",
            bio: "Created F# at Microsoft Research Cambridge as a functional-first language for .NET. Also designed generics for .NET and C#. F# brings ML-family functional programming to the .NET ecosystem with excellent interop with C#."
        }],
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
        authors: [{
            name: "Andrew Kelley",
            bio: "Created Zig as a better C, focusing on simplicity, safety, and performance without hidden control flow. Self-funded through donations and sponsorships. Zig aims to be a language for maintaining robust software and is gaining traction in systems programming."
        }],
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
        authors: [{
            name: "Ary Borenszweig, Juan Wajnerman, Brian Cardiff",
            bio: "Created by Argentinian developers who wanted Ruby's syntax with compiled performance. Crystal compiles to native code via LLVM while keeping Ruby-like expressiveness. Developed with open-source community support and Manas.Tech sponsorship."
        }],
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
        authors: [{
            name: "Andreas Rumpf",
            bio: "German programmer who created Nim (originally Nimrod) as an efficient, expressive language compiling to C. Combines Python-like syntax with performance matching C. Developed largely as an open-source project with a passionate community."
        }],
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
        authors: [{
            name: "Alexander Medvednikov",
            bio: "Russian programmer who created V seeking a simple, fast language with very fast compilation times. Initially controversial due to bold performance claims, V is now open-source and developing steadily with a focus on simplicity and safety."
        }],
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
        authors: [{
            name: "Urban Müller",
            bio: "Swiss physics student who created Brainfuck to design the smallest possible compiler. Consists of only 8 commands, making it Turing-complete but deliberately difficult to program in. A parody of minimalist language design."
        }],
        tags: ["esoteric", "interpreted"],
        code: `++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.`,
        filename: "hello.bf",
        description: "The ultimate minimalist language. Brainfuck's greeting is a Turing-complete puzzle with just 8 commands.",
        influences: [],
        influenced: []
    },
    {
        name: "Whitespace",
        year: 2003,
        authors: [{
            name: "Edwin Brady and Chris Morris",
            bio: "Created on April 1st at Durham University as a joke language where only whitespace characters (space, tab, newline) are meaningful. All other characters are ignored. Edwin Brady later created Idris, a dependently-typed programming language."
        }],
        tags: ["esoteric", "interpreted"],
        code: `   \t  \t   \n\t\n     \t\t  \t \t\n\t\n     \t\t \t\t  \n\t\n     \t\t \t\t  \n\t\n     \t\t \t\t\t\t\n\t\n     \t \t\t  \n\t\n     \t     \n\t\n     \t\t\t \t\t\t\n\t\n     \t\t \t\t\t\t\n\t\n     \t\t\t  \t\n\t\n     \t\t \t\t  \n\t\n     \t\t  \t  \n\t\n  \n\n\n`,
        filename: "hello.ws",
        description: "Only whitespace characters are meaningful. The greeting is invisible to the human eye—a meditation on code's essence.",
        influences: [],
        influenced: []
    },
    {
        name: "LOLCODE",
        year: 2007,
        authors: [{
            name: "Adam Lindsay",
            bio: "Created by a researcher at Lancaster University as a parody based on lolcat memes. Designed to make programming deliberately humorous with keywords like HAI, KTHXBYE, and VISIBLE. Shows that programming languages can be fun and creative."
        }],
        tags: ["esoteric", "interpreted"],
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
        authors: [{
            name: "Jon Åslund and Karl Hasselström",
            bio: "Created by two students at Göteborg University, Sweden, as a language where programs are Shakespearean plays. Characters are variables, dialogue assigns values, and scenes organize code. A brilliant example of creative language design."
        }],
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
        authors: [{
            name: "David Morgan-Mar",
            bio: "Australian programmer who created Piet, named after artist Piet Mondrian. Programs are bitmap images where colors encode instructions. Also created Chef (recipes as programs) and other esoteric languages. Shows programming can be visual art."
        }],
        tags: ["esoteric"],
        code: `[Note: Piet programs are images. This would be a colorful bitmap image that outputs "Hello, World!" when interpreted as pixel color transitions.]`,
        filename: "hello.png",
        description: "Programs are abstract art. Piet's greeting is a painting where color blocks and transitions encode computation.",
        influences: [],
        influenced: []
    },
    {
        name: "HTML",
        year: 1993,
        authors: [{
            name: "Tim Berners-Lee",
            bio: "British scientist who invented the World Wide Web while at CERN. Created HTML, HTTP, and the first web browser. Knighted in 2004, received the Turing Award in 2016. Now director of the W3C, advocating for an open web."
        }],
        tags: ["web"],
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Hello, World!</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
        filename: "hello.html",
        description: "The markup language that built the web. HTML's greeting is structured, semantic, and rendered in browsers worldwide.",
        influences: [],
        influenced: []
    },
    {
        name: "CSS",
        year: 1996,
        authors: [{
            name: "Håkon Wium Lie",
            bio: "Norwegian web pioneer who proposed CSS while working at CERN with Tim Berners-Lee. Wanted to separate content from presentation. Co-developed CSS with Bert Bos. Later became CTO of Opera Software. CSS revolutionized web design."
        }],
        tags: ["web"],
        code: `body::before {
    content: "Hello, World!";
    font-size: 2em;
    font-weight: bold;
}`,
        filename: "hello.css",
        description: "Style as substance. CSS can greet through generated content, proving that presentation languages have voice too.",
        influences: [],
        influenced: []
    },
    {
        name: "SQL",
        year: 1974,
        authors: [{
            name: "Donald D. Chamberlin and Raymond F. Boyce",
            bio: "Created SEQUEL (later SQL) at IBM after learning about Codd's relational model. Boyce passed away in 1974 before SQL's full release. Chamberlin continued development. SQL became the standard database query language, used by billions of applications."
        }],
        tags: ["interpreted"],
        code: `SELECT 'Hello, World!' AS greeting;`,
        filename: "hello.sql",
        description: "The language of data queries. SQL greets by selecting a string, hinting at the relational power beneath.",
        influences: [],
        influenced: []
    },
    {
        name: "Prolog",
        year: 1972,
        authors: [{
            name: "Alain Colmerauer and Robert Kowalski",
            bio: "Developed in Marseille, France (Colmerauer) and Edinburgh, UK (Kowalski). First logic programming language, based on formal logic and automated theorem proving. Used in AI, natural language processing, and expert systems. Influenced modern AI and knowledge representation."
        }],
        tags: ["interpreted", "functional"],
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
        authors: [{
            name: "Jean Ichbiah (Honeywell-Bull)",
            bio: "Led the team that designed Ada under a U.S. Department of Defense contract. Named after Ada Lovelace, the first computer programmer. Designed for safety-critical systems in defense and aerospace. Still used in aviation, space, and transportation systems."
        }],
        tags: ["compiled"],
        code: `with Ada.Text_IO; use Ada.Text_IO;

procedure Hello is
begin
   Put_Line("Hello, World!");
end Hello;`,
        filename: "hello.adb",
        description: "Named after Ada Lovelace, designed for safety-critical systems. Its greeting is formal, typed, and reliable.",
        influences: ["Pascal"],
        influenced: []
    },
    {
        name: "Pascal",
        year: 1970,
        authors: [{
            name: "Niklaus Wirth",
            bio: "Swiss computer scientist who created Pascal to teach structured programming. Named after mathematician Blaise Pascal. Received the Turing Award in 1984. Also created Modula-2 and Oberon. Pascal became the teaching language of a generation."
        }],
        tags: ["compiled"],
        code: `program HelloWorld;
begin
  writeln('Hello, World!');
end.`,
        filename: "hello.pas",
        description: "Designed for teaching structured programming. Pascal's greeting is educational, clear, and historically significant.",
        influences: [],
        influenced: ["Ada", "Go"]
    },
    {
        name: "Objective-C",
        year: 1984,
        authors: [{
            name: "Brad Cox and Tom Love",
            bio: "Created at their company Stepstone to add Smalltalk-style messaging to C. Licensed by NeXT (Steve Jobs' company), then became Apple's primary language. Powered iOS and macOS development until Swift. Cox pioneered software component marketplaces."
        }],
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
        authors: [{
            name: "Alan Kay, Dan Ingalls, Adele Goldberg (Xerox PARC)",
            bio: "Revolutionary language created at Xerox PARC that pioneered the graphical user interface and object-oriented programming. Alan Kay coined the term 'object-oriented' and received the Turing Award in 2003. Influenced nearly every modern OOP language."
        }],
        tags: ["interpreted", "oop"],
        code: `Transcript show: 'Hello, World!'; cr.`,
        filename: "hello.st",
        description: "Everything is an object, everything is a message. Smalltalk revolutionized OOP and greets through its transcript.",
        influences: ["Simula"],
        influenced: ["Objective-C", "Ruby", "Python", "Java"]
    },
    {
        name: "BASIC",
        year: 1964,
        authors: [{
            name: "John G. Kemeny and Thomas E. Kurtz",
            bio: "Created at Dartmouth College to make computing accessible to non-science students. Kemeny later became Dartmouth's president. BASIC was free and easy to learn, bringing programming to millions. Influenced early microcomputer era and inspired Visual Basic."
        }],
        tags: ["interpreted"],
        code: `10 PRINT "Hello, World!"
20 END`,
        filename: "hello.bas",
        description: "Beginner's All-purpose Symbolic Instruction Code. BASIC made programming accessible to millions with line-numbered simplicity.",
        influences: ["Fortran"],
        influenced: []
    },
    {
        name: "Simula",
        year: 1967,
        authors: [{
            name: "Ole-Johan Dahl and Kristen Nygaard",
            bio: "Norwegian computer scientists who created the first object-oriented programming language at the Norwegian Computing Center. Introduced concepts of classes and objects. Both received the Turing Award in 2001 for pioneering OOP. Simula laid the foundation for all modern OOP languages."
        }],
        tags: ["compiled", "oop"],
        code: `Begin
   OutText("Hello, World!");
   OutImage;
End;`,
        filename: "hello.sim",
        description: "The world's first object-oriented language. Simula pioneered classes and objects, concepts that would reshape all of programming.",
        influences: ["ALGOL"],
        influenced: ["C++", "Smalltalk"]
    },
    {
        name: "B",
        year: 1969,
        authors: [{
            name: "Ken Thompson",
            bio: "Created B at Bell Labs as a simplified version of BCPL for the PDP-7 computer. Co-creator of Unix with Dennis Ritchie. Also created the UTF-8 encoding and the Go language (with others). Received the Turing Award in 1983. B was the direct predecessor to C."
        }],
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
        influences: ["BCPL"],
        influenced: ["C"]
    },
    {
        name: "BCPL",
        year: 1967,
        authors: [{
            name: "Martin Richards",
            bio: "British computer scientist who created BCPL (Basic Combined Programming Language) at MIT and Cambridge. Designed for writing compilers and operating systems. BCPL introduced the /* */ comment syntax still used today. Richards continued developing BCPL well into the 2000s."
        }],
        tags: ["compiled", "system"],
        code: `GET "libhdr"

LET start() = VALOF
{ writes("Hello, World!*n")
  RESULTIS 0
}`,
        filename: "hello.bcpl",
        description: "The grandfather of C. BCPL's systems programming heritage flows through B and C into countless modern languages.",
        influences: ["Assembly"],
        influenced: ["B", "C"]
    },
    {
        name: "ML",
        year: 1973,
        authors: [{
            name: "Robin Milner",
            bio: "British computer scientist who created ML (Meta Language) at the University of Edinburgh for the LCF theorem prover. Pioneered type inference and polymorphic type systems. Received the Turing Award in 1991. ML's type system influenced countless modern functional languages."
        }],
        tags: ["compiled", "functional"],
        code: `print "Hello, World!\\n";`,
        filename: "hello.ml",
        description: "The ML family introduced type inference and pattern matching. Its influence permeates Haskell, OCaml, F#, Rust, and Swift.",
        influences: ["Lisp"],
        influenced: ["OCaml", "Haskell", "F#", "Rust", "Scala"]
    },
    {
        name: "ABC",
        year: 1987,
        authors: [{
            name: "Leo Geurts, Lambert Meertens, Steven Pemberton",
            bio: "Created at CWI in Amsterdam as a teaching language to replace BASIC. Featured interactive environment and automatic type inference. Designed to be learnable in an evening. Though never widely adopted, ABC's clarity and simplicity directly inspired Guido van Rossum to create Python."
        }],
        tags: ["interpreted"],
        code: `WRITE "Hello, World!" /`,
        filename: "hello.abc",
        description: "Python's spiritual ancestor. ABC's emphasis on readability and simplicity lives on in Python's design philosophy.",
        influences: ["SETL"],
        influenced: ["Python"]
    },
    {
        name: "Modula-3",
        year: 1988,
        authors: [{
            name: "Luca Cardelli, Jim Donahue, Mick Jordan, Bill Kalsow, Greg Nelson",
            bio: "Developed at DEC and Olivetti as a successor to Modula-2. Added garbage collection, exception handling, and object-oriented features. Influenced Python's exception handling, Go's interfaces, and Rust's module system. Used in critical systems at DEC and Olivetti."
        }],
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
        authors: [{
            name: "David Ungar and Randall Smith",
            bio: "Created at Xerox PARC and Stanford as a prototype-based object-oriented language. Eliminated classes in favor of prototype objects. Pioneered JIT compilation techniques used in modern VMs. Directly influenced JavaScript's object model and introduced optimization techniques used in V8 and HotSpot."
        }],
        tags: ["interpreted", "oop"],
        code: `'Hello, World!' printLine.`,
        filename: "hello.self",
        description: "Self's prototype-based inheritance revolutionized object-oriented thinking and gave JavaScript its unique object model.",
        influences: ["Smalltalk"],
        influenced: ["JavaScript", "Lua"]
    },
    {
        name: "C#",
        year: 2000,
        authors: [{
            name: "Anders Hejlsberg",
            bio: "Danish software engineer who also created Turbo Pascal and led development of Delphi before joining Microsoft. Designed C# as part of the .NET initiative, combining the best of C++, Java, and Delphi. Later created TypeScript. One of the most influential language designers of our era."
        }],
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
        influences: ["C++", "Java"],
        influenced: ["TypeScript", "Vala"]
    },
    {
        name: "ALGOL",
        year: 1958,
        authors: [{
            name: "Committee (including John Backus, Peter Naur, et al.)",
            bio: "Created by an international committee to be a universal algorithmic language. Though not widely implemented, ALGOL introduced revolutionary concepts: block structure, lexical scoping, and BNF notation (Backus-Naur Form). Influenced nearly every structured programming language that followed."
        }],
        tags: ["compiled"],
        code: `BEGIN
  print(("Hello, World!"))
END`,
        filename: "hello.algol",
        description: "The language that taught languages how to be structured. ALGOL's influence echoes through Pascal, C, and the entire family of block-structured languages.",
        influences: ["Fortran"],
        influenced: ["Simula", "Pascal", "C", "BCPL"]
    },
    {
        name: "Visual Basic",
        year: 1991,
        authors: [{
            name: "Microsoft (Alan Cooper - original concept)",
            bio: "Alan Cooper created the drag-and-drop form designer, later acquired by Microsoft. Microsoft combined it with BASIC to create Visual Basic, revolutionizing Windows programming. Made GUI development accessible to millions. VB became one of the most popular languages of the 1990s and early 2000s."
        }],
        tags: ["compiled", "oop"],
        code: `Module Program
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module`,
        filename: "hello.vb",
        description: "The language that democratized Windows programming. Visual Basic's drag-and-drop interface made GUI development accessible to millions.",
        influences: ["BASIC"],
        influenced: ["C#", "VBScript"]
    },
    {
        name: "Common Lisp",
        year: 1984,
        authors: [{
            name: "ANSI Committee (Scott Fahlman, Richard Gabriel, Guy Steele, et al.)",
            bio: "Created to unify the many divergent Lisp dialects. Guy Steele (who co-created Scheme and helped design Java) was a key figure. Common Lisp is one of the most powerful and feature-rich languages ever standardized. Still used in AI research, CAD software, and critical systems."
        }],
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
        authors: [{
            name: "Alfred Aho, Peter Weinberger, Brian Kernighan",
            bio: "Created at Bell Labs by three legends: Aho (of compiler design fame), Weinberger (Unix pioneer), and Kernighan (of K&R C and 'Hello, World!'). AWK revolutionized text processing with pattern-action paradigm. The name comes from their initials. Still indispensable for Unix text manipulation."
        }],
        tags: ["interpreted"],
        code: `BEGIN { print "Hello, World!" }`,
        filename: "hello.awk",
        description: "The Unix text processing master. AWK's pattern-action paradigm made complex text transformations simple and elegant.",
        influences: [],
        influenced: ["Perl", "Python"]
    },
    {
        name: "APL",
        year: 1966,
        authors: [{
            name: "Kenneth E. Iverson",
            bio: "Created APL (A Programming Language) while at Harvard, later developed at IBM. Received the Turing Award in 1979. APL's mathematical notation revolutionized array programming. Used a special character set requiring custom keyboards. Influenced modern array languages and spreadsheets."
        }],
        tags: ["interpreted"],
        code: `'Hello, World!'`,
        filename: "hello.apl",
        description: "The mathematical notation made executable. APL's cryptic symbols hide revolutionary array-processing power that influenced spreadsheets and data science.",
        influences: [],
        influenced: ["MATLAB"]
    },
    {
        name: "Forth",
        year: 1970,
        authors: [{
            name: "Charles H. Moore",
            bio: "Created Forth for controlling radio telescopes, later used in space missions including Philae lander. Forth's stack-based design and extensibility made it perfect for embedded systems. Moore championed minimalism and direct hardware access. Forth bootstraps itself, making it ideal for resource-constrained environments."
        }],
        tags: ["compiled", "system"],
        code: `: HELLO  ." Hello, World!" CR ;
HELLO`,
        filename: "hello.fth",
        description: "The space-faring stack language. Forth's minimalist elegance controlled telescopes and spacecraft with kilobytes of memory.",
        influences: [],
        influenced: ["PostScript"]
    },
    {
        name: "Logo",
        year: 1967,
        authors: [{
            name: "Wally Feurzeig, Seymour Papert, Cynthia Solomon",
            bio: "Created at BBN Technologies with Seymour Papert from MIT. Designed to teach children programming through turtle graphics. Papert's educational philosophy emphasized 'learning by doing.' Logo introduced millions of students to programming and computational thinking."
        }],
        tags: ["interpreted"],
        code: `PRINT [Hello, World!]`,
        filename: "hello.logo",
        description: "The turtle that taught generations. Logo made programming visual and accessible, introducing computational thinking to millions of children.",
        influences: ["Lisp"],
        influenced: ["Scratch"]
    },
    {
        name: "Racket",
        year: 1995,
        authors: [{
            name: "Matthias Felleisen, Robert Bruce Findler, Matthew Flatt, Shriram Krishnamurthi",
            bio: "Originally PLT Scheme, renamed Racket in 2010. Created as a platform for language experimentation and education. Includes DrRacket IDE designed for teaching. Used in 'How to Design Programs' textbook. Pioneers language-oriented programming where you create custom languages for specific problems."
        }],
        tags: ["compiled", "functional"],
        code: `#lang racket
(displayln "Hello, World!")`,
        filename: "hello.rkt",
        description: "The language laboratory. Racket makes creating new languages as easy as writing programs, pioneering language-oriented programming.",
        influences: ["Scheme", "Lisp"],
        influenced: []
    },
    {
        name: "Emacs Lisp",
        year: 1985,
        authors: [{
            name: "Richard Stallman",
            bio: "Created Emacs Lisp for the GNU Emacs editor. Stallman founded the Free Software Foundation and launched the GNU Project. Emacs Lisp makes the editor infinitely extensible—it's been called 'an operating system disguised as a text editor.' Millions use Emacs daily, customizing it with Elisp."
        }],
        tags: ["interpreted", "functional"],
        code: `(message "Hello, World!")`,
        filename: "hello.el",
        description: "The editor's soul. Emacs Lisp turns a text editor into an infinitely customizable operating environment, beloved by millions.",
        influences: ["Lisp"],
        influenced: []
    },
    {
        name: "D",
        year: 2001,
        authors: [{
            name: "Walter Bright, Andrei Alexandrescu",
            bio: "Walter Bright (creator of first C++ compiler) designed D as a better C++. Andrei Alexandrescu (author of 'Modern C++ Design') joined later. D aims to combine C++'s power with modern language design: garbage collection, contracts, and metaprogramming. Used in production at companies like Facebook."
        }],
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
        authors: [{
            name: "Facebook (Julien Verlaguet, Alok Menghrajani, et al.)",
            bio: "Created at Facebook to add static typing to PHP while maintaining compatibility. Runs on HHVM (HipHop Virtual Machine). Brought gradual typing and modern language features to PHP developers. Facebook's entire codebase migrated from PHP to Hack. Demonstrates large-scale language evolution."
        }],
        tags: ["interpreted", "web", "oop"],
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
        authors: [{
            name: "James Strachan",
            bio: "Created Groovy to be a dynamic companion to Java, combining Python-like syntax with JVM power. Later acquired by Apache Software Foundation. Groovy powers Gradle (the build tool), Grails (web framework), and Jenkins pipelines. Brings scripting ease to the Java ecosystem."
        }],
        tags: ["compiled", "oop"],
        code: `println "Hello, World!"`,
        filename: "hello.groovy",
        description: "Java's dynamic companion. Groovy brings scripting simplicity to the JVM, powering Gradle and modern build systems.",
        influences: ["Java", "Python", "Ruby"],
        influenced: []
    },
    {
        name: "PostScript",
        year: 1984,
        authors: [{
            name: "John Warnock and Charles Geschke (Adobe)",
            bio: "Created PostScript at Adobe (which they founded). Warnock and Geschke revolutionized desktop publishing—PostScript became the standard for laser printers and professional printing. Turing-complete stack-based language. Led to PDF. Warnock received the Turing Award in 2023."
        }],
        tags: ["interpreted"],
        code: `/Courier findfont 24 scalefont setfont
72 720 moveto
(Hello, World!) show
showpage`,
        filename: "hello.ps",
        description: "The page description revolution. PostScript made desktop publishing possible, turning printers into programmable graphics engines.",
        influences: ["Forth"],
        influenced: []
    },
    {
        name: "SNOBOL",
        year: 1962,
        authors: [{
            name: "Ralph Griswold, David Farber, Ivan Polonsky (Bell Labs)",
            bio: "Created at Bell Labs for string manipulation and pattern matching. SNOBOL introduced powerful pattern-matching decades before regex became common. Griswold later created Icon. SNOBOL4 (1967) became widely used in humanities computing and text processing before Perl dominated."
        }],
        tags: ["interpreted"],
        code: `    OUTPUT = "Hello, World!"
END`,
        filename: "hello.sno",
        description: "The pattern-matching pioneer. SNOBOL brought powerful string processing to computing long before regex became ubiquitous.",
        influences: [],
        influenced: ["Perl"]
    },
    {
        name: "Scratch",
        year: 2003,
        authors: [{
            name: "MIT Media Lab (Mitchel Resnick, et al.)",
            bio: "Created at MIT Media Lab's Lifelong Kindergarten Group. Mitchel Resnick leads the team, continuing Seymour Papert's legacy. Visual blocks instead of text make programming accessible to young children. Over 100 million users worldwide. Inspired countless block-based programming environments."
        }],
        tags: ["interpreted"],
        code: `when green flag clicked
say [Hello, World!]`,
        filename: "hello.sb3",
        description: "Programming for everyone. Scratch's visual blocks teach computational thinking to over 100 million young people worldwide.",
        influences: ["Logo", "Smalltalk"],
        influenced: []
    },
    {
        name: "Tcl",
        year: 1988,
        authors: [{
            name: "John Ousterhout",
            bio: "Created Tcl (Tool Command Language) at UC Berkeley while working on CAD tools. Also created Tk toolkit for GUIs. Tcl's 'everything is a string' philosophy made it simple and embeddable. Later founded Scriptics. Tcl/Tk became the standard for quick GUI development in the 1990s."
        }],
        tags: ["interpreted"],
        code: `puts "Hello, World!"`,
        filename: "hello.tcl",
        description: "The glue language. Tcl's simplicity and Tk toolkit made it the goto for rapid GUI development and tool integration.",
        influences: [],
        influenced: []
    },
    {
        name: "Elm",
        year: 2012,
        authors: [{
            name: "Evan Czaplicki",
            bio: "Created Elm as his thesis project at Harvard. Designed for web frontend development with functional programming and no runtime exceptions. Pioneered The Elm Architecture, which inspired Redux and modern state management. Focuses on developer experience with famously helpful compiler error messages."
        }],
        tags: ["compiled", "functional", "web"],
        code: `module Main exposing (..)
import Html exposing (text)

main =
    text "Hello, World!"`,
        filename: "hello.elm",
        description: "Functional frontend without fear. Elm's architecture and guarantees of no runtime exceptions revolutionized web development thinking.",
        influences: ["Haskell", "ML"],
        influenced: []
    },
    {
        name: "PL/SQL",
        year: 1991,
        authors: [{
            name: "Oracle Corporation",
            bio: "Oracle developed PL/SQL (Procedural Language/SQL) to extend SQL with procedural programming. Tightly integrated with Oracle Database. Allows stored procedures, functions, and triggers written in a block-structured language. Remains the standard for Oracle database programming with millions of enterprise users."
        }],
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
        authors: [{
            name: "David Turner",
            bio: "British computer scientist who created Miranda at the University of Kent. First purely functional lazy language available commercially. Introduced list comprehension syntax now used in Python and Haskell. Miranda's design directly inspired Haskell's creation."
        }],
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
        authors: [{
            name: "Jürg Billeter, Raffaele Sandrini",
            bio: "Created to bring modern language features to GNOME development. Vala looks like C# but compiles to C code using GObject. Allows high-level programming while maintaining C performance and integration. Used in elementary OS and various GNOME applications."
        }],
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
        authors: [{
            name: "Phil Freeman",
            bio: "Created PureScript as a strongly-typed functional language that compiles to JavaScript. Brings Haskell-style purity and type safety to web development. No runtime exceptions, all effects tracked by types. Used for building robust frontend applications with mathematical precision."
        }],
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
        authors: [{
            name: "Edwin Brady",
            bio: "Created Idris with dependent types that allow types to depend on values. Brady also co-created Whitespace esoteric language. Idris proves program correctness at compile time. Used in research and for writing provably correct software. Influenced by his research in type theory."
        }],
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
        authors: [{
            name: "Stephen Wolfram",
            bio: "Created the Wolfram Language (originally Mathematica's language) emphasizing symbolic computation and knowledge-based programming. Wolfram is a physicist, computer scientist, and entrepreneur. The language integrates vast built-in knowledge and algorithms. Used in scientific computing, AI, and education."
        }],
        tags: ["interpreted"],
        code: `Print["Hello, World!"]`,
        filename: "hello.wl",
        description: "Knowledge meets computation. Wolfram Language integrates massive algorithms and data into a symbolic programming paradigm.",
        influences: [],
        influenced: []
    },
    {
        name: "Zsh",
        year: 1990,
        authors: [{
            name: "Paul Falstad",
            bio: "Created Zsh (Z Shell) while a student at Princeton. Named after teaching assistant Zhong Shao. Extended Bash with powerful features: better completion, spelling correction, themes. Became macOS default shell in 2019, replacing Bash. Oh My Zsh framework has millions of users."
        }],
        tags: ["interpreted"],
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
        authors: [{
            name: "Axel Liljencrantz",
            bio: "Created Fish (Friendly Interactive Shell) to be user-friendly by default. Unlike Bash, prioritizes interactive use over scripting. Features autosuggestions, syntax highlighting, and web-based configuration. Philosophy: if a program can do something automatically, it should."
        }],
        tags: ["interpreted"],
        code: `#!/usr/bin/fish
echo "Hello, World!"`,
        filename: "hello.fish",
        description: "The friendly shell. Fish prioritizes interactive user experience with autosuggestions and sane defaults out of the box.",
        influences: ["Bash", "Zsh"],
        influenced: []
    },
    {
        name: "VBScript",
        year: 1996,
        authors: [{
            name: "Microsoft",
            bio: "Created by Microsoft as a lightweight Active Scripting language for Windows. Subset of Visual Basic for scripting tasks. Widely used for Windows administration, ASP web pages, and Internet Explorer. Deprecated in favor of PowerShell but still found in legacy systems."
        }],
        tags: ["interpreted"],
        code: `WScript.Echo "Hello, World!"`,
        filename: "hello.vbs",
        description: "Windows scripting workhorse. VBScript automated Windows administration before PowerShell, still lurking in enterprise systems.",
        influences: ["Visual Basic"],
        influenced: []
    },
    {
        name: "AppleScript",
        year: 1993,
        authors: [{
            name: "Apple Inc.",
            bio: "Created by Apple for automating Mac applications using natural language-like syntax. Designed to be readable by non-programmers. Deeply integrated with macOS, controls applications through Apple Events. Used for workflow automation, system administration, and application integration on Mac."
        }],
        tags: ["compiled"],
        code: `display dialog "Hello, World!"`,
        filename: "hello.applescript",
        description: "Mac automation in English. AppleScript's natural language syntax makes Mac workflow automation accessible to everyone.",
        influences: [],
        influenced: []
    },
    {
        name: "Delphi",
        year: 1995,
        authors: [{
            name: "Anders Hejlsberg (Borland)",
            bio: "Anders Hejlsberg created Delphi (Object Pascal) at Borland before joining Microsoft. Rapid Application Development tool combining visual design with compiled native code. Extremely popular in 1990s-2000s for Windows applications. Hejlsberg later created C# and TypeScript at Microsoft."
        }],
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
        authors: [{
            name: "Macromedia/Adobe",
            bio: "Created for Flash and Flex applications. Based on ECMAScript like JavaScript. ActionScript 3.0 (2006) added strong typing and better performance. Powered interactive web content, games, and rich internet applications. Flash's decline ended ActionScript's dominance, but it shaped early web interactivity."
        }],
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
        authors: [{
            name: "Ralph Griswold",
            bio: "Griswold created Icon after SNOBOL, focusing on string and structure manipulation with generators and goal-directed evaluation. Introduced innovative control structures. Used in text processing, AI, and rapid prototyping. Griswold spent his career at University of Arizona advancing programming language design."
        }],
        tags: ["interpreted"],
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
        authors: [{
            name: "SAS Institute (Anthony Barr, James Goodnight, et al.)",
            bio: "Developed at North Carolina State University, later commercialized by SAS Institute. Designed for statistical analysis and data management. Became the standard in pharmaceutical research, finance, and academics. SAS Institute is one of the largest privately-held software companies."
        }],
        tags: ["interpreted"],
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
        authors: [{
            name: "Cray Inc. (Brad Chamberlain, et al.)",
            bio: "Developed by Cray for productive parallel computing on supercomputers. Designed to make parallel programming easier while maintaining performance. Combines ideas from Fortran, C, and high-level languages. Open-sourced in 2015. Used in high-performance scientific computing."
        }],
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
        authors: [{
            name: "Sylvan Clebsch",
            bio: "Created Pony to solve the problem of safe, efficient concurrent programming. Uses capabilities-based type system for memory safety without garbage collection pauses. Actor-model concurrency. Designed for high-performance while preventing data races at compile time. Open-source and evolving."
        }],
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
        authors: [{
            name: "Chris Pressey",
            bio: "Created Befunge as a two-dimensional esoteric language that's intentionally difficult to compile. Code moves in four directions across a 2D grid. Pressey wanted to create a language as hard to compile as possible. Part of the esoteric language movement exploring unusual computation models."
        }],
        tags: ["esoteric", "interpreted"],
        code: `"!dlroW ,olleH">:#,_@`,
        filename: "hello.bf93",
        description: "Code in two dimensions. Befunge executes by moving through a 2D grid, making it beautifully bizarre and compiler-hostile.",
        influences: [],
        influenced: []
    },
    {
        name: "Malbolge",
        year: 1998,
        authors: [{
            name: "Ben Olmstead",
            bio: "Created Malbolge (named after Dante's eighth circle of hell) to be the most difficult programming language possible. Self-modifying code, encryption, and base-3 arithmetic make it nearly impossible to write. First Hello World program took two years to create (found by a search algorithm). Pushing limits of obscurity."
        }],
        tags: ["esoteric", "interpreted"],
        code: `(=<\`#9]~6ZY32Vx/4Rs+0No-&Jk)"Fh}|Bcy?\`=*z]Kw%oG4UUS0/@-ejc(:'8dc`,
        filename: "hello.mal",
        description: "Dante's programming inferno. Malbolge is intentionally the hardest language—the first Hello World took two years to create.",
        influences: [],
        influenced: []
    },
    {
        name: "Chicken",
        year: 2002,
        authors: [{
            name: "Torbjörn Söderstedt",
            bio: "Created the Chicken language where the only valid keyword is 'chicken'. Number of 'chicken's and punctuation determine the operation. A brilliant parody of programming language minimalism. Demonstrates that syntax is just convention—computation can happen with any symbols."
        }],
        tags: ["esoteric", "interpreted"],
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
        authors: [{
            name: "Bertrand Meyer",
            bio: "French computer scientist who created Eiffel with design-by-contract as a core principle. Meyer championed software engineering rigor and formal methods. Eiffel introduced contracts (preconditions, postconditions, invariants) that influenced Java, C#, and modern type systems. Meyer also wrote 'Object-Oriented Software Construction.'"
        }],
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
        name: "TeX",
        year: 1978,
        authors: [{
            name: "Donald Knuth",
            bio: "Legendary computer scientist who created TeX while frustrated with the typesetting of his books. Author of 'The Art of Computer Programming.' TeX is Turing-complete and revolutionized mathematical typesetting. Knuth also created METAFONT and invented literate programming. Received the Turing Award in 1974."
        }],
        tags: ["compiled"],
        code: `\\message{Hello, World!}
\\end`,
        filename: "hello.tex",
        description: "Knuth's typesetting masterpiece. TeX is Turing-complete and became the standard for academic publishing worldwide.",
        influences: [],
        influenced: ["PostScript", "LaTeX"]
    },
    {
        name: "RPG",
        year: 1959,
        authors: [{
            name: "IBM",
            bio: "Report Program Generator created by IBM for business reports on punched card systems. RPG automated common business calculations and report formatting. Evolved through multiple versions (RPG II, RPG III, RPG IV/ILE). Still widely used in banking and business systems on IBM i (AS/400). Millions of lines still in production."
        }],
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
        authors: [{
            name: "Don Woods and James M. Lyon",
            bio: "Created INTERCAL as a parody of languages like FORTRAN and COBOL at Princeton. Features the PLEASE keyword (programs with too few or too many are rejected for being rude or obsequious). First esoteric language. Woods later co-created Colossal Cave Adventure. INTERCAL influenced the entire esoteric language movement."
        }],
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
        authors: [{
            name: "Apple Computer (multiple authors)",
            bio: "Created at Apple as an object-oriented dynamic language with Lisp-like features and Algol-like syntax. Named after Dylan Thomas. Designed for Newton platform but evolved into a general-purpose language. Influenced by Scheme, CLOS, and Eulisp. Open-sourced and continues as Open Dylan project."
        }],
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
        influenced: []
    },
    {
        name: "Io",
        year: 2002,
        authors: [{
            name: "Steve Dekorte",
            bio: "Created Io as a minimalist prototype-based language inspired by Self, Smalltalk, and Lisp. Everything is a message to an object, everything is an object. Influenced by actor model concurrency. Used Io's coroutines and concurrency features in various projects. Open source with a small but dedicated community."
        }],
        tags: ["interpreted", "oop"],
        code: `"Hello, World!" println`,
        filename: "hello.io",
        description: "Minimalist prototype-based beauty. Io's pure message-passing model influenced Scala and demonstrated prototype elegance.",
        influences: ["Self", "Smalltalk", "Lisp"],
        influenced: ["Scala"]
    },
    {
        name: "J",
        year: 1990,
        authors: [{
            name: "Kenneth E. Iverson and Roger Hui",
            bio: "Iverson created J as a successor to APL, using ASCII instead of special symbols. Hui co-designed and implemented it. J maintains APL's array-oriented power while being typeable on standard keyboards. Iverson received the Turing Award in 1979 for APL. J continues to evolve with an active community."
        }],
        tags: ["interpreted"],
        code: `'Hello, World!'`,
        filename: "hello.ijs",
        description: "APL's ASCII successor by Iverson himself. J brings array programming power to standard keyboards, beloved by mathematicians.",
        influences: ["APL"],
        influenced: ["K", "Q"]
    },
    {
        name: "Chef",
        year: 2002,
        authors: [{
            name: "David Morgan-Mar",
            bio: "Australian programmer who creates esoteric languages as art. Also created Piet (programs as paintings). Chef programs are valid cooking recipes. Ingredients are data, method steps are instructions. Morgan-Mar explores the intersection of code, language, and other human endeavors. PhD in astrophysics."
        }],
        tags: ["esoteric", "interpreted"],
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
        authors: [{
            name: "Dylan Beattie",
            bio: "British developer and musician who created Rockstar so programs read like 1980s rock song lyrics. Variables are poetic, operations use rock terminology. Beattie is a Microsoft MVP and conference speaker who combines programming with performance art. Rockstar has a working compiler and active community."
        }],
        tags: ["esoteric", "interpreted"],
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
        authors: [{
            name: "Lauri Hartikka",
            bio: "Finnish programmer who created ArnoldC where all keywords are Arnold Schwarzenegger movie quotes. 'IT'S SHOWTIME' starts program, 'YOU HAVE BEEN TERMINATED' ends it. A tribute to action movies and programming humor. Built with Java and actively maintained on GitHub with enthusiastic community."
        }],
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
        authors: [{
            name: "Daniel Temkin",
            bio: "Artist and programmer exploring the aesthetic possibilities of code. Created Velato where programs are MIDI music files—pitch sequences encode instructions. Also created Entropy (code degrades over time) and other conceptual languages. Shows programming as performance art. Based in New York."
        }],
        tags: ["esoteric", "interpreted"],
        code: `[Musical notation encoding: This would be a MIDI file where specific note sequences encode "Hello, World!" - the pitches C D E F G A B in specific patterns create the output]`,
        filename: "hello.velato",
        description: "Listen to your code. Velato programs are MIDI music—you can hear your Hello World as a melody.",
        influences: [],
        influenced: []
    },
    {
        name: "FALSE",
        year: 1993,
        authors: [{
            name: "Wouter van Oortmerssen",
            bio: "Dutch programmer who created FALSE as a tiny stack-based language. The entire compiler is 1024 bytes. FALSE's minimalism directly inspired Urban Müller to create Brainfuck. Van Oortmerssen later created the Cube game engine and worked at Google. FALSE demonstrated extreme language minimalism."
        }],
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
        authors: [{
            name: "David Morgan-Mar",
            bio: "Morgan-Mar strikes again! Ook! is Brainfuck for orangutans—only 'Ook.', 'Ook?', and 'Ook!' are valid tokens. Named after the Librarian from Terry Pratchett's Discworld who only says 'Ook!'. Demonstrates that even Brainfuck can be more obscure. Part of Morgan-Mar's exploration of code as creative expression."
        }],
        tags: ["esoteric", "interpreted"],
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
        authors: [{
            name: "Theo Weidmann",
            bio: "German developer who created Emojicode as a full-featured object-oriented language using only emoji. Classes, methods, variables—all emoji. Compiles to bytecode and runs on its own VM. Demonstrates that Unicode opens new possibilities for programming syntax. Actively developed with serious language features despite playful appearance."
        }],
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
        authors: [{
            name: "Sean Heber",
            bio: "Created Cow as a humorous variant using only 'moo', 'mOo', 'moO', 'mOO', 'Moo', 'MOo', 'MoO', and 'MOO' commands. Similar concept to Chicken but with bovine vocabulary. Heber is an iOS developer who enjoys playful programming. Cow demonstrates that any consistent symbol set can encode computation."
        }],
        tags: ["esoteric", "interpreted"],
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
        authors: [{
            name: "Graham Nelson",
            bio: "British mathematician and poet who created Inform for writing interactive fiction (text adventures). Used by thousands to create games like 'Anchorhead' and 'Photopia'. Inform 7 (2006) uses natural language syntax. Nelson also created the Z-machine interpreter. Interactive fiction as serious literary form."
        }],
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
        authors: [{
            name: "anonymous",
            bio: "Created Whenever as a non-deterministic language where statement order doesn't matter—the interpreter executes them 'whenever' it wants. Features time travel and random execution order. A fascinating exploration of non-sequential programming. Demonstrates that temporal ordering is just a convention we're used to."
        }],
        tags: ["esoteric", "interpreted"],
        code: `1 print("Hello, World!");`,
        filename: "hello.whenever",
        description: "Time is negotiable. Whenever executes statements in random order—your code runs whenever it feels like it.",
        influences: [],
        influenced: []
    },
    {
        name: "HyperTalk",
        year: 1987,
        authors: [{
            name: "Bill Atkinson and Dan Winkler (Apple)",
            bio: "Created for HyperCard by Bill Atkinson (MacPaint creator) and Dan Winkler. English-like syntax for creating interactive hypermedia. Inspired a generation of programmers and directly influenced AppleScript. HyperCard was revolutionary—Tim Berners-Lee cited it as inspiration for the World Wide Web."
        }],
        tags: ["interpreted"],
        code: `on mouseUp
  answer "Hello, World!"
end mouseUp`,
        filename: "hello.hc",
        description: "HyperCard's natural language. HyperTalk's English-like scripting inspired the web and influenced AppleScript's design.",
        influences: [],
        influenced: ["AppleScript", "JavaScript"]
    },
    {
        name: "Q",
        year: 2003,
        authors: [{
            name: "Arthur Whitney (Kx Systems)",
            bio: "Whitney created Q for kdb+ database, used heavily in high-frequency trading. Q is tersely expressive, processing massive time-series data at incredible speeds. Whitney previously worked on A+ at Morgan Stanley and K. His languages are known for extreme conciseness and performance. Q dominates financial analytics."
        }],
        tags: ["interpreted"],
        code: `"Hello, World!"`,
        filename: "hello.q",
        description: "Wall Street's secret weapon. Q powers high-frequency trading with terse array operations processing billions of records.",
        influences: ["APL", "K"],
        influenced: []
    },
    {
        name: "Rebol",
        year: 2000,
        authors: [{
            name: "Carl Sassenrath",
            bio: "Created Rebol (Relative Expression Based Object Language) for distributed computing and messaging. Sassenrath previously designed the Amiga OS kernel. Rebol uses dialects—embedded domain-specific languages. Influenced modern data exchange formats. Open-sourced in 2012. Spawned Red language as spiritual successor."
        }],
        tags: ["interpreted"],
        code: `print "Hello, World!"`,
        filename: "hello.rebol",
        description: "Messaging language ahead of its time. Rebol's dialects and data exchange philosophy influenced modern distributed systems.",
        influences: ["Lisp"],
        influenced: ["Red"]
    },
    {
        name: "Red",
        year: 2011,
        authors: [{
            name: "Nenad Rakocevic",
            bio: "Created Red as a full-stack language inspired by Rebol, compiling to native code. From system programming to GUI scripting in one language. Features a built-in reactive GUI framework. Red aims to be practical for everything from device drivers to web apps. Active open-source development."
        }],
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
        authors: [{
            name: "Fredrik Hübinette",
            bio: "Created Pike for LPC MUD development, later became general-purpose. Combines C syntax with high-level features. Used in web servers (Roxen) and networking applications. Features automatic memory management, built-in data types, and module system. Continues development with focus on networking and performance."
        }],
        tags: ["interpreted", "oop"],
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
        authors: [{
            name: "Mahmoud Fayed",
            bio: "Egyptian computer scientist who created Ring as a practical general-purpose language. Designed to be simple, small, flexible. Features natural language programming option, visual development, works well for beginners and experts. Supports multiple programming paradigms. Growing community particularly in Arabic-speaking countries."
        }],
        tags: ["interpreted"],
        code: `see "Hello, World!" + nl`,
        filename: "hello.ring",
        description: "Simplicity as philosophy. Ring brings approachable syntax and natural language programming to modern development.",
        influences: ["Lua", "Python"],
        influenced: []
    },
    {
        name: "Wren",
        year: 2013,
        authors: [{
            name: "Bob Nystrom",
            bio: "Created Wren as a small, fast scripting language for embedding in applications. Nystrom works at Google on Dart, previously worked on game engines. Author of 'Crafting Interpreters' and 'Game Programming Patterns'. Wren is class-based, concurrent, uses fibers. Designed for game development embedability."
        }],
        tags: ["interpreted"],
        code: `System.print("Hello, World!")`,
        filename: "hello.wren",
        description: "Scripting perfected. Wren is small, fast, and embeddable—designed by the author of 'Crafting Interpreters' for game engines.",
        influences: ["Lua", "Smalltalk"],
        influenced: []
    },
    {
        name: "NewtonScript",
        year: 1993,
        authors: [{
            name: "Walter Smith (Apple)",
            bio: "Created for Apple Newton PDA. Prototype-based like Self, but more practical for embedded devices. Featured sophisticated persistent object storage and dynamic typing. Newton was ahead of its time—modern smartphones owe much to its concepts. NewtonScript influenced modern mobile development thinking."
        }],
        tags: ["interpreted", "oop"],
        code: `Print("Hello, World!");`,
        filename: "hello.ns",
        description: "The PDA's brain. NewtonScript pioneered mobile development concepts that smartphones would reinvent decades later.",
        influences: ["Self", "Dylan"],
        influenced: []
    },
    {
        name: "Mojo",
        year: 2023,
        authors: [{
            name: "Chris Lattner (Modular)",
            bio: "Creator of Swift and LLVM. Built Mojo as a Python superset for AI/ML workloads with C-level performance. Combines Python's usability with systems programming speed. Leverages MLIR compiler infrastructure. Aims to unify AI development stack. Lattner's third revolutionary language after LLVM IR and Swift."
        }],
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
        authors: [{
            name: "Chandler Carruth (Google)",
            bio: "Google engineer leading Carbon as an experimental successor to C++. Goals: modern syntax, full C++ interop, memory safety. Presented at CppNorth 2022. Carbon aims to be what TypeScript is to JavaScript but for C++. Still experimental, evolving with community input."
        }],
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
        authors: [{
            name: "Louis Pilfold",
            bio: "Created Gleam as a type-safe, friendly language for the Erlang VM (BEAM). Inspired by Elm, Rust, and OCaml. Focuses on developer experience with helpful error messages. Compiles to Erlang, runs alongside Elixir. Growing community building for web services and concurrent systems."
        }],
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
        authors: [{
            name: "Richard Feldman",
            bio: "Elm core team member creating Roc as a fast, friendly, functional language. Focuses on immediate feedback and beginner-friendliness while maintaining performance. Compiles ahead-of-time, targets WebAssembly and native. Influenced by Elm's philosophy but designed for broader use cases including servers and CLIs."
        }],
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
        authors: [{
            name: "Victor Taelin (HigherOrderCO)",
            bio: "Created Bend for massively parallel functional programming that runs on GPUs. Based on HVM (High-order Virtual Machine) and interaction nets. Automatically parallelizes code across thousands of cores. Revolutionary approach to parallel computation. Makes GPU programming accessible through pure functional code."
        }],
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
        authors: [{
            name: "Ginger Bill",
            bio: "Created Odin as a better alternative to C for game development and systems programming. Focuses on joy of programming, simplicity, and high performance. No hidden control flow, explicit is better than implicit. Growing community in game development. Bill also maintains popular tutorials and articles on systems programming."
        }],
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
        authors: [{
            name: "Paul Chiusano, Rúnar Bjarnason, Arya Irani",
            bio: "Revolutionary language where code is content-addressed by hash, not file location. Definitions never change—refactoring is trivial, distribution is seamless. Chiusano and Bjarnason co-authored 'Functional Programming in Scala'. Unison fundamentally rethinks how we store and reference code. Game-changing for distributed systems."
        }],
        tags: ["compiled", "functional"],
        code: `main : '{IO, Exception} ()
main _ = printLine "Hello, World!"`,
        filename: "hello.u",
        description: "Content-addressed revolution. Unison identifies code by hash, not location—refactor fearlessly, distribute effortlessly.",
        influences: ["Haskell", "Elm"],
        influenced: []
    }
];
