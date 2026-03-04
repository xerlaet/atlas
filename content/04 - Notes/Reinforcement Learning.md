# Reinforcement Learning
---

**Reinforcement Learning** (RL) is a paradigm of [Machine Learning](/notes/machine-learning) where an agent learns to make optimal decisions by interacting with an environment. The agent learns from the consequences of its actions, rather than from explicit instruction

The goal is to learn a **policy** that maximizes a cumulative **reward** signal over time

## Core Loop
1.  The agent observes ($o$) the current **state** ($s$) of the environment
2.  Based on its **policy** ($\pi$), the agent selects an **action** ($a$)
3.  The **environment** receives the action, transitions to a new **state** ($s'$), and provides a scalar **reward** ($r$) to the agent
4.  The agent uses this feedback ($s, a, r, s'$) to update its policy to make better decisions in the future

This entire process is often modeled as a [Markov Decision Process](/notes/markov-decision-process)

Often this is done in a simulation first to save time and then deploy the model into the real world

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}
\tikzset{
	block/.style={draw, minimum height=3em, minimum width=7em},
	state/.style={draw, circle, inner sep=0, minimum size=1cm},
	arrow/.style={>=latex}
}
\node[block] (agent) at (0,0) {Agent};
\node[block, right=3cm of agent] (env) {Environment};
\path[draw, arrow, ->] (agent) to[bend left] node[above]{$a_t$} (env);
\path[draw, arrow, ->] (env) to[bend left] node[below]{$s_{t+1},r_t$} (agent);

\end{tikzpicture}
\end{document}
```


Discrete vs Continuous action (simple search vs deep learning)

## Deterministic vs Stochastic Policy
Deterministic vs stochastic policy (PPO uses stochastic - exploration is desired)
$$
a_{t}=\mu (s_{t})\text{ OR }\sim \pi (\cdot \mid s_{t})
$$
Parameterized policies:
$$
a_{t}=\mu_{\theta } (s_{t})\text{ OR }\sim \pi_{\theta } (\cdot \mid s_{t})
$$

A deterministic policy is just a neural net

A stochastic policy uses actual probabilities
$$
\log \pi _{\theta }(a\mid s)=\log [P_{\theta }(s)]_{a}
$$

Diagonal Gaussian Policy

$\mu_{\theta}(s)$
$\log \sigma_{\theta}(s)$ is used to transform a $>0$ value into a range from $(-\infty,\infty)$

## Related Concepts
[Agent](/notes/agent)
[Environment](/notes/environment)
[Policy](/notes/policy)
[Reward](/notes/reward)
[State](/notes/state)
[Q-Learning](/notes/q-learning)
[Exploration vs. Exploitation Trade-off](/notes/exploration-vs-exploitation-trade-off)

Taxonomy of RL!

[Policy Gradient](/notes/policy-gradient)
