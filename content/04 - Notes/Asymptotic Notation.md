---
aliases:
- Big O Notation
---
# Asymptotic Notation
---

**Asymptotic Notation** describes how a function grows as the input scales to infinity

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[
    xlabel={$n$ (Input Size)},
    ylabel={Runtime},
    axis lines=left,
    domain=1:10,
    samples=100,
    ymin=0, ymax=120,  % Increased ymax for n^2
    xtick={5},
    xticklabels={$n_0$},
    ytick=\empty,
    clip=false  % Allows labels to go outside the axis
    ]

\addplot[color=purple, dashed] {x^2+10} node[right] {$h_1(n) \in \omega(n)$};
\addplot[color=red, dashed] {7*x + 21} node[right] {$c_1 g(n) \in O(n)$};
\addplot[] {5*x + 10*sin(deg(x*2)) + 15} node[right] {$f(n) \in \Theta(n)$};
\addplot[color=green, dashed] {3*x+5} node[right] {$c_2 g(n) \in \Omega(n)$};
\addplot[color=teal, dashed] {log2(x)+5} node[right] {$h_2(n) \in o(n)$};

% n_0 line
\draw [dashed] (axis cs:5,0) -- (axis cs:5,120);

\end{axis}
\end{tikzpicture}
\end{document}
```

## Notations
**Big O** $O(g(n))$ is an upper bound when $f(n)$ grows no faster than $g(n)$
$$
f(n)\in O(g(n)) \text{ if } f(n)\leq c \cdot g(n) \text{ for all } n\geq n_{0}
$$

**Big Omega** $\Omega(g(n))$ is a lower bound when $f(n)$ grows no slower than $g(n)$
$$
f(n)\in \Omega (g(n)) \text{ if } f(n)\geq c \cdot g(n) \text{ for all } n\geq n_{0}
$$

**Big Theta** $\Theta(g(n))$ is a tight bound when $f(n)$ grows at the same rate as $g(n)$
$$
f(n)\in \Theta (g(n)) \text{ if } f(n)\in O(g(n)) \text{ and } f(n)\in \Omega (g(n))
$$

**Little o** $o(g(n))$ is a loose upper bound when $f(n)$ grows strictly slower than $g(n)$
$$
f(n)\in o(g(n)) \text{ if } \lim_{n \to \infty} \frac{f(n)}{g(n)}=0
$$

**Little omega** $\omega(g(n))$ is a loose lower bound when $f(n)$ grows strictly faster than $g(n)$
$$
f(n)\in \omega (g(n)) \text{ if } \lim_{n \to \infty} \frac{f(n)}{g(n)}=\infty
$$
