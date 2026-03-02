# DNS
---

A **Domain Name System** is a distributed database implemented in a hierarchy that provides hostname to IP address translation

First your computer checks your hosts file, then it checks various other places. Each server it talks to will either give the correct information, or return a different address to try asking
- nowadays a mix of recursive and iterative querying is used

It provides an IP address given a hostname, with some nuances
- some servers have multiple IP addresses for one name to distribute loads
- aliasing for mail servers

Under the hood it uses [[UDP]] because it needs to be fast and scaleable for everyone, and all that the user is trying to retrieve is a small IP address

DNS records are stored using a RR format (name, value, type, ttl)
- type=A `name` is hostname, `value` is IP address
- type=NS `name` is domain, `value` is hostname of name server for the domain
- type=CNAME `name` is an alias, `value` is canonical name
- type=MX `value` is SMTP mail server associated with `name`

[[DNS Cache Poisoning]] was an issue where the cache can be replaced with bogus data. To fix this, **DNSSEC** is an updated RFC that has authentication services but isn't fully implemented as of yet
