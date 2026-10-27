# Inference for Proportions
---

Inference about the probability of a binary outcome, using counts of successes and failures.

Parent: [Statistical Inference](/notes/statistical-inference) · Concepts: [Confidence Intervals](/notes/confidence-intervals), [Hypothesis Testing](/notes/hypothesis-testing)

## Model and Notation

For $n$ independent [Bernoulli trials](/notes/bernoulli-distributions) with common success probability $p$:
$$
X\sim\operatorname{Binomial}(n,p),\qquad
\hat p=\frac Xn,\qquad
E[\hat p]=p,\qquad
\operatorname{SE}(\hat p)=\sqrt{\frac{p(1-p)}n}.
$$
After observing $x$ successes, write $\hat p=x/n$ for the realized estimate. In two samples, use $x_j,n_j,\hat p_j=x_j/n_j$ for group $j$.

All $z_q$ values below use the [lower-tail quantile convention](/notes/confidence-intervals#quantile-convention).

## One Proportion — Wald Interval

The basic normal-approximation interval is
$$
\boxed{\hat p\pm z_{1-\alpha/2}
\sqrt{\frac{\hat p(1-\hat p)}n}}.
$$
A common diagnostic for this approximation is at least $10$ observed successes and $10$ observed failures:
$$
n\hat p=x\ge10,\qquad n(1-\hat p)=n-x\ge10.
$$
This is a rule of thumb, not a coverage guarantee.

The Wald interval can extend beyond $[0,1]$ or have poor coverage. At $x=0$ or $x=n$, its estimated standard error is zero even though the true probability is not known exactly.

## One Proportion — Wilson Interval

Let $z=z_{1-\alpha/2}$. The **Wilson score interval** is
$$
\boxed{
\frac{
\hat p+\frac{z^2}{2n}
\ \pm\
z\sqrt{\frac{\hat p(1-\hat p)}n+\frac{z^2}{4n^2}}
}{
1+\frac{z^2}n
}}.
$$
Unlike the Wald construction, it stays within the allowed probability range and remains nondegenerate for all-success or all-failure samples. It is obtained by inverting the one-proportion score test and often has better coverage; see [NIST's proportion confidence intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm).

For $x=80$ out of $n=100$, $\hat p=0.80$ and the 95% Wilson interval is approximately $(0.711,0.867)$.

For very small counts, an exact binomial interval is another option. “Exact” refers to binomial-model coverage control, not to perfect knowledge of $p$; discrete intervals can be conservative.

## One Proportion — z Test

For $H_0:p=p_0$, where $0<p_0<1$:
$$
\boxed{z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}}.
$$
Check expected counts **under the null**:
$$
np_0\ge10,\qquad n(1-p_0)\ge10.
$$
Use the standard-normal reference distribution for approximate $p$-values. If the approximation is inadequate, use a test based on the binomial distribution.

> [!important] The standard errors differ
> The Wald **interval** plugs in $\hat p$. The score **test** uses $p_0$, because its reference distribution is calculated under the null. Inverting the score test gives the Wilson interval, not the Wald interval.

## Two Independent Proportions — Interval for a Difference

For two independent binomial samples, estimate $p_1-p_2$ by $\hat p_1-\hat p_2$:
$$
\boxed{
(\hat p_1-\hat p_2)\pm z_{1-\alpha/2}
\sqrt{\frac{\hat p_1(1-\hat p_1)}{n_1}
+\frac{\hat p_2(1-\hat p_2)}{n_2}}
}.
$$
This is an **unpooled**, large-sample Wald interval. Check that each sample has sufficiently many observed successes and failures. As with the one-proportion Wald interval, small counts or probabilities near the boundaries can lead to poor performance; score-based alternatives are available.

## Two Independent Proportions — Test of Equality

For $H_0:p_1=p_2$, the null assumes one common, unknown probability. Estimate it by the pooled proportion
$$
\hat p_{\mathrm{pool}}=\frac{x_1+x_2}{n_1+n_2}.
$$
Then
$$
\boxed{
z=\frac{\hat p_1-\hat p_2}
{\sqrt{\hat p_{\mathrm{pool}}(1-\hat p_{\mathrm{pool}})
\left(\frac1{n_1}+\frac1{n_2}\right)}}
}.
$$
Check $n_j\hat p_{\mathrm{pool}}\ge10$ and $n_j(1-\hat p_{\mathrm{pool}})\ge10$ for both groups.

- **Interval for a difference**: Estimate each group's variance separately.
- **Equality test**: Pool because equality is assumed under $H_0$.

This pooled test formula is specifically for a **zero** difference. Do not insert a nonzero null difference into the numerator while retaining this same pooled denominator.

## Important Design Limits

- Paired binary outcomes need a paired analysis, such as McNemar's test—not the independent two-proportion test.
- Clustered or survey-weighted data require standard errors reflecting the design.
- Sampling a substantial fraction of a finite population without replacement requires a finite-population treatment.
- For sparse independent $2\times2$ tables, Fisher's exact test is an alternative. See also [Chi-Square Tests](/notes/chi-square-tests).
