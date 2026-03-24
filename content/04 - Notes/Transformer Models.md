# Transformer Models
---

**Transformer Models** are a breakthrough deep learning architecture introduced to handle sequential data without relying on recurrence. By utilizing **self-attention mechanisms**, they process entire sequences simultaneously, successfully superseding [RNNs](/notes/recurrent-neural-networks) and [LSTMs](/notes/long-short-term-memory) in modern [AI](/notes/artificial-neural-networks).

## Encoder Block Architecture
![TikZ Diagram](/attachments/tikz-5016cc2583dfb48c6611f7e9d89c2309.svg)

## Core Mechanisms
- **Self-Attention**: Allows the model to weigh the contextual importance of different words in a sequence simultaneously, regardless of their physical distance from one another.
- **Q, K, V Vectors**: Every input token is mathematically projected into three separate vectors: **Queries** (what I am looking for), **Keys** (what I contain), and **Values** (my actual content).
- **Positional Encoding**: Because Transformers process all data at once rather than chronologically, mathematical patterns (often sine/cosine waves) are injected into the input embeddings to provide a sense of sequence order.

## Mathematical Formulation
The core of the Transformer is the Scaled Dot-Product Attention. The dot product of Queries ($Q$) and Keys ($K$) determines the alignment scores, which are scaled by the dimension size ($d_k$) to stabilize gradients, passed through a softmax, and multiplied by the Values ($V$):
$$
\begin{aligned}
\text{Attention}(Q, K, V) &= \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
\end{aligned}
$$

## Advantages Over Recurrent Models
- **Parallelization**: Unlike BPTT, which requires processing step $t-1$ before step $t$, Transformers process the entire sequence in parallel. This allows for massive scaling on GPUs.
- **Infinite Reference Window**: Standard recurrent models suffer from memory degradation over long texts. Transformers maintain a direct $O(1)$ mathematical path between any two tokens, completely solving the vanishing gradient problem for long-range dependencies.
