# Vectors
---
A **vector** is an element with both magnitude and direction, and usually is written as a list of its components in each direction of a certain basis
$$
\begin{bmatrix}
1 \\
3 \\
-7
\end{bmatrix}
$$
Operations on vectors are defined based on the individual components
$$
\begin{bmatrix}
x_1 \\ x_2 \\ x_3
\end{bmatrix}
\pm
\begin{bmatrix}
y_1 \\ y_2 \\ y_3
\end{bmatrix}
=
\begin{bmatrix}
x_1\pm y_1 \\ x_2\pm y_2 \\ x_3\pm y_3
\end{bmatrix}
$$
$$
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
\cdot
\begin{bmatrix}
y_{1} \\
y_{2} \\
y_{3}
\end{bmatrix}
=
\begin{bmatrix}
x_{1}\cdot y_{1} \\
x_{2}\cdot y_{2} \\
x_{3}\cdot y_{3}
\end{bmatrix}
$$
Note that the addition of two vectors of different dimensions is `undefined`

The **span** of a vector is the set of linear combinations of that vector, which in 3 dimensions is a line

Similarly, the span of two linear independent vectors is a plane, three is all of $\mathbb{R}^3$, etc

A set of vectors is **linearly independent** if no individual vector can be expressed as a linear combination of the other vectors

## Magnitude and Angles
The **magnitude** of a vector is the length which can be found as
$$\lVert v \rVert=\sqrt{v_1^2+v_2^2\ldots}$$
This can be viewed as taking the vector and slicing it with the unit circle
![TikZ Diagram](/attachments/tikz-d6ac7b261aaf06c8be0f4a6c20ee9096.svg)

Additionally, the angle between any two vectors can be found with
$$\cos\theta=\frac{v\cdot w}{\lVert v \rVert\lVert w \rVert}$$
This works because of the following two properties
$$\text{Schwarz Inequality: }\vert v \cdot w \vert \leq \lVert v \rVert \lVert w \rVert$$
$$\text{Triangle Inequality: }\vert v + w \vert \leq \lVert v \rVert + \lVert w \rVert$$
