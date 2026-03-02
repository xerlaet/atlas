# Gray Code
---

**Gray Codes** are an alternate form of encoding numbers which minimizes the effect of errors by making each adjacent number only differ by one bit position. Because of this property, the gray code also happens to be a solution to a Hamiltonian circuit of a $Q_{n}$ graph

```tikz
\begin{document}
\begin{tikzpicture}[main/.style={fill, circle, inner sep=0, minimum size=0.15cm}]

\def\s{4}

\path[draw] (0,0) circle [radius=1.5];
\foreach \x in {0,...,7} {
	\path[draw] (0,0) to (45*\x:1.5cm);
}
\node[] at (45+22.5:1cm) {000};
\node[] at (45-22.5:1cm) {001};
\node[] at (315+22.5:1cm) {010};
\node[] at (315-22.5:1cm) {011};
\node[] at (225+22.5:1cm) {100};
\node[] at (225-22.5:1cm) {101};
\node[] at (135+22.5:1cm) {110};
\node[] at (135-22.5:1cm) {111};

\path[draw] ([xshift=\s cm]0,0) circle [radius=1.5];
\foreach \x in {0,...,7} {
	\path[draw] ([xshift=\s cm]0,0) to ([xshift=\s cm]45*\x:1.5cm);
}
\node[] at ([xshift=\s cm]45+22.5:1cm) {000};
\node[] at ([xshift=\s cm]45-22.5:1cm) {001};
\node[] at ([xshift=\s cm]315+22.5:1cm) {011};
\node[] at ([xshift=\s cm]315-22.5:1cm) {010};
\node[] at ([xshift=\s cm]225+22.5:1cm) {110};
\node[] at ([xshift=\s cm]225-22.5:1cm) {111};
\node[] at ([xshift=\s cm]135+22.5:1cm) {101};
\node[] at ([xshift=\s cm]135-22.5:1cm) {100};

\end{tikzpicture}
\end{document}
```
