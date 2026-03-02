# Relations
---

Relations are generalized functions
## Types of Relations
### Recurrence Relations
[[Recurrence Relations]] are a way of describing terms in a sequence based on the previous terms

### Binary Relations
A **binary relation** from $A$ to $B$ is a set of ordered pairs where the first element comes from $A$ and the second element comes from $B$, or more mathematically as $R\subseteq A \times B$

$aRb$ is used to denote that $(a,b)\in R$ where $a$ is related to $b$

Ex. the relation $\{ (0,a), (0,b), (1,a), (2,b) \}$ on the two sets $\{ 0,1,2 \}$ and $\{ a,b \}$ can be represented graphically as follows

```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}
\begin{document}
\begin{tikzcd}
0 \arrow[r] \arrow[dr] & a\\
1 \arrow[ur] & b \\
2 \arrow[ur]
\end{tikzcd}
\quad
$
\begin{array}{c|cc}
R & a & b \\
\hline
0 & \times & \times \\
1 & \times & \\
2 & & \times
\end{array}
$
\quad
$
\begin{bmatrix}
1 & 1 \\
1 & 0 \\
0 & 1
\end{bmatrix}
$
\end{document}
```

Relations are a generalization of graphs of functions, since a function $f(x)$ can be represented as a relation where $f(a)=b$

#### Properties of Binary Relations
R is **reflexive** if $(a,a)\in R$ for every element $a \in A$
R is **symmetric** if $(b,a) \in R$ whenever $(a,b) \in R$ for all $a,b \in A$
R is **antisymmetric** if $a=b$ whenever $(a,b)\in R$ and $(b,a)\in R$ , be careful since there can be vacuous solutions
R is **transitive** if whenever $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$ for all $a,b,c \in A$

**INVERSE RELATIONS** a,b in R <-> b,a in R^-1

Relations can be combined using basic set operations $\cup, \cap, \oplus, -$   to form new relations

The other way to combine relations is with a **composition**, which if $(x,y)$ is a member of $R_1$ and $(y,z)$ is a member of $R_2$, then $(x,z)$ is a member of $R_2 \circ R_1$

This is easily done by multiplying representative matrices together
### n-ary Relations
**n-ary relations** are generalized relations where each of the input sets are related in some certain way, and the number of sets is the degree

For example the relation of $\mathbb{N}\times \mathbb{N}\times \mathbb{N}$ consisting of $(a,b,c)$ with $a<b<c$ contains $(1,2,3)$ but not $(2,4,3)$

Databases are relevant applications of n-ary relations, consisting of **records** which are in turn made up of **fields**

A **primary key** is a domain of an n-ary relation that is unique
A **composite key** is a combination of domains that are unique

### Boolean Relations
$0$ and $1$ matrices, where $+ \to \lor, \cdot \to \land$

## Closures of Relations
The **closure** of $R$ with respect to $P$ ($P$ being reflexive, symmetric, or transitive) is the smallest relation which satisfies such a property $P$

Ex. the reflexive closure of a set $\{ (1,1), (1,2), (2,1), (3,2) \}$ is the set plus the values $\{ (2,2), (3,3) \}$ in order to make the set reflexive

The antisymmetric closure does not always exist because you can only add edges

transitive closures, paths, and warshall's algorithm

The connectivity relation are pairs (a,b) where there is at least one path from a to b, and is equal to the transitive closure

## Equivalence Relations
A relation is an **equivalence relation** if it is reflexive, symmetric, and transitive. In this the order does not matter

Two elements $a$ and $b$ that are related by an equivalence relation are called **equivalent** $a\sim b$

Examples of equivalence relations are the set of strings where the first 8 characters are the same, or the set of integers when 4 divides $a-b$, generalized as $a\equiv b(\text{mod }m)$

The set of elements related to an element $a$ is called the **equivalence class** of $a$, denoted as $[a]_{R}$ or just $[a]$ when one relation is under consideration

The equivalence relation can be written as $aRb$ or $[a]=[b]$ or $[a]\cap[b]\neq\emptyset$

## Partial Orderings
A relation is a **partial ordering** if it is reflexive, antisymmetric, and transitive. In this the order matters

For example the relations $\leq$, $\subseteq$, and $\mid$ are all partial orderings

Elements $a$ and $b$ are called **comparable** if $a\preccurlyeq b$ or $b\preccurlyeq a$, otherwise they are **incomparable**, comparable just being a general term for being a partial order

Ex. the integers 3 and 9 are comparable in the poset $(\mathbb{Z}^+,\mid)$ because $3\mid 9$

A poset $(S, \preccurlyeq)$ where every two elements in $S$ are comparable, then $S$ is called a **totally ordered** or **linearly ordered** set

Ex. $(\mathbb{Z}, \leq)$ is totally ordered whereas $(\mathbb{Z}^+, \mid)$ is not

A poset $(S, \preccurlyeq)$ is **well-ordered** if it is a total ordering and every nonempty subset of $S$ has a least element

ex. Lexicographic order (alphabetical)
### Hasse Diagrams
Hasse diagrams are graphs which show partial ordering for a set

Since a partial ordering is always reflexive, loops are every node are implied, and since partial ordering is also transitive certain edges are implied, and arrows are not necessary since you can assume all edges are pointed "upward"

Ex. a hasse diagram for the poset $(\{ 1,2,3,4 \},\leq)$ showing every connection and then systematically removing implied connections

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}[>=stealth, mynode/.style={ circle, fill, minimum size=0.1cm, inner sep=0, label={[anchor=west]right:#1}}]

\node[mynode=1] (1) at (0,0) {};
\node[mynode=2] (2) at (0,1) {};
\node[mynode=3] (3) at (0,2) {};
\node[mynode=4] (4) at (0,3) {};

\draw[->] (1) to [out=210,in=150,looseness=20] (1);
\draw[->] (2) to [out=210,in=150,looseness=20] (2);
\draw[->] (3) to [out=210,in=150,looseness=20] (3);
\draw[->] (4) to [out=210,in=150,looseness=20] (4);

\draw[->] (2) to [out=135,in=235,looseness=1] (4);
\draw[->] (1) to [out=150,in=220,looseness=1] (3);
\draw[->] (1) to [out=150,in=220,looseness=1] (4);

\draw[->] (1) to (2);
\draw[->] (2) to (3);
\draw[->] (3) to (4);
\end{tikzpicture}

\quad

\begin{tikzpicture}[>=stealth, mynode/.style={ circle, fill, minimum size=0.1cm, inner sep=0, label={[anchor=west]right:#1}}]

\node[mynode=1] (1) at (0,0) {};
\node[mynode=2] (2) at (0,1) {};
\node[mynode=3] (3) at (0,2) {};
\node[mynode=4] (4) at (0,3) {};

\draw[->] (2) to [out=135,in=235,looseness=1] (4);
\draw[->] (1) to [out=150,in=220,looseness=1] (3);
\draw[->] (1) to [out=150,in=220,looseness=1] (4);

\draw[->] (1) to (2);
\draw[->] (2) to (3);
\draw[->] (3) to (4);
\end{tikzpicture}

\qquad

\begin{tikzpicture}[>=stealth, mynode/.style={ circle, fill, minimum size=0.1cm, inner sep=0, label={[anchor=west]right:#1}}]

\node[mynode=1] (1) at (0,0) {};
\node[mynode=2] (2) at (0,1) {};
\node[mynode=3] (3) at (0,2) {};
\node[mynode=4] (4) at (0,3) {};

\draw[-] (1) to (2);
\draw[-] (2) to (3);
\draw[-] (3) to (4);
\end{tikzpicture}
\end{document}
```

Posets have **maximal** and **minimal** elements, which are the top and bottom elements in a hasse diagram

Ex. a hasse diagram for the poset $(\{ a,b,c \}, \subseteq)$

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}[mynode/.style={ circle, fill, minimum size=0.1cm, inner sep=0}]
 
\node[mynode, label={[anchor=north]$\emptyset$}] (0) at (0,0) {};
\node[mynode, label={[anchor=east]$\{a\}$}] (a) at(-1.5,1.5) {};
\node[mynode, label={[anchor=west]$\{b\}$}] (b) at (0,1.5) {};
\node[mynode, label={[anchor=west]$\{c\}$}] (c) at (1.5,1.5) {};
\node[mynode, label={[anchor=east]$\{a,b\}$}] (ab) at (-1.5,3) {};
\node[mynode, label={[anchor=west]$\{a,c\}$}] (ac) at (0,3) {};
\node[mynode, label={[anchor=west]$\{b,c\}$}] (bc) at (1.5,3) {};
\node[mynode, label={[anchor=south]$\{a,b,c\}$}] (abc) at (0,4.5) {};

\draw[-] (0) to (a);
\draw[-] (0) to (b);
\draw[-] (0) to (c);

\draw[-] (a) to (ab);
\draw[-] (a) to (ac);
\draw[-] (b) to (ab);
\draw[-] (b) to (bc);
\draw[-] (c) to (ac);
\draw[-] (c) to (bc);

\draw[-] (ab) to (abc);
\draw[-] (ac) to (abc);
\draw[-] (bc) to (abc);

\end{tikzpicture}
\end{document}
```

In this case since $\{ a,b,c \}$ and $\emptyset$ are the only maximal and minimal elements, they are also considered the **greatest** and **least** elements

The **upper bound** $u$ is such that or $a\preccurlyeq u$ where $a\in A$ which is a subset of $S$, and a similar idea exists for a **lower bound**

There may exist a smallest element of the upper bound called the **least upper bound** and once again a similar element may exist called the **greatest lower bound**

A **lattice** is poset in which every pair of elements has both a least upper bound and a greatest lower bound