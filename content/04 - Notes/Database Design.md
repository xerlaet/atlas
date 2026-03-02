# Database Design
---

A [[Database]] is a collection of related data (facts that can be recorded and have inherent meaning)

A **database management system** (DBMS) is a general purpose software system that facilitates the creation and maintenance of a database

```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}
\tikzset{
	block/.style={draw, minimum height=3em, minimum width=7em},
	state/.style={draw, circle, inner sep=0, minimum size=1cm},
	arrow/.style={>=latex}
}
\node[] (users) at (0,8) {Users/Programmers};

\node[block] (b1) at (0,6) {Application Programs/Queries};
\node[block] (b2) at (0,4) {Software to Process Queries};
\node[block] (b3) at (0,2) {Software to Access Data};

\node[block] (meta) at (-2,0) {Meta-Data};
\node[block] (data) at (2,0) {Stored Database};

\path[draw, arrow, ->] (users) to[] node[]{} (b1);
\path[draw, arrow, ->] (b1) to[] node[]{} (b2);
\path[draw, arrow, ->] (b2) to[] node[]{} (b3);

\path[draw, arrow, ->] (b3) to[] node[]{} (meta);
\path[draw, arrow, ->] (b3) to[] node[]{} (data);

\path[draw] (-6,-1) rectangle (6,7);
\path[draw] (-5.5,1) rectangle (5.5,5);

\node[] () at (-4.5,6.5) {Database System};
\node[] () at (-4,4.5) {DBMS Software};

\end{tikzpicture}
\end{document}
```

DBMS's are unnecessary when the situation requires a simple non-changing database, perhaps with stringent real-time requirements and limited storage

## Entity Relationship Model
[[Entity Relationship Model]]

## UML Diagrams

## Relational Model Concepts
Domains consist of a set of relations

A **tuple** is a set of attribute and value pairs

null can mean unknown, exists but not available, attribute doesn't apply

A **superkey** is a combination of attributes that can uniquely identify a record
A **key** is a minimal superkey of R

## SQL
[[SQL]]
