# Vector Subspaces
---

## Subspaces
A **vector subspace** is a set that is closed under vector addition and scalar multiplication where $(t\in\mathbb{R})$

Here are some examples of subspaces
$$
\begin{align}
\mathbb{R}&=\{  \mathbb{R}\} \\
\mathbb{R}^2&=\{ (x,y)\mid x,y \in \mathbb{R} \} \\
\mathbb{C}&=\{ x+iy\mid x,y\in \mathbb{R} \} \\
\end{align}
$$
An important thing to note is that $\mathbb{Q}$ and $\mathbb{R}_{+}$ are not subspaces because $t$ could be irrational or negative

Another important thing to note is that vector spaces must include the origin since the vectors can always be scaled by 0, however it still needs to pass the addition test

## The Four Subspaces
The **column space** of a matrix is the subspace spanned by the columns of $A$

The **row space** of a matrix is the subspace spanned by the columns of $A^{T}$

The **null space** of a matrix is the subspace formed from $Ax=0$

The **left null space** of a matrix is the subspace formed from $A^{T}x=0$

The four subspaces are all related by the big picture
**BIG PICTURE DIAGRAM**


And each subspace is perpendicular to another one of the subspaces
$$
\begin{align}
C(A)&\perp N(A^{T}) \\
C(A^T)&\perp N(A)
\end{align}
$$

## Example
**Problem**
Given a matrix $A$
$$
A=\begin{bmatrix}
0 & 0 & 1 \\
0 & 0 & 1
\end{bmatrix}
$$
Find the four subspaces

**Solution**
$$
\begin{align}
C(A)=\text{span}\begin{bmatrix}
1 \\
1
\end{bmatrix} \\
C(A^T)=\text{span}\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix} \\
N(A)=\text{span}
\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}
\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix} \\
N(A^T)=\text{span}
\begin{bmatrix}
-1 \\
1
\end{bmatrix}
\end{align}
$$
