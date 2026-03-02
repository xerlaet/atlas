# Robot Control
---
Task specifications -> controller -> joint velocities (forces and torques for the [[Actuators]])

## Task Specification
Follow a given trajectory
- desired end-effector configuration $X_{d}(t)$
- desired joint positions $\theta_{d}(t)$, can include $\dot{\theta}_{d}(t)$ or $\ddot{\theta}_{d}(t)$

The joint positions will be calculated by the controller and sent to the motors as current

Force, Force/Motion control
- apply a force and or a motion

Impedance Control
- act like a spring with damping properties

A human controlled car is open loop, a self driving car is closed loop
[[Closed Loop Control]]
[[Open Loop Control]]

## Trajectory Following
[[Trajectory Following]]
[[Grasp Planning]]

[[Motors]]

[[Single Link Control]]
