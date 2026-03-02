# Kruskal's Algorithm
---

**Kruskal's Algorithm** is a greedy algorithm to find a MST for an undirected graph. It works by repeatedly choosing the cheapest edge that doesn't create a cycle (using [[Disjoint Sets]])

## Algorithm
```python
def Kruskal(G,w):
	# initialize
	A = [] # stores MST edges
	for v in G.V:
		MAKE_SET(v)
		
	# sort edges by weight
	edges = sorted(G.E, key=w)
		
	# add each edge if they won't form a cycle
	for (u,v) in edges:
		if FIND_SET(u) != FIND_SET(v):
			A.append((u,v))
			UNION(u,v)
	return A
```

## Analysis
Sorting the edges takes $O(E\log E)=O(E\log V)$ time which is the bottleneck

A sequence of $m$ operations on $n$ elements takes nearly constant time on average. Technically $O(m\cdot \alpha(n))$ where $\alpha(n)$ is the inverse [[Ackermann Function]]

There are $V$ `MAKE_SET` operations, $2E$ `FIND_SET` operations, and $V-1$ `UNION` operations

**Time Complexity**: $O(E\log V)$
**Space Complexity**: $O(V+E)$
