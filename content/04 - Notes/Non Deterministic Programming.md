# Non Deterministic Programming
---

Generate and Test

```prolog
sort(L,R) :- perm(L,R), % generate
				ordered(R). % test
```

## Search
**Backtracking Search** utilizes incremental generation and testing. Non duplicate choices are selected and when it fails it will backtrack to try more solutions

Prolog can only get this far

**Forward Checking** prunes future choices that are untenable to have less backtracking

This is what constrained logical programming can do

**Look ahead** does forward checking and ensures for every choice that a solution is possible to eliminate backtracking
