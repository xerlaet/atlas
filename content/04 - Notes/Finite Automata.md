# Finite Automata
---
A **finite automaton** is a 5-tuple $(Q,\Sigma,\delta,q_{0},F)$ where
1. $Q$ if a finite set of states
2. $\Sigma$ is a finite set of the alphabet
3. $\delta:Q\times\Sigma\to Q$ are the transition functions
4. $q_{0}\in Q$ is the start state
5. $F\subseteq Q$ is the set of accept states

In a **deterministic finite automata** (DFA) each transition from one state to another is unique, meaning there is only one path given a certain input and every input will have a path to follow
```tikz
\begin{document}
\begin{tikzpicture}[main/.style={draw, circle, inner sep=0, minimum size=1cm},arrow/.style={->,thick,>=latex}]
\node[main] (q1) at (0,0) {$q_1$};
\node[main] (q2) at (3,0) {$q_2$};
\path[draw, opacity=1] (q2) circle [radius=0.4];

\path[draw, arrow, ->] (-1,0) to[] (q1);
\path[draw, arrow, ->] (q1) to[bend left] node[above]{1} (q2);
\path[draw, arrow, ->] (q1) to[looseness=3] node[above]{0} (q1);
\path[draw, arrow, ->] (q2) to[looseness=3] node[above]{1} (q2);
\path[draw, arrow, ->] (q2) to[bend left] node[below]{0} (q1);

\end{tikzpicture}
\end{document}
```
$$\text{DFA recognizing } \{ w \mid w \text{ ends with a 1} \}$$

A **nondeterministic finite automata** (NFA) does not have this rule for the transitions. Additionally, $\epsilon$ is allowed and denotes an empty string
```tikz
\begin{document}
\begin{tikzpicture}[main/.style={draw, circle, inner sep=0, minimum size=1cm},arrow/.style={->,thick,>=latex}]
\node[main] (q1) at (0,0) {$q_1$};
\node[main] (q2) at (3,0) {$q_2$};
\path[draw, opacity=1] (q2) circle [radius=0.4];

\path[draw, arrow, ->] (-1,0) to[] (q1);
\path[draw, arrow, ->] (q1) to node[above]{1} (q2);
\path[draw, arrow, ->] (q1) to[looseness=3] node[above]{0,1} (q1);

\end{tikzpicture}
\end{document}
```
$$\text{NFA recognizing } \{ w \mid w \text{ ends with a 1} \}$$

A **generalized NFA** is similar to an NFA, except the transition states are labeled by regular expressions. This provides an added layer of abstraction and ease of design
TODO

A **regular expression** (Regex) is a shorthand generator equivalent in power
$$
(0+1)^{*}1
$$
$$\text{Regex recognizing } \{ w \mid w \text{ ends with a 1} \}$$

If a NFA has $n$ states, the equivalent DFA will have a max of $2^{n}$ states

## Minimizing
### Myhill-Nerode Theorem
1. $L \subseteq \Sigma^{*}$ is a regular set
2. $L$ is the union of some equivalence classes of a right invariant equivalence relation on $\Sigma^{*}$ of finite index
3. The equivalence relation $R_{L}$ on $\Sigma^{*}$: $[xR_{L}y \iff \forall z: xz \in L \iff yz \in L]$ is of finite index

Right invariant - if two paths converge they will remain the same for equal input

to minimize search for equivalence classes using the feature of right invariant for many strings, start with the final state
