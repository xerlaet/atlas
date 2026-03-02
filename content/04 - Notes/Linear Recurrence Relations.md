# Linear Recurrence Relations
---

## Linear Homogeneous
A recurrence of degree $k$ with the form:
$$
a_{n}=c_{1}a_{n-1}+\dots+c_{k}a_{n-k}
$$
(This is **homogeneous** because all terms involve $a_i$. It has **constant coefficients** because $c_i$ are constants, not functions of $n$.)

### Solution: Characteristic Roots
This can be solved by finding the roots of the **characteristic equation**:
$$
r^{k}-c_{1}r^{k-1}-\dots-c_{k}=0
$$

If the equation has $k$ distinct roots $r_1, \dots, r_k$, the solution is:
$$
a_{n}=\alpha_{1}r_{1}^{n}+\dots+\alpha_{k}r_{k}^{n}
$$

If the equation has $t$ distinct roots $r_1, \dots, r_t$ with multiplicities $m_1, \dots, m_t$:
$$
\begin{align}
a_{n}=&\phantom{x}(\alpha_{1,0}+\dots +\alpha_{1,m_{1}-1}n^{m_{1}-1})r_{1}^{n} \\
+&\phantom{x} \dots \\
+&\phantom{x}(\alpha_{t,0}+\dots +\alpha_{t,m_{t}-1}n^{m_{t}-1})r_{t}^{n}
\end{align}
$$

## Linear Nonhomogeneous
A recurrence of the form:
$$
a_{n}=c_{1}a_{n-1}+\dots+c_{k}a_{n-k}+F(n)
$$
The solution $a_n$ is the sum of:
1.  The solution to the **associated homogeneous relation** (the part without $F(n)$).
2.  A **particular solution** $a_n^{(p)}$ that depends on the form of $F(n)$.

## Example
$a_n=6a_{n-1}-11a_{n-2}+6a_{n-3}$ where $a_0=2$, $a_1=5$, and $a_2=15$

The characteristic equation is $r^3-6r^2+11r-6=0$ which is factored as $(r-1)(r-2)(r-3)=0$ so the characteristic roots are $r=1,2,3$

Thus the solution is of the form $a_n=\alpha_11^{n}+\alpha_22^{n}+\alpha_{3}3^{n}$

Creating a matrix using the initial conditions gives
$$
\begin{bmatrix}
1^0 & 2^0 & 3^0 \\
1^1 & 2^1 & 3^1 \\
1^2 & 2^2 & 3^2
\end{bmatrix}
\begin{bmatrix}
\alpha_{1} \\
\alpha_{2} \\
\alpha_{3}
\end{bmatrix}=
\begin{bmatrix}
2 \\
5 \\
15
\end{bmatrix},
\begin{bmatrix}
\alpha_{1} \\
\alpha_{2} \\
\alpha_{3}
\end{bmatrix}=
\begin{bmatrix}
1 \\
-1 \\
2
\end{bmatrix}
$$
So the solution to the given recurrence relation is $a_{n}=(1)1^{n}+(-1)2^{n}+(2)3^{n}$
