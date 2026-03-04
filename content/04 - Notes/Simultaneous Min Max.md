# Simultaneous Min Max
---

![Pasted image 20250311011304.png](/attachments/Pasted%20image%2020250311011304.png)

The recurrence relation is
$$
\begin{align}
T(2)&=1 \\
T(n)&=2T\left( \frac{n}{2} \right)+2 \\
&=2+2\left\{  2+2T\left( \frac{n}{4} \right)  \right\} \\
&=2+4+8+\dots+2^{k-1}+2^{k-1}T(2) \\
&=\sum _{i=1}^{k-1}2^{i}+2^{k-1} \\
&=2\left( \sum _{i=0}^{k-2}2^{i} \right)+2^{k-1} \\
&=2(2^{k-1}-1)+2^{k-1} \\
&=2^{k}+2^{k-1}-2 \\
&=n+\frac{n}{2}-2 \\
&=\frac{3n}{2}-2
\end{align}
$$
