# Supervised Learning
---

**Supervised learning** learns from a dataset of known input-output pairs to predict outcomes for unseen data (e.g. image classification)

## Mathematical Framework
**Input Space** ($X$): The domain of all possible input [Feature Vectors](/notes/feature-vectors)
**Output Space** ($Y$): The domain of target labels (e.g. [Classification](/notes/classification) vs [Regression](/notes/regression))
**Hypothesis Space** ($H$): The set of all possible functions the algorithm can learn

## Feature Preprocessing
Raw input vectors often require scaling to ensure features are in the proper range and share the same scale, which stabilizes and speeds up training

**Standardization** ($Z$-score): Centers data at a mean of 0 with a standard deviation of 1
$$
x_{j}=\frac{x_{j}-\mu}{\sigma }
$$
**Normalization** (Min-Max): Bounds data to a specific fixed range, typically $[0,1]$
$$
x_{j}=\frac{x_{j}-\min(x)}{\max(x)-\min(x)}
$$

## Model Classes $H$
**Parametric Models**: Assume a specific functional form with a fixed, finite number of parameters to learn (e.g. [Linear Models](/notes/linear-models), [Feedforward Neural Networks](/notes/feedforward-neural-networks))

**Non-Parametric Models**: Don't make strong assumptions about the functional form. Instead the model's capacity and structure grows with the training data (e.g. [k-Nearest Neighbors](/notes/k-nearest-neighbors), [Decision Trees](/notes/decision-trees))

## Learning Objective
The goal is the find the model $h\in H$ that best approximates the underlying function $f:X\to Y$

One way to do that is with **empirical risk minimization** (ERM)
$$
\hat{f}=\text{arg}\underset{h\in H}{\min} \frac{1}{n}\sum _{i=1}^{n}l(h(x^{(i)}),y^{(i)})
$$

## Evaluation
[Model Evaluation](/notes/model-evaluation)
