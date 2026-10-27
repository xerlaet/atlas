# Statistical Inference
---

**Statistical inference** uses sample data to learn about a population or data-generating process, while quantifying uncertainty. It bridges [describing data](/notes/descriptive-statistics) and drawing conclusions beyond the observed sample.

Parent: [Probability & Statistics](/notes/probability-statistics)

## Population, Sample, and Model

| Term | Meaning | Example |
| --- | --- | --- |
| **Population** | The entire group or process of interest | All items produced by a factory |
| **Parameter** $\theta$ | A numerical feature of the population or model | Mean lifetime $\mu$, variance $\sigma^2$, defect rate $p$ |
| **Sample** $X_1,\dots,X_n$ | Observations collected from that population | Lifetimes of $n$ sampled items |
| **Statistic** $T(X_1,\dots,X_n)$ | A function of the sample that does not depend on unknown parameters | Sample mean $\bar X$, sample variance $S^2$ |
| **Estimator** $\hat\theta$ | A statistic used to estimate a parameter | $\hat p=X/n$ |
| **Estimate** $\hat\theta(x_1,\dots,x_n)$ | The numerical value after observing the data | $\hat p=0.08$ |

An estimator is a [random variable](/notes/random-variables) **before** sampling; an estimate is its realized value. Uppercase $X_i,\bar X,S$ denotes random quantities; lowercase $x_i,\bar x,s$ denotes observed values.

A common starting model is an **independent and identically distributed** (i.i.d.) sample:
$$
X_1,\dots,X_n\overset{\mathrm{iid}}{\sim}f(x\mid\theta),\qquad\theta\in\Theta.
$$
Not every study satisfies this model. Paired measurements, time series, clustered samples, and sampling without replacement need appropriate treatment of dependence. See [Sampling and Study Design](/notes/sampling-and-study-design).

## The Main Inference Tasks

- **Point estimation**: Give one plausible value for an unknown parameter. See [Method of Moments](/notes/method-of-moments) and [Maximum Likelihood Estimation](/notes/maximum-likelihood-estimation).
- **Interval estimation**: Describe uncertainty with a range. See [Confidence Intervals](/notes/confidence-intervals).
- **Hypothesis testing**: Assess compatibility with a proposed population claim. See [Hypothesis Testing](/notes/hypothesis-testing).
- **Bayesian inference**: Combine a prior distribution with the likelihood to obtain a posterior distribution. See [Bayesian Inference](/notes/bayesian-inference).

In **frequentist inference**, parameters are fixed and probability describes repeated sampling. In **Bayesian inference**, a probability distribution represents uncertainty about parameters conditional on the model, prior, and data.

## Sampling Distributions and Standard Errors

A **sampling distribution** is the distribution of a statistic across hypothetical repeated samples of the same size. It is not the distribution of individual observations.

For an i.i.d. sample with mean $\mu$ and finite variance $\sigma^2$:
$$
E[\bar X]=\mu,\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},\qquad
\operatorname{SE}(\bar X)=\frac{\sigma}{\sqrt n}.
$$
When $\sigma$ is unknown, its usual estimated standard error is $s/\sqrt n$.

> [!important] Standard deviation is not standard error
> $s$ measures the spread of individual observations. $s/\sqrt n$ estimates the sampling variability of the **mean**, not of every statistic.

The [Central Limit Theorem](/notes/central-limit-theorem) gives the limiting statement
$$
\frac{\bar X-\mu}{\sigma/\sqrt n}\xrightarrow{d}N(0,1).
$$
Thus, for sufficiently large $n$, $\bar X$ is approximately $N(\mu,\sigma^2/n)$. This is exact for normally distributed observations. There is no universal sample-size cutoff: skewness, heavy tails, outliers, and dependence matter.

## Parameter Estimation

Two common ways to construct estimators are:

| Method | Main idea | Key caution |
| --- | --- | --- |
| [Method of Moments](/notes/method-of-moments) | Match population moments to sample moments | Required moments must exist and identify the parameters |
| [Maximum Likelihood Estimation](/notes/maximum-likelihood-estimation) | Maximize the joint mass/density of the observed data as a function of the parameters | Check support, constraints, and boundaries—not only derivatives |

These are not the only methods. Least squares, Bayesian estimators, and other estimating equations are also widely used.

### Evaluating an Estimator

**Bias** measures systematic error:
$$
\operatorname{Bias}_\theta(\hat\theta)=E_\theta[\hat\theta]-\theta.
$$
An estimator is **unbiased** if this is zero for every allowed $\theta$.

**Mean squared error** combines variance and squared bias:
$$
\operatorname{MSE}_\theta(\hat\theta)
=E_\theta[(\hat\theta-\theta)^2]
=\operatorname{Var}_\theta(\hat\theta)+\operatorname{Bias}_\theta(\hat\theta)^2.
$$
See [Mean Squared Error](/notes/mean-squared-error). Unbiasedness alone does not guarantee low error.

**Consistency** means the estimator approaches the true parameter in probability as sample size grows:
$$
\hat\theta_n\xrightarrow{p}\theta.
$$
A biased estimator can be consistent. Among unbiased estimators of the same parameter, one with lower variance is more **efficient**; comparisons involving biased estimators should also consider bias or MSE.

## Choosing a Procedure

| Question | Starting point |
| --- | --- |
| What is a population mean? | [Inference for Means#One Mean — Unknown Population Standard Deviation](/notes/inference-for-means#one-mean-unknown-population-standard-deviation) |
| Do two independent groups have different means? | [Inference for Means#Two Independent Means — Welch's Method](/notes/inference-for-means#two-independent-means-welchs-method) |
| Did the same subjects change? | [Inference for Means#Paired Samples](/notes/inference-for-means#paired-samples) |
| What fraction of a population has a property? | [Inference for Proportions](/notes/inference-for-proportions) |
| How variable is a normally distributed population? | [Inference for Variances](/notes/inference-for-variances) |
| Do categorical counts fit a model, or are categorical variables associated? | [Chi-Square Tests](/notes/chi-square-tests) |
| Is an analytic standard error difficult to obtain? | [Bootstrap](/notes/bootstrap) |
| How should prior information be combined with data? | [Bayesian Inference](/notes/bayesian-inference) |

## Parametric and Nonparametric Inference

**Parametric methods** specify a distributional family described by a fixed, finite-dimensional parameter, such as $N(\mu,\sigma^2)$.

**Nonparametric methods** do not restrict the population to such a family. Examples include the empirical distribution, the nonparametric [Bootstrap](/notes/bootstrap), and rank-based tests such as the sign, Wilcoxon, and Mann–Whitney tests.

Nonparametric does **not** mean assumption-free. Independence, exchangeability, continuity, or symmetry may still be required. Rank-based tests do not automatically test equality of means or medians; interpretation depends on the test and assumptions.

## A Practical Workflow

1. State the population, target parameter, and question before choosing a formula.
2. Check [how the data were collected](/notes/sampling-and-study-design): random sampling supports generalization; random assignment supports causal comparisons under the study's assumptions.
3. Inspect the data with [summaries and plots](/notes/descriptive-statistics). A Q–Q plot compares observed and reference quantiles to assess distributional fit.
4. Check independence, pairing, model assumptions, and approximation conditions.
5. Report the estimate and uncertainty; when testing, also report the null, alternative, and $p$-value.
6. Interpret the effect size in context. More observations reduce sampling error, but do not automatically remove selection bias, confounding, or measurement error.

## T Interval

The one-mean, paired, Welch, and pooled $t$ formulas are collected in [Inference for Means](/notes/inference-for-means).

## Z Interval

For a mean with known population standard deviation, see [Inference for Means#One Mean — Known Population Standard Deviation](/notes/inference-for-means#one-mean-known-population-standard-deviation). For one or two proportions, see [Inference for Proportions](/notes/inference-for-proportions).

## F Test

The two-variance $F$ test and its normality assumptions are in [Inference for Variances#Two Population Variances — F Test](/notes/inference-for-variances#two-population-variances-f-test).

