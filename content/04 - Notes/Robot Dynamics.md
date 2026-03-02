# Robot Dynamics
---

Define angular and linear velocity for the body frame for the rigid body

wrench is torque and force

spatial inertial matrix is inertial matrix and mass matrix

define frame at center of mass for links


At any point, you have position ($\theta$), velocity ($\dot{\theta}$), and torque ($\tau$), you might want to find acceleration ($\ddot{\theta}$)

$$
\ddot{\theta }=M^{-1}(\theta )(\tau -h(\theta ,\ddot{\theta }))
$$

$$
\begin{align}
\tau_{i}\dot{\theta }_{i}=F_{i}^{T}A_{i}\dot{\theta }_{i}\\
\tau _{i}=F_{i}^{T}A_{i}
\end{align}
$$
Newton-Euler Inverse Dynamics Algorithm

---

Any generic robot will follow the following
$$
M(\theta )\ddot{\theta }+c(\theta ,\dot{\theta })\dot{\theta }+g(\theta )=\tau +J(\theta )^{T}F_{\text{tip}}
$$
inertia matrix + Coriolis/centrifugal terms + gravity torques = commanded joint torques + geometric jacobian times wrench acting on the robot by the environment

