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

![TikZ Diagram](/attachments/tikz-26c1ac60595ff7133cdc517fd4738a57.svg)


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
