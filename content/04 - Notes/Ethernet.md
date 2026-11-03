# Ethernet
---

![TikZ Diagram](/attachments/tikz-d63f316772dd25e7d1a7d60494e9341b.svg)

- **Preamble + SFD** synchronize reception and mark the start; they precede the MAC frame.
- **EtherType** identifies the encapsulated protocol, such as IPv4 or IPv6.
- **VLAN tag** contains a tag protocol identifier (TPID) and tag control information (TCI: priority, drop eligibility, and VLAN ID).
- **Padding** brings short frames up to the minimum size. Without a VLAN tag, payload + padding occupies **46–1500 bytes**, and the frame from destination MAC through FCS is **64–1518 bytes**.
- **FCS** detects corruption. The inter-frame gap is not part of the frame and is not shown.
