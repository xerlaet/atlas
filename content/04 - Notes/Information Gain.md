# Information Gain
---

**Information gain** measures how much uncertainty is removed by splitting the data on a specific feature $X$.
$$
\text{IG}=\underbrace{H(Y)}_{\text{Entropy before}}-\underbrace{H(Y|X)}_{\text{Entropy after}}
$$

**Entropy** ($H$): Measures the impurity or randomness of a dataset
- High entropy ($H\approx 1$): Classes are evenly mixed (maximum uncertainty)
- Low entropy ($H\approx 0$): The node is pure, all samples belong to one class

## Information Gain for Decision Trees
First calculate the entropy of a node $Y$ (where $y$ is a specific class (e.g. "yes" or "no") and $P(y)$ is the proportion of the dataset belonging to $y$):
$$
H(Y)=-\sum_{y\in Y} P(y)\log _{2}P(y)
$$

Then calculate the conditional entropy (weighted average entropy of the child nodes after making a split on feature $X$):
$$
H(Y|X)=-\sum _{x\in X}P(x)\sum _{y\in Y}P(y\mid x)\log _{2}P(y\mid x)
$$
