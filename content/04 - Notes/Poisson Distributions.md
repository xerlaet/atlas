# Poisson Distributions
---

A **Poisson distribution** models the number of independent events occurring within a fixed, interval of time or space

$$
\begin{align}
\lambda&=\text{frequency (avg number of events)} \\
\text{Support: } x&\in \{ 0,1,2,\dots \} \\
P(X=x)&=\frac{e^{-\lambda}\lambda^x}{x!} \\
E(X)&=\lambda \\
V(X)&=\lambda
\end{align}
$$

[Exponential Distributions](/notes/exponential-distributions): If the event counts follow a Poisson distribution, the time between those events will follow an Exponential distribution (together forming a [Poisson Process](/notes/poisson-process))
