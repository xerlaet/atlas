# Symmetric Key Cryptography
---

[DES](/notes/des)
[AES](/notes/aes)

Assume everyone knows the algorithm
$$
Y=E_{K}(X),X=D_{K}(Y)
$$

**Electronic Codebook Book** (ECB): $c_{i}=E_{K_{1}}(m_{1})$
Advantages: errors or changed bits in a block only affect that block
Disadvantages: repetitions in the plain text will repeat in the cipher text

**Cipher Block Chaining** (CBC): $c_{i}=E_{K_{1}}(m_{i} \oplus c_{i-1})$
Advantages: changing the document will require work to re-encrypt it
Disadvantages: attackers can still change any two blocks to something random

CRC can help avoid this problem

**Counter** (CTR): $c_{i}=m_{i}\oplus E_{k_{1}}(IV+i-1)$
Advantages: easy to update the document based on just one block
Disadvantages: if the $(m,c)$ pair is discovered, the IV encryption string shouldn't be used again

**XOR Encrypt XOR** (XEX): $c_{i}=B_{\text{mod}}E_{K_{2}}\oplus (E_{K_{2}}\oplus m_{i})$ - you can use the disk block address as the IV number
