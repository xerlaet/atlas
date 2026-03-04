# Programming Language Paradigms
---

Natural human languages and programming languages are both languages. The only significant difference is that human languages have ambiguous grammars, such as "I saw her duck"

## Preliminaries
### Importance of Learning Paradigms
- Increased capacity to express ideas
- Improved background for choosing appropriate languages
- Increased ability to learn new languages
- Better understanding of the significance of implementation
- Better use of languages that are already known
- Overall advancement of computing

### Programming Domains
- Scientific Applications - lots of floating point computations (Fortran)
- Business Applications - introduced numbers and characters (COBOL)
- Artificial Intelligence - manipulate symbols rather than numbers (LISP)
- Systems Programming - efficiency for continuous use, operating systems (C)
- Web Software - markup, scripting, and general purpose (HTML,PHP, Java)
- Embedded Systems - cars, refrigerators, Fitbit (Java, Python, C, MIPS)
- 3D Graphics and Animation - render animations (Java, C)
- Gaming - render real time graphics with user input (C++, C#)

### Language Design
[Language Evaluation Criteria](/notes/language-evaluation-criteria)
How readable, writeable, and reliable is a programming language

[von Neumann Architecture](/notes/von-neumann-architecture)

In the 1960's and 70's, there was a shift in the major cost of computing from hardware to software. With the boom in software methodology, deficiencies were discovered such as incompleteness of type checking and inadequacy of control statements (instead using gotos)

60's-70's Structured programming
70's-80's Procedure oriented programming
80's-Present Data-oriented object oriented

SIMULA 67 was the first language to provide some support for data abstraction. Smalltalk was the first language to support OOP.

### Language Categories
There are four primary paradigms:
1. Imperative (procedural/object oriented) (operational semantics)
2. [Functional](/notes/functional-programming) (denotational semantics)
3. [Logic](/notes/logical-programming) (axiomatic semantics)
4. Quantum (quantum mechanics)

### Implementation Methods
[Compilation](/notes/compilation) is when programs are translated into machine language to be executed directly on the computer with fast execution times (C, COBOL, C++)
[Pure Interpretation](/notes/pure-interpretation) is when an interpreter program decodes the high level language statements at runtime. Statement decoding is often the bottleneck, and it will require more space and be slower.
[Hybrid Compilation Interpretation](/notes/hybrid-compilation-interpretation) is where the high level language is translated into an intermediate language (Perl, Java - although now Java byte code is sometimes translated into machine code)

Sometimes a program is interpreted for debugging, and compiled for a final product.

Basically everything is a tradeoff!

## Evolution of Major Programming Languages

[Evolution of Programming Languages](/notes/evolution-of-programming-languages)
[Influential People](/notes/influential-people)

Roles of older languages

## Syntax and Semantics

[Syntax](/notes/syntax)
[Semantics](/notes/semantics)
[Parse Tree](/notes/parse-tree)
[Grammar](/notes/grammar)

A **sentence** is a string of characters over some alphabet
A **language** is a set of sentences
A **lexeme** is the lowest level syntactic unit of a language
	e.g. a, cat, ?, myVar, if, 1
A **token** is a category of lexemes
	e.g. noun, verb, variable_name, int_literal

Context free grammars can't resolve
`<data_type> <var_name> <assgn_op> <int_literal> <stmt_term>`
in the case of `string x = 1;`, that's where attribute grammars help

Perl keeps the operator the same and changes the data type, most languages do the opposite

Different life experiences leads to different interpretation of words

**Recognizers** read input strings from an alphabet and determine whether they belong to the language
**Generators** generate sentences of a language

A different way of looking at it is just which way do you traverse the parse tree? top down or bottom up

A derivation is the set of steps to go from the start to all terminals


Lexical parser goes first to check lexemes
Syntactic parses goes next to check grammar

bottom up parser
top down parser 
A [Shift Reduce Parser](/notes/shift-reduce-parser) is a bottom up parser

[Expressions and Assignment Statements](/notes/expressions-and-assignment-statements)
[Control Structures](/notes/control-structures)

[Language Based Security](/notes/language-based-security)

---
around 33,000 languages
lojban, whitespace
creoles, pidgens
turning complete languages - webpages with Haskell?
nested sets for set theory

Inheritance
Encapsulation
OOP