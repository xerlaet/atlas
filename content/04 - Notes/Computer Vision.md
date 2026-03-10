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
[Image Filtering](/notes/image-filtering)

## Convolutional Neural Networks
[Convolutional Neural Networks](/notes/convolutional-neural-networks)

## Object Detection
[Object Detection](/notes/object-detection)
[Semantic Segmentation](/notes/semantic-segmentation)
Instance Segmentation
