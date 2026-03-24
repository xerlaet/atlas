---
aliases:
- First-Order Logic
---
# Predicate Logic
---

**Propositional functions** (also known as Predicates) are a generalization of propositions, containing both variables and a predicate, e.g. $P(x)$

[Quantifiers](/notes/quantifiers)


Propositional functions become propositions with truth values when their variables are replaced by a value from the **domain** or quantifier
	Ex. let $P(x)$ denote $x>0$ and the domain be all integers., then $P(-3)$ is false

An assertion involving predicates and quantifiers is **valid** if it is true for all domains, **satisfiable** if it is true for some domains, otherwise it is **unsatisfiable**

---

While propositional logic is declarative and compositional, it lacks expressive power because it's a factored representation, not a structured one

**First-Order Logic** models the world similar to natural language with three key concepts
1. Objects are things in the world
2. Relations are properties of objects or relationships between them
3. Functions are a type of relation that has exactly one output for a given input

In both propositional and first-order logic an agent can believe a sentence is true, false, or unknown

An agent has a degree of belief about a fact in probability theory

With fuzzy logic, facts can have a degree of truth (ex. Vienna is a large city is 0.8 true)

Terms are logical expressions that refer to an object (constant, variable, function)
Atomic sentences are the smallest type of sentence that can be true or false (predicate, equality)
Complex sentences are built by combining atomic sentences using logical connectives and quantifiers

A special case is database semantics which makes three extra assumptions:
1. different constant symbols must refer to different objects
2. any fact not stated as true is false
3. the only objects that exist are the ones named by constant symbols

ASK, ASKVARS

axioms vs theorems

Knowledge engineering is the practical process of building a knowledge base. A domain is studied and the output is the ontology - the theory of what exists which a lot is going to come down to choice.

A general strategy is to identify the questions, assemble relevant knowledge, decide on a vocabulary, encode general knowledge, encode a description of the problem instance, pose queries and get answers, debug and evaluate the knowledge base

Electronic circuits is a great application of this

## Inference
one way is to remove all quantifiers to create a larger propositional knowledge base with universal and existential instantiation

Skolem constants

the set of ground terms might be infinite however. **Herbrand's Theorem** states that if a sentence is entailed (provable), only a finite number of these infinite ground sentences can be used to prove it

Entailment in First-order logic is semidecidable

So an algorithm can find a proof for any sentence that is entailed, however no algorithm exists that is guaranteed to halt and say no for every sentence not entailed - the halting problem for logic

Lifted inference and generalized modus ponens

Unification

Storage and retrieval to make inference fast

resolution is sound and refutation complete

**Sound** is if from true premises nothing false will ever be derived, and **complete** is if it can derive every entailed sentence (finding only truths vs finding all truths)

A horn clause is a disjunction of literals with at most one positive literal. A definite clause is a horn clause with exactly one positive literal
conjuctive normal form (CNF) is what's used for SAT solvers, DNF is the opposite and not standardly used
