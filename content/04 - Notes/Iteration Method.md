# Iteration Method
---

To use the **Iteration Method**, expand the recurrence and look for a pattern (usually a summation)

## Example
$$
\begin{align}
T(n)&=3T\left( \left\lfloor \frac{n}{4} \right\rfloor  \right)+n \\
&=3\left( 3T\left( \left\lfloor \frac{\left\lfloor \frac{n}{4} \right\rfloor }{4} \right\rfloor  \right)+\left\lfloor \frac{n}{4} \right\rfloor   \right)+n \\
&=3^{2}\left( t\left\lfloor \frac{n}{4^{2}} \right\rfloor  \right)+3\left( \left\lfloor \frac{n}{4} \right\rfloor  \right)+n \\
&= n+3\left( \left\lfloor \frac{n}{4} \right\rfloor  \right)+3^{2}\left( \left\lfloor \frac{n}{4^{2}} \right\rfloor  \right) +\dots+3^{\text{log}_{4}n}t\left( \left\lfloor \frac{n}{4^{\text{log}_{4}n}} \right\rfloor  \right) \\
&\leq n+\frac{3}{4}n+\left( \frac{3}{4} \right)^{2}n+\dots+\left( \frac{3}{4} \right)^{\log_{4}n-1}n+\Theta (3^{\log_{4}n}) \\
&\leq n \sum _{k=0}^{\infty }\left( \frac{3}{4} \right)^{k}+\Theta (n^{\log_{4}3}) \\
&=O(n)+o(n) \\
&=O(n)
\end{align}
$$
