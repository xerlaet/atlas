# Link Layer
---

The **Link Layer** has the responsibility to transfer a datagram between physically adjacent nodes over a link

Primarily implemented by the **network interface controller (NIC)**

## Responsibilities
- **Framing**: Encapsulates network-layer datagrams into frames
- **Addressing**: Uses [MAC addresses](/notes/mac-address) to identify interfaces on a local network
- **Error detection**: Detects corrupted frames using checksums or [CRCs](/notes/cyclic-redundancy-check)
- **Error correction**: Corrects transmission errors when supported by the protocol
- **Medium access control**: Coordinates access to shared communication channels
- **Flow control**: Coordinates transmission rates when supported by the protocol

## Error Detection & Correction
- **Single-bit parity**: Detects odd numbers of bit errors
- **2D parity**: Can detect and correct a single-bit error
- **Internet checksum**: Detects errors in network and transport headers and data
- **CRC**: Detects many common transmission errors

See [Error Corrections](/notes/error-corrections)

## Multiple Access Protocols
Coordinate access to a shared communication channel
- **Channel partitioning**: Divides channel resources among stations
  - TDMA: Assigns time slots
  - FDMA: Assigns frequency bands
  - CDMA: Separates transmissions using codes
- **Random access**: Stations compete to transmit
  - ALOHA, Slotted ALOHA
  - CSMA: Transmits based on channel sensing
  - CSMA/CD: Detects collisions in shared Ethernet
  - CSMA/CA: Attempts to avoid collisions in Wi-Fi
- **Taking turns**: Stations transmit in an organized sequence
  - Polling
  - Token passing

## LANs
- [Ethernet](/notes/ethernet): Wired LAN technology
- [MAC Address](/notes/mac-address): Identifies a network interface at the link layer
- [ARP](/notes/arp): Resolves IPv4 addresses to MAC addresses on a local network
- [VLANs](/notes/vlans): Logically partitions a Layer 2 network
- [Switches](/notes/switches): Forward frames using MAC addresses
