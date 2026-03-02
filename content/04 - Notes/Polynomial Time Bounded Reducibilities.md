# Polynomial Time Bounded Reducibilities
---

A function $f:\{ 0,1 \}^{*}$ is **polynomially time computation** if there is a polynomially time bounded [[Turing Machines|DTM]] $M$ that on input $w$ outputs $f(w)$

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}
\tikzset{
	block/.style={draw, minimum height=9em, minimum width=9em},
	state/.style={draw, circle, inner sep=0, minimum size=1cm},
	arrow/.style={>=latex}
}

\node[block] (l1) at (0,0) {};
\node[block] (l2) at (6,0) {};

\node[state] (w) at (l1) {$w$};
\node[state] (fw) at (l2) {$f(w)$};

\node[yshift=-1cm] (x) at (l1) {$x$};
\node[yshift=-1cm] (fx) at (l2) {$f(x)$};

\node[yshift=1cm,xshift=-1cm] () at (l1) {$L_1$};
\node[yshift=1cm,xshift=-1cm] () at (l2) {$L_2$};

\path[draw, arrow, ->] (w) to[bend left=10] (fw);
\path[draw, arrow, ->] (x) to[bend right=10] (fx);

\end{tikzpicture}
\end{document}
```

A **reduction algorithm** computes $f$ which reduces $L_{1}$ to $L_{2}$

