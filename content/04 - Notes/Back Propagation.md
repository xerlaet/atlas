# Back Propagation
---
## Parameterized Model
$$
\begin{align}
x \to G(x,w)=\bar{y} \\
C(y,\bar{y})=\lvert y-\bar{y} \rvert ^{2}
\end{align}
$$
where $x$ is the input and $w$ are trainable parameters

Gradient descent takes the gradient of a function (it has to differentiable almost everywhere) to figure out what direction to update the model with. Stochastic gradient descent is used in practice only looking at a sample (roughly 1x2 times the categories is experimentally pretty good)

Also the function should be semidefinite - perhaps apply an offset if it's not? Without a gradient you have to experiment and reinforce the directions that result in a higher score

$$
g(h(s))'=g'(h(s))h'(s)
$$
