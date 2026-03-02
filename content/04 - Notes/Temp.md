# Temp
---

```tikz
\begin{document}
\begin{tikzpicture}
\path[draw] (0,0) grid (4,4);
\draw (0,0) circle [radius=2];
\draw (0,0) circle [x radius=3, y radius=1.5];
\node[green] (A) at (0,0) {Text};
\foreach \x in {0,...,9}
	\draw (\x,0) circle [radius=0.4];

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[title=, xlabel=$x$, ylabel=$y$, zlabel=$z$, domain=, grid=none, axis lines=none]
\addplot3[mesh, domain=, colormap/viridis] {x^2+y^2};

\end{axis}
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[title=Normal Distribution, xlabel=, ylabel=, zlabel=, domain=-4:4, grid=minor, axis lines=middle, ymin=0, ymax=0.5, samples=100, width=12cm, height=5cm]
\addplot[color=red, thick, fill=red, opacity=0.25] {1/(sqrt(2*pi))*exp(-(1/2)*(x^2))} \closedcycle;

\end{axis}
\end{tikzpicture}
\end{document}
```

$$
f(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left( (x-\mu)/\sigma \right) ^{2}}
$$

```graph
bounds: [-5, 8, 5, -8]
drag: true
keepAspectRatio: true
elements: [
		{type: "functiongraph", def: ["f: x**2"], att: {strokecolor: "white"}},
		{type: "glider", def: [0, 0, e0], att: {strokecolor: "", fillcolor: "red", name: "$tangent$", label: {offset: [10,-15], fontsize: "16", color: cyan}}},
		{type: "tangent", def: [e1], att: {strokecolor: "cyan"}},
		{type: "text", def: [-5, 4, "$f(x)=x^2$"], att: {fontsize: "18"}}
]
```


## Flashcards
---

This is not in a deck::possible answer
<!--SR:!2025-05-18,20,250-->

#flashcards
what is 1+1::2
<!--SR:!2025-12-07,56,270-->

#testreview
what is 2+3::5
<!--SR:!2025-03-22,11,270-->

This is some other text

#flashcards/science
This is a multiline
test
of a note
?
This is the
answer
<!--SR:!2025-05-10,4,248-->

SR:!2025-03-18,7,268
Not an answer

