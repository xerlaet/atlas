# Robot Control
---
Task specifications -> controller -> joint velocities (forces and torques for the [Actuators](/notes/actuators))

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
[Closed Loop Control](/notes/closed-loop-control)
[Open Loop Control](/notes/open-loop-control)

## Trajectory Following
[Trajectory Following](/notes/trajectory-following)
[Grasp Planning](/notes/grasp-planning)

[Motors](/notes/motors)

[Single Link Control](/notes/single-link-control)
