# First-Order Logic
---

**First-Order Logic** (FOL), or predicate logic, is a foundational formal system used in [AI](/notes/artificial-intelligence) for [Knowledge Representation](/notes/knowledge-representation). Unlike [Propositional Logic](/notes/propositional-logic), which only handles atomic true/false facts, FOL allows [Logical Agents](/notes/logical-agents) to robustly reason about complex environments using objects, their properties, and their relationships.

## Core Syntax
The vocabulary of FOL is built from several distinct types of symbols:
- **Constants**: Specific, named objects in a domain (e.g., $John$, $Earth$).
- **Variables**: Placeholders that represent any object in the domain (e.g., $x$, $y$).
- **Predicates**: Relations or properties that evaluate strictly to true or false (e.g., $IsHuman(x)$, $Likes(x, y)$).
- **Functions**: Operations that return a specific object rather than a truth value (e.g., $FatherOf(John)$).
- **Terms**: Any logical expression that refers to an object (can be a constant, variable, or function).

## Quantifiers
FOL introduces quantification to express the scope of variables across an entire domain of discourse. 
- **Universal Quantifier** ($\forall$): Asserts that a predicate is true for *every* possible object in the domain. Typically paired with the implication operator ($\to$).
- **Existential Quantifier** ($\exists$): Asserts that a predicate is true for *at least one* object in the domain. Typically paired with the conjunction operator ($\land$).

## Logical Formulation
Formulas are constructed by combining predicates, quantifiers, and the standard logical operators from [Propositional Logic](/notes/propositional-logic). 
$$
\begin{aligned}
\forall x \ (IsHuman(x) &\to IsMortal(x)) \\
\exists y \ (IsHuman(y) &\land Likes(y, John))
\end{aligned}
$$
The first statement reads: "For all $x$, if $x$ is human, then $x$ is mortal."
The second statement reads: "There exists some $y$ such that $y$ is human and $y$ likes John."

## Inference Mechanisms
To deduce new information from a FOL knowledge base, AI systems rely on specialized algorithms to substitute variables with constants (a process called [Unification](/notes/unification)). 
- **Forward Chaining**: A data-driven approach that applies [Rules of Inference](/notes/rules-of-inference) to known facts to extract new conclusions.
- **Backward Chaining**: A goal-driven approach that starts with a query and works backward to find the necessary facts to prove it.
