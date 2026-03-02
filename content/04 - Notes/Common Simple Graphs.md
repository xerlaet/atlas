# Common Simple Graphs
---

A **complete graph** ($K_{n}$) has exactly one edge between each pair of distinct vertices

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\def\s{2.5}

\node[main] (1-1) at ([xshift=\s cm]0,0) {};

\node[main] (2-1) at ([xshift=2*\s cm]-.75,0) {};
\node[main] (2-2) at ([xshift=2*\s cm].75,0) {};
\path[draw] (2-1) to (2-2);

\foreach \x in {3,...,5} {
	\foreach \n in {1,...,\x} {
		\pgfmathparse{(\n-1)*(360/\x)+90}
		\node[main] (N-\n) at ([xshift=\x*\s cm]\pgfmathresult:1cm) {};
	}
	\foreach \i in {1,...,\x} {
		\foreach \j in {\i, ..., \x} {
			\path[draw] (N-\i) to (N-\j);
		}
	}
}

\foreach \x in {1,...,5} {
	\node[] () at ([xshift=\x*\s cm]0,-1.5) {$K_{\x}$};
}

\end{tikzpicture}
\end{document}
```

A **cycle graph** ($C_{n}$) forms a loop with every vertex

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\def\s{2.5}

\foreach \x in {3,...,7} {
	\foreach \n in {1,...,\x} {
		\pgfmathparse{(\n-1)*(360/\x)+90}
		\node[main] (N-\n) at ([xshift=\x*\s cm]\pgfmathresult:1cm) {};
	}
	\foreach \i [evaluate=\i as \j using {int(mod(\i,\x)+1)}] in {1,...,\x} {
		\path[draw] (N-\i) to (N-\j);
	}
}

\foreach \x in {3,...,7} {
	\node[] () at ([xshift=\x*\s cm]0,-1.5) {$C_{\x}$};
}

\end{tikzpicture}
\end{document}
```

A **wheel graph** ($W_{n}$) is a loop with every vertex in the loop connecting to a central vertex

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\def\s{2.5}

\foreach \x in {3,...,7} {
	\node[main] (C-\x) at ([xshift=\x*\s cm]0,0) {};
	\foreach \n in {1,...,\x} {
		\pgfmathparse{(\n-1)*(360/\x)+90}
		\node[main] (N-\n) at ([xshift=\x*\s cm]\pgfmathresult:1cm) {};
	}
	\foreach \i [evaluate=\i as \j using {int(mod(\i,\x)+1)}] in {1,...,\x} {
		\path[draw] (N-\i) to (N-\j);
	}
	\foreach \i in {1,...,\x} {
		\path[draw] (N-\i) to (C-\x);
	}

}

\foreach \x in {3,...,7} {
	\node[] () at ([xshift=\x*\s cm]0,-1.5) {$W_{\x}$};
}

\end{tikzpicture}
\end{document}
```

A **n-cube graph** ($Q_{n}$) is a $n$-dimensional hypercube

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\def\s{3}

\node[main] (1-1) at ([xshift=\s cm]-.75,0) {};
\node[main] (1-2) at ([xshift=\s cm].75,0) {};
\path[draw] (1-1) to (1-2);

\node[main] (2-1) at ([xshift=2*\s cm]-.75,-.75) {};
\node[main] (2-2) at ([xshift=2*\s cm]-.75,.75) {};
\node[main] (2-3) at ([xshift=2*\s cm].75,.75) {};
\node[main] (2-4) at ([xshift=2*\s cm].75,-.75) {};
\path[draw] (2-1) to (2-2);
\path[draw] (2-2) to (2-3);
\path[draw] (2-3) to (2-4);
\path[draw] (2-4) to (2-1);

\node[main] (3-1-1) at ([xshift=3*\s cm]-.75,-.75,-.75) {};
\node[main] (3-1-2) at ([xshift=3*\s cm]-.75,-.75,.75) {};
\node[main] (3-2-1) at ([xshift=3*\s cm]-.75,.75,-.75) {};
\node[main] (3-2-2) at ([xshift=3*\s cm]-.75,.75,.75) {};
\node[main] (3-3-1) at ([xshift=3*\s cm].75,.75,-.75) {};
\node[main] (3-3-2) at ([xshift=3*\s cm].75,.75,.75) {};
\node[main] (3-4-1) at ([xshift=3*\s cm].75,-.75,-.75) {};
\node[main] (3-4-2) at ([xshift=3*\s cm].75,-.75,.75) {};

\path[draw] (3-1-1) -- (3-1-2); \path[draw] (3-1-1) -- (3-2-1);
\path[draw] (3-1-2) -- (3-2-2); \path[draw] (3-2-1) -- (3-2-2);
\path[draw] (3-2-1) -- (3-3-1); \path[draw] (3-2-2) -- (3-3-2);
\path[draw] (3-3-1) -- (3-3-2); \path[draw] (3-3-1) -- (3-4-1);
\path[draw] (3-3-2) -- (3-4-2); \path[draw] (3-4-1) -- (3-4-2);
\path[draw] (3-4-1) -- (3-1-1); \path[draw] (3-4-2) -- (3-1-2);

\foreach \x in {1,...,3} {
	\node[] () at ([xshift=\x*\s cm]0,-1.5) {$Q_{\x}$};
}

\end{tikzpicture}
\end{document}
```

A **complete bipartite graph** ($K_{m,n}$) is a bipartite graph with the maximal amount of edges

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]
\def\m{2}
\def\n{3}
\foreach \u in {1,...,\m} {
	\node[main] (1-\u) at (0.5+1*\u,0) {};
}
\foreach \v in {1,...,\n} {
	\node[main] (2-\v) at (1*\v,-1) {};
}
\foreach \i in {1,...,\m} {
	\foreach \j in {1,...,\n} {
		\path[draw] (1-\i) to (2-\j);
	}
}
\node[] () at (2,-1.5) {$K_{\m,\n}$};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]
\def\m{3}
\def\n{5}
\foreach \u in {1,...,\m} {
	\node[main] (1-\u) at (1+1*\u,0) {};
}
\foreach \v in {1,...,\n} {
	\node[main] (2-\v) at (1*\v,-1) {};
}
\foreach \i in {1,...,\m} {
	\foreach \j in {1,...,\n} {
		\path[draw] (1-\i) to (2-\j);
	}
}
\node[] () at (3,-1.5) {$K_{\m,\n}$};
\end{tikzpicture}
\end{document}
```