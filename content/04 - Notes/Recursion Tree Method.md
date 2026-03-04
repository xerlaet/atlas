# Recursion Tree Method
---

To use the **Recursion Tree Method**, draw a tree and sum the costs of all the levels

## Example
$$
\begin{align}
T(n)=2T\left( \frac{n}{2} \right)+n^{2}
\end{align}
$$
the height of the tree is $\log n$, thus
$$
\begin{align}
T(n)&\leq n^{2}\left( 1+2\left( \frac{1}{2} \right)^{2}+4\left( \frac{1}{4} \right)^{2}+\dots \right) \\
&=n^{2}\left( 1+\frac{1}{2}+\frac{1}{4} +\dots\right) \\
&=\Theta (n^{2})
\end{align}
$$

![TikZ Diagram](/attachments/tikz-93789275ed359336c6d91dd609617fa5.svg)
