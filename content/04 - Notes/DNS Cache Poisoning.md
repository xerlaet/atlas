# DNS Cache Poisoning
---

**Classical DNS Poisoning** involves flooding the DNS server that a recursive DNS server would reach out to, and while that's happening ask and provide bogus DNS values to the recursive server to replace the DNS values in the user's cache

The **Kaminsky Attack** is even stronger because now the attacker asks the DNS server for a fake domain that starts the chain, and reply with a new domain server address as well. Then implement the same attack. This way you don't have to wait
