# Gradients
---

The **gradient** is a vector representing the direction and magnitude of steepest ascent for a given point
$$
\nabla f(x)=\begin{bmatrix}
\frac{ \partial f }{ \partial x_{1} }  \\
\vdots  \\
\frac{ \partial f }{ \partial x_{n} }  \\
\end{bmatrix}
$$

The **total differential** is a scalar that approximates the total change in a function for a given a point
$$
df=\frac{ \partial f }{ \partial x_{1} }dx_{1} +\dots+\frac{ \partial f }{ \partial x_{n} } dx_{n} 
$$
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[title=, xlabel=$x$, ylabel=$y$, zlabel=$z$, domain=, grid=none, axis lines=middle]

\end{axis}
\end{tikzpicture}
\end{document}
```


```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[
	axis lines = middle,
	xlabel = $x$,
	ylabel = $y$,
	view={0}{90}, % Top-down view for contour
	domain=-2:2,
	samples=20,
	title={Gradient on Level Curves}
]
        % Level curves (Contours)
        \addplot3[contour gnuplot={number=10, labels=false}, thick] {x^2 + y^2};
        
        % Example Gradient Vector at point (1, 1)
        % For f = x^2 + y^2, grad(f) = [2x, 2y]. At (1,1), grad is [2, 2].
        \draw[-stealth, red, ultra thick] (axis cs:1,1) -- (axis cs:1.5,1.5) node[right] {$\nabla f$};
            
        \filldraw[black] (axis cs:1,1) circle (1.5pt) node[below left] {$(x_0, y_0)$};
\end{axis}
\end{tikzpicture}
\end{document}
```
