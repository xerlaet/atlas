# Supervised Learning
---

**Supervised learning** learns from known examples {data, labels} (e.g. image classification)

## Input space $X$
**numeric features** are continuous values (e.g. $\text{height}\in [0,100]$)
**nominal features** have no inherent ordering (e.g. $\text{color}\in \{ \text{red}, \text{blue}, \text{green} \}$)
**ordinal features** are ordered (e.g. $\text{size}\in \{ \text{small}, \text{medium}, \text{large} \}$)
**hierarchical features** are partially ordered in a hierarchy (e.g. shape)

Standardize or normalize the data to ensure the data is in the proper range and features have the same scale

Standardize:
$$
x_{j}=\frac{x_{j}-\mu}{\sigma }
$$
Normalize:
$$
x_{j}=\frac{x_{j}-\min(x)}{\max(x)-\min(x)}
$$

## Output Space $Y$
Classification if the elements of $Y$ are classes
Regression if $Y$ is continuous

## Model Classes $H$
[Linear Models](/notes/linear-models)
[Feedforward Neural Networks](/notes/feedforward-neural-networks)
[kNNs](/notes/knns)
[Decision Trees](/notes/decision-trees)

The goal is the find the model $h$ that best approximates $f$

One way to do that is with **empirical risk minimization** (ERM)
$$
\hat{f}=\text{arg}\underset{h\in H}{\min} \frac{1}{n}\sum _{i=1}^{n}l(h(x^{(i)}),y^{(i)})
$$

