# Karatsuba Algorithm
---

Take two $n$ bit integers $x$ and $y$, and compute the product $x\cdot y$. The old school algorithm to beat is $\Theta(n^{2})$. The current state of the art is $O(n\log n)$

The **Karatsuba algorithm** is a fast multiplication algorithm utilizing [[Divide and Conquer]] to achieve a runtime of $n^{\log_{2}3}\approx n^{1.58}$ compared with the traditional algorithm's $n^{2}$ runtime

Idea:
$x=A\cdot2^{n/2}+B$
$y=C\cdot 2^{n/2}+D$
$$
x\cdot y=AC\cdot 2^{n}+(AD+BC)\cdot 2^{n/2}+BD
$$
 The recurrence is
$$
\begin{align}
T(1)&=1\\
T(n)&=4T\left( \frac{n}{2} \right)+cn \\
T(n)&=O(n^{2})\gets \text{ not good}
\end{align}
$$ 
This needs to be improved to be viable. $AD+BC$ can be replaced with an equivalent expression with four additions and just one multiplication
$$
x\cdot y=AC\cdot 2^{n}+((A-B)(D-C)+AC+BD)\cdot 2^{n/2}+BD
$$
The recurrence then becomes
$$
\begin{align}
T(1)&=1\\
T(n)&=3T\left( \frac{n}{2} \right)+cn \\
T(n)&=O(n^{\log 3}) \approx n^{1.59}
\end{align}
$$ 
