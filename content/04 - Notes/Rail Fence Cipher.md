# Rail Fence Cipher
---

A **transposition cipher** that rearranges letters by writing them in a zigzag pattern across multiple rows, then reading each row in sequence

## Algorithm
For 3 rails, encrypt `WEAREDISCOVERED` by writing diagonally, then read each row
$$
\begin{array}{ccccccccccccccc}
W & & & & E & & & &C  & & & & R & & \\
& E&& R & &D && S & &O & & E & & E & \\
& & A & & & & I & & & & V & & & & D \\
\end{array}
$$
Read each rail from left to right to obtain the ciphertext
- Key = Number of rails
- Decryption reconstructs the zigzag pattern and reads diagonally

## Security
- Very small key space for typical messages
- Preserves letter frequencies but changes their positions
- Easily broken by trying possible rail counts
