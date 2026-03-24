# Backpropagation
---

**Backpropagation** (backward propagation of errors) is the fundamental algorithm used to train [Feedforward Neural Networks](/notes/feedforward-neural-networks) and other deep learning models. It calculates the gradient of the loss function with respect to every weight in the network by systematically applying the calculus chain rule from the output layer back to the input layer.

## Computational Graph
![TikZ Diagram](/attachments/tikz-2e866c8652723176cedfbaccb7846007.svg)

## Core Training Phases
- **Forward Pass**: The network processes the input data layer by layer to generate a prediction. This prediction is compared against the true target value to compute a scalar loss score.
- **Backward Pass**: The algorithm calculates the partial derivative of the loss with respect to each intermediate variable, flowing backwards through the network graph.
- **Weight Update**: An optimization algorithm like [Gradient Descent](/notes/gradient-descent) uses these calculated gradients to adjust the weights, minimizing the loss for future predictions.

## Mathematical Formulation
Backpropagation relies entirely on the chain rule. For a single weight $w$ connecting to a linear transformation $z$ and an activation function $a$, the gradient of the loss $L$ is computed as a product of local gradients:
$$
\begin{aligned}
z &= w \cdot x + b \\
a &= \sigma(z) \\
\frac{\partial L}{\partial w} &= \frac{\partial L}{\partial a} \frac{\partial a}{\partial z} \frac{\partial z}{\partial w}
\end{aligned}
$$

## Dependencies & Challenges
- **Jacobian Matrix**: When layers contain multiple neurons, the chain rule is generalized using Jacobian matrices to multiply arrays of gradients efficiently.
- **Vanishing Gradient Problem**: If local gradients (like $\frac{\partial a}{\partial z}$) are consistently less than 1, multiplying them repeatedly causes the final gradient to shrink to zero in deep networks. This is heavily dependent on the choice of [Activation Functions](/notes/activation-functions).
- **Sequential Data**: For time-series or text, standard backpropagation is modified into [BPTT](/notes/backpropagation-through-time) to handle cyclic network connections.