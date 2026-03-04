# P2P Architectures
---

**Peer-to-peer** (P2P) architectures features arbitrary end systems that directly communicate with each other as opposed to servers

The primary example is [BitTorrent](/notes/bittorrent). Other applications are limited because of security concerns

## Server vs P2P Comparison
![Pasted image 20250909104626.png](/attachments/Pasted%20image%2020250909104626.png)


Time to distribute $F$ to $N$ clients using a client-server approach
$$
D_{c-s}\geq \max \left\{  NF /u_{s}, F /d_{min}  \right\}
$$

Time to distribute $F$ to $N$ clients using a P2P approach
$$
D_{P 2P}\geq \max \left\{  F /u_{s},F /d_{min},NF /\left( u_{s}+\sum u_{i} \right)  \right\}
$$

![Pasted image 20250909105224.png](/attachments/Pasted%20image%2020250909105224.png)