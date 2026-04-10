# Transformation Matrices
---

**Transformation Matrices** can be used to transform points in $n$ dimensional space

![TikZ Diagram](/attachments/tikz-2ff12074f912f0f2977cb07f75b52bc6.svg)

Commonly this happens in 3D where:
- $R$ is the rotation matrix (see [Rotation Matrices](/notes/rotation-matrices) for details)
- $p = \begin{bmatrix} p_x \\ p_y \\ p_z \end{bmatrix}$ is the translation vector, describing where the origin of frame B is located relative to frame A, expressed in frame A's coordinates
$$
T=\begin{bmatrix}
R & p \\
0 & 1
\end{bmatrix}
=
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
[2D Transformations](/notes/2d-transformations)

## Composition
Transformation matrices can be composed by multiplication:
$$
T_{AC} = T_{AB} T_{BC}
$$
This represents first applying transformation B relative to A, then C relative to B.

[Rodrigues' Rotation Formula](/notes/rodrigues-rotation-formula) is an efficient way to rotate a vector given an axis and angle of rotation
