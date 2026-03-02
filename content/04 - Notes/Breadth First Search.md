---
aliases:
- BFS
---
# Breadth First Search
---

**Breadth First Search** traverses a graph level by level, which makes it able to find shortest paths

## Algorithm
```python
def BFS(G,s):
	# initialize
	for v in G:
		color[v] = white
		# set parent[v] = None
	Q = queue
	Q.enqueue(s)
	
	# iterate through the queue
	while not Q.empty():
		v = Q.dequeue()
		for w in v.adjacent():
			if color[v] == white:
				color[v] = gray
				# check if v is the goal
				# set distance of v as d[w]+1
				# set parent of v as w
				Q.enqueue(w)
		color[v] = black
```

## Analysis
Each vertex is enqueued and dequeued once
Each edge will be scanned once (twice for undirected graphs)

**Time Complexity**: $O(V+E)$

The worst case for space is something like a star graph where every vertex will need to exist in the queue

**Space Complexity**: $O(V)$

When searching in a massive or infinite state space:

At each level, the number of nodes generated are $1+b+b^{2}+b^{3}+\dots+b^{d}$ where $b$ is the **branching factor** and $d$ is the **depth** of the shallowest goal node

**Time Complexity**: $O(b^{d})$
**Space Complexity**: $O(b^{d})$
