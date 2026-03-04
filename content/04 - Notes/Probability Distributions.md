# Probability Distributions
---

**Probability Distributions** are functions that describe the probabilities that a **random variable** has, such as the distribution of a D6 shown below

| X    | 1             | 2             | 3             | 4             | 5             | 6             |
| ---- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| P(X) | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ |
In this case the distribution is discrete, however that isn't always the case.

For a probability distribution, the **expected value** or the mean ($\mu$) is the average value that is expected every time and the **standard deviation** ($\sigma$) describes how spread out the data is (variance is also useful which is the standard deviation squared)

The **probability mass function**, also known as PMF, is the probability that a specific outcome occurs, as opposed to the **cumulative distribution function**, also known as CDF, is the probability that any outcomes less than or equal to that specific outcome occurs

Probability distributions may be continuous or discrete, although in both cases the total probability of every outcome is $1$

Also important is that a **Bernoulli trial** is an experiment where there are only two outcomes

## Discrete Probability Distributions
Given a discrete probability distribution $f(x)$
$$
\begin{align}
\mu  & =\sum x_{i}f(x_{i}) \\
\sigma ^{2} & =\sum (x_{i}-\mu )^{2}f(x_{i}) \\
P(X=x)&=P(x)\\
P(X\leq x)&=\sum_{y\leq x}P(y)
\end{align}
$$
There are various common types of distributions, which can be generalized to a surprisingly large amount of problems

A **Binomial** distribution counts the number of successes in a fixed number of trials
$$
\begin{align}
n&=\text{number of trials} \\
p&=\text{probability of success} \\
P(x)&=\begin{pmatrix}n \\ x\end{pmatrix}p^x(1-p)^{n-x} \\
E(x)&=np \\
V(x)&=np(1-p)
\end{align}
$$
The functions to calculate PDF and CDF are
$$
\begin{align}
\text{binomialpdf}(n,p,x)=P(X=x) \\
\text{binomialcdf}(n,p,x)=P(X\leq x)
\end{align}
$$

A **Negative Binomial** distribution counts the number of trials needed to see a fixed number of successes. A **Geometric** distribution is where the number of successes is $1$
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

A **Poisson** distribution describes the number of rare events occurring within a fixed time period
$$
\begin{align}
\lambda&=\text{frequency, avg number of events} \\
P(X)&=\frac{e^{-\lambda}\lambda^x}{x!} \\
E(X)&=\lambda \\
V(X)&=\lambda
\end{align}
$$
The functions to calculate PDF and CDF are
$$
\begin{align}
\text{poissonpdf}(\lambda,x)=P(X=x) \\
\text{poissoncdf}(\lambda,x)=P(X\leq x)
\end{align}
$$

A special case is when $n\geq 30, p\leq 0.05 \text{ or }p\geq 0.95$ then $\text{Binomial}(n,p)\sim \text{Poisson}(\lambda)$

## Continuous Probability Distributions
Given a continuous probability distribution $f(x)$
$$
\begin{align}
\mu&=\int xf(x) \, dx  \\
\sigma^2&=\int (x-\mu)^2f(x) \, dx \\
P(X=x)&=0 \\
P(X\leq x)&=\int ^X f(x) \, dx 
\end{align}
$$

Just like discrete distributions, there are various families of distributions that are very useful

A **uniform distribution** $\dots$

An **exponential distribution** is used to model time
$$
\begin{align}
\lambda &=\text{frequency parameter} \\
f(x)&=\lambda e^{-\lambda x},x>0 \\
E(X)&=\frac{1}{\lambda} \\
V(X)&=\frac{1}{\lambda^2}
\end{align}
$$

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

![Pasted image 20240308174051.png](/attachments/Pasted%20image%2020240308174051.png)