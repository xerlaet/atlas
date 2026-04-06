# Transformers
---
Transformers consist of 4 main parts:
- tokenization
- embedding
- positional encoding
- transformer block
- softmax

![Pasted image 20241031131447.png](/attachments/Pasted%20image%2020241031131447.png)

# Transformers
---

**Transformers** are a deep learning architecture that process sequential data purely through self-attention mechanisms, completely eliminating the need for recurrence or convolutions. Introduced in the paper "Attention Is All You Need", they establish global dependencies between input and output tokens and form the foundation of modern [Large Language Models](/notes/large-language-models).

## System Architecture
`![TikZ Diagram](/attachments/tikz-2beba58d2ef02033312f94bc41cbc26c.svg)`

## Core Components
- **[Positional Encoding](/notes/positional-encoding)**: Since Transformers lack sequential recurrence, they inject sine and cosine mathematical signals into input embeddings to retain the specific order of tokens.
- **Encoder**: Maps input sequences into continuous, context-heavy representations using multi-head attention and [Feedforward Neural Networks](/notes/feedforward-neural-networks).
- **Decoder**: Generates output sequences autoregressively. It uses masked attention to prevent future token leakage and cross-attention to focus entirely on the Encoder's structural output.
- **[Self-Attention Mechanism](/notes/self-attention-mechanism)**: Computes a dynamically weighted average of sequence elements, allowing the model to accurately determine token relationships regardless of their physical distance.

## Mathematical Formulation
The primary mechanism driving the architecture is **Scaled Dot-Product Attention**, which maps a Query matrix $Q$ alongside Key and Value matrices $K, V$ to a weighted output:
$$
\begin{aligned}
\text{Attention}(Q, K, V) &= \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
\end{aligned}
$$
- **$Q, K, V$**: Linear dimensional projections extracted from the input embeddings.
- **$d_k$**: The vector dimension of the keys, utilized strictly as a scaling factor to prevent vanishing gradients within the softmax function.

## Extensions & Derivatives
- **[Vision Transformers](/notes/vision-transformers)**: Directly adapts this architecture for image processing by splitting flat images into raw patches treated identically to text tokens.
- **[Natural Language Processing](/notes/natural-language-processing)**: Drives foundational tasks via massive [Transfer Learning](/notes/transfer-learning) models like BERT (encoder-only structures) and GPT (decoder-only structures).

# Transformers
---
**Transformers** are deep learning architectures that eliminate recurrence and convolutions, relying entirely on self-attention mechanisms to establish global dependencies between inputs and outputs. Defined in "Attention Is All You Need," this encoder-decoder structure is the foundation of modern [Large Language Models](/notes/large-language-models).

## System Architecture
`![TikZ Diagram](/attachments/tikz-7ee776e5628fed7b6f8e83ff35cce239.svg)`

## Architectural Walk-through
- **Embeddings & [Positional Encoding](/notes/positional-encoding)**: Raw tokens are converted to continuous vectors. Sine and cosine wave frequencies are added to inject sequence order, bypassing the need for sequential processing.
- **Encoder Stack**: Composed of **N** identical layers. Each layer runs input through a [Self-Attention Mechanism](/notes/self-attention-mechanism), followed by a [Feedforward Network](/notes/feedforward-neural-networks). Every sub-layer is wrapped by a residual connection and **Layer Normalization** (Add & Norm).
- **Decoder Stack**: Also composed of **N** identical layers, but generates outputs autoregressively. It introduces a **Masked Attention** sub-layer to prevent positions from attending to future tokens. 
- **Cross-Attention**: The bridge layer. The Decoder uses its previous layer's output as the **Query**, while taking the **Keys** and **Values** directly from the final Encoder block, integrating contextual understanding.

## Mathematical Formulation
The architecture relies on **Scaled Dot-Product Attention**, executed in parallel across multiple "heads" to capture different representational subspaces:
$$
\begin{aligned}
\text{Attention}(Q, K, V) &= \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
\end{aligned}
$$
The scaling factor $\sqrt{d_k}$ prevents the dot products from growing excessively large, which would push the softmax function into regions with near-zero gradients during [Backpropagation](/notes/backpropagation).
