# 2D Transformations
---

**2D Transformations** map points in a two-dimensional space to new geometric coordinates. By utilizing **[Homogeneous Coordinates](/notes/homogeneous-coordinates)**, complex transformations—including translation, rotation, and perspective warping—can be seamlessly combined via sequential **[Matrix Multiplication](/notes/matrix-multiplication)**.

## Visualizing Transformations
![TikZ Diagram](/attachments/tikz-ecb58417dcb5c7dfa6bf34da4baaa7e7.svg)

## Transformation Hierarchy
Each successive level of transformation generalizes the previous ones, adding more **Degrees of Freedom** (DoF) while preserving fewer structural properties.

- **Translation** (2 DoF): Moves geometry along X and Y axes. Preserves orientation, lengths, angles, and area.
- **Euclidean / Rigid** (3 DoF): Translation plus rotation. Preserves lengths, angles, and area.
- **Similarity** (4 DoF): Rigid transformation plus isotropic scaling. Preserves angles, parallel lines, and ratios of lengths.
- **Affine** (6 DoF): Similarity plus non-uniform scaling and shear. Preserves parallel lines and ratios of areas.
- **Projective / Homography** (8 DoF): Affine plus perspective distortion. Parallel lines may intersect. Preserves collinearity (straight lines remain straight) and cross-ratios.

## Mathematical Formulation
Applying a general **[Homography Matrix](/notes/homography-matrix)** to a 2D point requires converting the point to a 3D homogeneous coordinate $(x, y, 1)$, performing linear transformation, and normalizing by $w'$ to return to Cartesian coordinates:
$$
\begin{aligned}
\begin{bmatrix} x' \\ y' \\ w' \end{bmatrix} &= \begin{bmatrix} h_{11} & h_{12} & h_{13} \\ h_{21} & h_{22} & h_{23} \\ h_{31} & h_{32} & h_{33} \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} \\
x_{final} &= \frac{x'}{w'}, \quad y_{final} = \frac{y'}{w'}
\end{aligned}
$$
