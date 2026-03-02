# Logical Agents
---

[[Propositional Logic]]

## Knowledge-Based Agents
A **knowledge-based agent** represents what it knows about the world in a [[Knowledge Base]], and uses [[Modes of Reasoning|inference]] to derive new facts from what it knows and deduces what actions to take

Given a percept, add it to the knowledge base, ask for the best action, and tell the knowledge it took that action

The **knowledge level** describes the agent based on what it knows and what its goals are (knows A and B, its goal is C, does it through D)
The **implementation level** describes how the agent is actually built (pixel map, A*, ...)

The **declarative** approach is when you tell the agent facts about the world
The **procedural** approach is when specific code encodes the desired behavior (if then rules)

## Logic
**Syntax** specifies what a well formed sentence is
**Semantics** are the meaning of a sentence linking the language to the world

A **model** is a possible world where every sentence is either true or false
**Entailment** is the relationship where one sentence logically follows from another
$$
\alpha \vDash \beta 
$$
$\alpha$ entails or follows from $\beta$
A formal definition is that 
$$
\alpha \vDash \beta \text{ if and only if }M(\alpha )\subseteq M(\beta )
$$

The agent is **grounded** using sensor data

## Propositional Theorem Proving
**Monotonicity** means that adding new knowledge can only increase the set of entailed sentences

Try to show that $KB \land \neg \alpha$ is a contradiction to show that it entails

**Conjunctive normal form** (CNF) is a conjunction of clauses, where each clause is a disjunction of literals

Every sentence in propositional logic can be converted into an equivalent CNF sentence

Resolution is $(P\lor Q)\land (\neg P \lor R)\to (Q\lor R)$. It's great because it's sound and complete and in principle can prove anything that is provable in propositional logic

However they can still be slow in the worst case which is where **horn clauses** come in - they are a clause with at most one positive literal which are natural if then rules

inference with horn clauses can be done in linear time $O(n)$

The core idea is that proving entailment is just a test of unsatisfiability, so fast SAT solvers are what we need

DPLL has early termination and backtracks, if a symbol only appears in a positive or negative form just assign it the value that makes the literal true, if a clause has only one literal left unassigned the remaining litereal must be assigned a value to make the clause true. With intelligent backtracking and random restarts it can solve problems with millions of variables

Walksat is a local search algorithm picking an unsatisfied clause and flipping the value of one symbol. It is often fast and effective, but if it fails after a long time you don't know if its actually unsatisfiable or you just got unlucky.

Landscape: for low or high clause to symbol ratio it is easy to solve (either solutions or unsatisfiable), critically constrained problems like 3-CNF has a threshold around 4.3

How to represent things in time and space?

**Successor-State Axioms** say that a fluent $F$ is true at time $t+1$ if an action at $t$ made it true, or it was already true at $t$ and no action at $t$ made it false

The qualification problem is that we can't possibly list all the exceptions that might cause an action to fail - so the designer must decide what to ignore

The main weakness of propositional logic is that it lacks expressiveness - that's where first order logic comes in
