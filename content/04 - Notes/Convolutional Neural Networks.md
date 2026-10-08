# Convolutional Neural Networks
---

When applied to grid-structured data such as images, traditional [Neural Networks](/notes/neural-networks) suffer from parameter explosion and a loss of spatial structure

![TikZ Diagram](/attachments/tikz-784b764efe4bd6d4ce0d4454994ab81b.svg)

**Convolutional Neural Networks** are specialized for images by making features look the same regardless of where they appear, and pixels closer together are correlated more

## Training Pipeline
Forward Pass
$$
Z_{i,j}=b+\sum _{c}\sum _{m=0}^{k_{h}-1}\sum _{n=0}^{k_{w}-1}X_{c,i+m,j+n}\cdot W
$$

Input Image -> Convolutional layer -> ReLU layer -> Pooling layer (down-sampling)

Pooling (max, average, ...) layers use larger strides to down-sample

## Hyperparameters
- **Input Size**: $H_{\text{in}},W_{\text{in}}$
- **Kernel Size**: $k_{h},k_{w}$
- **Padding**: Adding zeros around the input $p_{h},p_{h}$
- **Stride**: Step size of the kernel sliding window $s_{h},s_{w}$
- **Dilation**: Spacing between kernel elements $d_{h},d_{w}$

$$
\text{Output size}=\frac{P+N-F}{\text{stride}}+1
$$

Use a [Softmax Function](/notes/softmax-function) or one-hot encoding for the final classification

[Cross-Entropy](/notes/cross-entropy)

[Gradient Descent](/notes/gradient-descent) vs Adam or other optimization techniques
