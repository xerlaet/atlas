# Negative Binomial Distributions
---

A **negative binomial** distribution counts the number of trials needed to see a fixed number of successes. A **geometric** distribution is where the number of successes is $1$
$$
\begin{align}
k&=\text{number of successes} \\
p&=\text{probability of success} \\
P(x)&=\begin{pmatrix}x-1\\ k-1\end{pmatrix}
p^k(1-p)^{x-k}\\
E(x)&=\frac{k}{p} \\
V(x)&=\frac{k(1-p)}{p^2}
\end{align}
$$

The functions to calculate PDF and CDF are
$$
\begin{align}
\text{geometricpdf}(p,x)=P(X=x) \\
\text{geometriccdf}(p,x)=P(X\leq x)
\end{align}
$$
