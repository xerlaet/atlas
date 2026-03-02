# Derivation
---
A list of steps to transform the start of the grammar into end terminals

A derivation can be either leftmost or rightmost

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm},arrow/.style={->,thick,>=latex}]
  \node {p}
    child {node {R}
		child {node {R}
			child {node {R}}
			child {node {x}}
		}
	    child {node {x}}
	}
    child {node {x}};
\end{tikzpicture}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm},arrow/.style={->,thick,>=latex}]
  \node {p}
    child {node {x}}
    child {node {R}
	    child {node {x}}
		child {node {R}
			child {node {x}}
			child {node {R}}
		}
	};
\end{tikzpicture}
\end{document}
```

