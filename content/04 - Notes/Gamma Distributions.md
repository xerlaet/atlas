# Gamma Distributions
---

A **gamma distribution** is used when a procedure consists of a set of $\alpha$ exponential independent steps
$$
\begin{align}
\alpha &= \text{shape parameter} \\
\lambda &= \text{frequency parameter} \\
f(x) &= \frac{\lambda ^{\alpha }}{\Gamma (\alpha )}x^{\alpha -1}e^{-\lambda x},x>0 \\
E(T)&=\frac{n}{\lambda} \\
V(T)&=\frac{n}{\lambda^2}
\end{align}
$$
A shortcut for calculating gamma distributions is to use poisson distributions
$$
\begin{align}
P(T>t)=P(X<\alpha) \\
P(T\leq t)=P(X\geq \alpha)
\end{align}
$$
