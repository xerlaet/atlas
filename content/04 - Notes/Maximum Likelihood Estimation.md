# Maximum Likelihood Estimation
---

Given that a sample $X=\{X_{1},\dots,X_{n}\}$ has been observed, what are parameters that maximize the likelihood that this would happen?

To estimate unknown parameters $\theta$ from sample data, construct the joint probability density/mass function of the sample, then solve for $\hat{\theta}$ which maximizes this function

1. Construct the likelihood function $L(\theta)$
$$
L(\theta )=\prod _{i=1}^{n}f(x_{i}\mid \theta )
$$
2. Compute the log-likelihood function $\ell(\theta)$
$$
\ell(\theta )=\ln L(\theta )=\sum _{i=1}^{n}\ln f(x_{i}\mid \theta )
$$
3. Solve for $\hat{\theta}_{1},\dots,\hat{\theta}_{k}$
$$
\frac{ \partial \ell(\theta ) }{ \partial \theta  } =0 \implies \hat{\theta }_{\text{MLE}}
$$
