# Mass-Spring-Damper Dynamics
---

![Pasted image 20251020134629.png](/attachments/Pasted%20image%2020251020134629.png)

b is the damper representing friction and other things which allows for the realistic outcome that the object will eventually stop moving

$$
\begin{align}
\text{Spring force}=-kx \\
\text{Damping force}=-b\dot{x}
\end{align}
$$

replace with $\ddot{\theta}$ instead of $x$
$$
\begin{align}
f-kx-b\dot{x}=m\ddot{x} \\
m\ddot{x}+b\dot{x}+kx=f
\end{align}
$$
The equation is similar to the general form of [Robot Dynamics](/notes/robot-dynamics)


Frequency

$$
\omega _{n}=\sqrt{\frac{k}{m}},f_{n}=\frac{\omega _{n}}{2\pi }
$$
Dampened frequency
$$
\omega _{d}=\omega _{n}\sqrt{1-\zeta ^{2}},\zeta =\frac{b }{2\sqrt{km}}
$$

Based on the damping, there are various cases for the resulting motion
![Pasted image 20251020140155.png](/attachments/Pasted%20image%2020251020140155.png)

Ideally the system is critically damped, $\zeta=1$

This is related to [PIDF Control](/notes/pidf-control)

steady state error is the error when $t=\infty$
2% settling time
overshoot
$$
\text{overshoot}=\left\lvert  \frac{\theta _{e,min}-e_{ss}}{\theta (0)-e_{ss}}  \right\rvert \cdot 100
$$
ch 11
