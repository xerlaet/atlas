# Representations of Graphs
---

In addition to visual depictions, graphs can be represented in many other equivalent ways

![TikZ Diagram](/attachments/tikz-bf2eff4ceb3d05e896336c4153ce3c1d.svg)

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
