### Otherwise known as Chamberlain / LiftMaster 819LMB / MYQ-G0303 MyQ Home Bridge

![819LMB](~posts/stop_myq_homebridge_819lmb_rebooting/homebridge.png)

### The Problem

When isolated on an IoT VLAN with no WAN/internet access, the device constantly attempts to phone home to Chamberlain's cloud endpoints (presumably MQTT servers):

- `connect.myqdevice.com:8883`
- `connect1.myqdevice.com:8883`

If these domains are unresolved or sinkholed to a non-existent server / `0.0.0.0`, connection attempts hang and time out. Eventually, the internal watchdog reboots the device or its Wi-Fi module, causing it to go unavailable/unresponsive in HomeKit every 5–10 minutes.

### Solution

Provide the device DNS resolution for `connect.myqdevice.com` and `connect1.myqdevice.com` pointing to a local IP/service that will immediately refuse the connection (TCP RST).