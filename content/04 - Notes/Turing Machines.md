# Turing Machines
---

A **Turing Machine** (TM) is a 7-tuple $(Q,\Sigma,\Gamma,\delta,q_{0},q_{accept},q_{reject})$ where
1. $Q$ is the finite set of states
2. $\Sigma$ is the input alphabet not containing $\textvisiblespace$
3. $\Gamma$ is the tape alphabet $\textvisiblespace \in \Gamma,\Sigma \subseteq \Gamma$
4. $\delta:Q\times \Gamma \to Q\times \Gamma \times \{ L,R \}$ are the transition functions
5. $q_{0}\in Q$ is the start state
6. $q_{accept}\in Q$ is the accept state
7. $q_{reject}\in Q$ is the reject state

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}
\tikzset{
	block/.style={draw, minimum height=7em, minimum width=7em},
	state/.style={draw, circle, inner sep=0, minimum size=1cm},
	arrow/.style={>=latex}
}
\node[block] (contro) at (0,0) {$q$ finite control};

\end{tikzpicture}
\end{document}
```


A TM has 3 possible outcomes for each input $w$:
1. Accept $w$ (enter $q_{acc}$)
2. Reject $w$ by halting (enter $q_{rej}$)
3. Reject $w$ by looping (running forever)

If a TM halts on every input it is a **decider** and the language it recognizes is then **T-decidable**, otherwise the language is only **T-recognizable**

## Variations
A **multitape turing machine** is a TM with multiple extra tapes for storage
DIAGRAM

A **turing enumerator** acts as a generator for a language, similar to regular expressions or context-free grammars
DIAGRAM

### Notation
$\left< O_{1},O_{2},\dots O_{k} \right>$ is an encoding of $O_{1},O_{2},\dots O_{k}$ into a single string

A Turing machine is commonly notated as
$$
\begin{align}
M=&\text{ On input }w \\
&\text{ [English description of the algorithm]}
\end{align}
$$

```tikz
\begin{document}
\begin{tikzpicture}
    \draw[thick] (0, 0) ellipse (1 and 1) node[align=center] {Regular};

    \draw[thick] (0, 0.75) ellipse (1.5 and 2) node[above=1cm, align=center] {Context-Free};

    \draw[thick] (0, 2) ellipse (3.5 and 4.5) node[below=2.6cm, align=center] {Decidable};

    \draw[thick] (0, 3) ellipse (4.5 and 5.5) node[below=3.6cm, align=center] {Turing-Recognizable};
\end{tikzpicture}

\end{document}
```

![[Pasted image 20241130223207.png]]
