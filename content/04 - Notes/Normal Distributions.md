# Normal Distributions
---

A **normal distribution** models symmetric data that clusters around a mean. The mathematical limit of large sums of independent random variables

$$
\begin{align}
\mu  &= \text{mean} \\
\sigma ^{2} &= \text{variance} \\
\text{Support: } x &\in  (-\infty ,\infty ) \\
\text{PDF: }f(x) &= \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left( (x-\mu)/\sigma \right) ^{2}} \\
E(X)&= \mu  \\
V(X)&= \sigma ^{2}
\end{align}
$$

**Empirical Rule** (68-95-99.7):
- ~68% of the area lies within $1\sigma$ of $\mu$
- ~95% of the area lies within $2\sigma$ of $\mu$
- ~99.7% of the area lies within $3\sigma$ of $\mu$

See the [Central Limit Theorem](/notes/central-limit-theorem) for when a random distribution can be approximated by a normal distribution

## Standard Normal Distribution
A **standard normal distribution** is a normalized variation where $\mu=0$ and $\sigma=1$. This is used to calculate $Z$-scores. Also the points of inflection occur at -1 and 1

![TikZ Diagram](/attachments/tikz-853e6c64f9f992776da39e92fb02b17a.svg)
$$
f(x,0,1)=\frac{1}{\sqrt{ 2\pi }}e^{-x^2/2}
$$
