# Policy Gradient
---

Model-Free RL

$$
J(\pi _{\theta })=\underset{\tau \sim \pi }{E}[R(\tau )]
$$

$$
R(\tau )=\sum _{t=0}^{T}r_{t}
$$

Gradient ascent
$$
\theta _{k+1}=\theta _{k}+\alpha \nabla_{\theta }J(\pi _{\theta })\mid _{\theta _{k}}
$$
$$
\int _{\tau }\nabla_{\theta }P(\tau \mid \theta )R(\tau ) 
$$
