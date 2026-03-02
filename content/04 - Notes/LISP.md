# LISP
---

```lisp
(defun factorial (N)
	"Compute the factorial of N."
	(if (- N 1)
	1
	(* N (factorial (- N 1)))))
```

## Numeric Functions
```lisp
(*,+,/,-,= 1 2 ...)
(sqrt 9)
(expt 10 2) ; returns 100
(min,max 1 2 ...)
(abs,mod,round -1) ; round gives a rounded int then a float to add to match
(sin,cos,tan pi) ; pi is built in, arguments are radians
```

## Lists
```lisp
(first/second/third/tenth '(a b c))
(nth 2 '(a b c)) ; -> c
(rest '(a b c)) ; -> (b c)
(last '(a b c)) ; -> (c) note it returns a list containing the last element
(length '(a (b c) (d e))) ; -> 3

(cons 'a '(b c)) ; -> (a b c) the last element should be a list, otherwise .
(append '(a b) '(c d)) ; -> (a b c d)
(list 'a '(b c) (+ 2 3)) ; -> (a (b c) 5)
```

## Predicates
```lisp
(listp/numberp/integerp/stringp 5.78) -> t/NIL
(null (rest '(a))) ; -> T
(equal '(a b) (cons 'a '(b))) ; -> T
(eql '(a b) (cons 'a '(b))) ; -> NIL, doesn't work on lists or strings
(not,and,or T NIL ....
```

## Special Forms
```lisp
(setq var 'name)
'(+ 2 3) ; -> (+ 2 3)

; Functions
(defun square (x) (* x x))
(if (= 7 7)
	'yes
	'no
)
(cond (= 7 5) "7=5"
	(= 7 6) "7=6"
	(= 7 7) "7=7"
)
```

