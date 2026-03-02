---
aliases:
- DFS
---
# Depth First Search
---

**Depth First Search** traverses a graph depth first, making it ideal for [[Cycle Detection|detecting cycles]] and identifying [[Strongly Connected Components]]

## Algorithm
```python
def DFS(G,s):
	# initialize
	for v in G:
		color[v] = white
		# set parent[v] = None
	S = stack
	S.push(s)
	
	# iterate through the stack
	while not S.empty():
		v = S.pop()
		if color[v] == white:
			color[v] = gray
			# check if v is the goal
			for w in v.adjacent():
				if color[w] == white:
					# set parent[w] = v
					S.push(w)
		color[v] = black
```

There is a second implementation utilizing recursion which is more natural for tracking discovery and finish times

```python
# main loop to handle disjoint graphs
def DFS_recursive(G):
	for v in G:
		color[v] = white
		# parent[v] = None
	time = 0
	for w in G:
		if color[w] == white:
			time = DFS_visit(w, time)
# actual recursive function
def DFS_visit(u, time):
	time += 1; d[u] = time # set discovery time
	color[u] = gray
	for v in u.adjacent():
		if color[v] == white:
			# set parent[v] = u
			time = DFS_visit(v, time)
	color[u] = black
	time += 1; f[u] = time # set finish time
	return time
```

## Analysis
Each vertex is visited once
Each edge will be scanned once (twice for undirected graphs)

**Time Complexity**: $O(V+E)$
**Space Complexity**: $O(V)$

When searching in a massive or infinite state space:

**Time Complexity**: $O(b^{d})$
**Space Complexity**: $O(b \cdot d)$

DFS is **not complete** because it can get stuck in infinite paths and is **not optimal** as it doesn't guarantee the shallowest goal node.
