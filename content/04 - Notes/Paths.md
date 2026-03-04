# Paths
---

A **path** is a sequence of edges that traverses vertices of a graph. A path is a **circuit** if it begins and ends at the same vertex, and **simple** if it does not contain the same edge more than once

An undirected graph is considered **connected** if there is a path between every pair of distinct vertices. A **connected component** of graph $G$ is a maximally large connected subgraph of $G$

![TikZ Diagram](/attachments/tikz-e1cb3ec4d970de4bb31d2712fcdb029a.svg)

If removing a vertex and all incident edges will produce subgraphs which are disconnected, that vertex is a **cut vertex**. If removing an edge has the same behavior it is known as a **cut edge**

**Vertex connectivity** $\kappa(G)$ is the minimum number of vertices in a vertex cut (how many vertices you need to remove to separate the graph), and similarly the minimum number of edges in an edge cut is the **edge connectivity** $\lambda(G)$

![TikZ Diagram](/attachments/tikz-8cf6eb8ad0a21ee00c704995be412be7.svg)

A directed graph is **strongly connected** if there is a path between every vertex, and **weakly connected** if there is a path between every vertex ignoring directions

![TikZ Diagram](/attachments/tikz-1c851d0ec21501b8e83906ac9a2a15d2.svg)

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
