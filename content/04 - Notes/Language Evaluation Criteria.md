# Language Evaluation Criteria
---

- Readability - how easy can it be read and understood (originally efficiency was prioritized, in the 1970s the paradigm shifted to focus on humans)
- Writability - how easy is it to write programs
- Reliability - does it perform to specifications
- Cost - the cost for development

![[Pasted image 20250129121547.png]]

- Overall simplicity
	- a manageable set of features and constructs
	- minimal feature multiplicity and operator overloading ex. \*
- Orthogonality
	- a small set of primitive constructs can be combined in a small number of ways where every combination is legal
	- you don't want a "There's more than one way to do it" (TMTOWTDI) situation
- Data types
	- adequate predefined data types
- Syntax considerations
	- identifier forms, special words for compound statements
	- meaningful keywords
- Support for abstraction
	- can you abstract things
- Expressivity
	- convenient ways to specify operations
	- strength and number of operators and predefined functions
- Type Checking
	- testing for type errors
- Exception handling
	- Intercept run-time errors and correct them
- Restricted Aliasing
	- Presence of two or more distinct referencing methods for the same memory location
	