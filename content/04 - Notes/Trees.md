# Trees
---

A **tree** is a connected undirected graph with no simple circuits (minimally connected). If the graph consists of disconnected subgraphs, it is known as a **forest**

There is a unique path between any two vertices in a tree

A **rooted tree** is a tree in which a vertex has been designated as the root

The **parent** of a vertex is the vertex right above, the **child** of a vertex is any vertex immediately below, and vertices which share the same parent are **siblings**

The **ancestors** of a vertex are the vertices in the path from the root to the vertex, and the **descendants** of a vertex are vertices that have it as an ancestor

A vertex with no children is a **leaf**, as opposed to vertices with children which are considered **internal vertices**

The **subtree** with a vertex $v$ as its root is the tree consisting of $v$ and all of its descendants

The **level** of a vertex is the length of the unique path from the root to that vertex, and the **height** of a tree is the maximum of the levels of the vertices

## Types of Trees
[Binary Search Trees](/notes/binary-search-trees) are trees which have at most two children, and children in the left subtree must be less than the value of the node, and children in the right subtree must be greater than the value of the node

[AVL Trees](/notes/avl-trees) are binary search trees where the height of each subtree at any node can differ by at most one

[B-Trees](/notes/b-trees) are trees which are guaranteed to be wider than binary trees

[Splay Trees](/notes/splay-trees) are trees in which the the last accessed node is always the root

A [Heaps](/notes/heaps) is something


### M-ary Trees
A tree is an **m-ary tree** if each internal vertex has no more than $m$ children, and a **full m-ary tree** if each internal vertex has exactly $m$ children

A m-ary tree of height $h$ is **balanced** if all leaves are at levels $h$ or $h-1$
![Pasted image 20231210234734.png](/attachments/Pasted%20image%2020231210234734.png)

**Binary trees** are 2-ary trees. **Binary search trees** have an additional property that every left child is less than the parent, and every right child is greater than the parent. This property allows for an efficient binary search algorithm

**AVL trees** are always balanced

**Splay trees** move the nodes which are just accessed to the top

**B trees**...

## Properties
A tree with $n$ vertices has $n-1$ edges

A full m-ary tree with $i$ internal vertices has $n=mi+1$ vertices, where each vertex $n=i+l$ where $l$ is the number of leaves

Further relationships can be determined from those two equations

There are at most $m^h$ leaves in a m-ary tree of height $h$
If a m-ary tree is full and balanced, then $h=\lceil \log_m{l} \rceil$

## Traversal
PreOrder, InOrder, and PostOrder are all different ways to traverse a tree

- PreOrder visits the nodes in a systematic manner, useful for traversing sections of a structured document
- PostOrder traversed each node after its descendants, useful for computing space used by a directory
- InOrder visits each node after the left children and before the right children, useful for binary search trees

![Pasted image 20231210164504.png](/attachments/Pasted%20image%2020231210164504.png)

## Applications
Trees are a very useful type of graph

Prefix, Infix, and Postfix notation for math can all be represented from the same binary tree with different traversal techniques

Decision trees, Huffman encoding, game trees, certain chemical compounds




---

### Decoding and Encoding
#### Prefix Encoding
Build a tree with each left edge a 0 and each right edge a 1, making the leaves letters

The encoding of each letter is its path from the root to the leaf (note: it doesn't have to be linear like this example)
![Pasted image 20231210235311.png](/attachments/Pasted%20image%2020231210235311.png)

[Huffman Encoding](/notes/huffman-encoding)

#### Game Trees
In this case the tree represents the sequence of moves made during a game where the initial state is the root

vertices at *even* levels correspond to the game before player 1 makes a move
![Pasted image 20231210235608.png](/attachments/Pasted%20image%2020231210235608.png)

The **min-max** strategy is to always choose the moves that results in the maximum label