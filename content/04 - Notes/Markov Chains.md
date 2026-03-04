# Markov Chains
---

A stochastic process is **Markov** if $P(\text{future}\mid \text{past and present})=P(\text{future}\mid \text{present})$
A **Markov chain** is a discrete-time, discrete-state Markov stochastic process, and can be described by the formula
$$
P_{h}=P_{0}P^h
$$
where $P_{h}$ is the set of probabilities at time $h$, $P_{0}$ is the set of probabilities at time $0$, and $P$ is the transition matrix

## Example
**Problem** 
In some town, each day is either sunny or rainy. A sunny day is followed by another sunny day with probability 0.7, whereas a rainy day is followed by a sunny day with probability 0.4.

Given that it rains on Monday, make a forecast for Tuesday, Wednesday, and Thursday	

**Solution** 
State 1 = sunny
State 2 = rainy
$$
\begin{align}
&P=\begin{bmatrix}0.7 & 0.3 \\0.4 & 0.6\end{bmatrix} \\
&P_{0}=\begin{bmatrix}0 & 1\end{bmatrix} \\
&P_{1}=P_{0}\cdot P^{1}=\begin{bmatrix}0.4 & 0.6\end{bmatrix} \\
&P_{2}=P_{0}\cdot P^{2}=\begin{bmatrix}0.52 & 0.48\end{bmatrix} \\
&P_{3}=P_{0}\cdot P^{3}=\begin{bmatrix}0.556 & 0.444\end{bmatrix} \\
\end{align}
$$

A Markov chain is considered **regular** if $P_{ij}^{h}>0$ for some $h$ and all $i,j$, else it is considered **irregular**

The **steady state distribution** ($\pi$) is the state after an arbitrarily long amount of time. All regular Markov chains have a steady state distribution, but only some irregular Markov chains have one. The steady state distribution can be found with the following
$$
\text{rref}\begin{bmatrix}
P^T-I & 0 \\
1 & 1
\end{bmatrix}
$$
If the reduced form has a unique solution, that solution is the steady state distribution, else there is no steady state distribution. If it exists, it will satisfy the following equations
$$
\begin{align}
\pi P&=\pi \\
\sum\pi_{i}&=1 \\
\lim_{h \to \infty} P^{h}&=\begin{bmatrix}
\pi_{1} & \cdots  & \pi_{n} \\
\vdots & \ddots  & \vdots \\
\pi_{1} & \cdots  & \pi_{n} \\
\end{bmatrix}
\end{align}
$$

**Problem** 
For the following matrices, state whether they are regular or irregular, and find the steady state distribution (if it exists)
$$
P_{1}=\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0.9 & 0 & 0.1
\end{bmatrix},
P_{2}=\begin{bmatrix}
0.3 & 0.6 & 0.1 \\
0.2 & 0.4 & 0.4 \\
0 & 0 & 1
\end{bmatrix},
P_{3}=\begin{bmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0
\end{bmatrix}
$$
**Solution** 

$P_1$ is regular because $P_1^4=\begin{bsmallmatrix}0.09 & 0.9 & 0.01 \\0.009 & 0.09 & 0.901 \\0.8109 & 0.009 & 0.1801\end{bsmallmatrix}$
$$
\text{rref}\begin{bmatrix}
P_{1}^T-I & 0 \\
1 & 1
\end{bmatrix}=
\text{rref} \begin{bmatrix}
-1 & 0 & 0.9 & 0 \\
1 & -1 & 0 & 0 \\
0 & 1 & -0.9 & 0 \\
1 & 1 & 1 & 1
\end{bmatrix}=
\begin{bmatrix}
1 & 0 & 0 & \frac{9}{28} \\
0 & 1 & 0 & \frac{9}{28} \\
0 & 0 & 1 & \frac{5}{14} \\
0 & 0 & 0 & 0
\end{bmatrix} 
$$
The steady state distribution for $P_1$ is $\begin{bmatrix}\frac{9}{28} & \frac{9}{28} & \frac{5}{14}\end{bmatrix}$

$P_{2}$ is irregular because $P_{2}^{n}$ is always of the form $\begin{bsmallmatrix}* & * & * \\ * & * & * \\0 & 0 & 1\end{bsmallmatrix}$
$$
\text{rref}\begin{bmatrix}
P_{2}^T-I & 0 \\
1 & 1
\end{bmatrix}=
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
The steady state distribution for $P_2$ is $\begin{bmatrix}0 & 0 & 1\end{bmatrix}$

$P_{3}$ is irregular because $P_{3}^{2k}$ is always $\begin{bsmallmatrix}1 & 0 & 0 \\0 & 1 & 0 \\0 & 0 & 1\end{bsmallmatrix}$ and $P_{3}^{2k+1}$ is always $\begin{bsmallmatrix}0 & 0 & 1 \\0 & 1 & 0 \\1 & 0 & 0\end{bsmallmatrix}$
$$
\text{rref}\begin{bmatrix}
P_{3}^T-I & 0 \\
1 & 1
\end{bmatrix}=
\begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & 1 & 2 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
The steady state distribution does not exist, as $P_3$ is periodic
