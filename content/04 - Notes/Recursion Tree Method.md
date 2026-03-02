# Recursion Tree Method
---

To use the **Recursion Tree Method**, draw a tree and sum the costs of all the levels

## Example
$$
\begin{align}
T(n)=2T\left( \frac{n}{2} \right)+n^{2}
\end{align}
$$
the height of the tree is $\log n$, thus
$$
\begin{align}
T(n)&\leq n^{2}\left( 1+2\left( \frac{1}{2} \right)^{2}+4\left( \frac{1}{4} \right)^{2}+\dots \right) \\
&=n^{2}\left( 1+\frac{1}{2}+\frac{1}{4} +\dots\right) \\
&=\Theta (n^{2})
\end{align}
$$

```tikz
\begin{document}

\begin{tikzpicture}[
  level 1/.style={sibling distance=5cm, level distance=2cm},
  level 2/.style={sibling distance=2.5cm, level distance=2cm},
  level 3/.style={sibling distance=1.25cm, level distance=2cm},
  every node/.style={circle,draw,align=center}
]
  \node {$n^2$}
  child {
    node {$(n/2)^2$}
    child {
      node {$(n/4)^2$}
      child {
        node {$\cdots$}
      }
    }
    child {
      node {$(n/4)^2$}
      child {
        node {$\cdots$}
      }
    }
  }
  child {
    node {$(n/2)^2$}
    child {
      node {$(n/4)^2$}
      child {
        node {$\cdots$}
      }
    }
    child {
      node {$(n/4)^2$}
      child {
        node {$\cdots$}
      }
    }
  };
\end{tikzpicture}

\end{document}
```
