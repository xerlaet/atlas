# Rotation Matrices
---

**Rotation Matrices** are useful tools for describing rotations in $n$ dimensional space. Typically this is with frames following the [Right Hand Rule](/notes/right-hand-rule)
$$
v_{B}=Rv_{A}
$$
3D rotations can also be represented with [Quaternions](/notes/quaternions) or [Euler Angles](/notes/euler-angles)

## 2D Rotation
Given a rotation, the new coordinate frame can be expressed as
$$
R(\theta )=\begin{bmatrix}
\cos \theta  & -\sin \theta  \\
\sin \theta  & \cos \theta 
\end{bmatrix}
$$
The two columns describe where the $x$ and $y$ axes will end up after the rotation
![TikZ Diagram](/attachments/tikz-6bc82af281e9fb716f42d821de2121f2.svg)

## 3D Rotation
For any unit rotation in 3D, a similar matrix can be created (notice how the axis being rotated around doesn't move)
$$
\begin{align}
R_{x}(\alpha )&=\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos \alpha  & -\sin \alpha  \\
0 & \sin \alpha  & \cos \alpha 
\end{bmatrix} \\
R_{y}(\beta )&=\begin{bmatrix}
\cos \beta  & 0 & \sin \beta  \\
0 & 1 & 0 \\
-\sin \beta  & 0 & \cos \beta 
\end{bmatrix} \\
R_{z}(\gamma )&=\begin{bmatrix}
\cos \gamma  & -\sin \gamma  & 0 \\
\sin \gamma  & \cos \gamma  & 0 \\
0 & 0 & 1
\end{bmatrix}
\end{align}
$$
![TikZ Diagram](/attachments/tikz-29baea3701f86a84579335747e7462fa.svg)

For a complex rotation, multiply the rotational matrices together in order. Typically they are arranged so that the rotations are applied in the order roll pitch yaw
$$
R=R_{z}(\gamma )R_{y}(\beta )R_{x}(\alpha )
$$
Rotation matrices are orthogonal meaning their inverse is their transpose
