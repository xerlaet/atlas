# Complex Numbers
---

**Complex Numbers** ($\mathbb{C}$) consist of a real part plus an imaginary part
$$
z=x+iy, \text{where } i^{2}=-1
$$

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[title=, xlabel=$Re$, ylabel=$Im$, zlabel=$z$, domain=, grid=none, axis lines=middle, ymin=-2, ymax=2, xmin=-2, xmax=2]

\end{axis}
\end{tikzpicture}
\end{document}
```

## Properties
$$
\begin{align}
z_{1}+z_2&=(x_{1}+x_{2})+i(y_{1}+y_{2}) \\
z_{1}\cdot z_{2}&=(x_{1}x_{2}-y_{1}y_{2})+i(x_{1}y_{2}+x_{2}y_{1}) \\
\bar{z}&=x-iy=\lvert z \rvert (\cos -\phi +i\sin -\phi ) \\
z\cdot \bar{z}&=\lvert z \rvert ^{2}
\end{align}
$$

The complement of a real number is just that number
$$
R_{\phi }=\begin{bmatrix}
\cos \phi  & -\sin \phi  \\
\sin \phi  & \cos \phi 
\end{bmatrix}
, R_{\phi }R_{\psi }=R_{\phi +\psi }
$$
