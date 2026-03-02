# Peano's Axioms
---
**Peano's Axioms** are a way of describing the natural numbers $\mathbb{N}$

1. 0 is a number
2. Every number has a successor
3. $S(N)=N+1$

$$
\begin{align}
0 &= 0 \\
1 &= S(0) \\
2 &= S(S(0)) \\
3 &= S(S(S(0))) \\
N &= S^{N}(0)
\end{align}
$$

```prolog
num(0).
num(S(N)) :- num(N).
```
