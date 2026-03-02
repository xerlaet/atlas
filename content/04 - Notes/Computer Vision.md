# Computer Vision
---

Face detection
Optical Character Recognition (OCR)
Image Classification
Surveillance
Segmentation
3D Reconstruction/Estimation

David Marr Theory of Vision:
1. input image
2. primal sketch
3. 2 1/2-d sketch
4. 3D model representation

Image Data (HxWx3)

## Images as Functions
The function $I(x,y)$ will return the value of the pixel at $(x,y)$

The Image gradient can be calculated as follows
$$
\begin{align}
I_{x}=\frac{ \partial }{ \partial x } I(x,y)=\frac{I(x+1,y)-I(x-1,y)}{2}\\
I_{y}=\frac{ \partial }{ \partial y } I(x,y)=\frac{I(x,y+1)-I(x,y-1)}{2}
\end{align}
$$
$$
\nabla I = \begin{bmatrix}
\frac{ \partial I }{ \partial x } \\
\frac{ \partial I }{ \partial y } 
\end{bmatrix}
$$

## Image Filtering
A **kernel** is some pattern that is applied to an image

**Correlation** is using element wise multiplication and summing the results
$$
g=f \otimes h= g(i,j)=\sum_{k,l}f(i+k,j+l)h(k,l)
$$
**Convolution** uses element wise multiplication on flipped areas before summing
$$
g=f * h= g(i,j)=\sum_{k,l}f(i-k,j-l)h(k,l)
$$

If the kernel is symmetric, correlation will be the same as convolution

Convolutions are associative where correlations are not

## Example
$$
\begin{array}{ccc}
\begin{array}{|c|c|c|}
\hline 10 & 5 & 3 \\
\hline 4 & 5 & 1 \\
\hline 1 & 1 & 7 \\
\hline
\end{array}
&
\begin{array}{|c|c|c|}
\hline 0 & 0 & 0 \\
\hline 0 & 0.5 & 0 \\
\hline 0 & 1 & 0.5 \\
\hline
\end{array}
&
\begin{array}{|c|c|c|}
\hline \phantom{7} &  &  \\
\hline  & 7 &  \\
\hline  &  & \phantom{7} \\
\hline
\end{array}
\\
\text{Local Image Data} & \text{Kernel} & \text{Modified Image Data}
\end{array}
$$

## Convolutional Neural Networks
Image -> Neural network -> Useful information

x -> f(x) -> y

Non-linearity is important - allows the final function to be non linear

### Fully Connected Layer
$$
y=Wx+b
$$
![[Pasted image 20260210122625.png|center|332]]

For images this will be really large (640x480 images will be 300K weights)

Convolutions are a solution to this weight problem

Input Image -> Convolutional layer -> ReLU layer -> Pooling layer (down-sampling)

channel determined by number of convolutions per layer

$$
\text{Output size}=\frac{P+N-F}{\text{stride}}+1
$$
Pooling (max, average, ...) layers use larger strides to down-sample

Use a [[Softmax Function]] or one-hot encoding for the final classification

[[Cross Entropy]]

[[Gradient Descent]] vs Adam or other optimization techniques

