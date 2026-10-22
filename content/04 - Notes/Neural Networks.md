# Neural Networks
---

**Neural Networks** are compositions of parameterized transformations inspired by biological neural networks that, by the [Universal Approximation Theorem](/notes/universal-approximation-theorem), can approximate any continuous function.

## Architectures
- [Feedforward Neural Networks](/notes/feedforward-neural-networks) - Basic unidirectional stacks of layers
- [Convolutional Neural Networks](/notes/convolutional-neural-networks) - Convolutions for spatial structure
- [Recurrent Neural Networks](/notes/recurrent-neural-networks) - Recurrent hidden states
- [Transformers](/notes/transformers) - Self-attention utilizing networks
- [Graph Neural Networks](/notes/graph-neural-networks) - ?
- [Autoencoders](/notes/autoencoders) - Encoder-decoder networks to reconstruct inputs
- [Generative Adversarial Networks](/notes/generative-adversarial-networks) - Generator-discriminator system of networks
- [Diffusion Models](/notes/diffusion-models) - ?

## Building Blocks
- [Activation Functions](/notes/activation-functions) - Element-wise non-linear transformations
- [Attention](/notes/attention) - Mechanism to weigh relationships between representations

## Training Pipeline
1. Generate prediction $\hat{y}_i$ given input $x_i$ and weights $w$:
$$
\hat{y}_{i} = f_{w}(x_{i})
$$
2. Measure discrepancy against target $y_i$ via [Loss Functions](/notes/loss-functions):
$$
L_{i} = \mathcal{L}(\hat{y}_{i}, y_{i})
$$
3. Compute parameter gradients using [Backpropagation](/notes/backpropagation):
$$
\nabla_{w} L_{i} = \left[ \frac{\partial L_i}{\partial w_1}, \frac{\partial L_i}{\partial w_2}, \dots, \frac{\partial L_i}{\partial w_m} \right]^T
$$
4. Step parameters along the negative gradient via [Gradient Descent](/notes/gradient-descent):
$$
w \gets w - \alpha \nabla_{w} L_{i}
$$
