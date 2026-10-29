# PPO
---

Trains a policy through trial and error using an [Actor-Critic](/notes/actor-critic) architecture.

1. Observe the robot
2. Choose motor commands
3. Simulate environment
4. Score outcome
5. Batch rewards

**Actor** $\pi_{\theta}(a\mid o)$
**Critic** $V_{\phi}(o)$
