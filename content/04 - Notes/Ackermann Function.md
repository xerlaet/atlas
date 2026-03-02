# Ackermann Function
---

For $k\geq 0,j\geq 1$
$$
A_{k}(j)=
\begin{cases}
j+1 & \text{if }k=0 \\
A_{k-1}^{j+1}(j) & \text{if }k\geq 1
\end{cases}
$$

This function grows extremely fast
$$
\begin{align}
&A_{0}(j)=j+1 \\
&A_{1}(j)=2j+1 \\
&A_{2}(j)=2^{j+1}(j+1)-1 \\
&A_{3}(1)=2047 \\
&A_{4}(1)\geq 10^{80}
\end{align}
$$

The inverse for $n\geq 0$
$$
\alpha (n)=\min \{ k \mid A_{k}(1)\geq n \}
$$
