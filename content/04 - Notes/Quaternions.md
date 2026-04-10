# Quaternions
---

**Quaternions** are a four-dimensional extension of [Complex Numbers](/notes/complex-numbers) used to efficiently calculate and represent 3D rotations. They are widely utilized in physics engines and 3D programming because they elegantly avoid the **Gimbal Lock** issues inherently associated with [Euler Angles](/notes/euler-angles).

## Axis-Angle Representation
`![TikZ Diagram](/attachments/tikz-02744184a58f0e6946348bafe5dd853d.svg)`

## Mathematical Properties
A quaternion $q$ is defined by a scalar part $w$ and a vector part $x, y, z$. The fundamental relationships of the imaginary basis units dictate:
$$
\begin{aligned}
q &= w + x i + y j + z k \\
i^2 &= j^2 = k^2 = ijk = -1 \\
|q| &= \sqrt{w^2 + x^2 + y^2 + z^2} = 1 \\
q^{-1} &= q^* = w - x i - y j - z k
\end{aligned}
$$

## Rotation & Conversion
- **Composition**: Combining sequential rotations is achieved via non-commutative multiplication ($q_{new} = q_2 \otimes q_1$).
- **[Rotation Matrices](/notes/rotation-matrices)**: A normalized quaternion converts to a $3 \times 3$ transformation matrix:
$$
R = \begin{bmatrix}
1 - 2(y^2 + z^2) & 2(xy - wz) & 2(xz + wy) \\
2(xy + wz) & 1 - 2(x^2 + z^2) & 2(yz - wx) \\
2(xz - wy) & 2(yz + wx) & 1 - 2(x^2 + y^2)
\end{bmatrix}
$$
