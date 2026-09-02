# Poisson Distributions
---

A **poisson** distribution describes the number of rare events occurring within a fixed time period
$$
\begin{align}
\lambda&=\text{frequency, avg number of events} \\
P(X)&=\frac{e^{-\lambda}\lambda^x}{x!} \\
E(X)&=\lambda \\
V(X)&=\lambda
\end{align}
$$

The functions to calculate PDF and CDF are
$$
\begin{align}
\text{poissonpdf}(\lambda,x)=P(X=x) \\
\text{poissoncdf}(\lambda,x)=P(X\leq x)
\end{align}
$$
