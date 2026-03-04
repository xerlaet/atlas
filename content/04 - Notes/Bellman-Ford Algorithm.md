# Bellman-Ford Algorithm
---

The **Bellman-Ford Algorithm** is similar to [Dijkstra's Algorithm](/notes/uniform-cost-search) but works if there are negative edges

It utilizes [Dynamic Programming](/notes/dynamic-programming)

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

![Pasted image 20250422114851.png](/attachments/Pasted%20image%2020250422114851.png)

## Analysis
Time complexity is $O(VE)$
