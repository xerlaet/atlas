# Activation Functions
---

An **Activation Function** is a mathematical operation applied to the output of a neuron in an [artificial neural network](/notes/artificial-neural-networks). Its primary role is to introduce **non-linearity** into the model, allowing it to learn complex patterns that a purely linear model could not.

## Common Functions
![TikZ Diagram](/attachments/tikz-442eacee553152cd627e931084da6abd.svg)

## Types of Functions
- **Sigmoid**: An S-shaped curve that maps inputs to a range between 0 and 1. Historically used for binary classification, but now largely avoided in hidden layers due to the vanishing gradient problem.
$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

- **Hyperbolic Tangent (Tanh)**: Similar to Sigmoid but maps inputs to a range between -1 and 1. Its zero-centered output helps with optimization but it still suffers from vanishing gradients.
$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

- **Rectified Linear Unit (ReLU)**: Outputs the input directly if positive, and zero otherwise. It is the modern default for hidden layers due to its computational efficiency and mitigation of vanishing gradients.
$$
\text{ReLU}(x) = \max(0, x)
$$

- **Leaky ReLU**: A variation of ReLU that allows a small, non-zero gradient when the input is negative. This aims to solve the "dying ReLU" problem where neurons can become permanently inactive.
$$
\text{Leaky ReLU}(x) = \max(0.01x, x)
$$
