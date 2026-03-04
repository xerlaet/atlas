# Eigenvalues and Eigenvectors
---

A matrix $A$ is **diagonalizable** if $A$ can be rewritten $A=X\Lambda X^{-1}$ where
$$
\Lambda =\begin{bmatrix}
\lambda _{1} &  &  \\
 & \ddots &  \\
 &  & \lambda _{d} 
\end{bmatrix}
$$

It makes finding large powers of a matrix very easy because $A^{n}=X\Lambda^{n}X^{-1}$

The reason that this can work is because any continuous function can be represented as a Taylor series
$$
f(x)=\sum _{n=0}^{\infty } \frac{f^{n}(0)}{n!}x^{n}
$$
And as such
$$
\begin{align}
f(A)&=\sum _{n=0}^{\infty } \frac{f^{n}(0)}{n!}A^{n}=\sum _{n=0}^{\infty } \frac{f^{n}(0)}{n!}X\Lambda ^{n}X^{-1} \\
&=X \left(\sum _{n=0}^{\infty } \frac{f^{n}(0)}{n!}\Lambda ^{n} \right) X^{-1} \\
&=X\begin{bmatrix}
f(\lambda _{1}) &  &  \\
 & \ddots  &  \\
 &  & f(\lambda _{n})
\end{bmatrix}X^{-1}
\end{align}
$$

With this idea, you can take any function and apply it to a diagonalizable matrix
- the inverse of a matrix
- the square root of a matrix (we will get at least one possible solution)

Matrices $A$ and $B$ are **similar** if for some $X$, $A=XBX^{-1}$

This happens to be an equivalence relation because it satisfies the three fundamental properties! [Relations](/notes/relations)

If two matrices are similar, they share the same determinant, so $A\sim \Lambda \to \text{det}(A)=\text{det}(\Lambda)=\lambda_{1}\dots \lambda_{d}$

## Positive Definite Matrices
A matrix is **positive definite** if $A^{T}=A$ and $\lambda_{i}>0$ (eigenvalues are real, eigenvectors are $\perp$)

=$A=X\Lambda X^{T}$

If A is symmetric, you can choose eigenvalues that are orthogonal, otherwise that is not guaranteed (and maybe not possible?)


An equivalent definition is if $A^{T}=A$ and $v^{T}Av>0$

This is because if $A=XAX^{-1},A^{T}=A$ then $X^{T}=X^{-1}$ and $Au=u^{T}Au=u^{T}X\Lambda X^{T}u=v^{T}\Lambda v>0$

$$
ax^{2}+2bxy+cy^{2}=
\begin{bmatrix}
x & y
\end{bmatrix}
\begin{bmatrix}
a & b \\
b & c
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

If $A$ and $B$ are both positive definite, then $A+B$ is positive definite **THIS ONLY GOES ONE WAY**

Another definition is that if $A=M^{T}M$ (where $M$ is full rank), then $A$ is positive definite **and this goes both ways**

Because if $A=M^{T}M$, then $A$ is symmetric

Another definition is that $A$ is positive definite if all of its pivots when row reduced are positive (non trivial)

relationship with second derivatives being positive definite - multivariable

Sylvester's Theorem
$$
\begin{align}
A^{T}=A&\to A=LDL^{T} \\
u^{T}Au&>0\\
u^{T}LDL^{T}u&>0 \\
y^{T}Dy&>0 \\
p_{1}y_{1}^{2}+\dots+p_{n}y_{n}^{2}&>0 \\
p_{1}\dots p_{n}&>0
\end{align}
$$
Show that the matrix is not positive symmetric in three different ways

$$
\begin{align}
\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}, \lambda ^{2}-4\lambda -1=0,\lambda =\frac{4\pm \sqrt{20}}{2} \\
x^{2}+4xy+3y^{2}=(x+2y)^{2}-y^{2} \\
\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}\sim
\begin{bmatrix}
1 & 2 \\
0 & -1
\end{bmatrix}
\end{align}
$$

## Finding Eigenvalues and Eigenvectors
$$
\begin{align}
&Av=\lambda v \\
&(A-\lambda I)v=0 \\
&v \in N(A-\lambda I) \\
&\text{det}(A-\lambda I)=0
\end{align}
$$

$$
\begin{align}
A&=\begin{bmatrix}
0.5 & 0.6 \\
0.5 & 0.3
\end{bmatrix} \\
A-\lambda I&=\begin{bmatrix}
0.5-\lambda  & 0.7 \\
0.5 & 0.3-\lambda 
\end{bmatrix}
\end{align}
$$

$$
\begin{align}
\text{det}(A-\lambda I)=&(0.5-\lambda )(0.3-\lambda )-(0.7)(0.5) \\
0=&\lambda ^{2}-0.8\lambda -0.2
\end{align}
$$

$$
\begin{align}
A-\lambda _{1}I=\begin{bmatrix}
-0.5 & 0.7 \\
0.5 & -0.7
\end{bmatrix}, v_{1}=\begin{bmatrix}
7 \\
5
\end{bmatrix} \\
A-\lambda _{2}I=\begin{bmatrix}
0.7 & 0.7 \\
0.5 & 0.5
\end{bmatrix}, v_{2}=\begin{bmatrix}
-1 \\
1
\end{bmatrix} \\
\end{align}
$$

$$
A=\begin{bmatrix}
7 & -1 \\
5 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & -0.2
\end{bmatrix}
\begin{bmatrix}
\frac{1}{12} & \frac{1}{12} \\
-\frac{5}{12} & \frac{7}{12}
\end{bmatrix}
$$

The **characteristic polynomial** (polynomial of degree d) is found from the solution of $\text{det}(A-\lambda I)=0$ which is the **characteristic equation**

There will be d roots of said equation, some real and some imaginary, and imaginary roots always come in pairs of two with the complex root and its complement

To find the set of vectors $\{ v_{i} \}$, solve for the null space of $A-\lambda_{i}I$, and then $X=[v_{1}\dots v_{d}]$ 

This also is related to [Markov Chains](/notes/markov-chains)

A matrix $A$ is non diagonalizable when
- there are no real roots
- there are less than $d$ eigenvectors

## Complex Stuff
FULL DEFINITION OF DOT PRODUCT
$$
u,v\in \mathbb{C}^{d}, u\cdot v:=\bar{u}^{T}\cdot v
$$

Assuming A is symmetric and real
$$
u\cdot Av=\bar{u}^{T}Av=(\bar{u}^{T}\bar{A}^{T})v=(A\bar{u})^{T}v
$$
Since this is the case, then
$$
\begin{align}
v\cdot Av=\bar{v}^{T}\lambda v=\lambda \bar{v}^{T}v=\lambda \lvert v \rvert ^{2}\\
Av\cdot v \to  \bar{\lambda }\lvert v \rvert ^{2} \\
\lambda =\bar{\lambda }
\end{align}
$$
The only way this happens is if $\lambda$ is a real number

---

If $\lambda_{1}\neq\lambda_{2}$ are eigenvalues and $u,v$ are eigenvectors, then $u$ and $v$ are linearly independent

$$
\begin{align}
xv_{1}+yv_{2}=0 \\
\lambda_{1}xv_{1}+\lambda_{2}yv_{2}=0 \\
-xAv_{1}+yAv_{2}=A0 \\
\hline (\lambda_{1}-\lambda_{2})yv_{2}=0\to y=0
\end{align}
$$

The takeaway is that different eigenvalues provide different linearly independent eigenvectors

If the matrix is symmetric, then all eigenvalues are real, and it will have enough eigenvectors even if some eigenvalues are repeated, so it will be diagonalizable

If $\lambda_{1}\neq \lambda_{2}$, then $v_{1}\perp v_{2}$
$$
\lambda_{1}v_{1}^{T}v_{2},\lambda_{2}v_{1}^{T}v_{2}
$$
these will only be different is $v_{1}^{T}v_{2}=0$

## Intuition
Given a matrix $X$ whose columns are a basis in $\mathbb{R}^{n}$ and a vector $v$ represented using that basis, the coordinates of vector $v$ in the standard basis can be found from $Xv$

The reverse of going from the standard basis to a different basis, the operation is $X^{-1}v$

So multiplication by $X$ or $X^{-1}$ is nothing other than changing the basis