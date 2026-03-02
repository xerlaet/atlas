# Max Heap
---

**Heapify** is the process of rearranging nodes to form a max heap

```python
A = [...]
for i in range(n/2,0,-1):
	heapify(A,i)
```

The parent of each node $i$ is $\left\lfloor \frac{i}{2} \right\rfloor$

## Complexity
A $n$ element heap has
1. height = $\left\lfloor \log n \right\rfloor$
2. nodes at height $h$ $\leq \left\lceil \frac{n}{2^{h+1}} \right\rceil$ (0 is the bottom, higher going upwards)

Running time is
$$
\begin{align}
&\leq \sum _{h=0}^{\left\lfloor \log n \right\rfloor } \left\lceil \frac{n}{2^{h+1}} \right\rceil O(h) \\
&=O\left( n\sum _{h=0}^{\left\lfloor \log n \right\rfloor } \frac{h}{2^{h}} \right) \\
&=O(n) \text{ since } \sum _{h=0}^{\infty } \frac{h}{2^{h}}=2
\end{align}
$$

---
$$
\begin{align}
\frac{cn}{4}=\frac{1}{2^{0}}+\frac{2}{2^{1}}+\frac{3}{2^{3}}+\frac{4}{2^{3}}\dots \\
2x=\left( 2+\frac{2}{2^{0}}+\frac{3}{2^{1}}+\frac{4}{2^{2}}+\frac{5}{2^{3}}\dots \right) \\
2x-x=2+\frac{1}{2^{0}}+\frac{1}{2^{1}}+\frac{1}{2^{2}}+\frac{1}{2^{3}}\dots \\
 \\
x=2+\sum _{i=0}^{R}\left( \frac{1}{2^{i}} \right)
\end{align}
$$

$\frac{cn}{4}x\leq cn$

This is an example where amortized analysis gives a substantially better runtime than just analyzing the worst case
