# Singular Value Decomposition
---
A problem arises when you have a massive amount of data (such as streaming a tv show)

$A=CR$ is a way to store only $(m+n)r$ numbers instead of $mn$ numbers

The **singular value decomposition** of a matrix is similar to a series of $A=CR$ decompositions, where $A$ can be approximated in the best possible way in the first $n\leq r$ matrix products

Steps:
1. Compute $A^{T}A$ or $AA^{T}$ (whichever is smaller usually)
2. Compute $\lambda_{i}$ for that matrix
3. Then $\sigma_{i}=\sqrt{\lambda_{i}}$ are singular values of $A$
4. The eigenvalues of $A^{T}A$ gives $v_{i}$ and $AA^{T}$ gives $u_{i}$
5. $\frac{Av}{\sigma}=u, \frac{A^{T}u}{\sigma}=v$
$$
A=
\begin{bmatrix}
u_{1} & \dots & u_{n}
\end{bmatrix}
\begin{bmatrix}
\sigma_{1} & &  \\
& \ddots &  \\
& & \sigma_{n} 
\end{bmatrix}
\begin{bmatrix}
v_{1} \\
\vdots  \\
v_{n}
\end{bmatrix}
$$

A matrix is **positive definite** if it is symmetric and its eigenvalues are positive


then $A=Q\Lambda Q^{T}$


There are several ways to determine if a matrix is positive definite
- put things here


$$
S^{T}=(X\Lambda X^{-1})^{T}=(X^{-1})^{T}\Lambda ^{T}X^{T}
$$
So if $X^{-1}=X^{T}$, then $S$ is symmetric




$$
\begin{align}
A=\sigma_{1}v_{1}u_{1}^{T}+\dots+\sigma_{r}v_{r}u_{r}^{T} \\
\sigma_{1}\geq \dots \geq \sigma_{r}>0 \\
\{ v_{1},\dots,v_{r} \}\in C(A) \\
\{ u_{1},\dots,u_{r} \}\in C(A^{T})
\end{align}
$$
Because of these properties, matrix $A$ can be approximated in the best possible way in a rank $r$ matrix with the first $r$ terms


$$
\sigma_{j}^{2}=\lambda_{j}
$$
$\sigma_{j}$ is a singular value of A

Steps:
1. Compute $A^{T}A$
2. Compute $\lambda_{i}$
3. Then $\sigma_{j}=\sqrt{\lambda_{j}}$ are singular values of $A$
4. Compute $\{ u_{1},\dots,u_{n} \}$ orthonormal eigenbasis of $A^{T}A$
5. Then $$
A=\begin{bmatrix}
u_{1} & u_{n}
\end{bmatrix}
\begin{bmatrix}
\sigma_{1} \ddots \sigma_{n} 
\end{bmatrix}
\begin{bmatrix}
v^{T},\dots,v^{T}
\end{bmatrix}
$$

$$
\begin{align}
A^{T}Au=\lambda u \\
AA^{T}(Au)=\lambda (Au) \\
(AA^{T})v=\lambda v
\end{align}
$$
If $u$ is an eigenvector of $A^{T}A$ with eigenvalue $\lambda$, then $Au$ is an eigenvector of $AA^{T}$ corresponding to the same eigenvalue $\lambda$, they are both symmetric positive semidefinite

$$
\begin{align}
v^{T}v=(Au)^{T}(Au)=(u^{T}A^{T}Au)=0 \text{ if v=u} \\
\lvert v \rvert ^{2}=v^{T}v=\lambda \lvert u \rvert ^{2}=\lambda =\sigma ^{2} \\
\left\{  \frac{Au_{1}}{\sigma_{1}},\dots, \frac{Au_{r}}{\sigma_{r}}  \right\} \text{ is an orthonormal basis for } \mathbb{R}^{m}
\end{align}
$$
$$
\lvert Au_{j} \rvert=\sqrt{(Au_{j})^{T}Au_{j}}=\sigma_{j} 
$$




![TikZ Diagram](/attachments/tikz-91768891fd32fc346b81ff57353ca5d6.svg)

$$
\begin{align}
A^{T}A:\mathbb{R}^{n}\to \mathbb{R}^{n} \\
AA^{T}:\mathbb{R}^{m}\to \mathbb{R}^{m} \\

\end{align}
$$
---


$$
\begin{align}
&A=
\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3 \\
0 & 0 & 0 & 0
\end{bmatrix}, \mu_{i}=0,
A^{T}A=
\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 4 & 0 \\
0 & 0 & 0 & 9
\end{bmatrix} \\ \\
&\lambda_{1}=9,\lambda_{2}=4,\lambda_{3}=1,\lambda_{4}=0 \\
&\sigma_{1}=3,\sigma_{2}=2,\sigma_{3}=1,\sigma_{4}=0 \\ \\
&u_{1}=\begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix},
u_{2}=\begin{bmatrix}
0 \\
0 \\
1 \\
0
\end{bmatrix},
u_{3}=\begin{bmatrix}
0 \\
1 \\
0 \\
0
\end{bmatrix},
u_{4}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix} \\
&v_{1}=\begin{bmatrix}
0 \\
0 \\
1 \\
0
\end{bmatrix},
v_{2}=\begin{bmatrix}
0 \\
1 \\
0 \\
0
\end{bmatrix},
v_{3}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix},
v_{4}=\begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix} \\
&A=\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 3 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
+0\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0
\end{bmatrix}
\end{align}
$$

The advantage of SVD is that after a small change in $A$, the eigenvalues of $A$ are changed by a drastic amount, however the sigma value are only changed by that same small amount

$$
\begin{align}
&A=
\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3 \\
\frac{1}{60000} & 0 & 0 & 0
\end{bmatrix}, \mu_{1}=\frac{1}{10},\dots
A^{T}A=
\begin{bmatrix}
\left( \frac{1}{60000} \right)^{2} & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 4 & 0 \\
0 & 0 & 0 & 9
\end{bmatrix} \\ \\
&\lambda_{1}=9,\lambda_{2}=4,\lambda_{3}=1,\lambda_{4}=\left( \frac{1}{60000} \right)^{2} \\
&\sigma_{1}=3,\sigma_{2}=2,\sigma_{3}=1,\sigma_{4}=\frac{1}{60000} \\ \\
&u_{1}=\begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix},
u_{2}=\begin{bmatrix}
0 \\
0 \\
1 \\
0
\end{bmatrix},
u_{3}=\begin{bmatrix}
0 \\
1 \\
0 \\
0
\end{bmatrix},
u_{4}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix} \\
&v_{1}=\begin{bmatrix}
0 \\
0 \\
1 \\
0
\end{bmatrix},
v_{2}=\begin{bmatrix}
0 \\
1 \\
0 \\
0
\end{bmatrix},
v_{3}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix},
v_{4}=\begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix} \\
&A=\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 3 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\frac{1}{60000} & 0 & 0 & 0
\end{bmatrix}
\end{align}
$$


$$
\begin{align}
&A=
\begin{bmatrix}
0 & 1 & 1 \\
0 & -2 & 1
\end{bmatrix},
A^{T}A=
\begin{bmatrix}
0 & 0 & 0 \\
0 & 5 & -1 \\
0 & -1 & 5
\end{bmatrix},
AA^{T}=
\begin{bmatrix}
5 & -1 \\
-1 & 5
\end{bmatrix} \\ \\
&\lambda_{1}=6,\lambda_{2}=4,\lambda_{3}=0 \\
&\sigma_{1}=\sqrt{6},\sigma_{2}=2,\sigma_{3}=0 \\ \\
&v_{1}=\begin{bmatrix}
\frac{1}{\sqrt{2}} \\
-\frac{1}{\sqrt{2}}
\end{bmatrix},
v_{2}=\begin{bmatrix}
\frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}}
\end{bmatrix} \\
&u_{1}=\begin{bmatrix}
0 \\
3 \\
0
\end{bmatrix},
u_{2}=\begin{bmatrix}
0 \\
1 \\
0 \\
0
\end{bmatrix},
u_{3}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix} \\
&A=\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 3 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
+\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
+0\begin{bmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0
\end{bmatrix}
\end{align}
$$


Positive definite if $A^{T}A=X\Lambda X^{T}$ where $\lambda_{i}>0$

In the singular value decomposition, 
$$
A=U\Sigma V^{T}
$$
$$
\begin{align}
A^{T}A=V\Sigma ^{T}U^{T}U\Sigma V^{T}=V\Sigma ^{2}V^{T}=V\Lambda V^{T} \\

AA^{T}=U\Sigma V^{T}V\Sigma ^{T}U^{T}=U\Sigma ^{2}U^{T}=U\Lambda U^{T}
\end{align}
$$



$$
Q\Lambda Q^{T}=Q\Sigma ^{2}Q^{T}=Q\Sigma \Sigma ^{T}Q^{T}=BB^{T}
$$
Cholesky Decomposition ^
