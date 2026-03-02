# Representations of Graphs
---

In addition to visual depictions, graphs can be represented in many other equivalent ways

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]
\node[main, label=above:{$a$}] (a) at (90+0*360/5:1.25) {};
\node[main, label=left:{$b$}]  (b) at (90+1*360/5:1.25) {};
\node[main, label=left:{$c$}]  (c) at (90+2*360/5:1.25) {};
\node[main, label=right:{$d$}] (d) at (90+3*360/5:1.25) {};
\node[main, label=right:{$e$}] (e) at (90+4*360/5:1.25) {};
\path[draw] (a) to (b) (a) to (c);
\path[draw] (b) to (c) (b) to (d);
\path[draw] (c) to (d);
\path[draw] (d) to (e);
\end{tikzpicture}
\qquad
\qquad
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}, ->,> =latex]
\node[main, label=above:{$a$}] (a) at (90+0*360/5:1.25) {};
\node[main, label=left:{$b$}]  (b) at (90+1*360/5:1.25) {};
\node[main, label=left:{$c$}]  (c) at (90+2*360/5:1.25) {};
\node[main, label=right:{$d$}] (d) at (90+3*360/5:1.25) {};
\node[main, label=right:{$e$}] (e) at (90+4*360/5:1.25) {};
\path[draw] (a) to [bend left=15] (b);
\path[draw] (a) to [bend right=15] (b);
\path[draw] (a) to (c);
\path[draw] (b) to [bend right=15] (d);
\path[draw] (c) to (b);
\path[draw] (d) to [bend right=15] (b);
\path[draw] (d) to (c);
\path[draw] (d) to (e);
\path[draw] (e) to [out=45, in=135, looseness=12] (e);
\end{tikzpicture}
\end{document}
```

An **adjacency list** specifies the adjacent vertices for each vertex in an undirected graph, and the terminal vertices for each vertex in a directed graph

$$
\begin{array}{cc}
\text{Vertex} & \text{Adjacent Vertices} \\
\hline a & b,c \\
b & a,c,d \\
c & a,b,d \\
d & b,c,e \\
e & d
\end{array}
\qquad
\begin{array}{cc}
\text{Vertex} & \text{Terminal Vertices} \\
\hline a & b,c \\
b & d \\
c & b \\
d & b,c,e \\
e & e
\end{array}
$$

An **adjacency matrix** is an adjacency list in matrix form

$$
\begin{bmatrix}
0 & 1 & 1 & 0 & 0 \\
1 & 0 & 1 & 1 & 0 \\
1 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 1 \\
0 & 0 & 0 & 1 & 0
\end{bmatrix}
\qquad
\qquad
\begin{bmatrix}
0 & 2 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

The number of paths between two vertices of length $r$ with adjacency matrix $A$ can be found from $A^{r}$

An **incidence matrix** is a matrix listing the connections from vertices to edges, and only works on undirected graphs
