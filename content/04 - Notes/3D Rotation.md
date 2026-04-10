# 3D Rotation
---

A **3D Rotation** extends [2D Rotation](/notes/2d-rotation) mechanics by allowing points to revolve around the three principal spatial axes. Complex 3D orientations are achieved by combining these fundamental matrices.

## Principal Axes Matrices
Notice that in each matrix, the axis being rotated around remains unaffected (denoted by the $1$ and $0$s in its respective row and column):
$$
\begin{aligned}
R_x(\alpha) &= \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{bmatrix} \\
R_y(\beta) &= \begin{bmatrix} \cos\beta & 0 & \sin\beta \\ 0 & 1 & 0 \\ -\sin\beta & 0 & \cos\beta \end{bmatrix} \\
R_z(\gamma) &= \begin{bmatrix} \cos\gamma & -\sin\gamma & 0 \\ \sin\gamma & \cos\gamma & 0 \\ 0 & 0 & 1 \end{bmatrix}
\end{aligned}
$$

## Visualizing Rotational Axes
![TikZ Diagram](/attachments/tikz-aa620baac5dfe178e1b1cba1aed2085e.svg)
