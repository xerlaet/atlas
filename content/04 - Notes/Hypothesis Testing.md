# Hypothesis Testing
---

A **hypothesis test** assesses whether the observed data are sufficiently incompatible with a proposed population model to reject it using a prespecified decision rule.

Parent: [Statistical Inference](/notes/statistical-inference) · Related: [Confidence Intervals](/notes/confidence-intervals)

## Null and Alternative Hypotheses

- **Null hypothesis** $H_0$: The benchmark claim being tested.
- **Alternative hypothesis** $H_a$: The departure from that benchmark that the test is designed to detect.

For a population mean:

| Question | Null | Alternative |
| --- | --- | --- |
| Is the mean different? | $\mu=\mu_0$ | $\mu\ne\mu_0$ |
| Is the mean larger? | $\mu\le\mu_0$ | $\mu>\mu_0$ |
| Is the mean smaller? | $\mu\ge\mu_0$ | $\mu<\mu_0$ |

For the usual one-sided $z$ and $t$ tests, the null reference distribution is calibrated at the boundary $\mu=\mu_0$. Hypotheses concern **population parameters**, not observed sample statistics.

## Test Statistic and p-Value

A **test statistic** measures departure from the null. A common form is
$$
\text{test statistic}
=\frac{\text{estimate}-\text{null value}}{\text{standard error appropriate under }H_0}.
$$
Under the null model, its sampling distribution determines how unusual the observed value is.

The **$p$-value** is the probability, assuming the null model, of a test statistic at least as extreme as the observed one, in the direction(s) specified by $H_a$.

For a symmetric $t_\nu$ reference distribution and observed value $t_{\mathrm{obs}}$:
$$
\begin{aligned}
H_a:\theta>\theta_0 &: \quad p=P(T_\nu\ge t_{\mathrm{obs}}),\\
H_a:\theta<\theta_0 &: \quad p=P(T_\nu\le t_{\mathrm{obs}}),\\
H_a:\theta\ne\theta_0 &: \quad p=2P(T_\nu\ge|t_{\mathrm{obs}}|).
\end{aligned}
$$
The doubled-tail formula is not a universal formula for every two-sided test, especially with asymmetric or discrete reference distributions.

> [!warning] What a p-value does not mean
> It is not $P(H_0\mid\text{data})$, the probability that the result happened “by chance,” or the probability that repeating the study will produce the same conclusion.

## Decision Rule

Choose a **significance level** $\alpha$ before examining the results:
- If $p\le\alpha$, **reject $H_0$**.
- If $p>\alpha$, **fail to reject $H_0$**.

Failing to reject is not proof of the null. The data may simply be too imprecise to distinguish meaningful alternatives.

## Errors and Power

| Reality / Decision | Fail to reject $H_0$ | Reject $H_0$ |
| --- | --- | --- |
| $H_0$ true | Correct decision | **Type I error** |
| $H_0$ false | **Type II error** | Correct detection |

- **Type I error rate**: Controlled at or below $\alpha$ by a valid level-$\alpha$ procedure.
- **Type II error probability** $\beta(\theta)$: Probability of not rejecting at a particular alternative value.
- **Power** $1-\beta(\theta)$: Probability of rejecting at that alternative.

Power generally increases with larger samples, larger true effects, less noise, or a larger $\alpha$. Lowering $\alpha$ while holding the design fixed typically reduces power.

## Worked Example — One Mean

Suppose an independent sample from a normal population gives $n=25$, $\bar x=10$, and $s=2$. Test
$$
H_0:\mu=9,\qquad H_a:\mu\ne9,\qquad\alpha=0.05.
$$
Using [a one-sample t test](/notes/inference-for-means#one-mean-unknown-population-standard-deviation):
$$
t=\frac{10-9}{2/\sqrt{25}}=2.5,\qquad\nu=24.
$$
The two-sided $p$-value is approximately $0.0197$, so reject $H_0$. The estimated difference is $1$ unit; its practical importance requires subject-matter context.

The matching 95% interval for $\mu$ is approximately $(9.17,10.83)$, which excludes $9$.

## Reporting and Common Pitfalls

1. Report the estimate, interval, test statistic, degrees of freedom where relevant, and $p$-value—not only “significant.”
2. Distinguish **statistical significance** from **practical importance**. Tiny effects can be significant with very large samples.
3. Choose one- or two-sided hypotheses in advance. Do not halve a two-sided $p$-value only because the observed effect points in a convenient direction.
4. Account for multiple comparisons. For $m$ planned tests, testing each at $\alpha/m$ (Bonferroni) controls the probability of at least one Type I error at $\alpha$ without requiring independence.
5. Repeatedly inspecting data and stopping when $p<0.05$ invalidates ordinary fixed-sample error guarantees unless a sequential design is used.
6. A test of association is not, by itself, evidence of causation.

For categorical data see [Chi-Square Tests](/notes/chi-square-tests); for specific numerical formulas see [Inference for Means](/notes/inference-for-means), [Inference for Proportions](/notes/inference-for-proportions), and [Inference for Variances](/notes/inference-for-variances).
