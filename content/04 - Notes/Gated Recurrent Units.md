---
aliases:
  - GRUs
---
# Gated Recurrent Unit
---

A **Gated Recurrent Unit** (GRU) is a streamlined variant of the [LSTM](/notes/long-short-term-memory) architecture. It solves the vanishing gradient problem of standard [RNNs](/notes/recurrent-neural-networks) using gating mechanisms but merges the cell state and hidden state to significantly reduce computational complexity.

## Unit Architecture
![TikZ Diagram](/attachments/tikz-0164194b7d47201311c23b6d50a06a3f.svg)

## Core Components
- **Update Gate**: Determines how much of the past information (previous hidden state) needs to be preserved and passed along to the future. It essentially combines the function of the LSTM's forget and input gates.
- **Reset Gate**: Decides exactly how much of the past information to ignore before computing the new candidate hidden state.
- **Unified State ($h_t$)**: Acts as both the short-term and long-term memory, replacing the dual-state mechanism of previous architectures.

## Mathematical Formulation
The GRU forward pass computes the final hidden state $h_t$ as a linear interpolation between the previous state $h_{t-1}$ and the candidate state $\tilde{h}_t$:
$$
\begin{aligned}
z_t &= \sigma(W_z \cdot [h_{t-1}, x_t] + b_z) \\
r_t &= \sigma(W_r \cdot [h_{t-1}, x_t] + b_r) \\
\tilde{h}_t &= \tanh(W \cdot [r_t * h_{t-1}, x_t] + b) \\
h_t &= (1 - z_t) * h_{t-1} + z_t * \tilde{h}_t
\end{aligned}
$$

## GRU vs LSTM
| Feature         | GRU                          | LSTM                                      |
| :-------------- | :--------------------------- | :---------------------------------------- |
| **Gates**       | 2 (Update, Reset)            | 3 (Input, Output, Forget)                 |
| **Memory Flow** | 1 Unified State ($h_t$)      | 2 Split States ($C_t, h_t$)               |
| **Performance** | Faster training, less memory | Better for highly complex, long sequences |
