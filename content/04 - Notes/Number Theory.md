# Number Theory
---

## Division
$a$ divides $b$ ($a\mid b$) if $ac=b$ or $\frac{b}{a}$ is an integer

Some properties of this are the following, which are basically common sense
$$
\begin{align}
a\mid b\cap a\mid c&\rightarrow a\mid (b+c) \\
a\mid b\cap a\mid c&\rightarrow a\mid (b-c) \\
a\mid b&\rightarrow a\mid bc \\
a\mid b\cap b\mid c&\rightarrow a\mid c
\end{align}
$$
The division and mod functions are defined as
$$
\begin{align}
q&=a \text{ div } d \\
r&=a \text{ mod } d
\end{align}
$$
where
$$
a=dq+r
$$
This is weird since the order is backwards now, as $a\mid b$ means that $b\text{ div }a$ which seems counterintuitive but that's just the way it is
## Modulus
As mentioned previously, $\text{mod}$ will return the remainder of a division

$a$ is **congruent** to $b$ modulo $m$ if $m$ divides $a-b$, the notation for which is
$$
a\equiv b(\text{mod } m)
$$
This is different from the mod function, as the congruence notation refers to a relation on the set of integers

Some properties are
$$
\begin{align}
a\text{ mod }m=b\text{ mod }m &\to a\equiv b(\text{mod }m)\\
a\equiv b(\text{mod }m)\cap c\equiv d(\text{mod }m)&\to a+c\equiv b+d(\text{mod }m) \\
a\equiv b(\text{mod }m)\cap c\equiv d(\text{mod }m)&\to ac\equiv bd(\text{mod }m) \\
\end{align}
$$

To find an arbitrary $b^n \text{mod } m$, work up by finding successively larger exponents until you reach $n$
$$
\begin{align}
5^{32} \text{mod } 9&= \\
5^2&\equiv 25\equiv 7\text{mod } 9 \\
5^4&\equiv 7^2\equiv 4\text{mod } 9 \\
5^8&\equiv 4^2\equiv 7\text{mod } 9 \\
5^{16}&\equiv 7^2\equiv 4\text{mod } 9 \\
5^{32}&\equiv 4^2\equiv 7\text{mod } 9
\end{align}
$$
Larger exponents can be written as a product of two smaller exponents that sum to the larger one
$$
\begin{align}
5^{40}\text{mod }9&= \\
5^{32}\text{mod }9\cdot 5^8\text{mod }9&= \\
7\text{mod }9\cdot 7\text{mod }9&=4\text{mod }9
\end{align}
$$
## Representation of Integers

[Representations of Integers](/notes/representations-of-integers)

decimal, hexadecimal, octal, binary
## Primes
**Prime** numbers are numbers whose only factors are 1 and itself (note: 1 is not prime)

If $n$ is a composite integer, then $n$ has a divisor less than or equal to $\sqrt{ n }$

Because of this theorem, you can brute force the factorization of a number by testing all numbers less than or equal to its square root

There are infinitely many primes, and their distribution is likely bounded by the function
$$
\frac{\pi(x)}{\frac{x}{\ln x}}
$$
where $\pi(x)$ is the number of primes not exceeding $x$

Goldbach's Conjecture states that every odd integer $n>5$ is the sum of three primes, and that every even integer $n>2$ is the sum of two primes

### $\text{GCD}$ and $\text{LCM}$

Two integers are **relatively prime** if their greatest common divisor is 1, and a set of integers are **pairwise relatively prime** if every greatest common divisor is still 1

The greatest common divisor and least common multiple can be found by
$$
\begin{align}
\text{gcd}(a,b)&=p_{1^{\text{min}(a_{1}b_{1})}}p_{2^{\text{min}(a_{2}b_{2})}}\dots p_{n^{\text{min}(a_{n}b_{n})}} \\
\text{lcm}(a,b)&=p_{1^{\text{max}(a_{1}b_{1})}}p_{2^{\text{max}(a_{2}b_{2})}}\dots p_{n^{\text{max}(a_{n}b_{n})}}
\end{align}
$$

Additionally, $ab=\text{gcd}(a,b)\cdot \text{lcm}(a,b)$

Euclid's algorithm states that $\text{gcd}(a,b)=\text{gcd}(b,r)$ where $a=bq+r$, which makes finding the $\text{gcd}$ for large numbers much easier

Bézout's theorem builds on this by noting that $\text{gcd}(a,b)=sa+tb$

Euclid's extended algorithm can solve for the integers $s$ and $t$
It states that
$$
\begin{align}
s _{0}=1, &s_{1}=0, t_{0}=0, t_{1}=1\\
s_{j}&=s_{j-2}-q_{j-1}s_{j-1} \\
t_{j}&=t_{j-2}-q_{j-1}t_{j-1}
\end{align}
$$
![Pasted image 20240221150410.png](/attachments/Pasted%20image%2020240221150410.png)

A final theorem is that if $ac\equiv bc (\text{mod }m)$ and $\text{gcd}(c,m)=1$, then $a\equiv b(\text{mod }m)$

## Congruences
A linear congruence has the form $ax\equiv b(\text{mod }m)$ and relate to both calculus and linear algebra

$\overline{a}$ is said to be the **inverse** of $a\text{ mod }m$

So if $a$ and $m$ are both relatively prime and $m>1$, then an inverse of $a\text{ mod }m$ exists and is unique to $\text{mod }m$

Fermat's Theorem states that if $p$ is prime and $a$ is an integer not divisible by $p$, then $a^{p-1}\equiv 1(\text{mod }p)$ and for every integer $a$ $a^p\equiv a(\text{mod }p)$

Pseudoprimes are 