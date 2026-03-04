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

![TikZ Diagram](/attachments/tikz-2894af6108b4e132ca78f0378d12dd7f.svg)
$$\text{PDA recognizing } \{ 0^{n}1^{n}\}$$
