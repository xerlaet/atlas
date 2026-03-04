# Fibonacci Sequence
---

$$
\begin{gather}
F_{n}=F_{n-1}+F_{n-2} \qquad F_{0}=0,F_{1}=1 \\[1em]
0,1,1,2,3,5,8,13,21\dots
\end{gather}
$$

Using recursion naively results in exponential time complexity
$$
T(n)=T(n-1)+T(n-2)+1
$$

[Dynamic Programming](/notes/dynamic-programming) allows for linear time and even linear space (if you only care about calculating one value since you just need current, previous, and previous previous!)
$$
F(n)=F(n-1)+F(n-2)
$$
