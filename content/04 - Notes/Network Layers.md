# Network Layers
---

Each layer will look at, add to, and remove relevant header information for the protocols at that layer

[Application Layer](/notes/application-layer) (HTTP, DNS, IMAP)
[Transport Layer](/notes/transport-layer) (TCP, UDP)
[Network Layer](/notes/network-layer) (IP, routing protocols)
[Link Layer](/notes/link-layer) (Ethernet, 802.11 WiFi)
[Physical Layer](/notes/physical-layer) (bits on the wire)

Less reliability as you go down the layers

Other ways of visualizing the layers include the OSI Model and TCP/IP Model


![Pasted image 20250902101818.png](/attachments/Pasted%20image%2020250902101818.png)

## New Connection Scenario
Run DHCP to get an IP address
Run DNS to get IP address of Google (ARP first)
Run HTTP
- TCP handshake first
