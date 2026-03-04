# Inverse Kinematics
---

Unlike FK, IK can have multiple solutions [Loss of Information](/notes/loss-of-information)

$$
\text{End effector Transformation}\begin{bmatrix}
R & p \\
0 & 1
\end{bmatrix}
\to \text{Joint Configuration} (\theta )
$$

Goal is to find solutions $\theta$ such that $T(\theta)=x$. It is tricky finding roots of a nonlinear equation

Newton-Raphson Method (make an initial guess, gradient descent to nearest solution)
The goal is to drive the term $g(\theta )=x_{d}-f(\theta )$ to 0

