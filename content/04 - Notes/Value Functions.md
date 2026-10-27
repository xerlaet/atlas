# Value Functions
---

Estimate the expected return when following a particular policy $\pi$

**State value** ($V^{\pi}(s)$): Expected return starting from state $s$
$$
V^\pi(s)=\mathbb{E}_\pi[G_t\mid s_t=s]
$$

**Action value** ($Q^{\pi}(s,a)$): Expected return after taking action $a$ in state $s$
$$
Q^\pi(s,a)=\mathbb{E}_\pi[G_t\mid s_t=s,a_t=a]
$$

**Advantage** ($A^{\pi}(s,a)$): How much better a particular action is than the average
$$
A^\pi(s,a)=Q^\pi(s,a)-V^\pi(s)
$$
- $A^\pi(s,a)>0$ - Better than average
- $A^\pi(s,a)<0$ - Worse than average

The state value is the policy-weighted average of action values:
$$
V^\pi(s)=\sum_a\pi(a\mid s)Q^\pi(s,a)
$$
