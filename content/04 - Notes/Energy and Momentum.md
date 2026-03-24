# Energy and Momentum
---

**Energy and Momentum** are fundamental, conserved quantities in [Dynamics](/notes/dynamics) that describe the state and transfer of motion within physical systems. Analyzing these quantities allows us to predict the outcomes of complex interactions without needing to track the exact forces over time.

## Core Quantities
The mechanics of interacting bodies are defined by work, energy, and momentum:
- **Work** ($W$): The energy transferred when a force displaces an object.
- **Kinetic Energy** ($K$): The energy a body possesses due to its motion.
- **Potential Energy** ($U$): The stored energy of a system due to spatial configuration (like gravity or springs).
- **Momentum** ($\mathbf{p}$): The product of an object's mass and velocity, representing its quantity of motion.
- **Impulse** ($\mathbf{J}$): The change in momentum caused by a force applied over a time interval.

$$
\begin{aligned}
W &= \mathbf{F} \cdot \Delta\mathbf{x} \\
K &= \frac{1}{2}mv^2 \\
\mathbf{p} &= m\mathbf{v} \\
\mathbf{J} &= \Delta\mathbf{p} = \mathbf{F}\Delta t
\end{aligned}
$$

## Conservation and Collisions
In perfectly isolated systems, total energy and total momentum remain constant. This makes conservation laws powerful tools for analyzing physical impacts. Interactions are generally split by whether kinetic energy is conserved (elastic) or lost to deformation (inelastic). Detailed derivations of these specific interactions are covered in [Collisions and Impacts](/notes/collisions-and-impacts).

## 1D Collision Visualization
Below is a diagram representing an elastic collision between two masses, demonstrating the conservation of momentum before and after impact.

![TikZ Diagram](/attachments/tikz-bf011f92349ce941604a7ae86a122bbd.svg)

Further details on rotational equivalents can be found in [Angular Momentum](/notes/angular-momentum).
