# Fluid Mechanics
---

**Fluid Mechanics** is the study of how liquids and gases behave at rest (**Fluid Statics**) and in motion (**Fluid Dynamics**). Unlike solids, fluids deform continuously under shear stress and are analyzed using bulk properties like density and pressure.

## Fluid Statics
Statics focuses on fluids in equilibrium, where pressure distribution and buoyant forces are the primary concern.
- **Pressure** ($P$): The normal force exerted by a fluid per unit area ($P = F/A$). Pressure increases with depth.
- **Pascal's Principle**: A pressure change in an enclosed fluid is transmitted undiminished to all portions of the fluid.
- **Archimedes' Principle**: A submerged object is buoyed by a force equal to the weight of the fluid it displaces.

$$
\begin{aligned}
P &= P_0 + \rho gh && \text{(Pressure at Depth)} \\
F_B &= \rho_{\text{fluid}} V_{\text{disp}} g && \text{(Buoyant Force)}
\end{aligned}
$$

## Fluid Dynamics
Dynamics describes moving fluids, often using an **Ideal Fluid** model (non-viscous, incompressible, and with laminar flow).
- **Continuity Equation**: For an incompressible fluid, the volume flow rate ($Av$) is constant through a closed pipe, conserving mass.
- **Bernoulli's Principle**: As the speed of a moving fluid increases, its internal pressure decreases, conserving energy.

$$
\begin{aligned}
A_1 v_1 &= A_2 v_2 && \text{(Continuity)} \\
P + \frac{1}{2}\rho v^2 + \rho gh &= \text{constant} && \text{(Bernoulli)}
\end{aligned}
$$

## Venturi Effect Visualization
This diagram shows that as fluid is forced through a constriction, its velocity increases ($v_2 > v_1$) and pressure drops ($P_2 < P_1$). As the pipe widens again, the velocity and pressure return to their initial states ($v_3 \approx v_1, P_3 \approx P_1$).

![TikZ Diagram](/attachments/tikz-ad1ea69ddb634721293d586c4d1047c1.svg)

Detailed sub-topics can be found in [Viscosity and Turbulence](/notes/viscosity-and-turbulence) and [Surface Tension](/notes/surface-tension).
