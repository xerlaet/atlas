# Rotation Matrices
---

**Rotation Matrices** are orthogonal linear transformations used to map geometric coordinates between different reference frames. They form the core rotational component of [Transformation Matrices](/notes/transformation-matrices) and update vectors via matrix multiplication ($v_B = R v_A$).

## Core Properties
Valid rotation matrices belong to the Special Orthogonal Group and exhibit strict mathematical rules:
- **Orthogonality**: Column vectors are orthogonal unit vectors, meaning $R^T R = I$.
- **Invertibility**: The inverse of the matrix is simply its transpose ($R^{-1} = R^T$).
- **Orientation**: The determinant strictly equals $+1$, ensuring it preserves the [Right Hand Rule](/notes/right-hand-rule).
- **Composition**: Complex spatial rotations are formed via sequential matrix multiplication. Because multiplication is non-commutative, the order fundamentally matters.

## Dimensional Formulations
Due to matrix complexity scaling with dimensions, specific formulations are broken out by their spatial degrees of freedom:
- [2D Rotation](/notes/2d-rotation): Involves a single angle revolving around the 2D origin.
- [3D Rotation](/notes/3d-rotation): Involves multiplying three separate matrices representing the principal axes, serving as a foundational alternative to [Quaternions](/notes/quaternions) and [Euler Angles](/notes/euler-angles).



