# Rules of Inference
---

**Rules of Inference** are logically valid argument forms that serve as templates for deriving conclusions from a set of premises. Unlike [Logical Equivalences](/notes/logical-equivalences), which transform statements, these rules produce entirely new, valid statements within a system of [Propositional Logic](/notes/propositional-logic).

## Common Inference Rules
These rules are foundational for constructing proofs and are used heavily by [Logical Agents](/notes/logical-agents) to deduce new facts from a knowledge base.

| Rule | Premises | Conclusion |
|:--- |:--- |:--- |
| **Modus Ponens** | $p$, $p \to q$ | $q$ |
| **Modus Tollens** | $\neg q$, $p \to q$ | $\neg p$ |
| **Hypothetical Syllogism** | $p \to q$, $q \to r$ | $p \to r$ |
| **Disjunctive Syllogism** | $p \lor q$, $\neg p$ | $q$ |
| **Addition** | $p$ | $p \lor q$ |
| **Simplification** | $p \land q$ | $p$ |
| **Conjunction** | $p$, $q$ | $p \land q$ |
| **Resolution** | $p \lor q$, $\neg p \lor r$ | $q \lor r$ |

## Inference with Quantifiers
In [First-Order Logic](/notes/first-order-logic), these rules are extended to handle [Quantifiers](/notes/quantifiers).
- **Universal Instantiation**: From $\forall x P(x)$, we can infer $P(c)$ for any specific object $c$ in the domain.
- **Universal Generalization**: From $P(c)$ for an arbitrary $c$, we can infer $\forall x P(x)$.
- **Existential Instantiation**: From $\exists x P(x)$, we can infer $P(c)$ for some new constant $c$.
- **Existential Generalization**: From $P(c)$ for a specific $c$, we can infer $\exists x P(x)$.
