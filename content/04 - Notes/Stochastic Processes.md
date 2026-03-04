# Stochastic Processes
---
**Stochastic processes** are random variables which evolve and change through time, and can be described as a function $X(t,\omega)$ where $t$ represents the time from the present as an integer, and $\omega$ represents the outcome of the experiment

Possible values of $X(t)$ are called **states** and depending on the nature of the function, $X(t)$ can be a **discrete-state** and **discrete-time** process or a **continuous-state** and **continuous-time** process

## Markov Chains
[Markov Chains](/notes/markov-chains) are stochastic processes that are discrete-time and discrete-state

## Counting Processes
A stochastic process $X$ is **counting** if $X(t)$ is the number of items counted by the time $t$

More items can always be counted, so counting processes are always non decreasing and composed of non negative integers, hence all counting processes are discrete state

### Binomial Process
A **binomial process** is a process where the number of events are being counted within a specific time frame

The time interval $\lambda$ of each trial is called a **frame**, and the **interarrival time** is the time between successes

$$
\begin{align}
\lambda &=\text{arrival rate} \\
\Delta &=\text{frame size} \\
p&=\text{probability of arrival within one frame} \\
n&=\text{number of frames during time }t \\
X&=\text{number of arrivals during time }t \\
T&=\text{interarrival time}
\end{align}
$$
Formulas
$$
\begin{align}
p&=\lambda \Delta  \\
n&=\frac{t}{\Delta } \\
X&\sim \text{Binomial} \left( \frac{t}{\Delta },p, x \right)  \\
T&\sim \Delta \text{Geometric}(p) \\
E(t)&=\frac{1}{\lambda } \\
V(t)&=\frac{1-p}{\lambda^{2}}
\end{align}
$$

This can be viewed as a Markov chain where the transition probabilities are constant over time and independent of past values, therefore it is a **stationary Markov chain**, and is irregular because $X(n)$ is non decreasing

### Poisson Process
A **poisson process** is a continuous time process obtained from a binomial counting process when the frame size $\Delta$ decreases to $0$ while the arrival rate $\lambda$ remains constant

$$
\begin{align}
\lambda &=\text{average frequency per time unit} \\
X&=\text{number of arrivals during time }t \\
T&=\text{interarrival time}
\end{align}
$$
Formulas
$$
\begin{align}
X&\sim \text{Poisson} (\lambda t)  \\
T&\sim \text{Exponential}(\lambda ) \\
E(t)&=\frac{1}{\lambda } \\
V(t)&=\frac{1}{\lambda^{2}}
\end{align}
$$
