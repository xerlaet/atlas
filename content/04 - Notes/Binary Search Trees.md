# Binary Search Trees
---

> [!important] This is for optimal BSTs

A **Binary Search Tree** (BST) is a set of keys $S=\{ k_{1}<k_{2}<\dots<k_{n} \}$ making up $n$ internal nodes of the tree, with $n+1$ leaves $d_{0},d_{1},\dots,d_{n}$ representing unsuccessful searches

The **weighted path length** is calculated from averaging the depths of each path times the probability, and this value is minimized in an optimal BST. The algorithm to do this uses dynamic programming

## Analysis
The expected insertion time is $O(\log n)$, worst case is $O(n^{2})$ if the tree is basically a straight line

To build the search tree, the left subtree contains $j-1$ elements, and the right subtree contains $n-j$ elements

The running time is similar to [Quick Sort](/notes/quick-sort)

## Example
$$
S=\{ k_{1}<k_{2}<\dots<k_{5} \}\\
$$
$$
\begin{array}{c|c}
i &  & 1 & 2 & 3 & 4 & 5 \\
\hline p_{i} &  & 0.15 & 0.1 & 0.05 & 0.1 & 0.2 \\
q_{i} & 0.05 & 0.1 & 0.05 & 0.05 & 0.05 & 0.1
\end{array}
$$

Optimal BSTs
$q_{0},p_{1},1q,\dots q_{n-1},p_{n},q_{n}$
