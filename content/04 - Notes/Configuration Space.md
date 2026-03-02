# Configuration Space
---

The **configuration** of a robot specifies where every point is. The minimum number of coordinates needed to represent this configuration is the **degree of freedom** (DOF), and the space containing all possible configurations of the robot is the **configuration space** (C-space)

**Revolute** (R) joint produce rotation
**Prismatic** (P) joints produce linear movement
**Helical** (H) joints produce rotation and translation
**Cylindrical** (C) joints allow independent translation and rotation
**Universal** (U) joints are a pair of revolute joints with orthogonal joint axes
**Spherical** (S) joints allow rotation in any axis

$$
\begin{array}{|l|c|c|c|}
\hline
\textbf{Joint Type} & \textbf{DOF} & \textbf{Planar Constraints} & \textbf{Spatial Constraints} \\
\hline
\text{Revolute (R)} & 1 & 2 & 5 \\
\hline
\text{Prismatic (P)} & 1 & 2 & 5 \\
\hline
\text{Helical (H)} & 1 & N/A & 5 \\
\hline
\text{Cylindrical (C)} & 2 & N/A & 4 \\
\hline
\text{Universal (U)} & 2 & N/A & 4 \\
\hline
\text{Spherical (S)} & 3 & N/A & 3 \\
\hline
\end{array}
$$


**Task space** is the space in which the robot outputs can be expressed (ex. $\mathbb{R}^3\times S^{2}$)
**Work space** is the spec of configurations the end effector can reach (ex. $x,y,z,\theta,\phi$)
