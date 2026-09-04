# Probability Distributions
---

**Probability Distributions** are [Functions](/notes/functions) that describe the probabilities a **random variable** has. They can be either discrete or continuous

**Mean** ($\mu$): average expected value
**Standard deviation** ($\sigma$): average squared distance from the mean
**Variance** ($\sigma^{2}$): how clustered the data is

**Probability mass function** (PMF): $P(X=x)$
**Probability density function** (PDF): $P(a\leq X\leq b)$

**Cumulative distribution function** (CDF): $F(x)=P(X\leq x)$
**Quantile**: $F^{-1}(p)$. Returns the smallest $x$ for which $F(x)\geq p$

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
P(X\leq x)&=\int ^x f(x) \, dx 
\end{align}
$$

[Uniform Distributions](/notes/uniform-distributions)
[Exponential Distributions](/notes/exponential-distributions)
[Gamma Distributions](/notes/gamma-distributions)
[Normal Distributions](/notes/normal-distributions)
