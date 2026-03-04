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

![TikZ Diagram](/attachments/tikz-064f07830b4ceba978f76c3ae16453f5.svg)


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

![TikZ Diagram](/attachments/tikz-7e3c4f8325f2f6d5035f3497e3030713.svg)

![Pasted image 20241130223207.png](/attachments/Pasted%20image%2020241130223207.png)
