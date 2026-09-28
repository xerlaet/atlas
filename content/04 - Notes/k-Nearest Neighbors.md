# k-Nearest Neighbors
---

For a given $x$, output the most popular class of the $k$ most similar points
$$
\hat{y}=\text{arg}\underset{y \in Y}{\max}\sum _{i=1}^{k}\mathbb{1}(y=y^{(i)})
$$

If the points are very spread out, it can help to weigh by distance instead of treating the $k$ nearest points equally

Classification by weight
$$
\hat{y}=\text{arg}\underset{v \in Y}{\max}\sum _{i=1}^{k} \frac{1}{d(x,x^{(i)})^{2}}\delta(v,y^{(i)})
$$
Regression by weight

Voronoi Diagrams
Hamming distance, Euclidean distance, L1/L2
Normalization, mixed distances
average by distance as well
irrelevant features can hurt nearest neighbors among other things
