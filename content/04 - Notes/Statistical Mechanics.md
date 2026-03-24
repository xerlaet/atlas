# Statistical Mechanics
---

**Statistical Mechanics** is the field of physics that uses statistical methods and probability theory to explain the macroscopic properties of a system (like temperature and pressure) from the behavior of its microscopic constituents. It provides the fundamental justification for [Thermodynamics](/notes/thermodynamics).

## Core Concepts
- **Microstate vs. Macrostate**: A **macrostate** is the overall state of a system described by variables like pressure and temperature. A **microstate** is a specific configuration of all individual particles' positions and momenta. A single macrostate corresponds to a vast number of possible microstates.
- **Ensemble**: An idealized collection of a large number of systems, all identically prepared macroscopically, used to calculate average properties.
- **Partition Function ($Z$)**: The central mathematical tool in statistical mechanics. It encodes all the statistical properties of a system in thermal equilibrium, from which all other thermodynamic variables can be derived.

## Key Equations
Boltzmann's famous formula directly links the macroscopic property of entropy ($S$) to the number of accessible microstates ($W$).
$$
\begin{aligned}
S &= k_B \ln W && \text{(Boltzmann Entropy)} \\
Z &= \sum_i e^{-E_i / k_B T} && \text{(Partition Function)}
\end{aligned}
$$
where $k_B$ is the Boltzmann constant.

## Maxwell-Boltzmann Distribution
This distribution describes the speeds of particles in an ideal gas at a given temperature. Higher temperatures lead to a wider distribution and a higher average speed.

![TikZ Diagram](/attachments/tikz-a7dbbc581d17ee80765ab67fdaf75e30.svg)
