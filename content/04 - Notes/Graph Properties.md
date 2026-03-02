# Graph Properties
---

Two vertices are **adjacent** (neighbors) if an edge connects them

The **neighborhood** of a vertex is the set of adjacent vertices, and the **degree** of a vertex is the number of edges incident with it, note that a loop contributes two to the degree

A vertex with degree zero is called **isolated**, and with degree one is called a **pendant**

The **handshaking theorem** states that in an undirected graph, the number of edges is half the sum total of degrees of each vertex. For directed graphs, the number of out degrees matches the number of in degrees

A **matching** $M$ in a simple graph $G=(V,E)$ is a subset of $E$ where no two edges connect to the same vertex, and a **maximum matching** is a matching with the largest number of edges

The **diameter** of a graph is the longest minimum path between any two vertices

A **subgraph** of a graph $G=(V,E)$ is $H=(W,F)$ where $W\subseteq V$ and $F\subseteq E$

An **elementary subdivision** is removing an edge $\{ u,v \}$ and adding a vertex $w$ with edges $\{ u,w \}$ and $\{ w,v \}$. This subdivision does not affect whether a graph is planar or not

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\node[main, label=above:$a$] (a) at (0,0) {};
\node[main, label=above:$b$] (b) at (2,0) {};
\path[draw] (a) to (b);

\node[main, label=above:$a$] (c) at (4,0) {};
\node[main, label=above:$c$] (d) at (5,0) {};
\node[main, label=above:$b$] (e) at (6,0) {};
\path[draw] (c) to (d) to (e);

\end{tikzpicture}
\end{document}
```

Two graphs are **homeomorphic** if they can be obtained from a sequence of elementary subdivisions

A [[Graph Coloring]] is where each vertex of a graph is assigned a color such that neighbors will not share colors. The **chromatic number** is the least number of colors needed, and for a planar graph this number is no greater than 4
