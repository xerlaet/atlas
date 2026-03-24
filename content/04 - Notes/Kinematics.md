# Kinematics
---

**Kinematics** is the branch of **Classical Mechanics** that describes the motion of points, bodies, and systems without considering the forces that cause them. It focuses purely on the geometry of motion through space and time.

## Core Vectors
Motion is quantified using interconnected vector quantities:
- **Position** ($\mathbf{r}$): The exact location of an object relative to a coordinate origin.
- **Displacement** ($\Delta\mathbf{r}$): The straight-line change in position over a specific time interval.
- **Velocity** ($\mathbf{v}$): The rate of change of position over time ($\mathbf{v} = \frac{d\mathbf{r}}{dt}$).
- **Acceleration** ($\mathbf{a}$): The rate of change of velocity over time ($\mathbf{a} = \frac{d\mathbf{v}}{dt}$).

## Equations of Motion
For systems experiencing **constant acceleration** in one dimension, the relationships between displacement ($\Delta x$), initial velocity ($v_0$), final velocity ($v$), acceleration ($a$), and time ($t$) are defined as follows:

$$
\begin{aligned}
v &= v_0 + at \\
\Delta x &= \left(\frac{v + v_0}{2}\right)t \\
\Delta x &= v_0 t + \frac{1}{2}at^2 \\
v^2 &= v_0^2 + 2a\Delta x
\end{aligned}
$$

## Trajectory Visualization
Below is a standard representation of 2D projectile motion. The primary vectors represent velocity, while the secondary vector demonstrates constant downward acceleration.

![TikZ Diagram](/attachments/tikz-469f926502777afa2dadfff20c41c19e.svg)

## Advanced Motion Systems
When motion expands beyond standard 1D linear trajectories, specialized frameworks are required:
- [Projectile Motion](/notes/projectile-motion) - Analyzes independent vertical and horizontal vectors.
- [Circular Motion](/notes/circular-motion) - Examines centripetal acceleration and tangential velocity.
- [Rotational Kinematics](/notes/rotational-kinematics) - Maps linear variables to angular displacement ($\theta$), angular velocity ($\omega$), and angular acceleration ($\alpha$).
