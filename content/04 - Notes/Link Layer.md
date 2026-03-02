# Link Layer
---

The **Link Layer** has the responsibility to transfer a datagram between physically adjacent nodes over a link

It is primarily implemented on a network adapter chip, known as the **network interface controller** (NIC)

It is in charge of flow control, error detection and correction, and half-duplex or full-duplex communication

[[Error Corrections]]
- single bit parity - detect an odd number of errors - bursts of errors can make P(undetected errors) ~~ 50%
- 2D bit parity (even or odd) can detect and correct 1 bit errors
- internet checksum
- [[Cyclic Redundancy Check]]

## Multiple Access Channel Access Protocols
**Channel Partitioning** partitions a channel for different traffic (best at high loads)
- Time Division Multiple Access splits a channel into rounds and each station gets slots
- Frequency Division Multiple Access splits a channel into different frequencies
CDMA

**Random Access** just send data whenever (best at low loads)
- ALOHA, Slotted ALOHA
- CSMA(/CD in ethernet +/CA in 802.11) (newer and better)

**Taking Turns** takes turns (best of both worlds)
- polling (bluetooth)
- token passing

collision detection is fine for wired, collision avoidance is needed for wireless
Cable access network

## LANs
[[MAC Address]]
[[ARP]]

[[Ethernet]]

[[VLANs]]

A general rule of thumb is for every 10 switches have a router

### Switches vs. Routers
Both are store and forward (routers are network layer and switches are link layer)
Both have forwarding tables. Switches are self learning while routers compute the forwarding table with algorithms and IP addresses

[[Switches]]
[[Routers]]

## Data Centers
![[Pasted image 20251028104836.png|500]]

Increased reliability via redundancy

A load balancer receives external client requests and directs the workflow
