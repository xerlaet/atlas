# Monte Carlo Estimation
---

**Monte Carlo Estimation** is the mathematical equivalent of throwing darts. It is a brute-force method used when a problem is too complex to solve with exact algebra or calculus

Instead of solving an equation directly, you build a computer simulation of the problem, run it millions of times using random numbers, and average the results. Because of the **Law of Large Numbers**, if you run enough random trials, the average of your random results will converge on the true, exact mathematical answer.

## Generating Random Variables
To run a simulation, we must first generate random numbers the way computers know how ($U \sim \text{Uniform}(0,1)$) and "bend" $U$ into the shape we want

**Inverse Transform Method**: Used when the CDF $F(x)$ is analytically invertible
1. Generate $U\in [0,1]$
2. Return $X = F^{-1}(U)$

**Rejection Method** (Accept-Reject): Used when the CDF is too complex, but the PDF $f(x)$ is known and bounded by a box where $x \in [a,b]$ and $y \in [0,c]$
1. Generate a random point $(X, Y)$ within the bounding box
2. If $Y \leq f(X)$, accept $X$ as a valid sample
3. If $Y > f(X)$, reject the point and repeat

**Discrete Method** (Thresholding): For discrete variables, divide the interval $[0,1]$ into sub-intervals of length $p_i$. Generate $U$ and find the smallest $x$ where the cumulative probability $F(x) > U$ (which boundary did the point land in)

## Estimating Probabilities and Means
By the **Law of Large Numbers**, long-run sample averages converge to the true expected values

**Probabilities**: Estimated by the proportion of times an event $A$ occurs in $N$ simulations
$$
\hat{p} = \frac{1}{N} \sum_{i=1}^{N} I(X_i \in A)
$$

**Means**: Estimated by the average of the simulated variables
$$
\hat{\mu} = \bar{X} = \frac{1}{N} \sum_{i=1}^{N} X_i
$$

**Accuracy**: The standard deviation of the estimator always decreases at a rate of $1/\sqrt{N}$

**Required Sample Size** ($N$): To guarantee a margin of error $\epsilon$ with probability $1-\alpha$, the required number of simulations is:
$$
N = \left\lceil p^*(1-p^*) \left( \frac{z_{\alpha/2}}{\epsilon} \right)^2 \right\rceil
$$

>[!note]
If no preliminary probability estimate $p^*$ is available, use $p^* = 0.5$ to calculate the most conservative upper bound

## Monte Carlo Integration
A stochastic method for evaluating definite integrals $\int g(x) dx$, especially useful in high-dimensional spaces where standard calculus fails.

To find the area under the curve, multiple the width by the average height
$$
\int _{a}^{b}g(x) \, dx \approx (b-a) \frac{1}{N} \sum _{i=1}^{N}g(X_{i})
$$

Rather than basic uniform sampling, we can do something called **importance sampling** where we sample from an arbitrary density $f(x)$ to drastically reduce variance. The closer $f(x)$ matches the shape of $g(x)$, the more accurate the estimate:
$$
\int g(x) dx = E\left[\frac{g(X)}{f(X)}\right] \approx \frac{1}{N} \sum_{i=1}^{N} \frac{g(X_i)}{f(X_i)}
$$
