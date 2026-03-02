# Prim's Algorithm
---

**Prim's Algorithm** is a greedy algorithm to find a MST for an undirected graph. It works by repeatedly choosing the cheapest edge bridging the current tree and the unconnected vertices

## Algorithm
```python
def Prim(G,w,r):
	# initialize
	A = [] # stores MST edges
	Q = set(V).remove(r) # vertices not yet in MST
	for v in Q:
		nearest[v] = r
		min_dist[v] = w[v,r] or infinity
		
	# iterate through remaining vertices
	while not Q.empty():
		# extract the best using min_dist
		u = extract_min(Q)
		Q.remove(u)
		A.append((u,nearest[u]))
		
		# update nearest, min_dist
		for v in G.adj[u]:
			if v in Q and w[u,v] < min_dist[v]:
				nearest[v] = u
				min_dist[v] = w[v,u]
	return A
```

## Analysis
Initialization takes $O(V)$ steps
Min-priority queue with min-heap takes $O(V\log V)$ time
Updating `nearest` and `min_dist` takes $O(E)$ time

**Time Complexity**: $O(E\log V)$
**Space Complexity**: $O(V+E)$
