# Inference for Means
---

Confidence intervals and hypothesis tests for one population mean, differences between independent means, and paired differences.

Parent: [Statistical Inference](/notes/statistical-inference) · Concepts: [Confidence Intervals](/notes/confidence-intervals), [Hypothesis Testing](/notes/hypothesis-testing)

## Notation and Conditions

- $\bar x$: observed sample mean.
- $s^2=\frac1{n-1}\sum_i(x_i-\bar x)^2$: usual sample variance, for $n>1$.
- $\mu_0$: hypothesized population mean.
- $\Delta_0$: hypothesized difference $\mu_1-\mu_2$, usually $0$.
- $\nu$: degrees of freedom.
- $z_q$ and $t_{q,\nu}$: **lower-tail $q$-quantiles**, as defined in [Confidence Intervals#Quantile Convention](/notes/confidence-intervals#quantile-convention).

The formulas below assume independent observations within each sample, except for the explicitly paired design. The two independent-sample procedures also require independence **between** groups.

For small samples, normal-model assumptions matter. For large samples, mean-based approximations can be useful with finite variance, but there is no universal “$n\ge30$ means safe” rule. Severe skewness and outliers may require more data or a different analysis.

## One Mean — Unknown Population Standard Deviation

For an i.i.d. normal sample:
$$
T=\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}.
$$
For $H_0:\mu=\mu_0$:
$$
\boxed{t=\frac{\bar x-\mu_0}{s/\sqrt n}},\qquad\nu=n-1.
$$
A two-sided $100(1-\alpha)\%$ confidence interval is
$$
\boxed{\bar x\pm t_{1-\alpha/2,n-1}\frac{s}{\sqrt n}}.
$$
This is exact under normality and generally approximate otherwise. Replacing $\sigma$ by $s$ introduces uncertainty, which the $t$ distribution accounts for under the normal model.

### Worked Example

For $n=25$, $\bar x=10$, $s=2$, and 95% confidence:
$$
\widehat{\operatorname{SE}}=\frac2{\sqrt{25}}=0.4,\qquad
t_{0.975,24}\approx2.064.
$$
Therefore:
$$
10\pm2.064(0.4)=10\pm0.826
\quad\Longrightarrow\quad(9.17,10.83).
$$
This interval targets the **population mean**, not the lifetimes or measurements of individual units.

## One Mean — Known Population Standard Deviation

If the population standard deviation $\sigma$ is genuinely known:
$$
\boxed{z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}},\qquad
\boxed{\bar x\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}}.
$$
The normal reference distribution is exact for normal observations and otherwise relies on a suitable large-sample approximation. A large sample does not make $\sigma$ “known”; with unknown $\sigma$, the $t$ procedure remains appropriate.

## Two Independent Means — Welch's Method

For $\Delta=\mu_1-\mu_2$, estimate the difference by $\bar x_1-\bar x_2$. Do **not** assume equal population variances:
$$
\widehat{\operatorname{SE}}_W
=\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}.
$$
The Welch–Satterthwaite approximate degrees of freedom are
$$
\nu=
\frac{\left(\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}\right)^2}
{\frac{(s_1^2/n_1)^2}{n_1-1}
+\frac{(s_2^2/n_2)^2}{n_2-1}}.
$$
Then:
$$
\boxed{t=\frac{(\bar x_1-\bar x_2)-\Delta_0}
{\widehat{\operatorname{SE}}_W}},
$$
$$
\boxed{(\bar x_1-\bar x_2)
\pm t_{1-\alpha/2,\nu}\widehat{\operatorname{SE}}_W}.
$$
The $t_\nu$ reference is an approximation, including for normally distributed groups with unequal variances. Software can use noninteger $\nu$.

Welch's method accommodates unequal variances and sample sizes without a preliminary equal-variance assumption. The formulas and reference distribution are documented in [NIST's two-sample t-test guide](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm).

## Two Independent Means — Pooled Method

Assume **equal population variances**, $\sigma_1^2=\sigma_2^2=\sigma^2$, and use
$$
s_p^2=\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2},
\qquad
\widehat{\operatorname{SE}}_p=s_p\sqrt{\frac1{n_1}+\frac1{n_2}}.
$$
The test and interval are
$$
\boxed{t=\frac{(\bar x_1-\bar x_2)-\Delta_0}
{\widehat{\operatorname{SE}}_p}},\qquad\nu=n_1+n_2-2,
$$
$$
\boxed{(\bar x_1-\bar x_2)
\pm t_{1-\alpha/2,\nu}\widehat{\operatorname{SE}}_p}.
$$
This reference distribution is exact for independent normal samples with equal population variances. Similar sample standard deviations do not establish that the population variances are equal.

## Paired Samples

For before/after measurements or matched pairs, define
$$
D_i=X_i-Y_i,\qquad i=1,\dots,n.
$$
Analyze the $n$ **differences** as a one-sample problem:
$$
\boxed{t=\frac{\bar d-\Delta_0}{s_d/\sqrt n}},\qquad\nu=n-1,
$$
$$
\boxed{\bar d\pm t_{1-\alpha/2,n-1}\frac{s_d}{\sqrt n}}.
$$
Pairs must be independent of other pairs; observations **within** a pair may be dependent. Exact small-sample inference assumes normally distributed differences, not necessarily normally distributed measurements in each group separately.

Do not treat $n$ pairs as $2n$ independent observations.

## Interpreting the Test

For symmetric $t$ reference distributions:
- Two-sided $H_a:\Delta\ne\Delta_0$: compare $|t|$ with $t_{1-\alpha/2,\nu}$.
- Upper-sided $H_a:\Delta>\Delta_0$: compare $t$ with $t_{1-\alpha,\nu}$.
- Lower-sided $H_a:\Delta<\Delta_0$: compare $t$ with $t_{\alpha,\nu}$.

For one-mean tests, replace $\Delta$ by $\mu$. See [Hypothesis Testing](/notes/hypothesis-testing) for $p$-values, power, and error interpretation.
