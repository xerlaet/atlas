---
aliases:
  - RNNs
---
# Recurrent Neural Networks
---

**Recurrent Neural Networks** (RNNs) are a class of [Artificial Neural Networks](/notes/artificial-neural-networks) designed specifically for processing sequential data. Unlike feedforward networks, RNNs possess internal memory through feedback loops, allowing past inputs to influence the processing of current inputs.

## Unrolled Architecture
![TikZ Diagram](/attachments/tikz-aee2246318965dd42fca3539dc57948a.svg)

## Core Mechanism
- **Hidden State ($h_t$)**: Acts as the network memory, capturing information about the sequence processed up to the current time step.
- **Parameter Sharing**: The exact same weight matrices are applied across all time steps, heavily reducing model complexity and enabling variable-length inputs (like text or time-series data).

## Mathematical Formulation
The standard forward pass for an RNN at time step $t$ uses the following equations:
$$
\begin{aligned}
h_t &= \tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h) \\
y_t &= W_{hy} h_t + b_y
\end{aligned}
$$
- **$W_{hh}, W_{xh}, W_{hy}$**: Shared weight matrices for hidden-to-hidden, input-to-hidden, and hidden-to-output connections.

## Training & Limitations
- **[BPTT](/notes/backpropagation-through-time)**: The algorithm used to train RNNs by unrolling the network chronologically and applying standard backpropagation.
- **Vanishing Gradient Problem**: Gradients often shrink to zero during BPTT over long sequences, causing the network to permanently lose information from earlier inputs.
- **Modern Alternatives**: Standard RNNs are rarely used in deep learning today due to memory loss. They are largely superseded by [LSTMs](/notes/long-short-term-memory) or [GRUs](/notes/gated-recurrent-units), which use gating mechanisms to preserve long-term dependencies.
