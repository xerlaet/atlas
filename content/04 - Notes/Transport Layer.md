# Transport Layer
---

The **Transport Layer** provides communication between processes by breaking messages into **segments** and passing those onto the [Network Layer](/notes/network-layer)

[UDP](/notes/udp) is used for fast communication with minimal reliability guarantees
[TCP](/notes/tcp) is used when reliability is desired

If the channel was reliable UDP would be just fine, however since channels aren't always reliable something like TCP makes it so

[RDT](/notes/rdt) is the protocol?

**Multiplexing** is grouping messages from multiple sockets together to send as a unit
**Demultiplexing** is undoing the grouping to deliver segments to correct sockets
TCP de-multiplexes uses the 4-tuple of source/destination IP and Port
UDP de-multiplexes using destination port only

However replying will still require the IP addresses from the Network Layer

multiplexing and demultiplexing happens at all layers? move up in notes?


The IP addresses and port numbers are used to distinguish where packets should go

Checksums




