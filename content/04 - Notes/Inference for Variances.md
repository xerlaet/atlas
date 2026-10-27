# Inference for Variances
---

Inference about a population variance or the ratio of two population variances.

Parent: [Statistical Inference](/notes/statistical-inference) · Related: [Inference for Means](/notes/inference-for-means), [Chi-Square Tests](/notes/chi-square-tests)

> [!warning] Normality matters especially here
> The exact chi-square and $F$ results below require independent samples from normal populations. They can be sensitive to nonnormality; a large sample does not automatically justify using the same reference distributions.

Use the usual sample variance
$$
s^2=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)^2.
$$
Here $\chi^2_{q,\nu}$ and $F_{q,\nu_1,\nu_2}$ denote **lower-tail $q$-quantiles**:
$$
P(\chi^2_\nu\le\chi^2_{q,\nu})=q,\qquad
P(F_{\nu_1,\nu_2}\le F_{q,\nu_1,\nu_2})=q.
$$

## One Population Variance — Chi-Square Test

For an i.i.d. normal sample:
$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1}.
$$
To test $H_0:\sigma^2=\sigma_0^2$, calculate
$$
\boxed{q_{\mathrm{obs}}=\frac{(n-1)s^2}{\sigma_0^2}},\qquad\nu=n-1.
$$
At significance level $\alpha$:

| Alternative | Rejection region |
| --- | --- |
| $\sigma^2>\sigma_0^2$ | $q_{\mathrm{obs}}>\chi^2_{1-\alpha,\nu}$ |
| $\sigma^2<\sigma_0^2$ | $q_{\mathrm{obs}}<\chi^2_{\alpha,\nu}$ |
| $\sigma^2\ne\sigma_0^2$ | $q_{\mathrm{obs}}<\chi^2_{\alpha/2,\nu}$ or $q_{\mathrm{obs}}>\chi^2_{1-\alpha/2,\nu}$ |

These variance-test regions and their interval connection are given in [NIST's chi-square variance guide](https://www.itl.nist.gov/div898/handbook/eda/section3/eda358.htm).

## Confidence Interval for a Variance

Rearranging the chi-square pivot gives a two-sided $100(1-\alpha)\%$ interval:
$$
\boxed{
\left(
\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}},
\frac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}}
\right)
}.
$$
Notice that the **larger** chi-square quantile appears in the **lower** endpoint's denominator. The interval is generally asymmetric.

For a confidence interval for the standard deviation $\sigma$, take square roots of both endpoints.

## Two Population Variances — F Test

For two independent normal samples:
$$
\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}
\sim F_{n_1-1,n_2-1}.
$$
For $H_0:\sigma_1^2=\sigma_2^2$:
$$
\boxed{f_{\mathrm{obs}}=\frac{s_1^2}{s_2^2}},\qquad
\nu_1=n_1-1,\quad\nu_2=n_2-1.
$$
For a two-sided equal-tail test, reject if
$$
f_{\mathrm{obs}}<F_{\alpha/2,\nu_1,\nu_2}
\quad\text{or}\quad
f_{\mathrm{obs}}>F_{1-\alpha/2,\nu_1,\nu_2}.
$$
For $\sigma_1^2>\sigma_2^2$, reject above $F_{1-\alpha,\nu_1,\nu_2}$; for $\sigma_1^2<\sigma_2^2$, reject below $F_{\alpha,\nu_1,\nu_2}$.

Keep the group ordering and degrees of freedom consistent. If the ratio is inverted, the numerator and denominator degrees of freedom must also be swapped. Some references use **upper-tail** $F$ subscripts instead; [NIST explicitly notes that convention difference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda359.htm).

## Confidence Interval for a Variance Ratio

Let $R=s_1^2/s_2^2$. A $100(1-\alpha)\%$ interval for $\sigma_1^2/\sigma_2^2$ is
$$
\boxed{
\left(
\frac{R}{F_{1-\alpha/2,\nu_1,\nu_2}},
\frac{R}{F_{\alpha/2,\nu_1,\nu_2}}
\right)
}.
$$
More generally, to test a positive null ratio $H_0:\sigma_1^2/\sigma_2^2=r_0$, use $f_{\mathrm{obs}}=R/r_0$.

## Alternatives and Interpretation

Levene's test and its median-centered Brown–Forsythe variant assess equality of group variances with less sensitivity to nonnormality than the classical $F$ test.

If the goal is comparing **means**, do not confuse that with comparing variances. [Welch's method](/notes/inference-for-means#two-independent-means-welchs-method) does not require equal population variances.

The chi-square variance test here is different from Pearson's [categorical goodness-of-fit and independence tests](/notes/chi-square-tests), despite using the same distribution family.
