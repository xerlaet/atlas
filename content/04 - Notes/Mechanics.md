# Mechanics
---

## Kinematics
Position, velocity, and acceleration are all related
$$
x=\int v \,dt =\iint a \,dt
$$
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}

% 1. Position vs. Time (for constant acceleration)
\begin{tikzpicture}
\begin{axis}[ width=4cm, height=4cm, xlabel={Time (t)}, ylabel={Position (x)}, xmin=0, xmax=4, ymin=0, ymax=8, domain=0:4, samples=100, grid=major, xticklabels=\empty, yticklabels=\empty]
\addplot[blue!75, thick, fill=blue!75, fill opacity=0.2] {0.5 * 1 * x^2} \closedcycle;
\end{axis}
\end{tikzpicture}

% 2. Velocity vs. Time (for constant acceleration)
\begin{tikzpicture}
\begin{axis}[ width=4cm, height=4cm, xlabel={Time (t)}, ylabel={Velocity (v)}, xmin=0, xmax=4, ymin=0, ymax=8, domain=0:4, samples=100, grid=major, xticklabels=\empty, yticklabels=\empty]
\addplot[red!75, thick, fill=red!75, fill opacity=0.2] {1 * x} \closedcycle;
\end{axis}
\end{tikzpicture}

% 3. Acceleration vs. Time (constant acceleration)
\begin{tikzpicture}
\begin{axis}[ width=4cm, height=4cm, xlabel={Time (t)}, ylabel={Acceleration (a)}, xmin=0, xmax=4, ymin=0, ymax=8, domain=0:4, samples=100, grid=major, xticklabels=\empty, yticklabels=\empty]
\addplot[green!75, thick, fill=green!75, fill opacity=0.2] {1} \closedcycle;
\end{axis}
\end{tikzpicture}
\end{document}
```

When acceleration is constant the following equations apply
$$
\begin{align}
v_{f} & =v_{i}+at \\
\Delta x  & =\left( \frac{v_{i}+v_{f}}{2} \right)t \\
x_{f}  & =x_{i}+v_{i}t+\frac{1}{2}at^2 \\
v_{f}^2 & =v_{i}^2+2a\Delta x
\end{align}
$$


## Forces
Newtons three laws of motion
1. An object at rest will remain at rest and an object in motion will remain in motion unless acted upon by an external force
2. $F=ma$
3. Every action has an equal and opposite reaction

Pretty much every interaction between two things can be described as a force, often broken into different categories
- Force of gravity, $F_{g}/W$, is the interaction between objects and the planet
- Normal Force, $F_{N}$, is an upwards pushing force from a surface
- Force of Tension, $F_{T}/T$, is a pulling force caused by a rope, cable, wire, string, etc
- Force Applied, $F_{a}$, is the force of one object on another
- Force of Friction, $F_{f}$, is the force caused by the interaction between two surfaces
	- could be either static or kinetic friction

$$
\begin{align}
\text{Force of Gravity: }F_{g} \\
\text{Normal Force: }F_{N} \\
\text{Force of Tension: }F_{T} \\

\end{align}
$$

$$
\begin{align}
F&=ma =\frac{dp}{dt} \\
J&=\int F \, dt =\Delta p \\
p&=mv
\end{align}
$$