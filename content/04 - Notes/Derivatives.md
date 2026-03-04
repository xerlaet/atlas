# Derivatives
---

The **derivative** of a function is the instantaneous rate of change, or put more simply the best constant approximation for rate of change

$$
\begin{align}
&f'(a)=\lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h} \\
&f'(a)=\lim_{ x \to a } \frac{f(x)-f(a)}{x-a}
\end{align}
$$

![TikZ Diagram](/attachments/tikz-b20792879b7bedf32465ab87367f454d.svg)


## Derivative Rules
$$
\begin{align}
\frac{d}{dx}c & =0 \\
\frac{d}{dx}cf(x) & =cf'(x) \\
\frac{d}{dx}x^n & =nx^{n-1} \\
\frac{d}{dx}f(x)\pm g(x) & =f'(x)\pm g'(x) \\
\frac{d}{dx}f(x)g(x) & =f(x)g'(x)+g(x)f'(x) \\
\frac{d}{dx}\frac{f(x)}{g(x)} & =\frac{g(x)f'(x)-f(x)g'(x)}{g(x)^2} \\
\frac{d}{dx}f(g(x)) & =f'(g(x))g'(x)
\end{align}
$$

## Multiple Dimensions
Derivatives work in multiple dimensions as well. The idea is to take a partial derivative with respect to a particular direction, and treat everything else as constant
$$
\frac{ \partial f }{ \partial a } 
=\lim_{ h \to 0 } \frac{f(a+h,a_{2},\dots,an)-f(a,\dots,a_{n})}{h}
$$

[Gradients](/notes/gradients)

