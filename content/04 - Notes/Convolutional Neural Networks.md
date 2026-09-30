# Convolutional Neural Networks
---

Image -> Neural network -> Useful information

x -> f(x) -> y

Non-linearity is important - allows the final function to be non linear

### Fully Connected Layer
$$
y=Wx+b
$$
![Pasted image 20260210122625.png](/attachments/Pasted%20image%2020260210122625.png)

For images this will be really large (640x480 images will be 300K weights)

Convolutions are a solution to this weight problem

Input Image -> Convolutional layer -> ReLU layer -> Pooling layer (down-sampling)

channel determined by number of convolutions per layer

$$
\text{Output size}=\frac{P+N-F}{\text{stride}}+1
$$
Pooling (max, average, ...) layers use larger strides to down-sample

Use a [Softmax Function](/notes/softmax-function) or one-hot encoding for the final classification

[Cross-Entropy](/notes/cross-entropy)

[Gradient Descent](/notes/gradient-descent) vs Adam or other optimization techniques
