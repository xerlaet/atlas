# Exponential Distributions
---

An **exponential distribution** models the continuous time or distance waited between independent events in a [Poisson Process](/notes/poisson-process)

$$
\begin{align}
\lambda &=\text{rate parameter (frequency of events)} \\
\text{Support: } x &\geq  0 \\
\text{PDF: }f(x)&=\lambda e^{-\lambda x} \\
\text{CDF: }F(x)&=1-e^{-\lambda x} \\
E(X)&=\frac{1}{\lambda} \\
V(X)&=\frac{1}{\lambda^2}
\end{align}
$$

This is the only continuous **memoryless** distribution

[Geometric Distributions](/notes/geometric-distributions): The discrete analog
[Gamma Distributions](/notes/gamma-distributions): The sum of $\alpha$ independent exponential distributions
