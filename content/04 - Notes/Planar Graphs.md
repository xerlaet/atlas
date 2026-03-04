# Planar Graphs
---

A graph is **planar** if it can be drawn on a plane without any edges crossing, which is called the planar representation of the graph

![TikZ Diagram](/attachments/tikz-0009dcd9fdd599fb5dbbae406cdbdf9d.svg)

A planar graph splits the plane into **regions**, and all planar representations of a graph splits the plane into the same number of regions

Euler's formula states that given a graph $G$ with $e$ edges and $v$ vertices, the number of regions will be $e-v+2$

![TikZ Diagram](/attachments/tikz-8b69f9a8dd454cf1c3d1bc5166e08654.svg)

Some additional inequalities are
1. If $v\geq 3$, then $e\leq 3v-6$
2. $G$ has a vertex of degree not exceeding five
3. If $v\geq 3$ and there are no circuits of length three, then $e\leq 2v-4$

**Kuratowski's Theorem** states that a graph is nonplanar if it contains a subgraph homeomorphic to $K_{3,3}$ or $K_{5}$
