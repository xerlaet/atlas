# Decision Trees
---

![TikZ Diagram](/attachments/tikz-06936b889c283855011286d669a0e699.svg)

[Trees](/notes/trees) where each internal node tests the value of a particular feature, and each leaf node specifies a class label

Each branch divides the features space into axis-parallel sections

Tree ensembles are cool

To avoid overfitting, don't grow a very large tree to begin with. Alternatively, grow a large tree, then prune back greedily to improve on the **validation set**

## Selecting a Tree
Ideally the tree is as short as possible to remain more generalizable and be faster and returning an answer. However that is NP-Hard

A more practical solution is to use a heuristic for picking trees, one of which is how much information is gained:
$$
\text{Info Gain}=H(Y)-H(Y\mid X)
$$
$$
\begin{align}
H(Y)=&-\sum_{y\in Y} P(y)\log _{2}P(y) \\
H(Y|x)=&-\sum _{y\in Y}P(y\mid x)\log _{2}P(y\mid x) \\
H(Y|X)=&-\sum _{x\in X}P(x)H(Y\mid x)
\end{align}
$$

A high entropy ($H(Y)\sim 1$) means the probability is near random, whereas a low entropy is near certain

Trees are generally for classification, but it can work for regression (determining what each $x_{n}$ is)
