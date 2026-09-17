# Binomial Distributions
---

A **binomial distribution** models the number of successes in a fixed number of independent [Bernoulli trials](/notes/bernoulli-distributions)

$$
\begin{align}
n&=\text{number of trials} \\
p&=\text{probability of success} \\
\text{Support: } x&\in \{ 0,1,2,\dots,n \} \\
P(X=x)&=\binom{n}{x}p^x(1-p)^{n-x} \\
E(X)&=np \\
V(X)&=np(1-p)
\end{align}
$$

[Poisson Distributions](/notes/poisson-distributions): The limit as $n\to \infty$ and $p\to 0$
[Normal Distributions](/notes/normal-distributions): An approximation when $n$ is large via the [Central Limit Theorem](/notes/central-limit-theorem)
