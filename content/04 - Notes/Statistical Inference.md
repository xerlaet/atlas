# Statistical Inference
---

Often times, the parameters of the population are not known. In order to do probability work, you need to collect data

**Population**: The entire group of interest, described by **parameters** ($\theta$)
**Sample**: An observed subset of that group, described by **statistics** ($\hat{\theta}$). Each statistic is a [random variable](/notes/random-variables) because it is computed from random data

[QQ Plots](/notes/qq-plots) - Map sampled quantiles onto expected quantiles

## Parameter Estimation
**Estimator** ($\hat{\theta}$): Maps sample data onto parameter space 

The $k$-th **population moment** is $\mu_{k}=E(X^{k})$
The $k$-th **sample moment** is $m_{k}=\frac{1}{n}\sum_{i=1}^{n}X_{i}^{k}$

The first sample moment is the sample mean $\bar{X}$

There are two primary ways to estimate unknown parameters $\boldsymbol{\theta} = (\theta_1, \dots, \theta_k)$ from sample data
- [Method of Moments](/notes/method-of-moments) - set theoretical moments equal to empirical moments
- [Maximum Likelihood Estimation](/notes/maximum-likelihood-estimation) - maximize probability of the sample occurring


---


Non-parametric makes no assumption about the family of distribution, parametric does

Parameter estimation
Confidence Intervals
Unknown Standard Deviation
Hypothesis Testing
Inference about Variances

Chi-square Tests
Nonparametric statistics
Bootstrap
Bayesian Inference

## T Interval

### One Mean
Assumes a normal or large sample
$$
\begin{align}
\bar{x}\mp t_{\alpha /2} \frac{s}{\sqrt{n}}, \text{df}=n-1 \\
T=\frac{\bar{X}-\mu }{\frac{S}{\sqrt{n}}}, \text{df}=n-1
\end{align}
$$
### Two Means
T interval unpooled
$$
\bar{x}_{1}-\bar{x}_{2}\mp t_{\alpha /2}\sqrt{\frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}}},\text{df}=\frac{\left( \frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}} \right)^{2}}{\frac{(s_{1}^{2})^{2}}{n_{1}^{2}(n_{1}-1)}+\frac{(s_{2}^{2})^{2}}{n_{2}^{2}(n_{2}-1)}}
$$

T interval pooled
$$
\begin{align}
&\bar{x}_{1}-\bar{x}_{2}\mp t_{\alpha /2}S_{p}\sqrt{\frac{1}{n_{1}}+\frac{1}{n_{2}}} \\
&S_{p}^{2}=\frac{(n_{1}-1)s_{1}^{2}+(n_{2}-1)s_{2}^{2}}{n_{1}+n_{2}-2}, \text{df}=n_{1}+n_{2}-2
\end{align}
$$

T test independent samples unpooled
$$
\frac{(\bar{x}_{1}-\bar{x}_{2})-\Delta_{0}}{\sqrt{\frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}}}},\text{df}=\frac{\left( \frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}} \right)^{2}}{\frac{(s_{1}^{2})^{2}}{n_{1}^{2}(n_{1}-1)}+\frac{(s_{2}^{2})^{2}}{n_{2}^{2}(n_{2}-1)}}
$$

T test independent samples pooled
$$
\begin{align}
&T=\frac{(\bar{x}_{1}-\bar{x}_{2})-\Delta_{0}}{S_{p}\sqrt{\frac{1}{n_{1}}+\frac{1}{n_{2}}}} \\
&S_{p}^{2}=\frac{(n_{1}-1)s_{1}^{2}+(n_{2}-1)s_{2}^{2}}{n_{1}+n_{2}-2}, \text{df}=n_{1}+n_{2}-2
\end{align}
$$

## Z Interval

### One Proportion
Z interval ($np\geq 10, n(1-p)\geq 10$)
$$
\hat{p}\mp z_{\alpha /2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}, \hat{p}=\frac{x}{n}
$$

Z test ($np\geq 10, n(1-p)\geq 10$)
$$
z=\frac{\hat{p}-p_{0}}{\sqrt{\frac{p_{0}(1-p_{0})}{n}}}
$$

### Two Proportions

Z interval ($np\geq 10, n(1-p)\geq 10$)
$$
\hat{p}_{1}-\hat{p}_{2}\pm z_{\alpha /2}\sqrt{\frac{\hat{p}_{1}\hat{q}_{1}}{n_{1}}+\frac{\hat{p}_{2}\hat{q}_{2}}{n_{2}}}
$$

Z test ($np\geq 10, n(1-p)\geq 10$)
$$
z=\frac{\hat{p}_{1}-\hat{p}_{2}}{\sqrt{\hat{p}\hat{q}\left( \frac{1}{n_{1}}+\frac{1}{n_{2}} \right)}}, \hat{p}=\frac{x_{1}+x_{2}}{n_{1}+n_{2}}
$$

## F Test
$$
F=\frac{s_{1}^{2}}{s_{2}^{2}}, \text{df}_{1}=n_{1}-1,\text{df}_{2}=n_{2}-1
$$

