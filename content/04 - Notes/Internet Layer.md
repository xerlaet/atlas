# Internet Layer
---

Responsible for **delivering datagrams across networks** using logical addressing and routing

## Network Layer Service Model
The Internet uses a **best-effort service model**, providing no guarantees of delivery, ordering, bandwidth, or delay

| Service Model | Guarantees / Behavior |
|---|---|
| Best Effort (IP) | No delivery or performance guarantees |
| CBR (ATM) | Constant bit rate |
| ABR (ATM) | Available bandwidth varies with network conditions |
| IntServ | Per-flow resource reservations and QoS guarantees |
| DiffServ | Differentiated treatment based on traffic classes |

- **IntServ**: Uses resource reservation to provide per-flow QoS
- **DiffServ**: Classifies and prioritizes traffic without guaranteeing delivery

## Router Architecture
Routers receive packets on input ports, select output ports, and transmit packets toward their destinations

- **Input ports**: Perform link-layer processing and destination lookup
- **Switching fabric**: Transfers packets from input to output ports
- **Output ports**: Queue and transmit packets onto outgoing links
- **Buffers**: Temporarily store packets during congestion
- **Scheduling**: Determines which queued packet transmits next

**Head-of-Line (HOL) blocking** occurs when the first packet in an input queue blocks packets behind it, even when their desired outputs are available

## Control Plane vs. Data Plane
- **Control plane**: Determines routes and manages forwarding rules
- **Data plane**: Forwards packets using local forwarding tables

### Routing
Determines paths through the network and builds routing tables
- Link-state routing: [OSPF](/notes/ospf)
- Distance-vector routing: [Bellman-Ford Algorithm](/notes/bellman-ford-algorithm)
- Interdomain routing: [BGP](/notes/bgp)
- [Software-Defined Networking](/notes/software-defined-networking) (SDN): Uses a logically centralized controller to manage forwarding rules

The routing table is used to build a **Forwarding Information Base (FIB)** for fast packet lookups

### Forwarding
Moves each packet to the appropriate next hop based on its header and the FIB
- Decrements the IPv4 TTL or IPv6 Hop Limit
- Applies forwarding rules and access control policies
- May queue or drop packets during congestion
- May send exceptional packets to the control plane for processing

## Internet Protocol (IP)
Provides connectionless, best-effort delivery of datagrams between network interfaces
- **IPv4**: Uses 32-bit addresses
- **IPv6**: Uses 128-bit addresses
- **Subnetting and CIDR**: Divide address space into hierarchical network prefixes
- **[DHCP](/notes/dhcp)**: Dynamically assigns network configuration
- **[NAT](/notes/nat)**: Translates addresses, often including transport-layer ports
- **Fragmentation**: IPv4 may fragment packets when permitted; IPv6 routers do not fragment packets

## IP Addressing
An IP address identifies a network interface, not necessarily an entire device
- **Subnet**: A group of interfaces sharing an IP prefix
- **Subnet mask / prefix length**: Defines the network portion of an address, e.g. `/24`
- **Hierarchical addressing**: Enables route aggregation and scalable routing
- **CIDR**: Supports variable-length network prefixes
- **IPv4 address exhaustion**: Motivated the development of IPv6

## Related Topics
- [NAT](/notes/nat)
- [DHCP](/notes/dhcp)
- [IPv4](/notes/ipv4)
- [IPv6](/notes/ipv6)
- [OSPF](/notes/ospf)
- [BGP](/notes/bgp)
- [Software-Defined Networking](/notes/software-defined-networking)
- [Net Neutrality](/notes/net-neutrality)
