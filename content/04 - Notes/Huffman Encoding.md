# Huffman Encoding
---

A **Huffman Encoding** is used to encode a set of items such at each item will be represented by a unique binary string, where the average length of such strings are minimized. Additionally, no encoding is a prefix of another, so decoding is unambiguous.

Input: set of items and their corresponding probabilities
Output: encoding tree

The idea is to start by combining the nodes with the smallest probabilities using a [greedy approach](/notes/greedy-algorithms) and build the encoding tree from the bottom up

The complexity is $O(n\log n)$ because a min heap needs to be created along with deletion of the minimal element $n$ times

![TikZ Diagram](/attachments/tikz-dd569675505bb331ae3c0103515051f2.svg)
A = 1100
B = 1101
C = 100
D = 101
E = 111
F = 0
