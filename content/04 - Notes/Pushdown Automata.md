# Pushdown Automata
---
A **push-down automata** is a 6-tuple $(Q,\Sigma,\Gamma,\delta,q_{0},F)$
1. $Q$ is the set of states
2. $\Sigma$ is the input alphabet
3. $\Gamma$ is the tape alphabet
4. $\delta$ are the transition functions $Q\times \Sigma_{\epsilon}\times \Gamma_{\epsilon} \to P(Q\times \Gamma_{\epsilon})$
5. $q_{0}\in Q$ is the start state
6. $F\subseteq Q$ is the set of accept states

A **pushdown automata** (PDA) is essentially an NFA that has access to an infinite stack for memory, and recognizes context-free languages

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={draw, circle, inner sep=0, minimum size=1cm},arrow/.style={->,thick,>=latex}]
\node[main] (q1) at (0,0) {$q_1$};
\path[draw, opacity=1] (q1) circle [radius=0.4];
\node[main] (q2) at (3,0) {$q_2$};
\node[main] (q3) at (3,-2) {$q_3$};
\node[main] (q4) at (0,-2) {$q_4$};
\path[draw, opacity=1] (q4) circle [radius=0.4];

\path[draw, arrow, ->] (-1,0) to[] (q1);
\path[draw, arrow, ->] (q1) to node[above]{$\epsilon,\epsilon \to \$$} (q2);
\path[draw, arrow, ->] (q2) to[looseness=3, out=35, in=-35] node[right]{$0,\epsilon \to 0$} (q2);
\path[draw, arrow, ->] (q2) to node[right]{$1,0 \to \epsilon$} (q3);
\path[draw, arrow, ->] (q3) to[looseness=3, out=35, in=-35] node[right]{$1,0 \to \epsilon$} (q3);
\path[draw, arrow, ->] (q3) to node[below]{$\epsilon,\$ \to \epsilon$} (q4);

\end{tikzpicture}
\end{document}
```
$$\text{PDA recognizing } \{ 0^{n}1^{n}\}$$
