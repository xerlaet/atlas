# Execution of Prolog
---

## Order
Prolog executes left to right, but in theory could do anything

```prolog
?- G1,G2,G3
```

Similarly, Prolog executes top down, but in theory could do anything

```prolog
C1  P :- ...
C2  P :- ...
C3  P :- ...
```

The order matters due to traversal efficiency

## Unification
Find the most general unifier first (MGU) - substitution

```prolog
append([1,2,3],X,[1,2,3,4])

append([H|T],L,[H|R]) :- append(T,L,R).

H <- 1
T <- [2,3]
L <-> X
H <- 1
R <- [2,3,4]
```

General Case
```prolog
f(x) = f(g(y))
x <- g(y)
```
