# Rotation Matrices
---

**Rotation Matrices** are useful tools for describing rotations in $n$ dimensional space. Typically this is with frames following the [Right Hand Rule](/notes/right-hand-rule)
$$
v_{B}=Rv_{A}
$$
3D rotations can also be represented with [Quaternions](/notes/quaternions) or [Euler Angles](/notes/euler-angles)

## 2D Rotation
Given a rotation, the new coordinate frame can be expressed as
$$
R(\theta )=\begin{bmatrix}
\cos \theta  & -\sin \theta  \\
\sin \theta  & \cos \theta 
\end{bmatrix}
$$
The two columns describe where the $x$ and $y$ axes will end up after the rotation
```tikz
\begin{document}
\begin{tikzpicture}[>=latex, scale=1.5]
    % Original Frame {A}
    \draw[->, thick] (0,0) -- (2,0) node[right] {$x_A$};
    \draw[->, thick] (0,0) -- (0,2) node[above] {$y_A$};
    
    % Rotated Frame {B}
    \begin{scope}[rotate=30, color=blue!50]
        \draw[->, thick] (0,0) -- (2,0) node[right] {$x_B$};
        \draw[->, thick] (0,0) -- (0,2) node[above] {$y_B$};
    \end{scope}
    
    % Rotation Arcs
    \draw[->] (0.7,0) arc (0:30:0.7) node[midway, right, xshift=2pt] {$\theta$};
    \draw[->] (0,0.7) arc (90:120:0.7) node[midway, above, yshift=2pt] {$\theta$};
    
    % Label for origin
    \node[below left] at (0,0) {$O$};
\end{tikzpicture}
\end{document}
```

## 3D Rotation
For any unit rotation in 3D, a similar matrix can be created (notice how the axis being rotated around doesn't move)
$$
\begin{align}
R_{x}(\alpha )&=\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos \alpha  & -\sin \alpha  \\
0 & \sin \alpha  & \cos \alpha 
\end{bmatrix} \\
R_{y}(\beta )&=\begin{bmatrix}
\cos \beta  & 0 & \sin \beta  \\
0 & 1 & 0 \\
-\sin \beta  & 0 & \cos \beta 
\end{bmatrix} \\
R_{z}(\gamma )&=\begin{bmatrix}
\cos \gamma  & -\sin \gamma  & 0 \\
\sin \gamma  & \cos \gamma  & 0 \\
0 & 0 & 1
\end{bmatrix}
\end{align}
$$
```tikz
\usepackage{tikz-3dplot}
\begin{document}

% Set the viewing angle: \tdplotsetmaincoords{rotation_about_x}{rotation_about_z}
\tdplotsetmaincoords{70}{110}

\begin{tikzpicture}[tdplot_main_coords, scale=2, >=latex]
    % Define rotation angle
    \def\rotangle{40}

    % Draw original axes {A}
    \draw[->, thick] (0,0,0) -- (1.5,0,0) node[anchor=north east]{$x_A$};
    \draw[->, thick] (0,0,0) -- (0,1.5,0) node[anchor=north west]{$y_A$};
    \draw[->, thick] (0,0,0) -- (0,0,1.5) node[anchor=south]{$z_A = z_B$};
    
    % Define the rotated coordinate system
    % \tdplotsetrotatedcoords{phi}{theta}{psi} (Euler angles)
    \tdplotsetrotatedcoords{\rotangle}{0}{0}
    
    % Draw rotated axes {B}
    \draw[tdplot_rotated_coords, ->, blue!50, thick] (0,0,0) -- (1.5,0,0) node[anchor=north]{$x_B$};
    \draw[tdplot_rotated_coords, ->, blue!50, thick] (0,0,0) -- (0,1.5,0) node[anchor=west]{$y_B$};
    
    % Draw rotation arcs in the XY plane
    \tdplotdrawarc{(0,0,0)}{0.8}{0}{\rotangle}{anchor=north, yshift=-2pt}{$\alpha$}
    
    % Optional: Draw dashed projection lines to show the rotation more clearly
    \draw[dashed, gray] (0,0,0) circle (1);

\end{tikzpicture}
\end{document}
```

For a complex rotation, multiply the rotational matrices together in order. Typically they are arranged so that the rotations are applied in the order roll pitch yaw
$$
R=R_{z}(\gamma )R_{y}(\beta )R_{x}(\alpha )
$$
Rotation matrices are orthogonal meaning their inverse is their transpose
