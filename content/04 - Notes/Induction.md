# Induction
---
$p_1 \wedge p_2 \wedge p_3 \equiv p_1 \wedge (p_1 \rightarrow p_2) \wedge (p_2 \rightarrow p_3)$

## Mathematical Induction
1. Express the statement that is to be proved in the form "for all $n\geq b,P(n)$"
2. Basis Step
	1. Show that $P(b)$ is true
3. Inductive Step
	1. Express the *Inductive Hypothesis* in the form "assume that $P(k)$ is true for an arbitrary fixed integer $b \leq k$"
	2. Write out what $P(k+1)$ says
	3. Prove $P(k+1)$ using $P(k)$
4. State the conclusion that $P(n)$ is true for all integers $n$ with $n\geq b$

## Strong Induction
1. Express the statement that is to be proved in the form "for all $n\geq b,P(n)$"
2. Basis Step
	1. Show that $P(b)$, $P(b+1)$, ... $P(j)$ are true
3. Inductive Step
	1. Express the *Inductive Hypothesis* in the form "assume that $P(j)$ is true for an arbitrary fixed integer $b \leq j \leq k$"
	2. Write out what $P(k+1)$ says
	3. Prove $P(k+1)$ using $P(j)$
4. State the conclusion that $P(n)$ is true for all integers $n$ with $n\geq b$

## Structural Induction
1. B

mathematical is one -> two -> three -> etc.
strong is one,two,three -> four -> etc
structural is base -> s1 -> s2 -> etc

## General Induction
1. x,y -> general induction or double induction
2. $\forall xQ(x,y)=P(y)$
3. 

## Well-Ordering Property
Every nonempty set of positive (or nonnegative) integers has a least element

This is one of the axioms of the positive integers
