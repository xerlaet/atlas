# Binomial Distributions
---

A **binomial distribution** counts the number of successes in a fixed number of trials
$$
\begin{align}
n&=\text{number of trials} \\
p&=\text{probability of success} \\
P(x)&=\begin{pmatrix}n \\ x\end{pmatrix}p^x(1-p)^{n-x} \\
E(x)&=np \\
V(x)&=np(1-p)
\end{align}
$$

A special case is when $n\geq 30, p\leq 0.05 \text{ or }p\geq 0.95$ then it acts as a [Poisson Distributions](/notes/poisson-distributions) $\text{Binomial}(n,p)\sim \text{Poisson}(\lambda)$

The functions to calculate PDF and CDF are
$$
\begin{align}
\text{binomialpdf}(n,p,x)=P(X=x) \\
\text{binomialcdf}(n,p,x)=P(X\leq x)
\end{align}
$$
