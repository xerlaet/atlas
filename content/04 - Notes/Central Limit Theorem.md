# Central Limit Theorem
---

The distribution of sample means approximates a [normal distribution](/notes/normal-distributions) as the sample size gets larger, regardless of the shape of the population's original distribution

It's so important because we can perform statistical inference on populations when we don't know the underlying distribution!

## Formal Definition
Let $X_{1},\dots,X_{n}$ be independently and identically distributed random variables drawn from a population with mean $\mu$ and variance $\sigma^{2}<\infty$

If we take the average of $n$ random variables:
$$
\bar{X}=\frac{1}{n}\sum _{i=1}^{n}X_{i}
$$
As $n\to \infty$, the distribution of the sample mean converges to a normal distribution:
$$
\bar{X}\sim N\left( \mu , \frac{\sigma ^{2}}{n} \right)
$$

## The Sample Sum
If we look at the total sum of the variables:
$$
S_{n}=\sum _{i=1}^{n}X_{i}
$$
As $n\to \infty$, the sum converges to:
$$
S_{n}\sim N(n\mu ,n\sigma ^{2})
$$

## The Standardized Form
To actually calculate probabilities, we typically standardize the sample mean into a $Z$-score, which converges to the standard normal distribution $N(0,1)$:
$$
Z=\frac{\bar{X}-\mu }{\sigma / \sqrt{n}}\sim N(0,1)
$$

## Practical Application
In practice, a sample size of $n\geq 30$ is generally considered large enough unless the underlying population is extremely skewed

This theorem guarantees that as the number of [Monte Carlo simulations](/notes/monte-carlo-estimation) ($n$) increases, the estimated long-run average approaches the true expected value with error bounds shrinking at a rate of $1/ \sqrt{n}$
