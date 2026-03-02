# Application Layer
---

Applications only run on the end systems, basically [[Processes]]

The processes needs an identifier, which includes the IP address and port number

A **socket** is a process that sends and receives messages to/from its socket (port?)

[[Client Server Architectures]] have a server always on in a permanent address (often a data center), and clients can connect intermittently to the server 

 [[P2P Architectures]] have end systems directly communicating with each other which is self scale-able, but is hard to make it reliable and secure

## Protocols
The protocol needs to define the type of messages exchanged, message syntax, message semantics, and rules for when and how they are sent

## Video Streaming and CDNs

**Content Distribution Networks** (CDNs) host media in a distributed fashion

Videos are buffered to ensure continuous performance

[[DASH]]

**Transport Layer Security** provides encrypted TCP connections and is implemented in the application layer
