# Gamma Distributions
---

A **gamma distribution** models the continuous time or distance required for exactly $\alpha$ independent events to occur

$$
\begin{align}
\alpha &= \text{shape parameter (number of target events)} \\
\lambda &= \text{rate parameter (average events per interval)} \\
\text{Support: } x &\geq  0 \\
\text{PDF: }f(x) &= \frac{\lambda  ^{\alpha }}{\Gamma (\alpha )}x^{\alpha -1}e^{-\lambda  x} \\
E(X)&=\frac{\alpha }{\lambda } \\
V(X)&=\frac{\alpha }{\lambda ^{2}}
\end{align}
$$

[Negative Binomial Distributions](/notes/negative-binomial-distributions): the exact discrete analog

**Gamma function**:
$$
\Gamma (\alpha )=\int _{0}^{\infty }t^{\alpha -1}e^{-t} \, dt 
$$