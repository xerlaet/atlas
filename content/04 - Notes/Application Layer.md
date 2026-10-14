# Application Layer
---

Provides network applications with communication between processes running on different end systems

Applications run on end systems and are implemented by [Processes](/notes/processes)

## Sockets
A **socket** is the interface through which an application process sends and receives data
- **IP address**: Identifies the destination network interface
- **Port number**: Identifies the destination application endpoint
- Together, IP addresses and ports help direct data to the correct process

## Architectures
- [Client Server Architectures](/notes/client-server-architectures): An always-available server with a known address provides services to clients that connect as needed
- [P2P Architectures](/notes/p2p-architectures): End systems communicate directly and share resources, potentially improving scalability but complicating management, reliability, and security

## Application Protocols
Define how applications communicate, including:
- **Message types**: Requests, responses, and other messages
- **Syntax**: Message format and field structure
- **Semantics**: Meaning of each field
- **Rules**: When and how messages are sent and responses are handled

## Video Streaming & CDNs
- **Content Distribution Networks (CDNs)**: Distribute content across geographically dispersed servers to improve delivery performance and scalability
- **Buffering**: Stores video data temporarily to smooth out variations in network delivery
- [DASH](/notes/dash): Adapts video quality to available bandwidth by selecting among encoded segments

## Security
- **[Transport Layer Security (TLS)](/notes/transport-layer-security-tls)**: Provides encryption, authentication, and integrity for application communication
- TLS commonly runs over TCP, though TLS 1.3 can also operate over QUIC, which uses UDP
