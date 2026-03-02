# Right Hand Rule
---

The **Right Hand Rule** is a way of denoting the relative orientation of axes relative to one another

The positive rotation direction is always counter-clockwise (direction the fingers curl for the Z axis)

```tikz
\usetikzlibrary{positioning}
\usepackage{tikz-3dplot}
\begin{document}

% Set the viewing angle (elevation, azimuth)
\tdplotsetmaincoords{70}{110}

\begin{tikzpicture}[tdplot_main_coords, >=stealth, thick]

    % --- The Coordinate Axes ---
    % Draw axes slightly longer to accommodate the hand visual
    \draw[->, gray] (0,0,0) -- (4,0,0) node[anchor=north east] {$X$};
    \draw[->, gray] (0,0,0) -- (0,4,0) node[anchor=north west] {$Y$};
    \draw[->, gray] (0,0,0) -- (0,0,4) node[anchor=south] {$Z$};

    % --- Stylized Right Hand Visualization ---

    % 1. The "Curled Fingers" (Arc from X towards Y)
    % We draw a thick, colored arc in the XY plane
    \draw[->, red!50, line width=3pt, opacity=0.7] (2.5,0,0) 
        arc[start angle=0, end angle=90, radius=2.5]
        node[midway, below right, text=black, opacity=1] {Curled Fingers ($X \to Y$)};

    % 2. The "Thumb" (Thick arrow along Z)
    % Drawn starting slightly up the Z axis so it doesn't overlap the origin messily
    \draw[->, blue!50, line width=4pt, opacity=0.7] (0,0,0) -- (0,0,3.5) 
        node[midway, left, text=black, opacity=1] {Thumb points $Z$};

\end{tikzpicture}
\end{document}
```

Funnily enough, this can also be done with the left hand
