# Velocity Kinematics
---

Given joint positions $\Theta \in \mathbb{R}^{n}$

$$
T=\begin{bmatrix}
R & p \\
0 & 1
\end{bmatrix}
\to 
\dot{T}=\begin{bmatrix}
\dot{R} & \dot{p} \\
0 & 0
\end{bmatrix}
$$

$$
\dot{R}(t)=\frac{d}{dt} R(t),\dot{p}(t)=\frac{d}{dt} p(t)
$$

$\dot{p}$ describes linear velocity of the body frame origin in terms of the fixed frame origin
![[Pasted image 20250924132345.png|500]]

$\dot{R}$ describes the rate of change of the rotation matrix $\dot{R}=w_{s}\times R$
![[Pasted image 20250924132420.png|500]]

Replacing $w$ with a [[Skew Symmetric Matrices]] $[w]$ allows for direct multiplication:
$$
\dot{R}=[w_{s}]R,\dot{R}=R[w_{b}],
$$
