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


```tikz
\begin{document}
\begin{tikzpicture}[main/.style={draw, circle, inner sep=0, minimum size=1cm},arrow/.style={->,thick,>=latex}]

\node[main] (S) at (0,0) {};

\path[draw, opacity=1] (2,0) rectangle (6,3);
\node[main] (S1) at (3,1.5) {};
\node[main] (F1) at (5,0.75) {};
\node[main] (F2) at (5,2.25) {};
\path[draw, opacity=1] (5,0.75) circle [radius=0.4];
\path[draw, opacity=1] (5,2.25) circle [radius=0.4];


\path[draw, opacity=1] (2,-1) rectangle (6,-3.5);

\path[draw, arrow, ->] (-1,0) to (S);
\path[draw, arrow, ->] (S) to[bend left] node[]{$\epsilon$} (S1);
\end{tikzpicture}
\end{document}
```



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
