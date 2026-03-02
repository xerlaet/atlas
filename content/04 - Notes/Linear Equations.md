# Linear Equations
---
## Row Reduction
rref

elimination, inverses, permutations, transpose


### Complete Solution to $A\vec{x}=\vec{b}$
Row reduce 
$$
\begin{bmatrix}
A\mid \vec{b}
\end{bmatrix}
$$
If there are not rows with all zeroes, there is 1 unique solution

Else if there exists rows in the form $[0\,\,0\,\,0\,\,x]$, then there is no solution

Else if there are rows in the form $[0\,\,0\,\,0\,\,0]$, then these are infinite solutions, described by 
$$
\vec{x}=\vec{p}+N(A)
$$
```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5, thick, >=stealth] 
% Axes
\draw[->] (0,0,0) -- (2,0,0) node[anchor=north east]{$x$};
\draw[->] (0,0,0) -- (0,2,0) node[anchor=north west]{$y$};
\draw[->] (0,0,0) -- (0,0,2) node[anchor=south]{$z$};
% Plane on x-z axes
\filldraw[opacity=0.3, blue] (0,0,0) -- (2,0,0) -- (2,0,2) -- (0,0,2) -- cycle;
% Offset plane
\pgfmathsetmacro{\p}{0.5}
\filldraw[opacity=0.3, red] (0,\p,0) -- (2,\p,0) -- (2,\p,2) -- (0,\p,2) -- cycle;
% Labels \node[below] at (1,0,0) {$p$};
%\node[above right] at (1,1,1) {Offset Plane};
%\node[above right] at (1,0.5,1) {Original Plane};
\end{tikzpicture}
\end{document}
```

Where $N(A)$ is the subspace of $A\vec{x}=0$ also known as the **null space**

The subspace of $A\vec{x}=\vec{b}$ is known as the **column space**