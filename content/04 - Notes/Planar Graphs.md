# Planar Graphs
---

A graph is **planar** if it can be drawn on a plane without any edges crossing, which is called the planar representation of the graph

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\node[main] (a) at (0,0) {};
\node[main] (b) at (-1,1) {};
\node[main] (c) at (0,2) {};
\node[main] (d) at (1,1) {};
\path[draw] (a) to (b) to (c) to (d) to (a) to (c);
\path[draw] (b) to (d);

\node[main] (a1) at ([xshift=4cm]0,0) {};
\node[main] (b1) at ([xshift=4cm]-1,1) {};
\node[main] (c1) at ([xshift=4cm]0,2) {};
\node[main] (d1) at ([xshift=4cm]1,1) {};
\path[draw] (a1) to (b1) to (c1) to (d1) to (a1);
\path[draw] (b1) to (d1);
\path[draw] (a1) to [out=180, in=180, looseness=2] (c1);

\end{tikzpicture}
\end{document}
```

A planar graph splits the plane into **regions**, and all planar representations of a graph splits the plane into the same number of regions

Euler's formula states that given a graph $G$ with $e$ edges and $v$ vertices, the number of regions will be $e-v+2$

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\node[main] (a) at (0,0) {};
\node[main] (b) at (2,0) {};
\node[main] (c) at (4,0) {};
\node[main] (d) at (4,1) {};
\node[main] (e) at (4,2) {};
\node[main] (f) at (2,2) {};
\node[main] (g) at (0,2) {};
\path[draw] (g) to (a) to (b) to (c) to (d) to (e) to (f) to (g) to (b) to (f) to (d) to (b);

\node[] at (0.4,0.4) {$R_1$};
\node[] at (1.6,1.6) {$R_2$};
\node[] at (2.4,1.0) {$R_3$};
\node[] at (3.6,1.6) {$R_4$};
\node[] at (3.6,0.4) {$R_5$};
\node[] at (4.8,1.0) {$R_6$};

\end{tikzpicture}
\end{document}
```

Some additional inequalities are
1. If $v\geq 3$, then $e\leq 3v-6$
2. $G$ has a vertex of degree not exceeding five
3. If $v\geq 3$ and there are no circuits of length three, then $e\leq 2v-4$

**Kuratowski's Theorem** states that a graph is nonplanar if it contains a subgraph homeomorphic to $K_{3,3}$ or $K_{5}$
