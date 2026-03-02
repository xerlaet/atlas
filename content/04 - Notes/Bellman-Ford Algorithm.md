# Bellman-Ford Algorithm
---

The **Bellman-Ford Algorithm** is similar to [[Uniform Cost Search|Dijkstra's Algorithm]] but works if there are negative edges

It utilizes [[Dynamic Programming]]

$$
D_{x}(y)=\min_{v}\{ c_{x,v} +D_{v}(y)\}
$$

```python
for i=1 to V-1:
	for e=(u,v):
		relax(u,v)
for e=(u,v):
	if d[v] > d[u] + w[u,v]
		return False
```

![[Pasted image 20250422114851.png|500]]

## Analysis
Time complexity is $O(VE)$
