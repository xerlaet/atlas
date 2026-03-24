---
aliases:
  - FNNs
---
# Feedforward Neural Networks
---

**Feedforward Neural Networks** (FNNs) are the simplest and most foundational architecture of [Artificial Neural Networks](/notes/artificial-neural-networks). In these models, data flows strictly in one forward direction—from the input layer, through intermediate layers, to the output layer—without forming any cycles or feedback loops.

## Network Architecture
![TikZ Diagram](/attachments/tikz-4c9e8c214fefad125a888f9cd3418076.svg)

## Core Components
- **Input Layer**: Ingests the raw numerical data. The number of nodes directly corresponds to the number of features in the dataset.
- **Hidden Layers**: Intermediate computational layers where the network learns abstract, hierarchical representations. A network with multiple hidden layers is considered a deep neural network.
- **Output Layer**: Produces the final model prediction, such as classification probabilities or continuous regression values.

## Mathematical Formulation
The forward pass computes the activations for layer $l$ using the weight matrix $W$, the bias vector $b$, and a chosen non-linear activation function $\sigma$:
$$
\begin{aligned}
z^{(l)} &= W^{(l)} a^{(l-1)} + b^{(l)} \\
a^{(l)} &= \sigma(z^{(l)})
\end{aligned}
$$

## Training Context
- **[Activation Functions](/notes/activation-functions)**: Mathematical operations (like ReLU or Sigmoid) applied to hidden layers to allow the network to model complex, non-linear relationships.
- **Optimization**: FNNs update their weight matrices by calculating error gradients via [Backpropagation](/notes/backpropagation) and applying them using [Gradient Descent](/notes/gradient-descent).
- **Structural Limitations**: FNNs assume all inputs are independent. They cannot inherently handle sequential data (requiring [RNNs](/notes/recurrent-neural-networks)) or spatial grids (requiring [CNNs](/notes/convolutional-neural-networks)).
