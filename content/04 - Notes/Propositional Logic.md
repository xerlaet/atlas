# Propositional Logic
---

**Propositional Logic** (or zeroth-order logic) is the foundational branch of logic dealing with propositions—declarative statements that are strictly **true** or **false**—and their combination using logical operators.

## Core Terminology
- **Atomic Propositions**: Indivisible foundational statements (e.g., $1+1=0$). Represented by propositional variables ($p, q$).
- **Compound Propositions**: Constructed by combining atomic propositions using logical operators.
- **Tautology**: A proposition that is always true under any truth assignment (e.g., $p \lor \neg p$).
- **Contradiction**: A proposition that is always false (e.g., $p \land \neg p$).
- **Contingency**: A proposition that is neither a tautology nor a contradiction.
- **Consistency**: A set of propositions is consistent if they are all satisfiable (can be true) simultaneously.

## Operators & Precedence
Logical operators follow a strict order of operations when evaluating compound propositions:
1. **Parentheses**: $()$
2. **Negation** (NOT): $\neg$
3. **Conjunction** (AND): $\land$
4. **Disjunction** (OR): $\lor$
5. **Implication** (IF-THEN): $\to$
6. **Biconditional** (IF-AND-ONLY-IF): $\leftrightarrow$

*Note: **Exclusive OR** ($\oplus$) evaluates to true only when inputs differ, acting as the negation of the biconditional.*

### Implication Variations
Given a standard implication $p \to q$:
- **Converse**: $q \to p$
- **Inverse**: $\neg p \to \neg q$
- **Contrapositive**: $\neg q \to \neg p$ (Logically equivalent to the original implication)

## Clauses & Equivalence
- **Clause**: A disjunction connected strictly by OR operations, composed of positive or negative literals (e.g., $\neg p \lor \neg q \lor r$).
- **Horn Clause**: A specific type of clause containing at most *one* positive literal, heavily used in logic programming and [First-Order Logic](/notes/first-order-logic).
- **Logical Equivalence**: Two propositions $p$ and $q$ are equivalent if $p \leftrightarrow q$ is a tautology. See [Logical Equivalences](/notes/logical-equivalences) for standard transformation rules.

## Generalized Operations
For large sets of propositions, generalized conjunction and disjunction use notation similar to mathematical summations:
$$
\begin{aligned}
\bigvee_{j=1}^n p_j &= p_1 \lor p_2 \lor \dots \lor p_n \\
\bigwedge_{j=1}^n p_j &= p_1 \land p_2 \land \dots \land p_n
\end{aligned}
$$
