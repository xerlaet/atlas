# Counting Principles
---
There are four different primary rules for counting up possibilities of tasks, and they can be combined as necessary to account for the complexity of the problem
## Product Rule (Fundamental Counting Principle)
When a procedure can be broken down into task $n_1$ and task $n_2$, then there are $n_1\cdot n_2$ ways to do the procedure

>[!example] How many bit strings of length 7 are there?
>Since each bit is either a 0 or a 1, the answer is $2^7=128$ bit strings
## Sum Rule
When a procedure can be done in either $n_1$ ways or $n_2$ ways where none of them are the same, there are $n_1+n_2$ ways to do the procedure

>[!example] The department must choose either one of 83 students or one of 37 faculty members to serve as a representative, how many choices are there?
>There are $37+83=120$ possible choices
## Subtraction Rule
When a procedure can be done in either $n_1$ ways or $n_2$ ways where there is overlap, there are $n_1+n_2-(n_1\cap n_2)$ ways to do the procedure, also known as the *principle of inclusion-exclusion*

>[!example] How many bit strings of length 8 either start with a 1 bit or end with two bits 00?
>number of bit strings length 8 starting with 1: $2^7$
>number of bit strings length 8 ending with 00: $2^6$
>number of bit strings length 8 starting with 1 and ending with 00: $2^5$
>Hence, the number is $2^7+2^6-2^5=160$ bit strings of length 8
## Division Rule
When a procedure can be done in $n$ ways where of every way $w$, $d$ of the ways correspond to $w$, then the procedure can be done in $n/d$ ways

>[!example] How many ways are there to seat 4 people around a circular table, where two seatings are considered the same when each person has the same left and right neighbor?
>There are 4 ways to select a person for seat 1, 3 for seat 2, 2 for seat 3, and 1 for seat 4, so there are $4!=24$ ways to order the four people
>For every choice for seat 1, we get the same seating, so there are $24/4=6$ different seating arrangements
