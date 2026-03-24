# Backpropagation Through Time
---

**Backpropagation Through Time** (BPTT) is the primary algorithm used to train [Recurrent Neural Networks](/notes/recurrent-neural-networks). It adapts standard [Backpropagation](/notes/backpropagation) for sequential data by mathematically unrolling the network across all time steps and calculating the cumulative gradient of the loss function.

## Unrolled Backward Pass
![TikZ Diagram](/attachments/tikz-a131c6a40e5cc4458587801faadc2da9.svg)

## Core Mechanics
- **Unrolling**: The network is converted into a standard [feedforward structure](/notes/feedforward-neural-networks) where each layer represents a distinct chronological time step.
- **Gradient Accumulation**: Because recurrent networks use parameter sharing (the exact same weight matrix $W$ is used at every step), the total gradient for $W$ is the sum of the gradients calculated at each individual time step.
- **Weight Update**: After accumulating gradients backwards across the entire sequence, an optimizer like [Gradient Descent](/notes/gradient-descent) updates the shared weights.

## Mathematical Formulation
The total sequence loss $L$ is the sum of losses at each time step. Finding the gradient of the loss with respect to the shared hidden weight matrix $W_{hh}$ requires applying the chain rule continuously backwards through time:
$$
\begin{aligned}
L &= \sum_{t=1}^T L_t \\
\frac{\partial L}{\partial W_{hh}} &= \sum_{t=1}^T \sum_{k=1}^t \frac{\partial L_t}{\partial h_t} \frac{\partial h_t}{\partial h_k} \frac{\partial h_k}{\partial W_{hh}}
\end{aligned}
$$

## Limitations & Solutions
- **Vanishing and Exploding Gradients**: Repeatedly multiplying the same weight matrix during the chain rule ($\frac{\partial h_t}{\partial h_k}$) causes gradients to shrink to zero or grow to infinity over long sequences.
- **Truncated BPTT**: To manage computational cost and gradient instability, the sequence is divided into smaller chunks (e.g., 50 time steps). Gradients are only propagated backward for the length of that specific chunk.
- **Gated Architectures**: Standard BPTT struggles to preserve long-term dependencies. This is practically solved by replacing basic recurrent cells with [LSTMs](/notes/long-short-term-memory) or [GRUs](/notes/gated-recurrent-units).
