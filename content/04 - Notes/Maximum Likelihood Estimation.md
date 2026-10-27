# Maximum Likelihood Estimation
---

**Maximum likelihood estimation** (MLE) chooses the parameter values under which the observed data have the greatest joint probability mass or density.

Parent: [Statistical Inference](/notes/statistical-inference) · Compare: [Method of Moments](/notes/method-of-moments) and [Bayesian Inference](/notes/bayesian-inference)

## Likelihood Is a Function of the Parameters

For observed data $\mathbf x=(x_1,\dots,x_n)$:
$$
L(\theta;\mathbf x)=f_{\mathbf X}(\mathbf x\mid\theta),\qquad
\hat\theta_{\mathrm{MLE}}\in\operatorname*{arg\,max}_{\theta\in\Theta}L(\theta;\mathbf x).
$$
For independent observations, the joint mass/density factors. For an i.i.d. sample:
$$
L(\theta;\mathbf x)=\prod_{i=1}^n f(x_i\mid\theta).
$$
Dependent observations require their correct joint distribution, not an unjustified product of marginal distributions.

> [!important] Likelihood is not the probability that a parameter is true
> The data are held fixed while $\theta$ varies. A likelihood need not integrate to one over $\theta$. For continuous data, $f(x\mid\theta)$ is a **density**, not the probability of observing exactly $x$.

## Procedure

1. Specify the model, parameter space, and support of the observations.
2. Construct $L(\theta;\mathbf x)$, including parameter-dependent support restrictions.
3. Take the log:
   $$
   \ell(\theta)=\log L(\theta;\mathbf x)
   =\sum_{i=1}^n\log f(x_i\mid\theta).
   $$
   Since log is increasing, it preserves the maximizer wherever $L>0$.
4. Find interior candidates by solving the **score equations**:
   $$
   U(\theta)=\nabla_\theta\ell(\theta)=\mathbf0.
   $$
5. Check that candidates maximize the likelihood; compare boundaries and other candidates. A negative second derivative establishes a local maximum in one dimension; global concavity can establish a global maximum.

Numerical optimization may be necessary. An MLE can fail to exist, be nonunique, or occur on a boundary where the score equation does not apply.

## Example — Bernoulli Success Probability

Let $X_i\overset{\mathrm{iid}}{\sim}\operatorname{Bernoulli}(p)$, with $0\le p\le1$, and let $s=\sum_i x_i$.
$$
L(p)=p^s(1-p)^{n-s},\qquad
\ell(p)=s\log p+(n-s)\log(1-p).
$$
For $0<s<n$:
$$
\ell'(p)=\frac{s}{p}-\frac{n-s}{1-p}=0
\quad\Longrightarrow\quad
\boxed{\hat p=\frac{s}{n}=\bar x}.
$$
The second derivative is negative in $(0,1)$. If every observation is a failure or every observation is a success, the maximizer is the boundary $0$ or $1$, respectively.

For $80$ successes out of $100$, $\hat p=0.80$. If observing only the binomial count, the likelihood also includes $\binom ns$, which is constant in $p$ and does not change the maximizer.

## Example — Normal Mean and Variance

For $X_i\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)$:
$$
\ell(\mu,\sigma^2)
=-\frac n2\log(2\pi)-\frac n2\log\sigma^2
-\frac1{2\sigma^2}\sum_{i=1}^n(x_i-\mu)^2.
$$
For a sample with positive empirical variance, maximizing gives
$$
\boxed{\hat\mu=\bar x},\qquad
\boxed{\hat\sigma^2_{\mathrm{MLE}}=\frac1n\sum_{i=1}^n(x_i-\bar x)^2}.
$$
These equal the [MoM estimates](/notes/method-of-moments#example-normal-mean-and-variance). The variance MLE uses $n$, not $n-1$; it is biased downward but consistent. If all observations coincide, the likelihood is unbounded as $\sigma^2\downarrow0$, so no finite maximizer exists in the usual parameter space $\sigma^2>0$.

## Example — A Boundary Maximum

For $X_i\overset{\mathrm{iid}}{\sim}\operatorname{Uniform}(0,\theta)$, using support $[0,\theta]$:
$$
L(\theta)=\theta^{-n}\mathbf1\{\theta\ge x_{(n)}\},
\qquad x_{(n)}=\max_i x_i.
$$
For positive $x_{(n)}$, the likelihood decreases over the feasible region, so
$$
\boxed{\hat\theta_{\mathrm{MLE}}=x_{(n)}}.
$$
Ignoring the support would miss the answer. The support also depends on $\theta$, so the usual regular asymptotic theory below does not apply automatically.

## Large-Sample Uncertainty

For a scalar parameter, the **Fisher information per observation** is
$$
I_1(\theta)=E_\theta\!\left[
\left(\frac{\partial}{\partial\theta}\log f(X\mid\theta)\right)^2
\right].
$$
Under suitable regularity conditions—such as identifiability, a true parameter in the interior, smoothness, and finite positive information—the MLE is consistent and
$$
\sqrt n(\hat\theta-\theta)
\xrightarrow{d}N\!\left(0,I_1(\theta)^{-1}\right).
$$
These are conditional results, not guarantees for every model. See [Stanford's MLE asymptotics lecture](https://web.stanford.edu/class/stats200/Lecture14.pdf).

This suggests
$$
\widehat{\operatorname{SE}}(\hat\theta)
\approx\frac1{\sqrt{nI_1(\hat\theta)}},\qquad
\hat\theta\pm z_{1-\alpha/2}\widehat{\operatorname{SE}}(\hat\theta).
$$
Here $z_q$ is the standard-normal $q$-quantile. The resulting **Wald interval** is approximate and can perform poorly for small samples or near boundaries. Profile-likelihood intervals or an appropriate [Bootstrap](/notes/bootstrap) can provide alternatives.

## Invariance

If $\hat\theta$ is an MLE, then $g(\hat\theta)$ is an MLE of $g(\theta)$ under the induced/profile likelihood. For example, an exponential rate estimate $\hat\lambda=1/\bar x$ yields the mean estimate $1/\hat\lambda=\bar x$.

MLE is not generally unbiased in finite samples and does not by itself produce a posterior probability distribution over parameters.
