# Reinforcement Learning
---

An **agent** learns to make decisions by interacting with an **environment** and receiving rewards, seeking to maximize cumulative rewards. Commonly trained in simulation before deployment on physical hardware.

## Core Loop
![TikZ Diagram](/attachments/tikz-587d678e3ae7b6d2e51392f62614aec5.svg)

1. **Observe**: Agent receives the current state $s_t$
2. **Act**: Agent selects action $a_t$ using policy $\pi$
3. **Transition**: Environment produces next state $s_{t+1}$ and reward $r_t$
4. **Learn**: Agent improves its policy using collected experience

Interactions are commonly modeled as a [Markov Decision Process](/notes/markov-decision-process)

## Objective
Learn a **policy** $\pi_\theta$ that maximizes the **expected return** (cumulative discounted reward)
$$
\underbrace{G_t=\sum_{k=0}^{\infty}\gamma^k r_{t+k}}_{\text{Discounted Return}}
\qquad
\underbrace{\max_\theta J(\theta)=\mathbb{E}_{\pi_\theta}[G_0]}_{\text{Optimization Objective}}
$$
- $\gamma\in[0,1]$: Discount factor, prioritizes earlier rewards
- [Value Functions](/notes/value-functions): Expected future return from states/actions
- [Bellman Equations](/notes/bellman-equations): Recursive relationships between rewards and values

## Policies
A **policy** maps states to actions, either deterministically or stochastically
$$
\underbrace{a_t=\mu_\theta(s_t)}_{\text{Deterministic}}
\qquad
\underbrace{a_t\sim\pi_\theta(\cdot\mid s_t)}_{\text{Stochastic}}
$$

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
