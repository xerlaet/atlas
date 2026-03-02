# Quaternions
---

**Quaternions** extend [[Complex Numbers]] to represent rotation in 3D space that avoids gimbal lock that [[Euler Angles]] suffer from

A quaternion is defined by
$$
q=w+x i+yj+zk
$$
$w$ is the scalar part denoting the angle of rotation
$x,y,z$ are the vector part denoting the axis of rotation

```tikz
\begin{document}

% Set the viewing angle
\tdplotsetmaincoords{70}{120}

\begin{tikzpicture}[tdplot_main_coords, scale=2.5, >=latex]

    % Parameters
    \def\thetaValue{60} % The rotation angle
    % Define the rotation axis w (in spherical coordinates: polar, azimuthal)
    \def\axTheta{45} % Angle from Z axis
    \def\axPhi{30}   % Angle from X axis in XY plane

    % 1. Draw Original Frame {A}
    \draw[->, thick] (0,0,0) -- (1,0,0) node[anchor=north east]{$x_A$};
    \draw[->, thick] (0,0,0) -- (0,1,0) node[anchor=north west]{$y_A$};
    \draw[->, thick] (0,0,0) -- (0,0,1) node[anchor=south]{$z_A$};

    % 2. Define and Draw Rotation Axis w
    \tdplotsetcoord{W}{1.5}{\axTheta}{\axPhi}
    \draw[->, orange, ultra thick] (0,0,0) -- (W) node[anchor=south west] {$\vec{w}$};
    
    % Draw a dashed line for the axis projection to help 3D perception
    \draw[dashed, orange] (0,0,0) -- (Wxy);
    \draw[dashed, orange] (Wxy) -- (W);

    % 3. Define the Rotated Frame {B} using the axis-angle
    % We use \tdplotsetrotatedaxisangle{nx}{ny}{nz}{angle}
    % First, calculate nx, ny, nz components of W
    \pgfmathsetmacro{\nx}{sin(\axTheta)*cos(\axPhi)}
    \pgfmathsetmacro{\ny}{sin(\axTheta)*sin(\axPhi)}
    \pgfmathsetmacro{\nz}{cos(\axTheta)}
    
    \tdplotsetrotatedaxisangle{\nx}{\ny}{\nz}{\thetaValue}

    % 4. Draw Rotated Frame {B}
    \draw[tdplot_rotated_coords, ->, blue, thick] (0,0,0) -- (1,0,0) node[anchor=west]{$x_B$};
    \draw[tdplot_rotated_coords, ->, blue, thick] (0,0,0) -- (0,1,0) node[anchor=south]{$y_B$};
    \draw[tdplot_rotated_coords, ->, blue, thick] (0,0,0) -- (0,0,1) node[anchor=south west]{$z_B$};

    % 5. Draw the Rotation Arc around axis w
    % We shift to a coordinate system where w is the Z-axis to draw the arc
    \tdplotsetrotatedcoords{\axPhi}{\axTheta}{0}
    \tdplotdrawarc[tdplot_rotated_coords, ->, red]{(0,0,1)}{0.3}{0}{\thetaValue}{anchor=north, yshift=-5pt}{$\theta$}

\end{tikzpicture}
\end{document}
```

## Misc
Combining rotations can be done by multiplying them together (non-commutative)
$$
q_{new}=q_{2}\otimes q_{1}
$$

Convert to [[Rotation Matrices]] with the following formula
$$
R = \begin{bmatrix}
1 - 2(y^2 + z^2) & 2(xy - wz) & 2(xz + wy) \\
2(xy + wz) & 1 - 2(x^2 + z^2) & 2(yz - wx) \\
2(xz - wy) & 2(yz + wx) & 1 - 2(x^2 + y^2)
\end{bmatrix}
$$

## Properties
$$
\begin{align}
i^{2}&=j^{2}=k^{2}=ijk=-1 \\
\lvert q \rvert &=\sqrt{w^{2}+x^{2}+y^{2}+z^{2}}=1 \\
q^{-1}&=q^{*}=w-\xi -yj-zk
\end{align}
$$
