# Bellman Equations
---

The **Bellman equations** express the recursive relationship between immediate rewards and expected future returns in a [Markov Decision Process](/notes/markov-decision-process)

## Bellman Expectation
Expected return when following a fixed policy $\pi$
$$
\begin{align}
V^\pi(s)&=\mathbb{E}_\pi[r_t+\gamma V^\pi(s_{t+1})\mid s_t=s] \\
Q^\pi(s,a)&=\mathbb{E}_\pi[r_t+\gamma V^\pi(s_{t+1})\mid s_t=s,a_t=a]
\end{align}
$$

## Bellman Optimality
Optimal expected return following an optimal policy $\pi^*$
$$
\begin{align}
V^*(s)&=\max_a\sum_{s'}P(s'\mid s,a)
\left[r(s,a,s')+\gamma V^*(s')\right]\\
Q^*(s,a)&=\sum_{s'}P(s'\mid s,a)
\left[r(s,a,s')+\gamma\max_{a'}Q^*(s',a')\right]
\end{align}
$$

The optimal policy should be deterministic
$$
\pi^{*} = \mu^*(s)\in\arg\max_a Q^*(s,a)
$$

## Value Iteration
Repeatedly apply the Bellman optimality update to approximate $V^*$
$$
V_{k+1}(s)=\max_a\sum_{s'}P(s'\mid s,a)
\left[r(s,a,s')+\gamma V_k(s')\right]
$$
For finite discounted MDPs with $\gamma<1$, the values converge to $V^*$, from which an optimal policy can be extracted greedily
