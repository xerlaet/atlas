# Huffman Encoding
---

A **Huffman Encoding** is used to encode a set of items such at each item will be represented by a unique binary string, where the average length of such strings are minimized. Additionally, no encoding is a prefix of another, so decoding is unambiguous.

Input: set of items and their corresponding probabilities
Output: encoding tree

The idea is to start by combining the nodes with the smallest probabilities using a [[Greedy Algorithms|greedy approach]] and build the encoding tree from the bottom up

The complexity is $O(n\log n)$ because a min heap needs to be created along with deletion of the minimal element $n$ times

```tikz
\begin{document}
\begin{tikzpicture}[
    % Global node styles
    huffman node/.style={
        circle,
        draw,
        minimum size=6mm,
        inner sep=0pt,
    },
    leaf node/.style={
        huffman node,
        draw=red!50,
    },
    % Edge labels
    edge label/.style={
    }
]

% Define nodes for characters and their frequencies (or combined frequencies)
% Format: \node[style] (name) at (x,y) {text};

% Level 0 (Root)
\node[huffman node] (root) at (0,3) {100};

% Level 1
\node[leaf node] (F) at (-2,1.5) {F};
\node[huffman node] (55) at (2,1.5) {55};

% Level 2
\node[huffman node] (25) at (1,0) {25};
\node[huffman node] (30) at (3,0) {30};

% Level 3
\node[leaf node] (C) at (0.5,-1.5) {C};
\node[leaf node] (D) at (1.5,-1.5) {D};
\node[leaf node] (E) at (3.5,-1.5) {E};
\node[huffman node] (14) at (2.5,-1.5) {14}; % Intermediate node for A and B

% Level 4 (Leaves for A and B)
\node[leaf node] (A) at (2,-3) {A};
\node[leaf node] (B) at (3,-3) {B};


% Drawing edges and placing labels
% Format: \draw (start_node) -- (end_node) node[edge label, position] {label};

% Root to Level 1
\draw (root) -- (F) node[edge label, midway, left] {0};
\draw (root) -- (55) node[edge label, midway, right] {1};

% Level 1 to Level 2
\draw (55) -- (25) node[edge label, midway, left] {0};
\draw (55) -- (30) node[edge label, midway, right] {1};

% Level 2 to Level 3
\draw (25) -- (C) node[edge label, midway, left] {0};
\draw (25) -- (D) node[edge label, midway, right] {1};
\draw (30) -- (14) node[edge label, midway, left] {0};
\draw (30) -- (E) node[edge label, midway, right] {1};

% Level 3 to Level 4
\draw (14) -- (A) node[edge label, midway, left] {0};
\draw (14) -- (B) node[edge label, midway, right] {1};

\end{tikzpicture}
\end{document}
```
A = 1100
B = 1101
C = 100
D = 101
E = 111
F = 0
