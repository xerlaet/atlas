# Trajectory Following
---

Given a desired joint trajectory $\theta_{d}(t)$

**Feed Forward**
Send the velocity command $\dot{\theta}(t)=\dot{\theta}_{d}(t)$
$$
\dot{\theta}(t_{k})\approx \frac{\theta _{k+1}-\theta_{k-1} }{2\Delta t}
$$
Errors arise from multiple factors
- Model errors: friction, backlash
- External disturbances: load variations, gravity, contact forces
- Motor imperfections: voltage/current conversion, sensor noise, delay
- Numerical drift: discrete integration errors over time

This necessitates a closed loop

[PIDF Control](/notes/pidf-control)


## Motion Planning

treat the joint limits as obstacles

rapidly exploring random trees

rrt* continuously rewires the search tree to ensure that it always encodes the shortest path from start to each node
![Pasted image 20251105132506.png](/attachments/Pasted%20image%2020251105132506.png)

probabilistic roadmaps build a map first and then query it

visibility graphs

path parameterization

dynamic motion planning (kinodynamic rrt)
