# Stirling Approximation
---

$$
n!\sim \sqrt{2\pi n}\left( \frac{n}{e} \right)^{n}
$$

**Stirling's approximation** is an asymptotic approximation for factorials

```tikz
\usepackage{pgfplots}

\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        width=12cm, height=8cm,
        xlabel={$x$}, ylabel={$y$},
        domain=-0.5:3.5, ymin=0, ymax=6.5,
        samples=100,
        legend pos=north west,
        axis lines=middle,
        grid=major
    ]
    
    % Gamma function
	%\addplot[color=red, samples=222, smooth, domain = 0:5] gnuplot{gamma(x)};
    %\addlegendentry{$\Gamma(x+1)$}
	
    % Stirling Approximation
    \addplot[red, dashed, thick] {sqrt(2*pi*x) * (x/e)^x} ;
    \addlegendentry{Stirling Approximation}
    
    % Factorial values as dots
    \addplot[only marks, mark=*, mark size=3pt, black] coordinates {
        (0,1) (1,1) (2,2) (3,6)
    };
    \addlegendentry{$n!$ values}
	
    \end{axis}
\end{tikzpicture}

\end{document}
```
