# Modal Logic
---

**Modal Logic** is an extension of classical [Logic](/notes/logic) designed to evaluate statements based on **modality**—most commonly, the concepts of necessity and possibility. Unlike [Propositional Logic](/notes/propositional-logic) where truth is absolute, modal logic determines how a statement is true across different possible scenarios.

## Modal Operators
Two primary operators are introduced to act upon propositions:
- **Necessity ($\Box$)**: Asserts that $p$ is necessarily true in all accessible scenarios. (Read as "It is necessarily true that p")
- **Possibility ($\Diamond$)**: Asserts that $p$ is true in at least one accessible scenario. (Read as "It is possible that p")

## Kripke Structure (Possible Worlds)
Modal logic models truth using a graph of interconnected possible worlds.
![TikZ Diagram](/attachments/tikz-8485db85c16a3e2833d8fc81792628dd.svg)
Each node represents a possible world, and the arrows represent the **accessibility relation**, defining which worlds are reachable from the current one.

## Mathematical Formulation
Modal operators are mathematically linked by duality, meaning one can always be expressed in terms of the other:
$$
\begin{aligned}
\Diamond p &\equiv \neg \Box \neg p \\
\Box p &\equiv \neg \Diamond \neg p
\end{aligned}
$$

## Variations of Modality
Modal logic is a family of logics that changes based on the definition of accessibility:
- **Alethic Logic**: Modality of truth (Necessary and Possible).
- **Epistemic Logic**: Modality of knowledge and belief (Known and Believed).
- **Temporal Logic**: Modality of time (Will be, Has been, Always).
- **Deontic Logic**: Modality of obligation (Obligatory, Permitted, Forbidden). See [Deontic Logic](/notes/deontic-logic) for further details.
