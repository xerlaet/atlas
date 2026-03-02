# UDP
---

**User Datagram Protocol** is useful for fast data transfer where reliability isn't required
- unreliable, unordered delivery
- no connection establishment

This is useful for streaming, [[DNS]], [[SNMP]]

Modern HTTP3 [[QUIC]] is built on top of UDP with extra stuff at the application layer

## Structure
A UDP packet is made up of a 8 byte header plus the payload. The length is in bytes and includes the size of the header.

The sender calculates the checksum by separating the data to encode (pseudo header with source port, destination port, length, port number: 17, and the payload) as a series of 16-bit words. Each of those words are added together using 1's complement (any overflow is wrapped around and added again). At the end, all the bits are flipped.

The receiver will perform a similar process except also add the checksum as well, and if the packet is error free the result will be `0xFFFF`. Anything else and the packet is corrupt and discarded.

This checksum doesn't catch every error, but works well enough to be useful

```tikz
\begin{document}
\begin{tikzpicture}
    \def\fieldW{5}
    \def\fieldH{0.7}

    % Optional: Add a label for the entire header (32 bits wide)
    % \node at (\fieldW, 0.4) {\textbf{32-bit Word}};
    
    % Row 1 (Source and Destination Port)
    \draw (0, 0) rectangle (\fieldW, -\fieldH) node[midway] {\textbf{Source Port} (16 bits)};
    \draw (\fieldW, 0) rectangle (2*\fieldW, -\fieldH) node[midway] {\textbf{Destination Port} (16 bits)};
    
    % Row 2 (Length and Checksum)
    \draw (0, -\fieldH) rectangle (\fieldW, -2*\fieldH) node[midway] {\textbf{Length} (16 bits)};
    \draw (\fieldW, -\fieldH) rectangle (2*\fieldW, -2*\fieldH) node[midway] {\textbf{Checksum} (16 bits)};
    
    % Data (Payload) - Spanning both columns
    \draw (0, -2*\fieldH) rectangle (2*\fieldW, -4*\fieldH) node[midway] {\textbf{Data (Payload)}};
\end{tikzpicture}
\end{document}
```
