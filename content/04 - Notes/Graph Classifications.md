# Graph Classifications
---

[Common Simple Graphs](/notes/common-simple-graphs)

A **simple graph** is where each edge connects two vertices and no two vertices are connected more than once. A **multigraph** may contain multiple edges between vertices denoted as multiplicity $m$. A **pseudograph** may contain edges that connect one vertex to itself

![TikZ Diagram](/attachments/tikz-21561714b8c3f6b93bedd6f4e45a951c.svg)
$$
\begin{array}{ccc}
\text{Simple Graph} &&&&&& \text{Multigraph} &&&&&& \text{Pseudograph}
\end{array}
$$

A **directed graph** is a graph in which the edges are directional, and a **mixed graph** allows for both directed and undirected edges

![TikZ Diagram](/attachments/tikz-a994ce1adfa794de54a80fac65ba9104.svg)
$$
\begin{array}{ccc}
\text{Directed} &&&&& \text{Directed} &&&&&& \text{Mixed Graph} \\
\text{Simple Graph} &&&&& \text{Multigraph}
\end{array}
$$

Two graphs are **isomorphic** if there is a one-to-one correspondence between their vertex sets that preserves edges

![TikZ Diagram](/attachments/tikz-20671d94deeac30a142e7686baa3d923.svg)

It is easier to show that two graphs are not isomorphic if the number of vertices of specific degrees don't match, or simple circuits exist of different sizes

A graph is **bipartite** if the set of vertices can be divided into two disjoint subsets where each edge connects one subset to the other, where each pair of vertices is called a **bipartition**

![TikZ Diagram](/attachments/tikz-1036bb61bb5c2bf61f93db035ea7ba48.svg)

[Trees](/notes/trees) are connected undirected graphs with no simple circuits

[Planar Graphs](/notes/planar-graphs) can be drawn on a plane without any lines crossing
