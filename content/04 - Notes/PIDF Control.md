# PIDF Control
---

$$
\dot{\theta }(t)=K_{p}\theta _{e}(t)+K_{i}\int _{0}^{t} \theta _{e}(t)\, dt +K_{d}\dot{\theta }_{e}(t)+\dot{\theta }_{d}(t)
$$

**Proportional** $K_{p}\theta_{e}$ applies more force when the error is larger
**Integral** $K_{i}\int\theta_{e}$ is used to counter steady state error
**Derivative** $K_{d}\dot{\theta}_{e}$ allows the system to slow down faster
**Feed forward** $\dot{\theta}_{d}$ is the expected velocity for the trajectory (often to counteract gravity)

Often some terms are left out for simplicity, resulting in things like a PD controller

If the model is good use this one: $\tau=\tilde{M}(\theta)\ddot{\theta}+\tilde{h}(\theta,\dot{\theta})$
