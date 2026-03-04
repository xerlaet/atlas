# Floyd's Algorithm
---

**Floyd's Algorithm** finds the shortest paths between all pairs of vertices (in a weighted directed graph)

The idea is to construct a series of matrices $D^{(0)},\dots,D^{(n)}$ using increasing subsets of vertices as intermediates

$$
A^{[k]}[i,j]=\min\{ A^{[k-1]}[i,j], A^{[k-1]}[i,k]+A^{[k-1]}[k,j]\}
$$

## Algorithm
```
function floyd(W[1..n, 1..n])
	for k <- 1 to n
		for i <- 1 to n
			for j <- 1 to n
				D[i,j] <- min{D[i,j],D[i,k]+D[k,j]}
```

## Complexity
The time complexity is $\Theta(n^{3})$
The space complexity is $\Theta(n^{2})$

> [!example]
![Pasted image 20250422121832.png](/attachments/Pasted%20image%2020250422121832.png)
![Pasted image 20250422121850.png](/attachments/Pasted%20image%2020250422121850.png)
