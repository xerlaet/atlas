# Context-Free Languages
---
A language is **context-free** if a non-deterministic pushdown automaton recognizes it

A **context-free grammar** is a 4-tuple $(V,\Sigma,R,S)$ where
1. $V$ is a finite set called the variables
2. $\Sigma$ is a finite set disjoint from $V$ called the terminals
3. $R$ is a finite set of rules consisting of a variable and a string of variables and terminals $V \to (V \cup \Sigma)^{*}$
4. $S \in V$ is the start variable

```ad-example
An example context-free grammar, derivation, and parse tree
$$\begin{align}
A &\to 0A 1 \\
A &\to B \\
B &\to \#
\end{align}$$
$$A \to 0A 1 \to 00A 11 \to 000A 111 \to 000B 111 \to 000\# 111$$

![TikZ Diagram](/attachments/tikz-b56e329bdbd0396e8707856ff18f40d6.svg)


It is often convenient to have grammars in a simplified form, one of which is known as the **Chomsky normal form** -> which is if every rule is of the form
$$
\begin{align}
A &\to BC \\
A &\to  a \\
S &\to \epsilon
\end{align}
$$
where $a$ is any terminal and $A,B,C$ are any variables and $S$ is the start variable

TODO: add more about what chomsky normal form implies

## Closures
TODO

## Proving non-context-free
If $A$ is a context-free language, then there is a number $p$ where is $s$ is any string in $A$ of length at least $p$, then $s$ may be divided into five pieces $s=vwxyz$ satisfying the following conditions:
$$
\begin{align}
&\text{for each }i\geq 0,vw^{i}xy^{i}z \in A \\
&\lvert wy \rvert >0 \\
&\lvert wxy \rvert \leq p
\end{align}
$$
Given these requirements, determine where $v$ and $y$ must lie and then pump the string a certain number of times to result in a contradiction with one of the properties

Regular closure properties can also be used to prove non-regularity

## Similar
Backus-Naur Form (BNF) was created to describe the syntax of Algol 58, and is equivalent to CFGs

