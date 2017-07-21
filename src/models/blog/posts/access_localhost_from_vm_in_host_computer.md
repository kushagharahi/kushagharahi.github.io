I spent a ton of time figuring this out today. Hope this helps!

* Make sure the Network Adapter for the VM is configured to share the ip of the VM with the host computer
* Add an inbound rule to the windows firewall allowing connections from the port your project starts on
* Run `ipconfig` in CMD and get the ipv4 address of the Windows box
* Go to project > (hidden folder) .vs > config > applicationhost.config and edit anywhere it says localhost to the ip you copied
* instead of using localhost:{port} you use ip:{port}

Done! 