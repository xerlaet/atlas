# Orthogonality
---

Two vectors $u$ and $v$ are **orthogonal** ($\perp$) if $u\cdot v=0$, and **orthonormal** if both of their magnitudes are $1$. A vector $v$ can be orthogonal to a subspace $W$ if $u$ is orthogonal to all vectors in $W$

$$
\begin{align}
C(A)&\perp N(A^{T}) \\
C(A^T)&\perp N(A)
\end{align}
$$
$Ax=0$ makes $x$ orthogonal to each row, and $A^{T}y=0$ makes $y$ orthogonal to each column

A matrix $A$ can also be orthogonal if $A^T=A^{-1}$ if it is made up of orthonormal columns
## Projections
One useful application of orthogonality is with projections

![Pasted image 20240410153013.png](/attachments/Pasted%20image%2020240410153013.png)

![Pasted image 20240410153036.png](/attachments/Pasted%20image%2020240410153036.png)


An important idea when solving $A\vec{x}=\vec{b}$ is that if $\vec{b}$ is not in the column space of $A$, then there is no solution, however we can project $\vec{b}$ onto the column space of $A$ such that we solve for this new $\vec{b}$, which is going to be as good of a solution as we can get
$$
\lvert \vec{b}-\vec{u} \rvert \geq \lvert \vec{b}-\vec{p} \rvert
$$
where $\vec{b}$ is a vector, $\vec{u}$ is a vector on the plane, and $\vec{p}$ is the projection of $\vec{b}$ on the plane


$$
\begin{align}
b&=p+e=Ax+e \\
A^{T}b&=A^{T}Ax+A^{T}e \\
A^{T}b&=A^{T}Ax \\
(A^{T}A)^{-1}A^{T}b&=x \\
A(A^{T}A)^{-1}A^{T}b&=Ax=p
\end{align}
$$

If the matrix $A$ was invertible, then $p=b$, which makes sense because the projection would just be the exact vector it already was!

As long as the columns of $A$ are linearly independent, $A^TA$ will be invertible, so the first step should be to filter out dependent columns if they exist

```ad-example
Ex. find projection of $(1,2,3)$ on $\text{span}\{ (1,0,0),(0,1,0) \}$
$$
A=\begin{bmatrix}
1 & 0 \\
0 & 1 \\
0 & 0
\end{bmatrix}
A^T=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0
\end{bmatrix}
A^TA=\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
(A^TA)^{-1}=\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$
$$
P=A(A^TA)^{-1}A^T=\begin{bmatrix}
1 & 0 \\
0 & 1 \\
0 & 0
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0
\end{bmatrix}
=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
p=Pb=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=\begin{bmatrix}
x \\
y \\
0
\end{bmatrix}
$$
```

```ad-example
Ex. find projection of $(6,0,0)$ on $\text{span}\{ (1,1,1),(0,1,2) \}$
$$
A=\begin{bmatrix}
1 & 0 \\
1 & 1 \\
1 & 2
\end{bmatrix}
A^T=\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 2
\end{bmatrix}
A^TA=\begin{bmatrix}
3 & 3 \\
3 & 5
\end{bmatrix}
(A^TA)^{-1}=\begin{bmatrix}
\frac{5}{6} & -\frac{1}{2} \\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}
$$
$$
P=A(A^TA)^{-1}A^T=\begin{bmatrix}
1 & 0 \\
1 & 1 \\
1 & 2
\end{bmatrix}
\begin{bmatrix}
\frac{5}{6} & -\frac{1}{2} \\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}
\begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & 2
\end{bmatrix}
=\frac{1}{6}\begin{bmatrix}
5 & 2 & -1 \\
2 & 2 & 2 \\
-1 & 2 & 5
\end{bmatrix}
$$
$$
p=Pb=\frac{1}{6}\begin{bmatrix}
5 & 2 & -1 \\
2 & 2 & 2 \\
-1 & 2 & 5
\end{bmatrix}
\begin{bmatrix}
6 \\
0 \\
0
\end{bmatrix}
=\begin{bmatrix}
5 \\
2 \\
-1
\end{bmatrix},e=\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}
$$
```

## Least Squares Approximation
The goal of the Least Squares Approximation is to find a polynomial of degree $n$ that best represents some given data

| Trial Number | $1$     | $2$     | $\dots$ | $n$     |
| ------------ | ------- | ------- | ------- | ------- |
| Time         | $t_{1}$ | $t_{2}$ | $\dots$ | $t_{n}$ |
| Quantity     | $q_{1}$ | $q_{2}$ | $\dots$ | $q_{n}$ |

The goal is to find an equation of the form $q(t_{n})=x\cdot t_{n}+y$ that fits the data in the best possible way

In general, to find a polynomial of degree d is to find $x_{d},x_{d-1},x_{1},x_{0}$ such that $q(t)=x_{d}t^d+x_{d-1}t^{d-1}+\dots+x_{1}t+x_{0}$ approximates $q_{j}$ the best
$$
\begin{bmatrix}
t_{1}^d & t_{1}^{d-1} & \dots & t & 1 \\
t_{1}^d & t_{1}^{d-1} & \dots & t & 1 \\
\dots & \dots & \dots & \dots & \dots \\
t_{1}^d & t_{1}^{d-1} & \dots & t & 1 \\
\end{bmatrix}
\begin{bmatrix}
x_{d} \\
\dots \\
x_{1} \\
x_{0}
\end{bmatrix}
=\begin{bmatrix}
q_{1} \\
\dots \\
q_{n}
\end{bmatrix}
$$

```ad-example
In general:
$$
A=\begin{bmatrix}
t_{1} & 1 \\
t_{2} & 1 \\
\dots & \dots \\
t_{n} & 1
\end{bmatrix},
A^T=\begin{bmatrix}
t_{1} & t_{2} & \dots & t_{n} \\
1 & 1 & \dots & 1
\end{bmatrix}
,q=\begin{bmatrix}
q_{1} \\
q_{2} \\
\dots \\
q_{n}
\end{bmatrix}
$$
$$
(A^TA)^{-1}=
\frac{1}{n\cdot \sum_{j=1}^nt_{j}^2-\left( \sum_{j=1}^nt_{j} \right)^2}
\begin{bmatrix}
n & -\sum_{j=1}^nt_{j} \\
-\sum_{j=1}^nt_{j} & \sum_{j=1}^nt_{j}^2
\end{bmatrix}
$$
$$
A^Tq=\begin{bmatrix}
\sum_{j=1}^nt_{j}q_{j} \\
\sum_{j=1}^nq_{j}
\end{bmatrix}
$$
$$
\begin{bmatrix}
x \\
y
\end{bmatrix}
=(A^TA)^{-1}(A^Tq),q(t)=xt+y
$$
```

```ad-example
ex.
$$
\begin{bmatrix}
0 & 1 \\
1 & 1 \\
2 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=\begin{bmatrix}
6 \\
0 \\
0
\end{bmatrix}
$$
The above equation has no solution, however we can try to solve it such that
$$
Ax=p,p \in C(A)
$$
The error is of the form
$$
\begin{bmatrix}
e_{1} \\
e_{2} \\
e_{3}
\end{bmatrix}
=\begin{bmatrix}
q_{1} \\
q_{2} \\
q_{3}
\end{bmatrix}
-\begin{bmatrix}
p_{1} \\
p_{2} \\
p_{3}
\end{bmatrix}
$$
and we want to minimize the distance $\sqrt{ e_{1}^2+e_{2}^2+e_{3}^2 }$
remember that
$$
Ax=p=A(A^TA)^{-1}A^Tq
$$
so
$$
\begin{bmatrix}
x \\
y
\end{bmatrix}
=(A^TA)^{-1}q
$$
Original was
$$
\begin{bmatrix}
6 \\
0 \\
0
\end{bmatrix}
$$
new is
$$
\begin{bmatrix}
5 \\
2 \\
-1
\end{bmatrix}
$$
$$
\begin{bmatrix}
x \\
y
\end{bmatrix}
=\begin{bmatrix}
-3 \\
5
\end{bmatrix}
$$
so
$$
q(t)=-3t+5
$$
and the displacements are 
$$
e=\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix},\lvert e \rvert=\sqrt{ 6 } 
$$
```

## Creating an Orthonormal Basis (Gram-Schmidt Process)
Permutation matrices and rotation matrices are good examples of orthogonal matrices

orthogonal matrices preserve dot products, norms of vectors, and angles between vectors
-> so the only orthogonal matrices correspond to the matrices of rotations

The three basic rotation matrices of $\mathbb{R}^{3}$
$$
\begin{bmatrix}
\cos \alpha & -\sin \alpha & 0 \\
\sin \alpha & \cos \alpha & 0 \\
0 & 0 & 1
\end{bmatrix},
\begin{bmatrix}
\cos \beta & 0 & -\sin \beta \\
0 & 1 & 0 \\
\sin \beta & 0 & \cos \beta
\end{bmatrix},
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos \gamma & -\sin \gamma \\
0 & \sin \gamma & \cos \gamma
\end{bmatrix}
$$

If A has linearly independent orthonormal columns, then $A^TA=I$ and the projection onto $C(A)$ is $p=A(A^TA)^{-1}A^Tb=A^Tb$ and $a_{i}^Tp=x_{j}$ because stuff cancels out

PUT EXAMPLE HERE!!!!!!!
