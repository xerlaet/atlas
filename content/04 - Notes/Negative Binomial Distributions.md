# Negative Binomial Distributions
---

A **negative binomial distribution** models the number of trials needed to achieve exactly $r$ successes

$$
\begin{align}
r&=\text{target number of successes} \\
p&=\text{probability of success} \\
\text{Support: } x&\in \{ r,r+1,r+2,\dots \} \\
P(X=x)&=\binom{x-1}{r-1}
p^r(1-p)^{x-r}\\
E(X)&=\frac{r}{p} \\
V(X)&=\frac{r(1-p)}{p^2}
\end{align}
$$

[Gamma Distributions](/notes/gamma-distributions): The exact continuous analog
