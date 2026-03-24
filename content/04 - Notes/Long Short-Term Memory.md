---
aliases:
  - LSTMs
---
# Long Short-Term Memory
---

**Long Short-Term Memory** (LSTMs) are a specialized architecture of [Recurrent Neural Networks](/notes/recurrent-neural-networks) engineered to resolve the vanishing gradient problem. They utilize a complex internal cell structure with distinct gating mechanisms to selectively retain or discard information over extended sequences.

## Cell Architecture
![TikZ Diagram](/attachments/tikz-4b5742440a5f32df134430fb84bbfac6.svg)

## Core Components
- **Cell State ($C_t$)**: The primary information highway running straight down the entire chain. It carries long-term memory with minimal linear interactions, allowing gradients to flow uninterrupted.
- **Forget Gate**: Decides what fraction of the previous cell state $C_{t-1}$ should be erased.
- **Input Gate**: Determines what new information from the current input $x_t$ should be written to the cell state.
- **Output Gate**: Filters the updated cell state to produce the next hidden state $h_t$, representing the short-term memory passed to the next layer.

## Mathematical Formulation
The forward pass relies on the sigmoid function $\sigma$ for gating (outputting between 0 and 1) and $\tanh$ for candidate values:
$$
\begin{aligned}
f_t &= \sigma(W_f \cdot [h_{t-1}, x_t] + b_f) \\
i_t &= \sigma(W_i \cdot [h_{t-1}, x_t] + b_i) \\
\tilde{C}_t &= \tanh(W_C \cdot [h_{t-1}, x_t] + b_C) \\
C_t &= f_t * C_{t-1} + i_t * \tilde{C}_t \\
o_t &= \sigma(W_o \cdot [h_{t-1}, x_t] + b_o) \\
h_t &= o_t * \tanh(C_t)
\end{aligned}
$$

## Architectural Evolution
LSTMs successfully allow neural networks to process long sequences like paragraphs of text or long audio clips. However, due to their computational intensity, they are frequently replaced by the streamlined [GRUs](/notes/gated-recurrent-units) or the highly parallelizable [Transformer](/notes/transformer-models).
