# Supervised Learning
---

Learns a mapping from labeled input-output pairs to predict unseen outputs

## Mathematical Framework
- $X$: Input space ([Feature Vectors](/notes/feature-vectors))
- $Y$: Output space (e.g. [Classification](/notes/classification) or [Regression](/notes/regression))
- $H$: Hypothesis space, the set of candidate models
- $f: X \to Y$: Underlying target function

## Learning Objective
Find a hypothesis $h \in H$ that minimizes prediction error on the training data

**Empirical Risk Minimization (ERM)** minimizes average training loss
$$
\hat{h} = \arg\min_{h \in H}
\frac{1}{n}\sum_{i=1}^{n} \ell(h(x^{(i)}), y^{(i)})
$$
- $n$: Number of training examples
- $\ell$: Loss function measuring prediction error
