# Naive Bayes
---

**Discriminative**: Model $P(y \mid x)$ directly
**Generative**: Model $P(x,y)$, use [Bayes Theorem](/notes/bayes-theorem) to get $P(y\mid x)$

## Naive Bayes classifier
$$
\hat{y} = \underset{c}{\arg\max}\; P(c)\prod_{i=1}^{n} P(x_i \mid c)
$$
Predict the class with the largest **prior × feature likelihoods**. The “naive” assumption is that features are **conditionally independent given the class**.

Here, $c$ is a candidate class, $x_i$ is a feature, and $\hat{y}$ is the predicted class.

So just count up the distributions based on your data, and then store the results in a table for the classifier to use for any new points

Maximum Likelihood Estimation (MLE): estimate probability from the data

Maximum A Posteriori (MAP): estimate probability from data and prior assumptions