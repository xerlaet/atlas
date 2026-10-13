# Network Layers
---

Each layer will look at, add to, and remove relevant header information for the protocols at that layer

1. [Physical Layer](/notes/physical-layer) (bits on the wire)
2. [Link Layer](/notes/link-layer) (Ethernet, 802.11 WiFi)
3. [Network Layer](/notes/network-layer) (IP, routing protocols)
4. [Transport Layer](/notes/transport-layer) (TCP, UDP)
5. [Application Layer](/notes/application-layer) (HTTP, DNS, IMAP)

Less reliability as you go down the layers

Other ways of visualizing the layers include the OSI Model and TCP/IP Model


![Pasted image 20250902101818.png](/attachments/Pasted%20image%2020250902101818.png)

## New Connection Scenario
Run DHCP to get an IP address
Run DNS to get IP address of Google (ARP first)
Run HTTP
- TCP handshake first
