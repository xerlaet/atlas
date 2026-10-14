# IP Security
---

Network security protects communication against eavesdropping, impersonation, tampering, and denial of service. The Internet's original protocols provided limited security, so protections were added over time

## Common Attacks
- **Packet sniffing**: Captures and reads network traffic using tools such as Wireshark or tcpdump
- **IP spoofing**: Forges the source IP address of a packet to impersonate another host
- **Connection hijacking**: Takes over an existing communication session
- **Man-in-the-middle (MITM)**: Intercepts and potentially modifies communication between two parties
- **Denial of Service (DoS)**: Overwhelms a network or service to prevent legitimate access
- **ARP spoofing**: Sends forged ARP messages to associate an attacker's MAC address with another host's IP address

## Transport Layer Security (TLS)
Protects application communication against eavesdropping and tampering
- **Confidentiality**: Encrypts application data using symmetric encryption
- **Integrity**: Uses cryptographic authentication to detect unauthorized modification
- **Authentication**: Typically uses certificates and public-key cryptography to authenticate the server, and optionally the client

TLS commonly operates over [TCP](/notes/tcp), while TLS 1.3 can also operate over [QUIC](/notes/quic)

---

## 1. IP Addressing, Link Layer & ARP Attacks

#### **CIDR & Routing Mechanics**
* **Classless Inter-Domain Routing (CIDR)**: Replaced traditional Class A, B, and C address assignments to prevent IPv4 address exhaustion. 
* **How & Why It Works**: CIDR allows the boundary between the network ID (`netid`) and host ID (`hostid`) to be placed on any bit boundary. ISPs assign hierarchical IP prefixes to customers, which prevents global Internet routing tables from exploding in size.
* **Longest Prefix Matching**: When a router receives a packet, it compares the destination IP against its routing table. If multiple routes match, the router forwards the packet to the interface corresponding to the longest network mask (most specific match).

#### **Ethernet Data Link Layer**
* **CSMA/CD**: Ethernet networks use *Carrier Sense, Multiple Access with Collision Detection* to manage shared physical media access.
* **Ethernet Frame Structure**: Frames use 48-bit (6-byte) MAC hardware addresses.
  * **Header**: Destination MAC (6 bytes), Source MAC (6 bytes), Frame Type (2 bytes; e.g., `0x0800` for IP, `0x0806` for ARP).
  * **Payload & Checksum**: Data payload (46 to 1500 bytes, padded if needed) and a 4-byte CRC checksum for frame verification.

#### **Address Resolution Protocol (ARP) & Exploits**
* **How ARP Works**: Translates logical IP addresses into physical MAC addresses for direct delivery on local networks. When Host A wants to reach Host B's IP, A broadcasts an **ARP Request** ("Who has IP B?"). Host B replies with a unicast **ARP Reply** ("IP B is at MAC B"). Hosts cache these mappings temporarily (typically ~20 minutes) to minimize network traffic.
* **Proxy ARP & Gratuitous ARP**:
  * *Proxy ARP*: Routers answer ARP requests on behalf of hosts located on different subnets.
  * *Gratuitous ARP*: An unsolicited broadcast sent at boot time to detect duplicate IP addresses or announce MAC changes.
* **Why ARP Attacks Work**: ARP lacks authentication; hosts blindly update their ARP tables whenever they receive an ARP reply, even if they never sent a request.
* **ARP Cache Poisoning & Man-in-the-Middle (MITM)**:
  * An attacker sends forged ARP replies to Host A (claiming Host B's IP is at the Attacker's MAC) and to Host B (claiming Host A's IP is at the Attacker's MAC).
  * Both hosts store the false mappings in their ARP caches. All traffic between A and B is redirected through the attacker.
  * The attacker can disable ARP updates on local alias interfaces (`ifconfig -arp`), set static correct MACs (`arp -s`), and enable IP forwarding to silently inspect or tamper with traffic.
* **Bypassing Switched Ethernet**: Switches maintain MAC-to-port mapping tables to isolate traffic. Attackers bypass switch isolation using:
  * **ARP Flooding**: Overflows the switch's MAC lookup table with thousands of fake MAC addresses. Unable to store new entries, the switch reverts to fail-open "hub" mode, broadcasting all frames to all ports.
  * **ARP Cache Poisoning**: Directly forces endpoints to route frames through the attacker's switch port.

---

## 2. Network Sniffing & Detection Techniques

#### **Packet Sniffing**
* **How It Works**: A sniffer sets the Network Interface Card (NIC) to **promiscuous mode**, instructing the hardware to bypass destination MAC address filtering and pass *all* frames on the local wire up to the OS.
* **Why It Is Effective**: Cleartext legacy protocols (such as TELNET, FTP, POP, and HTTP) pass credentials and session data unencrypted across the wire.

#### **Detection Methods**
* **Host-Based Inspection**: Checking NIC flags via command-line tools like `ifconfig` (looking for the `PROMISC` flag), `cpm`, or `ifstatus`.
* **Network-Based Detection**:
  * **Suspicious DNS Lookups**: Sniffers often attempt reverse DNS lookups on captured IP addresses. Administrators set "DNS traps" by generating traffic from fake, non-existent IP addresses and monitoring if any host attempts a reverse DNS resolution.
  * **Latency Probing**: Promiscuous NICs pass every packet to the operating system, creating CPU overhead. Administrators flood the network segment with noise traffic while pinging target hosts; a sniffer host exhibits significant response latency spikes due to processing the background traffic.
  * **Kernel OS Anomalies**: Exploits implementation bugs in promiscuous mode handling. For example, certain Linux kernels in promiscuous mode process packets with valid IP addresses even if the MAC address is wrong. Older Windows systems check only the first octet of broadcast MACs (accepting `ff:00:00:00:00:00` as broadcast).

---

## 3. Network & Transport Layer Vulnerabilities

#### **IP & UDP Spoofing**
* **How It Works**: An attacker crafts custom IP packets with a forged source IP address.
* **Why It Is Used**: Exploits legacy trust mechanisms based solely on IP addresses (such as UNIX `r`-commands like `rsh`/`rcp` or RPC services). For stateless UDP protocols (e.g., **DNS**, **NFS**, **NIS**), attackers send spoofed requests without needing to establish a bi-directional handshake.

#### **IP Fragmentation Exploits**
When an IP datagram exceeds the Maximum Transmission Unit (MTU) of a physical link, it is split into fragments. Each fragment carries the original packet's Identification field, a **Fragment Offset** (measured in 8-byte blocks), and a **More Fragments (MF)** flag.

* **Ping of Death**:
  * *How It Works*: The attacker sends crafted fragments where the final fragment's offset plus payload length exceeds the maximum IP datagram limit of 65,535 bytes (e.g., 65,120 offset + 398 data + 20 IP header = 65,538 bytes).
  * *Impact*: Reassembling this packet causes a static kernel memory buffer overflow, triggering an immediate crash or kernel panic.
* **Teardrop Attack**:
  * *How It Works*: Exploits bugs in OS fragment reassembly routines using overlapping fragments. When fragment ranges overlap (`offset < prev->end`), the kernel attempts to adjust the offset (`offset += overlap`).
  * *Why It Crashes*: If the fragment payload is smaller than the calculated overlap, `fp->len = end - offset` results in a negative number (e.g., `-8`). When the kernel casts this value to an unsigned integer, it becomes a massive positive number (`65,528` bytes). `memcpy` attempts to copy 65KB of data from a tiny buffer, corrupting kernel memory.
* **Firewall & IDS Evasion**:
  * Attackers push TCP/UDP header fields (such as destination ports or SYN/ACK flags) into secondary fragments. Simple packet filters that inspect only the first fragment allow the connection to pass. Overlapping fragments can also overwrite filtered port values after passing initial firewall checks.

#### **ICMP Exploits**
* **Smurf Attack**: An amplification Denial-of-Service attack where the attacker broadcasts ICMP Echo Requests (pings) to remote subnets while spoofing the victim's source IP address. Every host on the target subnet replies to the victim simultaneously, saturating its network link.
* **Destination Unreachable Attacks**: Forged ICMP "Destination Unreachable" packets sent to active endpoints trick OS network stacks into dropping established connections prematurely.

---

## 4. TCP Mechanics, Port Scanning & Session Exploits

#### **TCP Three-Way Handshake**
1. **Client \\(\rightarrow\\) Server**: Sends a `SYN` segment containing an Initial Sequence Number (\\(s_c\\)).
2. **Server \\(\rightarrow\\) Client**: Responds with a `SYN+ACK` segment containing its own sequence number (\\(s_s\\)) and an ACK value of \\(s_c + 1\\).
3. **Client \\(\rightarrow\\) Server**: Sends an `ACK` segment with sequence number \\(s_c + 1\\) and ACK value of \\(s_s + 1\\).

#### **Port Scanning Techniques**
* **Connect Scan (`nmap -sT`)**: Uses the standard OS `connect()` socket call to complete full 3-way handshakes across ports. It does not require root privileges, but is easily detected and logged by target applications.
* **SYN "Half-Open" Scan (`nmap -sS`)**: Sends a `SYN` packet. If the target responds with `SYN+ACK`, the port is open; if `RST`, it is closed. Upon receiving a `SYN+ACK`, the attacker immediately sends a `RST` instead of the final `ACK`. The connection is never established, avoiding application-level logging.
* **Stealth Scans (FIN, Xmas, Null)**:
  * *FIN (`-sF`)*: Sends a `FIN` packet.
  * *Xmas (`-sX`)*: Sends a packet with `FIN`, `PSH`, and `URG` flags set.
  * *Null (`-sN`)*: Sends a packet with no flags set.
  * *How They Work*: RFC standards require closed ports to return a `RST` frame, while open ports silently drop unexpected flag combinations.
* **Idle Scan (`nmap -sI`)**: A completely blind port scan that uses a passive "zombie" host to probe a target:
  1. Attacker checks the zombie's current IP Datagram Identification (IPID) number.
  2. Attacker sends a spoofed `SYN` packet to the target, setting the source IP to the zombie's IP.
  3. If the target port is open, it sends a `SYN+ACK` to the zombie. The zombie, unexpected recipient of a `SYN+ACK`, replies to the target with a `RST`, incrementing its IPID by 1. If the target port is closed, the target sends a `RST` to the zombie, which ignores it (IPID does not change).
  4. Attacker probes the zombie's IPID again. If the IPID increased by 2, the target port is open; if increased by 1, it is closed.

#### **TCP Session Attacks & Denial of Service**
* **SYN Flooding & SYN Cookies**:
  * *The Attack*: An attacker floods a server with `SYN` requests and withholds the final `ACK`. The server allocates memory in its connection backlog queue for each half-open state until the queue fills, blocking legitimate users.
  * *SYN Cookies Defense*: Instead of storing state in memory, the server encodes the client's connection state (timestamp, MSS) into the server's Initial Sequence Number (\\(s_s\\)) using a secret cryptographic hash. Backlog memory is allocated only after a valid final `ACK` arrives containing the calculated cookie.
* **TCP Hijacking & ACK Storms**:
  * An attacker injects spoofed data packets with valid sequence numbers into an active connection.
  * Injecting unacknowledged data desynchronizes sequence numbers between the endpoints. The receiving host sends an `ACK` expecting the next byte, but the legitimate sender receives an out-of-sequence `ACK` and sends a reply `ACK` containing its expected sequence number.
  * This triggers an infinite, high-rate **ACK storm** between client and server as both nodes endlessly reply with corrective `ACK` packets.
* **Off-Path Side-Channel Attack (RFC 5961 / USENIX 2016)**:
  * *Background*: RFC 5961 introduced **Challenge ACKs** to prevent blind off-path attackers from terminating connections or injecting data.
  * *Vulnerability*: Linux 3.6+ implemented RFC 5961 with a global limit of 100 Challenge ACKs per second shared across *all* connections (`sysctl_tcp_challenge_ack_limit = 100`).
  * *How It Works*: A blind off-path attacker sends spoofed `SYN`/`RST`/`DATA` guesses alongside 100 probing packets to a server. If a guess is correct (e.g., matching client port or sequence numbers), the server sends a Challenge ACK, exhausting the global limit. The attacker counts how many probe replies they receive back (99 vs 100). This side-channel leakage allows an off-path attacker to infer exact source ports and sequence numbers in under 60 seconds.
