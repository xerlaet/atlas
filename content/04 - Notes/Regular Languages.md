# Regular Languages
---
A language is **regular** if a finite automaton recognizes it

## Closures
The **regular operations** on languages are
1. Union: $A \cup B=\{ w\mid w \in A\text{ or }w\in B \}$
2. Concatenation: $AB=\{ xy \mid x\in A,y \in B\}$
3. Kleene Closure: $A^{*}=\{ x_{1} \dots x_{k} \mid \text{ each }x_{i} \in A \text{ for }k\geq \}$

atomic expressions are build from $\Sigma$, composite expressions are built using $\cup,\circ, *$

Some Properties:
$$
\begin{align}
\alpha (\beta +\gamma )=\alpha \beta +\alpha \gamma  \\
(\alpha \beta )^{*}\alpha =\alpha (\beta \alpha )^{*} \\
(\alpha +\beta )^{*}=(\alpha ^{*}\beta ^{*})^{*} \\
\end{align}
$$

Regular sets are closed under union, concatenation, and the Kleene Star
If $L_{1}$ is regular, so is $L_{1}\cup L_{2}$, $L_{1}\cdot L_{2}$, and $L_{1}^{*}$

to construct a union, connect final state of 1 to initial state of 2
to construct an intersection, construct complement of (complement union complement)


![TikZ Diagram](/attachments/tikz-27372d8cda7edb749f07ee680feb3691.svg)



![Pasted image 20241001144202.png](/attachments/Pasted%20image%2020241001144202.png)

![Pasted image 20241001144214.png](/attachments/Pasted%20image%2020241001144214.png)

![Pasted image 20241001144230.png](/attachments/Pasted%20image%2020241001144230.png)


## Proving non-regularity
Given that $A$ is a regular language, the Pumping Lemma holds that there is a pumping length $p\geq 1$ such that for every string $s$ in $A$ with $\lvert s \rvert\geq p$, $s=xyz$ satisfies:
$$
\begin{align}
\lvert xy \rvert &\leq  p \\
\lvert y \rvert &> 0 \\
\forall i &\geq  0,xy^{i}z \in  A
\end{align}
$$
Given these requirements, determine where $y$ must lie and then pump the string a certain number of times to result in a contradiction with one of the properties

Regular closure properties can also be used to prove non-regularity
