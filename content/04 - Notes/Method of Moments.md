# Method of Moments
---

To estimate unknown parameters $\boldsymbol{\theta} = (\theta_1, \dots, \theta_k)$ from sample data, set the **theoretical population moments** equal to the **empirical sample moments** and solve the resulting system of equations

1. Calculate theoretical moments
$$
\mu _{1}'=\mathbb{E}[X], \quad \mu _{2}'=\mathbb{E}[X^{2}], \quad \dots, \quad \mu _{k}'=\mathbb{E}[X^{k}]
$$
2. Calculate sample moments
$$
m_{1}=\frac{1}{n}\sum _{i=1}^{n}x_{i}=\bar{x}, \quad m_{2}=\frac{1}{n}\sum _{i=1}^{n}x_{i}^{2}, \quad \dots, \quad m_{k}=\frac{1}{n}\sum _{i=1}^{n}x_{i}^{k}
$$
3. Solve for $\hat{\theta}_{1},\dots,\hat{\theta}_{k}$
$$
\begin{cases}
\mu_{1}' & =  & m_{1} \\
\dots & \dots & \dots \\
\mu_{k}' & = & m_{k}
\end{cases}
$$
