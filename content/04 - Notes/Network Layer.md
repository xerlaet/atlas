# Network Layer
---

what's inside a router (ports in/out, switching, buffers, scheduling)
IP (format, addressing, NAT, IPv6)
generalized forwarding, SDN

Net Neutrality - how can you ensure the network treats packets fairly? Instead of "oops, I lost those"


## Network Layer Service Model
The Internet was built on a "best-effort" service model without any guarantees about packet delivery

$$
\begin{array}{l|l|l|l|l|l}
\hline
\textbf{Service Model} & \textbf{Bandwidth} & \textbf{Packet Loss} & \textbf{Order} & \textbf{Timing} & \textbf{Primary Use} \\
\hline
\textbf{Best-Effort} & \text{None} & \text{No} & \text{No} & \text{No} & \text{Web, Email} \\
\textbf{CBR (ATM)} & \text{Constant Rate} & \text{Yes} & \text{Yes} & \text{Yes} & \text{Telephony Trunk} \\
\textbf{ABR (ATM)} & \text{Guaranteed Min} & \text{No} & \text{Yes} & \text{No} & \text{Critical Data} \\
\textbf{IntServ} & \text{Guaranteed} & \text{Yes} & \text{Yes} & \text{Yes} & \text{Remote Surgery} \\
\textbf{DiffServ} & \text{Prioritized*} & \text{Less Likely*} & \text{Possibly} & \text{No} & \text{VoIP, Streaming} \\
\hline
\end{array}
$$


## Routers

The router CPU does all the main operations for control plane and programs the data plane, and specialized application-specific integrated circuits (ASICs) perform the forwarding operation without bothering the CPU

One of the largest bottlenecks in speed is HOL blocking from the input to output ports

### Control Plane
network-wide logic
routing protocols like [[OSPF]], [[BGP]], EIGRP to learn about the network's layout, build and maintain routing tables, rules for traffic like QoS policies, session management


traditional routing algorithms vs software defined networking (SDN)
- link state [[Uniform Cost Search]]
- distance vector [[Bellman-Ford Algorithm]]

In SDN, a remote controller installs forwarding tables in routers

**Routing** is when the router determines what route a packet should take

It then pushes a simplified routing table (forwarding information base (FIB)) to the ASICs

### Data Plane
input ports, output ports, and some high speed queuing

local per-router function
determines packet forwarding, address lookup, en/decapsulation, apply access control lists
values in the arriving packet's header tell the router where it should go, decrement TTL

**Forwarding** is when packets are blindly sent from one router to another

If the data plane is stumped, it will "punt" the packet to the main CPU

For scheduling policies, WFQ is most used today

ICMP can be exploited to map out networks, sometimes is disabled

## IP
![[Pasted image 20251009103259.png]]

Any packets that are larger from upper layers are fragmented at this point

## IP Addresses
32-bit identifier for each host or router interface (ethernet, wireless). This address is divided into a subnet and host part (decided by the subnet mask ex. /24)

> Who the hell know how much address space we needed?
> - Vint Cerf reflecting on decision to make IPv4 address 32 bits long

IPv6 adoption is taking a very long time

A **subnet** is a set of device interfaces that can reach each other with just one router?/not going beyond it

CIDR
Use [[DHCP]] to dynamically obtain an IP address 

Hierarchical addressing - tradeoff between consistency and fragmentation when organizations move to different ISPs (just like moving emails, switch over time)

[[NAT]] uses port numbers to differentiate addresses from both sides. Controversial because it breaks the layering principle by using the port numbers - inspiration for mixing layers in general

