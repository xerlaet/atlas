# HTTP
---

**HyperText Transfer Protocol** (HTTP) is the web's application-layer protocol. A client requests web objects and the server will reply with them

Under the hood, HTTP actually uses [TCP](/notes/tcp) on port 80. HTTPS denotes that it is using TLS as well on 443, and HTTP/3 uses [UDP](/notes/udp) on 443

[Cookies](/notes/cookies) can be used to keep track of state

Browsers send HTTP requests to **web caches** on a local server to reduce traffic on the access link

## Response Codes
200 OK
301 Moved Permanently
400 Bad Request
404 Not Found
505 HTTP version not supported

## Versions
(90's) **HTTP 0.9** was extremely simple with just a GET request for ASCII data
(1996) **HTTP 1.0** had a more flexible header with status codes and content type
(1997) **HTTP 1.1** utilizes persistent HTTP connections
(2015) **HTTP 2.0** divides the content into interleaved frames not FCFS to mitigate HOL blocking (head of line, when large objects block the rest of the queue)
(2022) **HTTP 3.0** utilizes [QUIC](/notes/quic)
