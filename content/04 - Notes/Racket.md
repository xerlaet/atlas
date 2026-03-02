# Racket
---
## Basics
```scheme
(quote (+ 2 3))
(eval '(+ 2 3))
(define succ add1)

(define x 3)
(define y "hello")
(define z (λ (n) (* n n)))
(define addx
	(λ (x)
		(λ (y) (+ x y))))
((addx 42) 31)

(curry add1)

(define list-sum
	(λ args ; do this to allow arbitrary arguments, treats it as one
		(define list-sum-helper ; defines function to keep it private
			λ (lst)
				(if (null? lst)
					0
					(+ (car lst) (list-sum-helper (cdr lst))))))
		(list-sum-helper args)))
```

## Conditionals
```scheme
(if (> 3 2)
	(printf "greater")
	(printf "lesser"))

(when (> 5 3)
	(printf "no else statement"))

(cond
	(#f (printf "one"))
	((= 3 3) (printf "two"))
	(#t (printf "three"))))
```

## Lists
```scheme
(car '(2 4 6 8)) ; returns the head
(cdr '(2 4 6 8)) ; returns the tail

(append '(1 2 3) '(4 5 6))

(cons 1 '())
'(1 . ())
```

## Keywords
```scheme
define ; places a name on a thing
lambda (λ)
List manipulation:
cons (or dot operator)
car (first, head)
cdr (rest, tail)
cadr
take, take-right
null?, empty?, zero? ; (= n 0) is equivalent to (zero? n)

add1 (succ)
sub1 (pred)
even?, odd?
quotient, remainder, modulo

Type checking: integer?, real?, rational?, complex?,
string?, char? • list? / pair?

list
quote
eval
length
reverse
list-ref
map
filter
range (range 4) (range 10)
fold1, foldr
```

Currying is the idea that in lambda calculus, all functions take one argument. If it looks like it takes more, really it is dealing with one at a time and returns a new function to deal with the next one. That also happens to the `+` operator.
