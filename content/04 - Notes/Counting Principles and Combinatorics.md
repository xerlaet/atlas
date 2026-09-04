# Counting Principles and Combinatorics
---

When a procedure is composed of $n_{1}$ , $n_{2}$, etc. tasks, there are $n_{1}\cdot n_{2}\dots$ ways to complete that task

The number of r-permutations of a set with $n$ elements is denoted as $P(n,r)$
$$
P(n,r)=\frac{n!}{(n-r)!}
$$

The number of r-combinations of a set with $n$ elements is denoted as $C(n,r)$ or $\begin{pmatrix}n\\r\end{pmatrix}$, which is known as the binomial coefficient
$$
C(n,r)=\frac{n!}{(n-r)!r!}
$$

An important thing to note is that if $r>n$, then both $P(n,r)$ and $C(n,r)$ are $0$

Binomial expansion
$$
(a+b)^{n}=\begin{pmatrix}n\\0\end{pmatrix}a^{n}b^{0}
+\begin{pmatrix}n\\1\end{pmatrix}a^{n-1}b^{1}
+\begin{pmatrix}n\\2\end{pmatrix}a^{n-2}b^{2}
+\dots
+\begin{pmatrix}n\\n\end{pmatrix}a^{0}b^{n}
$$