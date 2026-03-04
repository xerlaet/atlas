# Transformation Matrices
---

**Transformation Matrices** can be used to transform points in $n$ dimensional space

![TikZ Diagram](/attachments/tikz-2ff12074f912f0f2977cb07f75b52bc6.svg)




Commonly this happens in 3D
$$
T=\begin{bmatrix}
R & p \\
0 & 1
\end{bmatrix}=
\begin{bmatrix}
r_{11} & r_{12} & r_{13} & p_{1} \\
r_{21} & r_{22} & r_{23} & p_{2} \\
r_{31} & r_{32} & r_{33} & p_{3} \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

To transform some point $x$, do the following
$$
T\begin{bmatrix}
x \\
1
\end{bmatrix}
=
\begin{bmatrix}
x' \\
1
\end{bmatrix}
$$

## 2D Transformations
The position and rotation between two reference frames can be calculated as
$$
\begin{align}
p&=p_{x}\hat{x}_{s}+p_{y}\hat{y}_{s} \\
R&=
\begin{bmatrix}
\hat{x}_{b} & \hat{y}_{b}
\end{bmatrix}
=
\begin{bmatrix}
\cos \theta  & -\sin \theta  \\
\sin \theta  & \cos \theta 
\end{bmatrix}
\end{align}
$$

## 3D Transformations
The position and rotation between two reference frames are calculated in a similar manner to 2D space
$$
\begin{align}
p&=p_{x}\hat{x}_{s}+p_{y}\hat{y}_{s}+p_{s}\dots

\end{align}
R=
\begin{bmatrix}
\hat{x}_{b} & \hat{y}_{b} & \hat{z}_{b}
\end{bmatrix}
=\begin{bmatrix}
r_{11} & r_{12} & r_{13} \\
r_{21} & r_{22} & r_{23} \\
r_{31} & r_{32} & r_{33}
\end{bmatrix}
$$

Each column vector in the rotation matrix should have a unit length and be orthogonal to one another $R^{T}R=I$

Additionally the vectors should follow the [Right Hand Rule](/notes/right-hand-rule), so $\hat{x}_{b}\times \hat{y}_{b}=\hat{z}_{b}$, $\text{det}(R)=1$

Rotation matrices have closure, associativity, are NOT commutative, and a cool fact is that $R^{-1}=R^{T}$ because they are orthogonal

$R_{sc}$ means frame $c$ relative to frame $s$

[Rodrigues' Rotation Formula](/notes/rodrigues-rotation-formula) is an efficient way to rotate a vector given an axis and angle of rotation