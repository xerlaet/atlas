# Logical Equivalences
---

| Laws                | Law 1                                                     | Law 2                                                      |     |
| ------------------- | --------------------------------------------------------- | ---------------------------------------------------------- | --- |
| De Morgan's Laws    | $\neg (p \lor q) \equiv \neg p \land \neg q$              | $\neg (p \land q) \equiv \neg p \lor \neg q$               |     |
| Identity Laws       | $p \land T \equiv p$                                      | $p \lor F \equiv p$                                        |     |
| Domination Laws     | $p \lor T \equiv T$                                       | $p \land F \equiv F$                                       |     |
| Idempotent Laws     | $p \lor p \equiv p$                                       | $p \land p \equiv p$                                       |     |
| Double Negation Law | $\neg (\neg p) \equiv p$                                  |                                                            |     |
| Negation Laws       | $p \lor \neg p \equiv T$                                  | $p \land \neg p \equiv F$                                  |     |
| Commutative Laws    | $p \lor q \equiv q \lor p$                                | $p \land q \equiv q \land p$                               |     |
| Associative Laws    | $(p \land q) \land r \equiv p \land (q \land r)$          | $(p \lor q) \lor r \equiv p \lor (q \lor r)$               |     |
| Distributive Laws   | $(p \lor (q \land r)) \equiv (p \lor q) \land (p \lor r)$ | $(p \land (q \lor r)) \equiv (p \land q) \lor (p \land r)$ |     |
| Absorption Laws     | $p \lor (p \land q) \equiv p$                             | $p \land (p \lor q) \equiv p$                              |     |

Additional Equalities:
$$\begin{align}
&p \to q \equiv \neg p \lor q \\
&p \to q \equiv \neg q \to \neg p \\
&p \lor q \equiv \neg p \to q \\
&p \land q \equiv \neg (p \to \neg q) \\
&\neg (p \to q) \equiv p \land \neg q \\
&(p \to q) \land (p \to r) \equiv p \to (q \land r) \\
&(p \to r) \land (q \to r) \equiv (p \lor q) \to r \\
&(p \to q) \lor (q \to r) \equiv p \to (q \lor r) \\
&(p \to r) \lor (q \to r) \equiv (p \land q) \to r \\
&p \leftrightarrow q \equiv (p \to q) \land (q \to p) \\
&p \leftrightarrow q \equiv \neg p \leftrightarrow \neg q \\
&p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q) \\
&\neg (p \leftrightarrow q) \equiv p \leftrightarrow \neg q
\end{align}$$
