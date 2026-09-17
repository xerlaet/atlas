# Random Variables
---

**Random variable** ($X$): A deterministic [function](/notes/functions) mapping an outcome (e.g. heads or tails) to a real number (e.g. 1 or 0)
$$
X:\Omega\to \mathbb{R}
$$

## Types of Random Variables
**Discrete Random Variables** take on a finite set of distinct values
- **Probability mass function** (PMF): Gives the exact probability of a specific value
$$
P(X=x)
$$

**Continuous Random Variables**: Take on an infinite number of values within an interval
- **Probability density function** (PDF): Gives the probability over an interval
$$
P(a\leq X\leq b)
$$

## Core Functions and Metrics
$$
\begin{align}
\text{Mean }\mu &: \sum xP(x) \\
\text{Var }\sigma ^{2} &: \sum (x-\mu )^{2}P(x) \\
\text{Std Dev }\sigma &: \sqrt{\text{Var}}
\end{align}
$$

**Cumulative distribution function** (CDF): Measures the probability that $X$ takes a value less than or equal to $x$
$$
F(x)=P(X\leq x)
$$

**Quantile**: Returns the smallest $x$ for which $F(x)\geq p$
$$
F^{-1}(p)
$$