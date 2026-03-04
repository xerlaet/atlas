# Transformation Matrices
---

**Transformation Matrices** can be used to transform points in $n$ dimensional space

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}[>=stealth, thick]


    % --- FRAME 1 (Origin at 0,0) ---
    \draw[->, blue!50] (0,0) -- (1.8,0) node[right, text=black] {$x_1$};
    \draw[->, blue!50] (0,0) -- (0,1.8) node[above, text=black] {$y_1$};
    \filldraw[blue!50] (0,0) circle (1.5pt) node[below left, text=black] {$O_1$};


    % --- FRAME 2 (At (2,1), rotated 60 degrees) ---
    \begin{scope}[shift={(4,2)}]

        % 1. Visualizing the Rotation
        % Draw a faint reference line parallel to the original x1 axis
        \draw[gray, dashed] (0,0) -- (1.5,0);

        % Draw the rotation arc and label
        % Arc from angle 0 to 60 at radius 0.8cm
        \draw[->, gray] (0.8,0) arc (0:60:0.8);
        % Place the label at 30 degrees, slightly further out
        \node[] at (30:1.1) {$\theta$};


        % 2. Drawing the Rotated Frame
        % Apply rotation inside this nested scope
        \begin{scope}[rotate=60]
             % Using red!50 for axes, keeping text black
            \draw[->, red!50] (0,0) -- (1.8,0) node[right, text=black] {$x_2$};
            \draw[->, red!50] (0,0) -- (0,1.8) node[above, text=black] {$y_2$};
            \filldraw[red!50] (0,0) circle (1.5pt);
        \end{scope}
        % Label O2 outside the rotation scope so it doesn't rotate awkwardly
        \node[below, text=black, yshift=-3pt] at (0,0) {$O_2$};

    \end{scope}

    % Translation vector showing the shift from O1 to O2
    \draw[dashed, ->, gray] (0,0) -- (4,2);

\end{tikzpicture}
\end{document}
```




Commonly this happens in 3D
$$
T=\begin{bmatrix}
R & p \\
0 & 1
\end{bmatrix}=
\begin{bmatrix}
r_{11} & r_{12} & r_{13} & p_{1} \\
r_{21} & r_{22} & r_{23} & p_{2} \\
r_{31} & r_{32} & r_{33} & p_{3} \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

To transform some point $x$, do the following
$$
T\begin{bmatrix}
x \\
1
\end{bmatrix}
=
\begin{bmatrix}
x' \\
1
\end{bmatrix}
$$

## 2D Transformations
The position and rotation between two reference frames can be calculated as
$$
\begin{align}
p&=p_{x}\hat{x}_{s}+p_{y}\hat{y}_{s} \\
R&=
\begin{bmatrix}
\hat{x}_{b} & \hat{y}_{b}
\end{bmatrix}
=
\begin{bmatrix}
\cos \theta  & -\sin \theta  \\
\sin \theta  & \cos \theta 
\end{bmatrix}
\end{align}
$$

## 3D Transformations
The position and rotation between two reference frames are calculated in a similar manner to 2D space
$$
\begin{align}
p&=p_{x}\hat{x}_{s}+p_{y}\hat{y}_{s}+p_{s}\dots

\end{align}
R=
\begin{bmatrix}
\hat{x}_{b} & \hat{y}_{b} & \hat{z}_{b}
\end{bmatrix}
=\begin{bmatrix}
r_{11} & r_{12} & r_{13} \\
r_{21} & r_{22} & r_{23} \\
r_{31} & r_{32} & r_{33}
\end{bmatrix}
$$

Each column vector in the rotation matrix should have a unit length and be orthogonal to one another $R^{T}R=I$

Additionally the vectors should follow the [Right Hand Rule](/notes/right-hand-rule), so $\hat{x}_{b}\times \hat{y}_{b}=\hat{z}_{b}$, $\text{det}(R)=1$

Rotation matrices have closure, associativity, are NOT commutative, and a cool fact is that $R^{-1}=R^{T}$ because they are orthogonal

$R_{sc}$ means frame $c$ relative to frame $s$

[Rodrigues' Rotation Formula](/notes/rodrigues-rotation-formula) is an efficient way to rotate a vector given an axis and angle of rotation