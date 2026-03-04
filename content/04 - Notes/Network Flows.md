# Network Flows
---

Given a graph with a **source node** (s) and a **sink node** (t), what is the max flow between them?

Note that $c(u,v)\geq 0$ and $c(u,v)=0$ if $(u,v)\notin E$

A **flow** is a function $f:V\times V \to \mathbb{R}$
1. $f(u,v)\leq c(u,v)$
2. $f(u,v)=-f(v,u)$
3. $\forall u \in V-\{ s,t \}:\sum_{v\in V}f(u,v)=0$

The **Max Flow Min Cut Theorem** states that the following three statements are equivalent
1. $f$ is a maximum flow
2. The residual network $G_{f}$ has no augmented path
3. $\lvert f \rvert=\min\{ c(S,T) \mid (S,T) \text{ is a cut}\}$

How 2 implies 3?

## Algorithms
[Ford-Fulkerson Algorithm](/notes/ford-fulkerson-algorithm)
[Edmonds-Karp Algorithm](/notes/edmonds-karp-algorithm)
