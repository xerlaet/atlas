---
aliases:
- Dijkstra's Algorithm
---

# Uniform Cost Search
---

Also known as **Dijkstra's Algorithm**, **Uniform Cost Search** spreads out in waves of uniform path-cost
$$
f(x)=g(x)
$$
The algorithm might be incorrect with negative edges

One problem with continual application is that when the weights are similar, small changes can make the best path oscillate. A potential solution is to wait before updating the path

Used for [OSPF](/notes/ospf) in networking

## Algorithm
```python
S = {s}
Q = V-S
while not Q.empty():
	u <- extractmin(Q)
	S.add(u)
	for v where v in Adj[u]:
		RELAX(u,v)
```

![Pasted image 20250422114632.png](/attachments/Pasted%20image%2020250422114632.png)

## Analysis
Space Complexity is: $O(b^{1+\left\lfloor C^{*}/\epsilon \right\rfloor})$
