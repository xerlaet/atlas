# Iterative Deepening Search
---

A **Depth Limited Search** is a [Depth First Search](/notes/depth-first-search) that will stop at a depth $l$.

The choice of $l$ is important (if it's known the diameter of a graph would be a good choice)

**Iterative-Deepening Search** runs DLS at increasing values of $l$ until a cutoff value of $l$

In general, IDS is the preferred uninformed search method when the search space is larger than the size of memory and the depth is not known

## Analysis
IDS combines many of the benefits of DFS and BFS:
Memory complexity is $O(bd)$ if there is a solution, $O(bm)$ otherwise

Time complexity is $O(b^{d})$ when there is a solution, $O(b^{m})$ otherwise

Complete

The nodes near the top will be generated more often (inverse of the depth), so the total number of nodes generated is
$$
N(IDS)=(d)b^{1}+(d-1)b^{2}+\dots+b^{d}
$$
For a large number of nodes this will be asymptotically the same as BFS. Technically you could run BFS until memory is exhausted, then run IDS from all the nodes in the frontier.
