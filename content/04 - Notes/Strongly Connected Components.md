# Strongly Connected Components
---

A **strongly connected component** (SCC) of a directed graph is a maximal subset of vertices where for any two vertices `u` and `v` in the subset, there is a path from `u` to `v` and a path from `v` to `u`. The term "maximal" means that if you were to add any other vertex from the graph to the subset, it would no longer be strongly connected.

A directed graph can be decomposed into a set of its strongly connected components. This decomposition forms a Directed Acyclic Graph (DAG) of the SCCs.

## Kosaraju's Algorithm
Kosaraju's algorithm is an efficient method for finding all strongly connected components in a directed graph. It works by running two passes of [DFS](/notes/depth-first-search)

```python
def SCC(G):
	# perform DFS on G to compute finish times f[u] for all u
	DFS(G) 

	# compute G_T (the transpose of G)
	G_T = transpose(G)

	# perform DFS on G_T
	# - consider vertices in decreasing order of f[u]
	# - reset vertex colors before starting
	DFS(G_T, order_by_finish_time=True)

	# each tree in the resulting DFS forest is a SCC
```

The first DFS pass ensures the vertex `u` with the highest finish time belongs to a sink SCC (component with no edges pointing outward)

The second DFS pass starts at that vertex treating it as a source since edges are reversed, meaning it will only explore vertices within its own component (the first SCC)

After the first SCC is found, the algorithm continues with the next vertex which will be a sink in the remaining graph, repeating the process

## Analysis
- Step 1 (DFS on `G`): $O(V+E)$
- Step 2 (Transpose `G`): $O(V+E)$
- Step 3 (DFS on `G_T`): $O(V+E)$

**Time Complexity**: $O(V+E)$

## Other Algorithms
Other algorithms like **Tarjan's algorithm** and the **Path-based strong component algorithm** can also find SCCs. They are often preferred in practice as they are slightly more complex to implement but only require a single DFS pass, making them more efficient
