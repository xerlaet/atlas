# Method of Moments
---

The **method of moments** (MoM) estimates unknown parameters by matching theoretical population moments to empirical sample moments, then solving the resulting equations.

Parent: [Statistical Inference](/notes/statistical-inference) · Compare: [Maximum Likelihood Estimation](/notes/maximum-likelihood-estimation)

## Raw and Central Moments

The $r$-th **raw population moment** is
$$
\mu_r'(\theta)=E_\theta[X^r].
$$
Its empirical counterpart, after observing $x_1,\dots,x_n$, is
$$
m_r=\frac1n\sum_{i=1}^n x_i^r.
$$
In particular, $m_1=\bar x$. A **central moment** is instead measured about the population mean: $E[(X-\mu)^r]$.

> [!important] The second raw moment is not the variance
> $E[X^2]=\sigma^2+\mu^2$. Consequently, $m_2-\bar x^2=\frac1n\sum_i(x_i-\bar x)^2$ is the empirical variance with denominator $n$.

## Procedure

For $k$ unknown parameters $\boldsymbol\theta=(\theta_1,\dots,\theta_k)$:

1. Express $k$ population moments as functions of the parameters.
2. Calculate the corresponding sample moments.
3. Solve
   $$
   \mu_r'(\hat{\boldsymbol\theta}_{\mathrm{MoM}})=m_r,
   \qquad r=1,\dots,k.
   $$
4. Check existence, uniqueness, and whether the solution lies in the parameter space.

The first $k$ raw moments are a common choice, not a guarantee of an identifiable system. This construction is also described in [UW's estimation notes](https://faculty.washington.edu/yenchic/20A_stat512/Lec6_MLE.html).

## Example — Exponential Rate

For [$X\sim\operatorname{Exponential}(\lambda)$](/notes/exponential-distributions), use the **rate** convention, so $E[X]=1/\lambda$.
$$
\frac1{\hat\lambda}=\bar x
\quad\Longrightarrow\quad
\boxed{\hat\lambda_{\mathrm{MoM}}=\frac1{\bar x}}.
$$
If $\bar x=4$ minutes, the estimated rate is $0.25$ events per minute. A scale parameterization would instead estimate the scale by $\bar x$.

## Example — Normal Mean and Variance

For [$X\sim N(\mu,\sigma^2)$](/notes/normal-distributions), there are two unknown parameters:
$$
E[X]=\mu,\qquad E[X^2]=\mu^2+\sigma^2.
$$
Matching moments gives
$$
\hat\mu=\bar x,\qquad
\boxed{\hat\sigma^2_{\mathrm{MoM}}=m_2-m_1^2
=\frac1n\sum_{i=1}^n(x_i-\bar x)^2}.
$$
For data $1,2,3$, $\bar x=2$, $m_2=14/3$, and $\hat\sigma^2_{\mathrm{MoM}}=2/3$.

The usual unbiased sample variance uses $n-1$ instead:
$$
s^2=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)^2,
\qquad
\hat\sigma^2_{\mathrm{MoM}}=\frac{n-1}{n}s^2.
$$
Thus the MoM variance estimator is biased downward, but is consistent for an i.i.d. population with a finite second moment.

## Example — Uniform Endpoint

For [$X\sim\operatorname{Uniform}(0,\theta)$](/notes/uniform-distributions), $E[X]=\theta/2$, so
$$
\boxed{\hat\theta_{\mathrm{MoM}}=2\bar x}.
$$
In contrast, the MLE is $x_{(n)}=\max_i x_i$. For data $1,1,10$, MoM gives $\hat\theta=8$, even though the observed maximum is $10$. Moment matching need not produce a fitted distribution whose support contains every observation.

## Strengths and Limitations

- Often simple to derive and useful as a starting value for numerical likelihood optimization.
- Does not require maximizing a full likelihood, but does require a relationship between moments and parameters.
- Required moments must exist; mean-based matching is unavailable for a Cauchy population.
- Higher-order sample moments can be unstable and sensitive to outliers.
- Consistency follows when sample moments converge and the moment-to-parameter inverse is continuous at the truth. It is not automatic for every moment system.
- MoM and MLE sometimes agree, as in the normal and exponential examples, but need not agree in general.

An estimate alone does not quantify its uncertainty; use sampling theory or an appropriate [Bootstrap](/notes/bootstrap) to obtain a standard error or [interval](/notes/confidence-intervals).
