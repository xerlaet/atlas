# Paths
---

A **path** is a sequence of edges that traverses vertices of a graph. A path is a **circuit** if it begins and ends at the same vertex, and **simple** if it does not contain the same edge more than once

An undirected graph is considered **connected** if there is a path between every pair of distinct vertices. A **connected component** of graph $G$ is a maximally large connected subgraph of $G$

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\node[main, label=above:{$a$}] (a) at (0,2) {};
\node[main, label=below:{$b$}] (b) at (0,0) {};
\node[main, label=below:{$c$}] (c) at (2,0) {};
\node[main, label=above:{$d$}] (d) at (2,2) {};
\node[main, label=above:{$e$}] (e) at (4,2) {};
\node[main, label=above:{$f$}] (f) at (6,2) {};
\node[main, label=below:{$g$}] (g) at (6,0) {};
\node[main, label=below:{$h$}] (h) at (4,0) {};

\path[draw, red] (a) to (b) to (c) to (a);
\path[draw, orange] (d) to (e);
\path[draw, yellow] (f) to (g) to (h);

\end{tikzpicture}
\end{document}
```

If removing a vertex and all incident edges will produce subgraphs which are disconnected, that vertex is a **cut vertex**. If removing an edge has the same behavior it is known as a **cut edge**

**Vertex connectivity** $\kappa(G)$ is the minimum number of vertices in a vertex cut (how many vertices you need to remove to separate the graph), and similarly the minimum number of edges in an edge cut is the **edge connectivity** $\lambda(G)$

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\node[main, label=above:$a$] (a) at (0,2) {};
\node[main, red, label=below:$b$] (b) at (0,0) {};
\node[main, red, label=below:$c$] (c) at (2,0) {};
\node[main, label=above:$d$] (d) at (2,2) {};
\node[main, label=above:$e$] (e) at (4,2) {};
\node[main, label=above:$f$] (f) at (6,2) {};
\node[main, label=below:$g$] (g) at (6,0) {};
\node[main, red, label=below:$h$] (h) at (4,0) {};

\path[draw, red] (a) to (b);
\path[draw] (b) to (c) to (d) to (b);
\path[draw, red] (c) to (h);
\path[draw] (h) to (e) to (f) to (g) to (h) to (f);

\end{tikzpicture}
\end{document}
```

A directed graph is **strongly connected** if there is a path between every vertex, and **weakly connected** if there is a path between every vertex ignoring directions

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}, > =latex]

\node[main, label=above:$a$] (a) at (0,2) {};
\node[main, label=above:$b$] (b) at (2,2) {};
\node[main, label=right:$c$] (c) at (3,1) {};
\node[main, label=below:$d$] (d) at (2,0) {};
\node[main, label=below:$e$] (e) at (0,0) {};
\path[draw, ->] (a) to (b);
\path[draw, ->] (b) to (c);
\path[draw, ->] (b) to (d);
\path[draw, ->] (c) to (d);
\path[draw, ->] (d) to (e);
\path[draw, ->] (e) to (a);

\node[main, label=above:$a$] (a1) at ([xshift=5cm]0,2) {};
\node[main, label=above:$b$] (b1) at ([xshift=5cm]2,2) {};
\node[main, label=right:$c$] (c1) at ([xshift=5cm]3,1) {};
\node[main, label=below:$d$] (d1) at ([xshift=5cm]2,0) {};
\node[main, label=below:$e$] (e1) at ([xshift=5cm]0,0) {};
\path[draw, ->] (b1) to (a1);
\path[draw, ->] (b1) to (c1);
\path[draw, ->] (d1) to (b1);
\path[draw, ->] (c1) to (d1);
\path[draw, ->] (d1) to (e1);
\path[draw, ->] (e1) to (a1);

\end{tikzpicture}
\end{document}
```

An **Euler path** is a simple path containing every edge once, and an **Euler circuit** is an Euler path that starts and ends on the same vertex

It can be shown that a graph has an Euler circuit if and only if each of its vertices have an even degree, and an Euler path if and only if two vertices have an odd degree

A **Hamiltonian path** is a simple path containing every vertex exactly once, and a **Hamiltonian circuit** is a Hamiltonian path that starts and ends on the same vertex

Whether or not a graph contains a Hamiltonian circuit is a much more complicated question than Euler circuits, and only sufficient conditions exist.

Given a simple graph $G$ with $n$ vertices where $n\geq 3$, $G$ will have a Hamiltonian circuit if
(Dirac's Theorem) $\text{deg}(u)\geq \frac{n}{2}$ for every vertex $u$
(Ore's Theorem) $\text{deg}(u)+\text{deg}(v)\geq n$ for every pair of nonadjacent vertices $u$ and $v$

## Shortest Paths
[Dijkstra's Algorithm](/notes/uniform-cost-search) finds the shortest path between an initial node $a$ and any other node $v$ through a series of iterations

[Traveling Salesperson Problem](/notes/traveling-salesperson-problem) asks for a Hamiltonian circuit with total minimum weight
