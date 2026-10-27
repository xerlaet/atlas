# Confidence Intervals
---

A **confidence interval** is a data-dependent range produced by a procedure with a specified long-run coverage probability for a population parameter.

Parent: [Statistical Inference](/notes/statistical-inference) · Related: [Hypothesis Testing](/notes/hypothesis-testing)

## Meaning of Confidence

For a fixed parameter $\theta$, an exact $100(1-\alpha)\%$ confidence procedure satisfies
$$
P_\theta\!\left(L(\mathbf X)\le\theta\le U(\mathbf X)\right)=1-\alpha.
$$
Some procedures are conservative (coverage at least nominal), while approximate procedures aim for coverage near the nominal level.

Before collecting data, the endpoints are random. After observing data, the interval and the frequentist parameter are fixed.

> [!warning] A 95% confidence interval is not…
> - A statement that there is a 95% posterior probability that $\theta$ lies in this particular observed interval.
> - A range containing 95% of individual observations.
> - A guarantee that sampling bias, confounding, or model misspecification has been addressed.

The repeated-sampling interpretation is discussed in [NIST's confidence-limits overview](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm). For probability statements about a parameter conditional on the observed data, see [Bayesian Inference#Credible Intervals](/notes/bayesian-inference#credible-intervals).

## Estimate ± Margin of Error

Many, but not all, two-sided intervals have the form
$$
\boxed{\text{estimate}\ \pm\ \text{critical value}\times
\text{estimated standard error}}.
$$
The product is the **margin of error**.

| Change, holding other factors fixed | Typical effect on width |
| --- | --- |
| Higher confidence level | Wider interval |
| Larger sample size | Narrower interval |
| Greater population variability | Wider interval |

For a mean with a stable population variance, width scales approximately as $1/\sqrt n$: roughly four times as many observations are needed to halve the margin of error.

## Quantile Convention

Throughout these inference notes:
$$
P(Z\le z_q)=q,\qquad P(T_\nu\le t_{q,\nu})=q.
$$
Thus $z_{0.975}\approx1.96$ and a two-sided $95\%$ $t$ interval uses $t_{0.975,\nu}$.

Some books use $z_{\alpha/2}$ to denote an **upper-tail** critical value instead. Always check which convention is being used.

## Construction with a Pivot

A **pivot** is a function of the data and parameter whose distribution does not depend on unknown parameters.

For an i.i.d. normal sample with unknown standard deviation:
$$
T=\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}.
$$
Starting with
$$
P\!\left(-t_{1-\alpha/2,n-1}\le T\le t_{1-\alpha/2,n-1}\right)
=1-\alpha
$$
and rearranging for $\mu$ yields
$$
\boxed{\bar x\pm t_{1-\alpha/2,n-1}\frac{s}{\sqrt n}}.
$$
For nonnormal observations, this is generally an approximation whose quality depends on the sampling distribution of the studentized mean.

## One-Sided Bounds

If only one direction matters, use a one-sided confidence bound rather than splitting $\alpha$ across two tails.

For a normal-sample mean with unknown standard deviation:
$$
\text{Lower bound: }\quad
\mu\ge\bar x-t_{1-\alpha,n-1}\frac{s}{\sqrt n},
$$
$$
\text{Upper bound: }\quad
\mu\le\bar x+t_{1-\alpha,n-1}\frac{s}{\sqrt n}.
$$
Choose the direction from the research question, not after inspecting which direction favors the observed result.

## Connection to Hypothesis Tests

A confidence set can be constructed by collecting the parameter values that would **not** be rejected by the corresponding level-$\alpha$ tests.

For matching two-sided procedures, testing $H_0:\theta=\theta_0$ rejects when $\theta_0$ lies outside the $100(1-\alpha)\%$ interval. The test and interval must use the same model and construction; this equivalence need not hold for arbitrarily mixed procedures.

## Confidence vs Prediction

- A **confidence interval** targets a population parameter, such as $\mu$.
- A **prediction interval** targets a future observation.

For one future observation independent of an i.i.d. normal sample:
$$
\boxed{\bar x\pm t_{1-\alpha/2,n-1}s\sqrt{1+\frac1n}}.
$$
It is wider than the mean's confidence interval because a future observation has its own individual variability in addition to uncertainty about the mean.

## Procedure Notes

- [Inference for Means](/notes/inference-for-means) — $z$, one-sample $t$, paired $t$, Welch, and pooled intervals.
- [Inference for Proportions](/notes/inference-for-proportions) — Wald and Wilson intervals; two-proportion differences.
- [Inference for Variances](/notes/inference-for-variances) — asymmetric chi-square intervals under normality.
- [Bootstrap](/notes/bootstrap) — simulation-based interval construction.
