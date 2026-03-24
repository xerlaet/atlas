# Logical Equivalences
---

**Logical Equivalences** are rules in [Propositional Logic](/notes/propositional-logic) that allow for the transformation of compound propositions into different forms while perfectly preserving their truth value. Two propositions $p$ and $q$ are considered logically equivalent if the statement $p \leftrightarrow q$ is a tautology.

## Foundational Equivalence Laws
The following laws form the basis for most propositional manipulation.

| Law | Conjunction Form ($\land$) | Disjunction Form ($\lor$) |
|:--- |:--- |:--- |
| **De Morgan's** | $\neg (p \land q) \equiv \neg p \lor \neg q$ | $\neg (p \lor q) \equiv \neg p \land \neg q$ |
| **Identity** | $p \land T \equiv p$ | $p \lor F \equiv p$ |
| **Domination** | $p \land F \equiv F$ | $p \lor T \equiv T$ |
| **Idempotent** | $p \land p \equiv p$ | $p \lor p \equiv p$ |
| **Commutative**| $p \land q \equiv q \land p$ | $p \lor q \equiv q \lor p$ |
| **Associative** | $(p \land q) \land r \equiv p \land (q \land r)$ | $(p \lor q) \lor r \equiv p \lor (q \lor r)$ |
| **Distributive** | $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ | $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$|
| **Absorption** | $p \land (p \lor q) \equiv p$ | $p \lor (p \land q) \equiv p$ |
| **Negation** | $p \land \neg p \equiv F$ | $p \lor \neg p \equiv T$ |
| **Double Neg.** | $\neg (\neg p) \equiv p$ | |

## Implication & Biconditional Equivalences
These are critical for translating between different logical operators.
$$
\begin{aligned}
p \to q &\equiv \neg p \lor q \\
p \to q &\equiv \neg q \to \neg p \quad (\text{Contrapositive}) \\
p \leftrightarrow q &\equiv (p \to q) \land (q \to p) \\
p \leftrightarrow q &\equiv (p \land q) \lor (\neg p \land \neg q) \\
\neg (p \to q) &\equiv p \land \neg q
\end{aligned}
$$
