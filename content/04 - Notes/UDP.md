# User Datagram Protocol
---

![TikZ Diagram](/attachments/tikz-32c8323772b243276024fe010efb0230.svg)

Useful for fast data transfer where reliability isn't required
- unreliable, unordered delivery
- no connection establishment

This is useful for streaming, [DNS](/notes/dns), [SNMP](/notes/snmp)

Modern HTTP3 [QUIC](/notes/quic) is built on top of UDP with extra stuff at the application layer

## Checksum
The sender calculates the checksum by separating the data to encode (pseudo header with source port, destination port, length, port number: 17, and the payload) as a series of 16-bit words. Each of those words are added together using 1's complement (any overflow is wrapped around and added again). At the end, all the bits are flipped

The receiver will perform a similar process except also add the checksum as well, and if the packet is error free the result will be `0xFFFF`. Anything else and the packet is corrupt and discarded

This checksum doesn't catch every error, but works well enough to be useful
