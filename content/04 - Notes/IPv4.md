# IPv4
---

![TikZ Diagram](/attachments/tikz-6351cb60ca5090a70ee1d5a403527d1f.svg)

- **IHL** specifies header length in 4-byte words: **20–60 bytes** total.
- **Total length** includes both header and payload, up to **65535 bytes**.
- **DSCP** selects differentiated handling; **ECN** carries congestion notification.
- **Flags** are reserved (zero), **DF** (Don't Fragment), and **MF** (More Fragments). The fragment offset is measured in **8-byte units**.
- **TTL** limits a packet's lifetime through the network; **Protocol** identifies its contents, such as TCP (6) or UDP (17).
- **Header checksum** covers only the IPv4 header, not the payload.
