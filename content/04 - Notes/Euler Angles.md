# Euler Angles
---

**Euler Angles** define the orientation of a rigid body in 3D space using three distinct rotational values. While mathematically compact, they inherently suffer from **[Gimbal Lock](/notes/gimbal-lock)**—the loss of a degree of freedom when two rotational axes align. This limitation is why **[Quaternions](/notes/quaternions)** are frequently preferred in complex 3D computation.

## Core Rotations
`![TikZ Diagram](/attachments/tikz-19f431a0faf748dbf7af181f517329d1.svg)`

- **Roll** ($\phi$): Rotation about the longitudinal axis (X-axis).
- **Pitch** ($\theta$): Rotation about the transverse axis (Y-axis).
- **Yaw** ($\psi$): Rotation about the vertical axis (Z-axis).

## Matrix Composition
Combining multiple Euler rotations requires sequential matrix multiplication. Because matrix multiplication is non-commutative, the exact order of rotations fundamentally changes the final orientation.

- **Intrinsic Rotations**: Rotations occur about the axes of the actively rotating coordinate system (e.g., standard Z-Y-X).
- **Extrinsic Rotations**: Rotations occur about the fixed, static world coordinate system (e.g., standard X-Y-Z).

To compute the final transformation for a standard Z-Y-X sequence, multiply the individual **[Rotation Matrices](/notes/rotation-matrices)** in reverse order:
$$
R = R_z(\psi) R_y(\theta) R_x(\phi)
$$
