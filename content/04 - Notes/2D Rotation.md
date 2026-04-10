# 2D Rotation
---

A **2D Rotation** revolves points in a two-dimensional plane around the origin by a given angle $\theta$. The columns of the matrix describe where the original X and Y axes land after the transformation.

## Transformation Matrix
Given a counter-clockwise rotation, the new coordinate frame is expressed as:
$$
R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}
$$

## Visualizing 2D Space
![TikZ Diagram](/attachments/tikz-f11dbceb42f29125192911366aee2412.svg)
