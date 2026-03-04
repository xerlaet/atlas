# Quaternions
---

**Quaternions** extend [Complex Numbers](/notes/complex-numbers) to represent rotation in 3D space that avoids gimbal lock that [Euler Angles](/notes/euler-angles) suffer from

A quaternion is defined by
$$
q=w+x i+yj+zk
$$
$w$ is the scalar part denoting the angle of rotation
$x,y,z$ are the vector part denoting the axis of rotation

![TikZ Diagram](/attachments/tikz-2691eff9d12726d3c51836472a985d1e.svg)

## Misc
Combining rotations can be done by multiplying them together (non-commutative)
$$
q_{new}=q_{2}\otimes q_{1}
$$

Convert to [Rotation Matrices](/notes/rotation-matrices) with the following formula
$$
R = \begin{bmatrix}
1 - 2(y^2 + z^2) & 2(xy - wz) & 2(xz + wy) \\
2(xy + wz) & 1 - 2(x^2 + z^2) & 2(yz - wx) \\
2(xz - wy) & 2(yz + wx) & 1 - 2(x^2 + y^2)
\end{bmatrix}
$$

## Properties
$$
\begin{align}
i^{2}&=j^{2}=k^{2}=ijk=-1 \\
\lvert q \rvert &=\sqrt{w^{2}+x^{2}+y^{2}+z^{2}}=1 \\
q^{-1}&=q^{*}=w-\xi -yj-zk
\end{align}
$$
