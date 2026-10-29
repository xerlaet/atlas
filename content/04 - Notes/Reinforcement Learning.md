# Reinforcement Learning
---

An **agent** learns to make decisions by interacting with an **environment** and receiving rewards, seeking to maximize cumulative rewards. Commonly trained in simulation before deployment on physical hardware.

## Core Loop
![TikZ Diagram](/attachments/tikz-b7974439d393bb2ef1397e78f5bc4070.svg)
1. **Observe**: Policy receives observation $o_t$
2. **Act**: Policy $\pi_\theta$ selects action $a_t$
3. **Transition**: Environment moves to $s_{t+1}$ and returns $o_{t+1}$, reward $r_t$
4. **Learn**: RL algorithm uses collected experience to update the policy
5. **Repeat**: Policy uses $o_{t+1}$ for the next action

## Objective
Learn a **policy** $\pi_\theta$ that maximizes the **expected return** (usually discounted)
$$
\underbrace{G_t=\sum_{k=0}^{\infty}\gamma^k r_{t+k}}_{\text{Discounted Return}}
\qquad
\underbrace{\max_\theta J(\theta)=\mathbb{E}_{\pi_\theta}[G_0]}_{\text{Optimization Objective}}
$$
- $\gamma\in[0,1]$: Discount factor, prioritizes earlier rewards
- [Value Functions](/notes/value-functions): Expected future return from states/actions
- [Bellman Equations](/notes/bellman-equations): Recursive relationships between rewards and values

## Policies
A **policy** maps the information available to the agent to an action or a distribution over actions. Let $x_t$ denote its input:
- **Reactive**: $x_t=o_t$ (or $s_t$ in a fully observable formulation).
- **Memory-based**: $x_t$ includes a history summary, recurrent hidden state, or belief about the environment state.
- **Goal-conditioned**: $x_t$ also includes a goal or command, such as desired walking velocity.

$$
\underbrace{a_t=\mu_\theta(x_t)}_{\text{Deterministic}}
\qquad
\underbrace{a_t\sim\pi_\theta(\cdot\mid x_t)}_{\text{Stochastic}}
$$
A fully general history-dependent policy can condition on $h_t=(o_0,a_0,r_0,\ldots,o_t)$ when rewards are observed. Practical policies often use only a subset or a learned summary of this history. Here $h_t$ means interaction history, not the environment's hidden state $s_t$.

| Classification        | Approaches                                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Environment model** | **Model-free**: Learn without a dynamics model<br>**Model-based**: Use a model for planning                                                                                         |
| **Learning strategy** | **Value-based**: Learn action values ([DQN](/notes/dqn))<br>**Policy-based**: Directly optimize policy ([Policy Gradient](/notes/policy-gradient))<br>**Actor-Critic**: Combine policy and value learning ([PPO](/notes/ppo)) |
| **Experience source** | **On-policy**: Learn from current-policy experience ([PPO](/notes/ppo))<br>**Off-policy**: Can reuse other-policy experience ([DQN](/notes/dqn), [SAC](/notes/sac))                                               |

## Challenges
- **Exploration vs exploitation**: Trying new actions vs using known good ones
- **Credit assignment**: Identifying actions responsible for delayed rewards
- **Sample efficiency**: Learning from limited interactions
- **Reward design**: Aligning rewards with desired behavior
