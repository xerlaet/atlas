# Constrained Logical Programming
---

**Constrained Logical Programming** (CLP) is a method in which constraints for variables can be stipulated to be utilized by the generator

Constraints are specified using the following syntax
```prolog
#=, #\=, #<, #=<, #>, #>=
[X,Y,Z] ins 1..10.
```

Common predicates include
```prolog
all_different(Vars). % ensures variables are different
label(Vars). % triggers search for solutions

sum(Vars, #=, Total).
scalar_product(Coeffs, Vars, #=, Sum).
maximum(Max, Vars).
minimum(Min, Vars).
```

Example queries
```prolog
?- X in 1...5,X#>3.
	X in 4...5.
?- X in 1...3,Y in 3...5, X #= Y. % != is <>
	X = 3.
	Y = 3.
?- X + Y #= 30.
	Y = 30 - X, Y ranges from 5...25
```
