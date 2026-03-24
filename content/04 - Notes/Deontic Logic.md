# Deontic Logic
---

**Deontic Logic** is a branch of [Modal Logic](/notes/modal-logic) that provides a formal framework for reasoning about normative concepts such as **obligation**, **permission**, and **prohibition**. It is used to model ethical rules and legal requirements in a mathematically precise way.

## Core Deontic Operators
Deontic logic replaces the standard modal operators with a set dedicated to normative statements.

| Concept | Operator | Meaning | Modal Analogy |
|:--- |:---:|:--- |:---:|
| **Obligation** | $O$ | It is obligatory that $p$ | Necessity ($\Box$) |
| **Permission** | $P$ | It is permissible that $p$ | Possibility ($\Diamond$) |
| **Prohibition** | $F$ | It is forbidden that $p$ | |

## Interdefinability of Operators
The core operators are duals of one another, allowing any of them to be defined in terms of the others. This mirrors the relationship between necessity and possibility in standard modal logic.
$$
\begin{aligned}
Op &\equiv \neg P \neg p \\
Pp &\equiv \neg O \neg p \\
Fp &\equiv O \neg p \\
Fp &\equiv \neg Pp
\end{aligned}
$$

## Paradoxes & Challenges
Formalizing intuitive moral reasoning often leads to logical contradictions. These paradoxes highlight the difficulties of capturing complex ethical nuances in a formal system.
- [Chisholm's Paradox](/notes/chisholms-paradox) - Deals with contrary-to-duty obligations.
- [The Good Samaritan Paradox](/notes/the-good-samaritan-paradox) - Arises from applying standard material implication to duties.

## Applications
- **Ethical AI**: Programming moral constraints into autonomous agents.
- **Legal Reasoning**: Analyzing legal documents for consistency and loopholes.
- **Compliance Systems**: Automating the verification of adherence to regulations.
