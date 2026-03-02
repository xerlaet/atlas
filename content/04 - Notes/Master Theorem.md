# Master Theorem
---

The **Master Theorem** is a shortcut for solving [[Recurrence Relations]] given they meet the following requirements
$$\begin{align}
&T(n)=aT\left( \frac{n}{b} \right)+f(n) \\
&\text{ where } a\in \mathbb{Z}^{+},b>1, \text{ and }f(n) \text{ is asymptotically postive}
\end{align}$$

The formula for the cost can be found with a recursion tree
$$
T(n)=\Theta (n^{\log _{b}a})+\sum _{i=0}^{\log n-1}a^{i}f\left( \frac{n}{b^{i}} \right)
$$

With analysis the following three cases emerge:
$$
\begin{alignat*}{2}
&1. f(n)=O(n^{\log_{b}a-\epsilon})&&\to T(n)=\Theta(n^{\log_{b}a}) \\
&2. f(n)=\Theta(n^{\log_{b}a})&&\to T(n)=\Theta(n^{\log_{b}a}\log n) \\
&3. f(n)=\Omega(n^{\log_{b}a+\epsilon})\text{ AND }af\left( \frac{n}{b} \right)\leq cf(n) \text{ where }c<1&&\to T(n)=\Theta(f(n))
\end{alignat*}
$$

In other words
1. The work increases exponentially down the tree, so the cost is mainly just the leaves
2. The work stays the same down the tree, so the cost is the sum of each level
3. The work decreases exponentially down the tree, so the cost is mainly just the root

## Example
**Case 1**
$$
\begin{align}
T(n)&=3T\left( \frac{n}{2} \right)+\Theta (n) \\
&a=3,b=2 \\
&\log_{b}a>1,f(n)=\Theta (n) \\
T(n)&=\Theta (n^{\log_{2}3})
\end{align}
$$

**Case 2**
$$
\begin{align}
T(n)&=2T\left( \frac{n}{2} \right)+\Theta (n) \\
&a=2,b=2 \\
&\log_{b}a=1,f(n)=\Theta (n) \\
T(n)&=O(n\log n)
\end{align}
$$

**Case 3**
$$
\begin{align}
T(n)&=3T\left( \frac{n}{4} \right)+n\log n \\
&a=3,b=4 \\
&\log_{b}a<1,f(n)=\Theta (n\log n) \\
T(n)&=\Theta (n\log n)
\end{align}
$$
