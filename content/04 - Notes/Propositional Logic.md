# Propositional Logic
---

## Propositions
A proposition is a **declarative sentence** that is either **true (T)** or **false (F)**
	Ex. the moon is made of cheese and $1+1=0$

Variables representing propositions are known as **propositional variables**, and if they are constructed from one or more propositions they are known as **compound propositions**, else they are **atomic propositions**

The precedence of operators are
1. Parenthesis $()$
2. Negation $\neg$
3. Conjunction $\land$
4. Disjunction $\lor$
5. Implication $\to$
6. Biconditional $\leftrightarrow$
Exclusive or $\oplus$ can be thought of the negation of the biconditional operator
disjunction

A **clause** is a group of predicates composed of literals (positive or negative)
$$
\neg p \lor  \neg  q \lor  r
$$
A **horn clause** is a clause with at most one positive literal

### Truth Tables

### Definitions
Given $p\to q$, the **converse** is $q\to p$, the **contrapositive** is $\neg q\to \neg p$, and the **inverse** is $\neg p\to \neg q$

Similarly, a list of propositions is **consistent** if they are all satisfiable together

A **tautology** is a proposition which is always true such as $p \lor \neg p$
A **contradiction** is a proposition which is always false such as $p \land \neg p$
A **contingency** is a proposition which is neither a tautology nor a contradiction such as $p$

Two propositions $p$ and $q$ are **logically equivalent** if $p\leftrightarrow q$ is a tautology
$$\begin{align}
\bigvee_{j=1}^np_j = p_1 \lor p_2 \lor \ldots \lor p_n \\
\bigwedge_{j=1}^np_j = p_1 \land p_2 \land \ldots \land p_n
\end{align}$$

[[Logical Equivalences]]
