# Normal Distributions
---

A **normal distribution** is the most commonly occurring probability distribution

![TikZ Diagram](/attachments/tikz-5ac2a1b8841cf605a8436cd1611acc67.svg)
$$
f(x,\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left( (x-\mu)/\sigma \right) ^{2}}
$$

When $u=0$ and $\sigma=1$ then it is a **standard normal distribution**
$$
f(x,0,1)=\frac{1}{\sqrt{ 2\pi }}e^{-x^2/2}
$$
The points of inflection occur at -1 and 1, about 68% of the area lies between the first standard deviations, about 95% between the second, and about 99.7% between the third
$$
\begin{align}
&Z=\frac{X-\mu}{\sigma} \\
&X=\mu+\sigma Z
\end{align}
$$
The **central limit theorem** states that when $n\geq 30$, you can use a normal distribution to approximate probabilities of $S_{n}$, regardless of what $S$ looks like

independent and identically associated, also finite variance
$$
\text{Binomial}(n,p)\sim \text{Normal}\left( \mu=np,\sigma=\sqrt{ np(1-p) } \right)
$$
