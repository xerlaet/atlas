# Transport Layer
---

Provides **process-to-process communication** by encapsulating application data into segments and passing them to the [Internet Layer](/notes/internet-layer)

## Protocols
- [UDP](/notes/udp): Connectionless, low overhead, with no built-in guarantees of delivery, ordering, or duplicate protection
- [TCP](/notes/tcp): Connection-oriented, provides reliable, ordered byte-stream delivery using acknowledgments, retransmissions, and flow and congestion control
- [RDT](/notes/rdt): Models how reliable data transfer can be built over an unreliable channel

**Note**: UDP is suitable when the application can tolerate loss or handle reliability itself. TCP provides reliability because IP does not guarantee delivery

## Multiplexing & Demultiplexing
- **Multiplexing**: Collects data from multiple application sockets for transmission
- **Demultiplexing**: Uses transport-layer headers to deliver received segments to the correct socket
- **Ports**: Identify application endpoints on a host
- **IP addresses**: Identify network interfaces and enable delivery between hosts

| Protocol | Demultiplexing |
|---|---|
| UDP | Primarily uses the destination IP address and destination port |
| TCP | Uses the connection's 4-tuple: source IP, source port, destination IP, destination port |

Replies use the peer's source IP address and port as the destination

## Checksums
- Detect corruption in transport-layer data and headers
- UDP uses a checksum for error detection; it is optional in IPv4 but generally required in IPv6
- TCP uses a checksum to detect corruption
- Checksums do not provide error correction or protection against intentional modification
