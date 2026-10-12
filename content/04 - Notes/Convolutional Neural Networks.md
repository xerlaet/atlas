# Convolutional Neural Networks
---

When applied to grid-structured data such as images, traditional [Neural Networks](/notes/neural-networks) suffer from parameter explosion and a loss of spatial structure

![TikZ Diagram](/attachments/tikz-784b764efe4bd6d4ce0d4454994ab81b.svg)

**Convolutional Neural Networks** are specialized for images by making features look the same regardless of where they appear, and pixels closer together are correlated more

## Hyperparameters
- **Kernel Size** ($k_{h},k_{w}$): Dimensions of the sliding window
- **Padding** ($p_{h},p_{h}$): Zeros added around borders often to preserve output size
- **Stride** ($s_{h},s_{w}$): Step size of the kernel
- **Dilation** ($d_{h},d_{w}$): Spacing between kernel elements
- **Channels** ($C_{\text{in}},C_{\text{out}}$): Depth of input maps and number of kernels

Given an input feature map $(H_{\text{in}},W_{\text{out}})$, the output feature map $(H_{\text{out}},W_{\text{out}})$ is:
$$
\begin{align}
H_{\text{out}} &= \left\lfloor \frac{H_{\text{in}} + 2p_h - d_h(k_h - 1) - 1}{s_h} \right\rfloor + 1 \\
W_{\text{out}} &= \left\lfloor \frac{W_{\text{in}} + 2p_w - d_w(k_w - 1) - 1}{s_w} \right\rfloor + 1
\end{align}
$$

## Forward Pass
$$
\text{Input }X\to \text{Conv Layer }Z\to \text{Activation }A\to \text{Pooling }P\to \text{Softmax}
$$

**Convolutional Layer**: Applies sliding kernels to extract local feature maps
$$
Z_{k,i,j}=b_{k}+\sum _{c=0}^{C_{\text{out}}-1}\sum _{m=0}^{k_{h}-1}\sum _{n=0}^{k_{w}-1}X_{c,i+m,j+n}\cdot W_{k,c,m,n}
$$
**Non-Linear Activation Layer**: Introduces non-linearity using [Activation Functions](/notes/activation-functions)
$$
A_{k,i,j}=g(Z_{k,i,j})
$$
**Subsampling/Pooling Layer**: Downsamples using a larger stride
- **Max Pooling**: Extracts dominant features
$$
P_{k,i,j}=\max_{m,n}(A_{k,i,j})
$$
- **Average Pooling**: Smooths features
$$
P_{k,i,j}=\frac{1}{k_{h}k_{w}}\sum_{m=0}^{k_{h}-1}\sum_{n=0}^{k_{w}-1}A_{k,i+m,j+n}
$$

## Backpropagation
Let $\delta=\frac{ \partial \mathcal{L} }{ \partial Z }$ be the error passed back from each layer
$$
\begin{align}
\frac{ \partial \mathcal{L} }{ \partial W_{k,c,m,n} } &=\sum _{i}\sum _{j}\delta _{k,i,j}\cdot X_{c,i+m,j+n} \\
\frac{ \partial \mathcal{L} }{ \partial b_{k} } &=\sum _{i}\sum _{j}\delta _{k,i,j}
\end{align}
$$

## Classification & Output
Use a [Softmax Function](/notes/softmax-function) or one-hot encoding for the final classification

 [Cross-Entropy](/notes/cross-entropy) is often used as the loss function to perform [Gradient Descent](/notes/gradient-descent)
 