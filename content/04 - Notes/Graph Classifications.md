# Graph Classifications
---

[Common Simple Graphs](/notes/common-simple-graphs)

A **simple graph** is where each edge connects two vertices and no two vertices are connected more than once. A **multigraph** may contain multiple edges between vertices denoted as multiplicity $m$. A **pseudograph** may contain edges that connect one vertex to itself

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\def\x{4}

\node[main] (a) at (90:1) {};
\node[main] (b) at (90+120:1) {};
\node[main] (c) at (90+240:1) {};
\path[draw] (a) to (b);
\path[draw] (b) to (c);
\path[draw] (c) to (a);

\node[main] (a) at ([xshift=\x cm]90:1) {};
\node[main] (b) at ([xshift=\x cm]90+120:1) {};
\node[main] (c) at ([xshift=\x cm]90+240:1) {};
\path[draw] (a) to (b);
\path[draw] (b) to (c);
\path[draw] (c) to [bend left=15] (a);
\path[draw] (c) to [bend right=15] (a);

\node[main] (a) at ([xshift=2*\x cm]90:1) {};
\node[main] (b) at ([xshift=2*\x cm]90+120:1) {};
\node[main] (c) at ([xshift=2*\x cm]90+240:1) {};
\path[draw] (a) to (b);
\path[draw] (b) to [out=150, in=240, looseness=15](b);
\path[draw] (b) to (c);
\path[draw] (c) to [bend left=15] (a);
\path[draw] (c) to [bend right=15] (a);
\end{tikzpicture}
\end{document}
```
$$
\begin{array}{ccc}
\text{Simple Graph} &&&&&& \text{Multigraph} &&&&&& \text{Pseudograph}
\end{array}
$$

A **directed graph** is a graph in which the edges are directional, and a **mixed graph** allows for both directed and undirected edges

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}, > =latex]

\def\x{4}

\node[main] (a) at (90:1) {};
\node[main] (b) at (90+120:1) {};
\node[main] (c) at (90+240:1) {};
\path[draw, ->] (a) to (b);
\path[draw, ->] (b) to (c);
\path[draw, ->] (c) to (a);

\node[main] (a) at ([xshift=\x cm]90:1) {};
\node[main] (b) at ([xshift=\x cm]90+120:1) {};
\node[main] (c) at ([xshift=\x cm]90+240:1) {};
\path[draw, ->] (a) to (b);
\path[draw, ->] (b) to [out=150, in=240, looseness=15](b);
\path[draw, ->] (b) to (c);
\path[draw, ->] (c) to [bend left=15] (a);
\path[draw, ->] (c) to [bend right=15] (a);

\node[main] (a) at ([xshift=2*\x cm]90:1) {};
\node[main] (b) at ([xshift=2*\x cm]90+120:1) {};
\node[main] (c) at ([xshift=2*\x cm]90+240:1) {};
\path[draw] (a) to (b);
\path[draw, ->] (b) to [out=150, in=240, looseness=15](b);
\path[draw, ->] (b) to (c);
\path[draw] (c) to [bend left=15] (a);
\path[draw, ->] (c) to [bend right=15] (a);
\end{tikzpicture}
\end{document}
```
$$
\begin{array}{ccc}
\text{Directed} &&&&& \text{Directed} &&&&&& \text{Mixed Graph} \\
\text{Simple Graph} &&&&& \text{Multigraph}
\end{array}
$$

Two graphs are **isomorphic** if there is a one-to-one correspondence between their vertex sets that preserves edges

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\node[main, red,    label=above:{$u_1$}] (a1) at (90+0*360/5:1.25) {};
\node[main, orange, label=left:{$u_2$}]  (b1) at (90+1*360/5:1.25) {};
\node[main, yellow, label=left:{$u_3$}]  (c1) at (90+2*360/5:1.25) {};
\node[main, green,   label=right:{$u_4$}] (d1) at (90+3*360/5:1.25) {};
\node[main, teal, label=right:{$u_5$}] (e1) at (90+4*360/5:1.25) {};
\path[draw, red] (a1) to (b1);
\path[draw, orange] (b1) to (c1);
\path[draw, yellow] (c1) to (d1);
\path[draw, green] (d1) to (e1);
\path[draw, teal] (e1) to (a1);

\node[main, red, label=above:{$v_1$}] (a2) at ([xshift=5cm]90+0*360/5:1.25) {};
\node[main, green, label=left:{$v_4$}]  (b2) at ([xshift=5cm]90+1*360/5:1.25) {};
\node[main, orange, label=left:{$v_2$}]  (c2) at ([xshift=5cm]90+2*360/5:1.25) {};
\node[main, teal, label=right:{$v_5$}] (d2) at ([xshift=5cm]90+3*360/5:1.25) {};
\node[main, yellow, label=right:{$v_3$}] (e2) at ([xshift=5cm]90+4*360/5:1.25) {};
\path[draw, red] (a2) to (c2);
\path[draw, orange] (c2) to (e2);
\path[draw, yellow] (e2) to (b2);
\path[draw, green] (b2) to (d2);
\path[draw, teal] (d2) to (a2);

\end{tikzpicture}
\end{document}
```

It is easier to show that two graphs are not isomorphic if the number of vertices of specific degrees don't match, or simple circuits exist of different sizes

A graph is **bipartite** if the set of vertices can be divided into two disjoint subsets where each edge connects one subset to the other, where each pair of vertices is called a **bipartition**

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]
\node[main] (a) at (0,0) {};
\node[main] (b) at (2,0) {};
\node[main] (c) at (3,-1) {};
\node[main] (d) at (2,-2) {};
\node[main] (e) at (0,-2) {};
\node[main] (f) at (-1.5,-1.5) {};
\node[main] (g) at (-1.5,-0.5) {};

\path[draw] (a) to (c) (a) to (e) (a) to (g) (a) to (f);
\path[draw] (b) to (c) (b) to (e) (b) to (f);
\path[draw] (c) to (d);
\path[draw] (d) to (e) (d) to (f) (d) to (g);
\end{tikzpicture}

\qquad

\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, outer sep=0, minimum size=0.15cm}]
\node[main, orange] (a) at (0,0) {};
\node[main, orange] (b) at (2,0) {};
\node[main, yellow] (c) at (3,-1) {};
\node[main, orange] (d) at (2,-2) {};
\node[main, yellow] (e) at (0,-2) {};
\node[main, yellow] (f) at (-1.5,-1.5) {};
\node[main, yellow] (g) at (-1.5,-0.5) {};

\path[draw] (a) to (c) (a) to (e) (a) to (g) (a) to (f);
\path[draw] (b) to (c) (b) to (e) (b) to (f);
\path[draw] (c) to (d);
\path[draw] (d) to (e) (d) to (f) (d) to (g);
\end{tikzpicture}
\end{document}
```

[Trees](/notes/trees) are connected undirected graphs with no simple circuits

[Planar Graphs](/notes/planar-graphs) can be drawn on a plane without any lines crossing
