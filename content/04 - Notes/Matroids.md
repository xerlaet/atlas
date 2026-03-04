# Matroids
---

A **Matroid** is a pair $M={E,I}$ where $E$ is a finite set of elements (ground set) and $I$ is a non-empty collection of subsets of $E$ (independent sets)

$E$ must satisfy two key properties:
1. **Hereditary Property**: if a set $A \in I$ then any subset of $A$ is also in $I$
2. **Exchange Property** (Augmentation Property): If $A,B\in I$ and $\lvert A \rvert > \lvert B \rvert$, there must exist some $x\in A,\notin B$ where $x\cup B$  is still independent

If a problem can be shown to have an underlying matroid structure, a greedy algorithm is guaranteed to be successful

Similar concepts include [Graphic Matroids](/notes/graphic-matroids) and [Matric Matroids](/notes/matric-matroids) which contain independent subsets if a graph has no cycles and if a matrix has linear independent columns
