# Disjoint Sets
---

A collection of disjoint sets $\{ s_{1},s_{1},\dots ,s_{k} \}$

There are three operations:
- `make_set(x)` -> create a set containing $x$ with $x$ as representative
- `union(x,y)` -> $S_{i}\cup S_{j},x \in S_{i},y\in S_{j}$
- `find(x)` -> return $y,x\in S_{y}$

![Pasted image 20251021131229.png](/attachments/Pasted%20image%2020251021131229.png)

## Analysis
$n$ is the number of `make_set` operations
$m$ is the number of `make_set`, `union`, and `find`

Using **union by rank**, any sequence of `make_set`, `union`, and `find` operations take $O(m\log n)$ time

**Path Compression** is the process of making every node on the path of `find(x)` direct children of the root to reduce the cost of a future `find`

Using both of those properties, the sequence of operations can be performed in $O(m\alpha (n))$ time, which is essentially linear (see [Ackermann Function](/notes/ackermann-function))
