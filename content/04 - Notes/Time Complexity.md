# Time Complexity
---

**Time Complexity** analyzes how the runtime of an algorithm scales with its input $n$

The growth rates are often described using [Asymptotic Notation](/notes/asymptotic-notation)

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{semilogyaxis}[
    xlabel={$n$ (Input Size)},
    ylabel={Operations (Log Scale)},
	xtick=\empty, ytick=\empty,
    axis lines=left,
    domain=1.5:10,
    samples=100,
	grid=major, grid style={dashed, gray!50},
    ymin=0,ymax=50000,
    xmin=1.5,
    clip=false
    ]

\addplot[color=green]{1} node[right] {$1$};
\addplot[color=green]{log2(x)} node[right] {$\log(n)$};
\addplot[]{x} node[right] {$n$};
\addplot[color=orange]{x*log2(x)} node[right] {$n\log(n)$};
\addplot[color=red]{x^2} node[right] {$n^2$};
\addplot[color=red]{2^x} node[right] {$2^n$};
\addplot[color=red, domain=1.5:8] {sqrt(2*pi*x) * (x/exp(1))^x} node[right] {$n!$};

\end{semilogyaxis}
\end{tikzpicture}
\end{document}
```

## Types of Analysis
**Worst Case Analysis** looks at the complexity of the worst case
$W(n)=\max (\text{cost}(i))$

**Best Case Analysis** looks at the complexity of the best case
$B(n)=\min (\text{cost}(i))$

**Average Case Analysis** looks at the average complexity of all cases
$A(n)=\sum (\text{prob}(i) \cdot \text{cost}(i))$

**Amortized Analysis** looks at a sequence of worst case actions and calculates an average complexity for them
$M(n)=\frac{\sum_{i=0}^{k}\text{worst case operation} }{k}$

## How to Analyze an Algorithm
1. Break the algorithm into $O(1)$ steps (assignments, arithmetic, array access)
2. Identify loops (a loop running $n$ times is $O(n)$)
3. Multiply complexities of nested loops
4. Add complexities of sequential blocks
5. Simplify by keeping only the fastest growing term and dropping all constants
$$
O(5n^{2}+100n+50)\to O(n^{2})
$$
