# Matrices
---

A **matrix** can be thought of as a series of vectors, or as a series of linear systems, depending on if you look at the columns or the rows (this is visible with a row and column picture)

A location in the matrix is listed as (row, column), with $(1,1)$ being the top left position

A matrix can take various forms:
$$
\begin{matrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
&
\begin{bmatrix}
2 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & 5
\end{bmatrix}
&
\begin{bmatrix}
2 & 1 & -3 \\
0 & 4 & 7 \\
0 & 0 & 5
\end{bmatrix}
&
\begin{bmatrix}
2 & 1 & -3 \\
1 & 4 & 7 \\
-3 & 7 & 5
\end{bmatrix} \\
\text{Identity} & \text{Diagonal} & \text{Triangular} &\text{Symmetric}
\end{matrix}
$$

Addition and multiplication of a matrix is defined as follows
$$
\begin{bmatrix}
a & b \\
c & d \\
e & f
\end{bmatrix}
+
\begin{bmatrix}
g & h \\
i & j \\
k & l
\end{bmatrix}
=
\begin{bmatrix}
a+g & b+h \\
c+i & d+j \\
e+k & f+l
\end{bmatrix}
$$
$$
\begin{bmatrix}
a & b \\
c & d \\
e & f
\end{bmatrix}
\begin{bmatrix}
g & h \\
i & j
\end{bmatrix}
=
\begin{bmatrix}
a\cdot g+b\cdot i & a\cdot h+b\cdot j \\
c\cdot g+d\cdot i & c\cdot h+d\cdot j \\
e\cdot g+f\cdot i & e\cdot h+f\cdot j
\end{bmatrix}
$$
You can think about addition and multiplication as being applied to each column vector, each row vector, or to each individual number

The **inverse** of a matrix $A$ is $A^{-1}$ where $AA^{-1}=A^{-1}A=I$

The **transpose** of a matrix is where all the columns and rows swap positions
$$
A^T(i,j)=A(j,i)
$$

The following properties hold for any matrices
$$
\begin{align}
(AB)C&=A(BC) \\
(AB)^{-1}&=B^{-1}A^{-1} \\
A^{m}A^{n}&=A^{m+n} \\
(A^{m})^{n}&=A^{m\cdot n} \\
(A^{n})^{-1}&=(A^{-1})^{n}
\end{align}
$$

As well as these transpose properties
$$
\begin{align}
(A^T)^T&=A \\
(A+B)^T&=A^T+B^T \\
(AB)^T&=B^TA^T \\
(A^T)^{-1}&=(A^{-1})^T
\end{align}
$$

A matrix is known as **symmetric** if $A^T=A$, and **skew-symmetric** if $A^T=-A$ (for a skew symmetric matrix, the diagonal must be 0)

Any matrix can be written as a sum of a symmetric and skew-symmetric matrix, similar to [[Even and Odd Functions]]

## Other Forms
A matrix can be rewritten in various different forms, each of which can provide a certain advantage when working with it

#### $A=CR$
$CR$ decomposition serves as a way of compressing information of a matrix into two smaller matrices
$$
A=CR=(m\times r)(r\times n)
$$
$R$ can be found by row reducing $A$, and $C$ is composed of the independent columns of $A$ found from the row reduction

$$
\begin{align}
&A=\begin{bmatrix}
1 & 2 & 0 & 0 \\
2 & 4 & 0 & 1 \\
3 & 6 & 0 & 0
\end{bmatrix}\sim 
\begin{bmatrix}
1 & 2 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix} \\
&A=CR=\begin{bmatrix}
1 & 0 \\
2 & 1 \\
3 & 0
\end{bmatrix}
\begin{bmatrix}
1 & 2 & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\end{align}
$$
#### $A=LU$
$LU$ decomposition is useful in solving $Ax=b$ equations, and makes finding the determinant of large matrices trivial

The idea is to row reduce $A$ into an upper triangular matrix $U$, and $L$ is the matrix formed by the product of the elementary matrices used to create $U$

Additionally, the diagonal elements of $U$ can be taken out to form $A=LDU$ where both $L$ and $U$ have ones on the diagonal. If $A$ is symmetric, then $LDU=LDL^{T}$

$$
\begin{align}
A=\begin{bmatrix}
1 & 2 & 1 \\
2 & 5 & -1 \\
1 & 1 & 4
\end{bmatrix}\sim
\begin{bmatrix}
1 & 2 & 1 \\
0 & 1 & -3 \\
0 & 0 & 0
\end{bmatrix} =U \\
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}=
\begin{bmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
1 & -1 & 1
\end{bmatrix}=L \\
A=LU=
\begin{bmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
1 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 2 & 1 \\
0 & 1 & -3 \\
0 & 0 & 0
\end{bmatrix}
\end{align}
$$

#### $A=QR$
$QR$ decomposition is useful for analyzing $A$ in terms of a product of an orthogonal matrix which spans the column space of $A$ times an upper triangular matrix

$Q$ is found from the Gram Schmidt process on $A$, and then $R=Q^{-1}A=Q^{T}A$

$$
\begin{align}
&A=\begin{bmatrix}
2 & 3 \\
2 & 4 \\
1 & 1
\end{bmatrix},q_{1}=
\begin{bmatrix}
\frac{2}{3} \\
\frac{2}{3} \\
\frac{1}{3}
\end{bmatrix},q_{2}=\lvert u_{2}-(u_{2}\cdot q_{1})q_{1} \rvert =
\begin{bmatrix}
-\frac{1}{3} \\
\frac{2}{3} \\
-\frac{2}{3}
\end{bmatrix} \\
&Q^{T}A=
\begin{bmatrix}
3 & 5 \\
0 & 1
\end{bmatrix}=R \\
&A=QR=
\begin{bmatrix}
\frac{2}{3} & -\frac{1}{3} \\
\frac{2}{3} & \frac{2}{3} \\
\frac{1}{3} & -\frac{2}{3}
\end{bmatrix}
\begin{bmatrix}
3 & 5 \\
0 & 1
\end{bmatrix}
\end{align}
$$
#### $A=X\Lambda X^{-1}$
Diagonalization of a matrix is useful for applying a function to a matrix, as only the eigenvalues are affected

#### $A=Q\Lambda Q^T$
If the matrix is symmetric, then in addition to forming $X\Lambda X^{-1}$, $X$ can be orthogonalized making the decomposition even easier to work with

#### $A=U\Sigma V^T$
Singular value decomposition is useful for finding the best estimate of a matrix with a series of $CR$ decompositions
