# Determinants
---
The **determinant** of a matrix tells you the n-Dimensional volume of the n-Dimensional box made from the column vectors of the matrix

So for a 2 dimensional matrix, the determinant is $ad-bc$

```tikza
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[title=, xlabel=$x$, ylabel=$y$, zlabel=$z$, domain=, grid=none, axis lines=middle]

\end{axis}
\end{tikzpicture}
\end{document}
```


![TikZ Diagram](/attachments/tikz-2fe3d32ebf13a86630cbd134567339d1.svg)


convention is that area is positive if second leg goes to first in the counter clockwise direction

area of the parallelogram is $ad-bc$
$$
\begin{bmatrix}
a \\
c
\end{bmatrix}\propto \begin{bmatrix}
b \\
d
\end{bmatrix}\to ad-bc=0
$$

So in a way it determines something about the matrix, most importantly that if $\text{det}(A)=0$, then $A$ is not invertible
## Properties of Determinants
1. $\lvert I \rvert =1$
2. $\lvert \begin{bmatrix} a_1\dots b\dots b\dots a_{n}\end{bmatrix} \rvert=0$
3. $\lvert \begin{bmatrix} a_1\dots(tb+sc)\dots a_{n}\end{bmatrix} \rvert=t\lvert \begin{bmatrix} a_1\dots b\dots a_{n}\end{bmatrix} \rvert+s\lvert \begin{bmatrix} a_1\dots c\dots a_{n}\end{bmatrix} \rvert$

Swapping rows/columns results in negating the determinant

If columns in the matrix are linearly dependent, the determinant is $0$

$$
\text{det}A\text{det}B=\text{det}AB
$$
Using this, a good way to find determinants for a larger matrix is to find $A=LU$, then you know the determinant is $1\cdot p_{1}\cdots  p_{n}$ where $p_{n}$ is a pivot in $U$

$$
\text{det}A^{-1}=\frac{1}{\text{det}A}
$$

**Cramer's Rule** is a way of solving for just one variable in a system of equations
$$
\begin{align}
\text{det}(A)&=\sum _{i=1}^{n}a_{1i}C_{1i} \\
\text{where } C_{ij}&=(-1)^{i+j}\text{det}(M_{ij})
\end{align}
$$

$$
\frac{C^{T}.}{\text{det}(A)}=A^{-1}
$$
**COFACTORS**

$$
\text{det}(A)=\prod \lambda_{i}
$$
## Traces
$$
\begin{align}
\text{tr}(A\pm B)&=\text{tr}(A)\pm \text{tr}(B) \\
\text{tr}(kA)&=k\cdot \text{tr}(A) \\
\text{tr}(AB)&=\text{tr}(BA) \\
\text{tr}(A^{T})&=\text{tr}(A) \\
\text{tr}(A)&=\sum \lambda _{i}
\end{align}
$$


---
## Determinant
The **determinant** of a matrix is a number that represents the area of the parallelogram formed by the row vectors, meaning that it is 0 whenever the matrix is linearly dependent

For a 2x2 matrix, the determinant is as follows
$$
\det \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}=ad-bc
$$
For larger matrices, this same idea is applied in a recursive fashion
$$
\det \begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}=
a\begin{bmatrix}
e & f \\
h & i
\end{bmatrix}
\cdot
b\begin{bmatrix}
d & f \\
g & i
\end{bmatrix}
\cdot
c\begin{bmatrix}
d & e \\
g & h
\end{bmatrix}
$$

For larger matrices, it is more efficient to row reduce and find $LU$, where the determinant will be the pivots of $U$

An important note is that certain row operations will change the determinant while others will not:
- Row Reduction: $\det A=\det B$
- Row Scaling: $\det A=\lambda \det B$
- Row Swap: $\det A=-\det B$