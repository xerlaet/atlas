# Images as Functions
---

The function $I(x,y)$ will return the value of the pixel at $(x,y)$

The Image gradient can be calculated as follows
$$
\begin{align}
I_{x}=\frac{ \partial }{ \partial x } I(x,y)=\frac{I(x+1,y)-I(x-1,y)}{2}\\
I_{y}=\frac{ \partial }{ \partial y } I(x,y)=\frac{I(x,y+1)-I(x,y-1)}{2}
\end{align}
$$
$$
\nabla I = \begin{bmatrix}
\frac{ \partial I }{ \partial x } \\
\frac{ \partial I }{ \partial y } 
\end{bmatrix}
$$
