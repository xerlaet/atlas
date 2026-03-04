# Dynamic Programming
---

**Dynamic Programming** is a technique that breaks a problem down into overlapping sub-problems, stores the solutions, and then uses those solutions to solve the problem without redundant calculations

A great example is the [Fibonacci Sequence](/notes/fibonacci-sequence)
$$
F(n)=F(n-1)+F(n-2)
$$

Note that the overlapping subproblems need to have [Optimal Substructure](/notes/optimal-substructure) for it to work

There are two primary approaches:

1. **Memoization** is a top down approach using recursion to solve sub-problems and cache those results
2. **Tabulation** is a bottom up approach in which small sub-problems are solved first and built up into the main problem
