# Ford-Fulkerson Algorithm
---

1. Assign the flow of each edge to 0
2. Look for an **augmenting path** from $s$ to $t$ (where all edges are positive)
3. Assign a flow equal to the minimum value
4. Calculate the new **residual capacity**
5. Repeat until there are no more augmented paths

The searching algorithm isn't specified, common approaches would be [[Depth First Search|DFS]] and [[Breadth First Search|BFS]]

## Analysis
The searching methods are $O(E)$, and for each augmenting path the flow increases by at least one, so the overall complexity is $O(EF)$ where $F$ is the maximal flow of the network

## Example
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta, positioning}
\begin{document}
\begin{tikzpicture}[->, >=Stealth, node distance=2.5cm, 
    every node/.style={circle, draw, minimum size=0.8cm, font=\small, inner sep=1pt}]

    % Nodes
    \node (s) {s};
    \node (a) [right=of s] {a};
    \node (b) [below=of a] {b};
    \node (t) [right=of a, yshift=-1.25cm] {t};

    % Edges with flow/capacity labels
    \draw[thick] (s) -- (a) node[midway, above] {3/5};
    \draw[thick] (s) -- (b) node[midway, below left] {2/4};
    \draw[thick] (a) -- (b) node[midway, right] {1/3};
    \draw[thick] (a) -- (t) node[midway, above right] {2/3};
    \draw[thick] (b) -- (t) node[midway, below] {3/5};

    % Labels for clarity
    \node[below=0.5cm of b, draw=none, font=\small\itshape, align=center] 
        {Flow / Capacity};
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta, positioning}

\begin{document}
\begin{tikzpicture}[
    ->, >=Stealth,
    node distance=2.5cm and 2.2cm,
    every node/.style={circle, draw, minimum size=0.9cm, font=\small, inner sep=1pt},
    edge label/.style={font=\small, fill=white, inner sep=1pt}
]

% --- Nodes ---
\node (s) {s};
\node (a) [right=of s, yshift=1cm] {a};
\node (b) [right=of s, yshift=-1cm] {b};
\node (c) [right=of b, yshift=1cm] {c};
\node (t) [right=of a, xshift=1cm, yshift=-1cm] {t};

% --- Edges (flow / capacity) ---
\draw[thick] (s) -- (a) node[midway, above left, edge label] {5/10};
\draw[thick] (s) -- (b) node[midway, below left, edge label] {0/5};
\draw[thick] (a) -- (b) node[midway, left, edge label] {0/15};
\draw[thick, red, very thick] (a) -- (c) node[midway, above, edge label, text=red] {5/10};
\draw[thick] (b) -- (c) node[midway, below, edge label] {0/10};
\draw[thick, red, very thick] (c) -- (t) node[midway, above right, edge label, text=red] {5/10};
\draw[thick] (a) -- (t) node[midway, above right, edge label] {0/5};

% --- Highlight augmenting path ---
\draw[red, ultra thick, opacity=0.5] (s) -- (a);
\draw[red, ultra thick, opacity=0.5] (a) -- (c);
\draw[red, ultra thick, opacity=0.5] (c) -- (t);

% --- Legend ---
\node[draw=none, below=1cm of b, font=\small\itshape, align=center] 
    {Flow / Capacity \\
     Red edges = augmenting path (s–a–c–t, +5 flow)};

\end{tikzpicture}
\end{document}
```
