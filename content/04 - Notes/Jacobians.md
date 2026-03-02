# Jacobians
---

A Jacobian can transform between position and angles. This is important because the commands for the robot will be with respect to joints
$$
\dot{x}=J(\Theta )\dot{\Theta }
$$



$$
V_{s}=\begin{bmatrix}
J_{s_{1}} & J_{s_{2}}(\Theta ) & \dots & J_{sn}(\Theta )
\end{bmatrix}
\begin{bmatrix}
\dot{\Theta }_{1} \\
\dots \\
\dot{\Theta }_{n} \\
\end{bmatrix}=
J_{s}(\Theta )\dot{\Theta }
$$



$$
\dot{x}=\frac{ \partial  }{ \partial t } f(\Theta (t))
$$

each column of the Jacobian is a screw axis


Analytic Jacobian, 6 numbers instead of T matrix
