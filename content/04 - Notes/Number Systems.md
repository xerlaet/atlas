# Number Systems
---
A **number system** is a mathematical notation for expressing numbers in a consistent and convenient manner

The base is often denoted with a subscript, e.g. $453_{10}$ or $1011_{2}$

| Decimal | Binary | Octal | Hexadecimal |
| :-----: | :----: | :---: | :---------: |
|    0    |  0000  |  00   |      0      |
|    1    |  0001  |  01   |      1      |
|    2    |  0010  |  02   |      2      |
|    3    |  0011  |  03   |      3      |
|    4    |  0100  |  04   |      4      |
|    5    |  0101  |  05   |      5      |
|    6    |  0110  |  06   |      6      |
|    7    |  0111  |  07   |      7      |
|    8    |  1000  |  10   |      8      |
|    9    |  1001  |  11   |      9      |
|   10    |  1010  |  12   |      A      |
|   11    |  1011  |  13   |      B      |
|   12    |  1100  |  14   |      C      |
|   13    |  1101  |  15   |      D      |
|   14    |  1110  |  16   |      E      |
|   15    |  1111  |  17   |      F      |

## Use Cases
- Decimal is largely used by us
- [Binary](/notes/binary) is useful for representing the state of transistors in computers
	- Octal and Hex are useful shorthand representations of Binary

## Conversions
### Decimal to Base N
To convert between decimal and another base, it is often helpful to use a table of place values in that other base, below is an example for binary

add more examples to and from

```ad-example

| Base        | $2^{7}$ | $2^{6}$ | $2^{5}$ | $2^{4}$ | $2^{3}$ | $2^{2}$ | $2^{1}$ | $2^{0}$ |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Place Value | 128     | 64      | 32      | 16      | 8       | 4       | 2       | 1       |
| Number      | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 1       |
$35_{10}=00100011_{2}$
```

### Binary to Octal or Hex
To convert between binary, octal, and hexadecimal, it is often helpful to convert to binary and use that as an intermediary. Every octal digit can be replaced with three binary digits, and every hex digit can be replaced with four binary digits

| Octal  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- |
| Binary | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |

| Hex    | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | A    | B    | C    | D    | E    | F    |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Binary | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
