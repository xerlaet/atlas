# Probability Distributions
---

**Probability Distributions** are [Functions](/notes/functions) that describe the probabilities a **random variable** has. They can be either discrete or continuous.

The **mean** ($\mu$) is the average value that is expected
The **standard deviation** ($\sigma$) describes how spread out the data is (variance is $\sigma^{2}$)

The **probability mass function** (PMF), is the probability that a specific outcome occurs for discrete variables. The **probability density function** (PDF) is the same thing but for continuous variables

The **cumulative distribution function** (CDF) gives $F(x)=P(X\leq x)$. The **quantile** is the inverse of the CDF giving lower bounds

## Discrete Probability Distributions
Given a discrete probability distribution $f(x)$
$$
\begin{align}
\mu  & =\sum x_{i}f(x_{i}) \\
\sigma ^{2} & =\sum (x_{i}-\mu )^{2}f(x_{i}) \\
P(X=x)&=P(x)\\
P(X\leq x)&=\sum_{y\leq x}P(y)
\end{align}
$$

[Binomial Distributions](/notes/binomial-distributions)
[Negative Binomial Distributions](/notes/negative-binomial-distributions)
[Poisson Distributions](/notes/poisson-distributions)

## Continuous Probability Distributions
Given a continuous probability distribution $f(x)$
$$
\begin{align}
\mu&=\int xf(x) \, dx  \\
\sigma^2&=\int (x-\mu)^2f(x) \, dx \\
P(X=x)&=0 \\
P(X\leq x)&=\int ^X f(x) \, dx 
\end{align}
$$

[Uniform Distributions](/notes/uniform-distributions)
[Exponential Distributions](/notes/exponential-distributions)
[Gamma Distributions](/notes/gamma-distributions)
[Normal Distributions](/notes/normal-distributions)
