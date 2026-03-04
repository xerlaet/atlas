# DASH
---

**Dynamic Adaptive Streaming over HTTP** (DASH) is a modern protocol for video streaming that utilizes [HTTP](/notes/http)

The server divides a video file into chunks each encoded at different rates and a manifest file is provided with URLs for different chunks

The client periodically estimates server-to-client bandwidth consulting the manifest for chunks
