# Substitution Method
---

To use the **Substitution Method**, guess a solution (e.g. $O(n\log n)$) and use [Induction](/notes/induction) to prove it

## Example
$$
T(n)=2T\left( \frac{n}{2} \right)+n
$$
**Basis Step**
$n=2,3$
**Inductive Step**
IH: assume it holds true for all $m: 2\leq m<n$
$$
\begin{align}
T(n)&=2T\left( \frac{n}{2} \right)+n \\
&\leq  2\left[ c\left( \frac{n}{2} \right)\log \left( \frac{n}{2} \right) \right]+n \\
&\leq \frac{2cn}{2}\cdot \log \left( \frac{n}{2} \right) +n \\
&=cn\log n-cn +n \\
&\leq cn\log n
\end{align}
$$
