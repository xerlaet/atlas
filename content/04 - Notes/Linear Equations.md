# Linear Equations
---
## Row Reduction
rref

elimination, inverses, permutations, transpose


### Complete Solution to $A\vec{x}=\vec{b}$
Row reduce 
$$
\begin{bmatrix}
A\mid \vec{b}
\end{bmatrix}
$$
If there are not rows with all zeroes, there is 1 unique solution

Else if there exists rows in the form $[0\,\,0\,\,0\,\,x]$, then there is no solution

Else if there are rows in the form $[0\,\,0\,\,0\,\,0]$, then these are infinite solutions, described by 
$$
\vec{x}=\vec{p}+N(A)
$$
![TikZ Diagram](/attachments/tikz-1a3a0f5d81cc9191280529620bed3c0a.svg)

Where $N(A)$ is the subspace of $A\vec{x}=0$ also known as the **null space**

The subspace of $A\vec{x}=\vec{b}$ is known as the **column space**