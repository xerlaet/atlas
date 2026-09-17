# Geometric Distributions
---

A **geometric distribution** models the number of trials needed to achieve the first success

$$
\begin{align}
p&=\text{probability of success} \\
\text{Support: } x&\in \{ 1,2,3,\dots \} \\
P(X=x)&=p(1-p)^{x-1}\\
E(X)&=\frac{1}{p} \\
V(X)&=\frac{1-p}{p^2}
\end{align}
$$

This distribution is **memoryless**: Flipping 10 tails in a row does not change the probability of getting a heads on the 11th flip

[Negative Binomial Distributions](/notes/negative-binomial-distributions): The sum of $r$ independent geometric distributions
[Exponential Distributions](/notes/exponential-distributions): The exact continuous analog
