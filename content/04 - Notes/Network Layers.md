# Network Layers
---

Each layer provides services to the layer above it and communicates with its peer layer on the destination, with **encapsulation** as data moves down the stack

![TikZ Diagram](/attachments/tikz-9fdc882acb50fb546744ba92ff3b8647.svg)

- **OSI Model**: Based on conceptual networking responsibilities
- **TCP/IP Model**: Based on actual protocols

| OSI Model                              | Function                                 | TCP/IP Model                           |
| -------------------------------------- | ---------------------------------------- | -------------------------------------- |
| [Application](/notes/application-layer) (7) | Network services (HTTP, DNS, IMAP)       | [Application](/notes/application-layer) (4) |
| Presentation (6)                       | Data representation, encryption          |                                        |
| Session (5)                            | Manages communication sessions           |                                        |
| [Transport](/notes/transport-layer) (4)     | Process-to-process delivery (TCP, UDP)   | [Transport](/notes/transport-layer) (3)     |
| [Network](/notes/internet-layer) (3)        | Addressing and routing (IP)              | [Internet](/notes/internet-layer) (2)       |
| [Data Link](/notes/link-layer) (2)          | Local network delivery (Ethernet, Wi-Fi) | [Link](/notes/link-layer) (1)               |
| Physical (1)                           | Transmits bits over a medium             |                                        |
