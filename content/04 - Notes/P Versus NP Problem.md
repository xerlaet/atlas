# P Versus NP Problem
---

3-sat \<p knapsack

$\mathbb{P}$ is the class of languages accepted by polynomial DTMs
$\mathbb{NP}$ is the class of languages accepted by polynomial NTMs

$$
\mathbb{P}\subseteq \mathbb{NP}
$$

[Polynomial Time Bounded Reducibilities](/notes/polynomial-time-bounded-reducibilities)

**P** is the set of all problems that can be solved in polynomial time or better

Listing every possible subset of $S=\{ a_{1},a_{2},\dots a_{n} \}$ is difficult ($2^{n}$) because that's how much is being outputted. A problem like is a boolean formula satisfiable or not is much more interesting, as the time complexity lies in the problem itself

The task of finding a MST is comparable to the task of finding a ST with a certain cost. Such decision problems can be reduced to one another

**NP** is the set of all problems that can be solved *non deterministically* in polynomial time or better (the number of branches can be exponential with machines working in parallel)

**NP-Complete** problems are problems that all other NP problems can be reduced to

**NP-Hard** problems are at least as hard as NP problems

A language is $\mathbb{NP}\text{-hard}$ if every language $L'\in \mathbb{NP}$ is polynomial-time reducible to $L$

A language is $\mathbb{NP}\text{-complete}$ if $L\in \mathbb{NP}$ and $L$ is $\mathbb{NP}\text{-hard}$


```tikz
\usetikzlibrary{positioning}
\usepackage{amssymb}
\begin{document}
\begin{tikzpicture}

\node[draw, circle, minimum size=5cm] (np) at (0,0) {$\mathbb{NP}$};
\node[draw, circle, minimum size=5cm, yshift=3cm] (nphard) at (np) {$\mathbb{NP}$-hard};
\node[draw, circle, minimum size=2cm, yshift=-1.5cm] (p) at (np) {$\mathbb{P}$};
\node[yshift=1.5cm] at (np) {$\mathbb{NP}$-complete};

\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}[
  font=\sffamily\scriptsize,
  every node/.style={align=center, text width=1.25cm},
  level 1/.style={sibling distance=7cm},
  level 2/.style={sibling distance=1.5cm},
  level 3/.style={sibling distance=2.5cm},
  level 4/.style={sibling distance=1cm}
]

\node {SAT}
  child { node {CNF-SAT}
    child { node {0/1 IP}
    }
    child { node {3-SAT}
      child { node {CLIQUE}
	      child { node {Vertex Cover}
		      child { node {Hamiltonian Cycle}
			      child { node {TSP}
			      }
		      }
	      }
      }
      child { node {Subset Sum}
      }
    }
  };

\end{tikzpicture}
\end{document}
```

3-SAT to clique
