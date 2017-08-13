I spent a ton of time figuring this out today. We're in the process of moving from Windows to Macos and this makes .Net dev work a ton easier on Mac. Hope this helps! 

Assumptions made for this tutorial:
* VMWare Fusion 8
* Windows 10 VM
* IIS Express/Visual Studio project 


* Make sure in your VM's Settings under `Network Adapter` is configured to share the ip of the VM with the host computer
* Add an `inbound rule` to the Windows firewall allowing connections from the port your project starts on
* Run `ipconfig` in CMD and get the ipv4 address of the Windows box
* Go to `$projectDirectory > (this is a hidden folder) .vs > config > applicationhost.config` and edit anywhere it says localhost to the ip you copied
* Instead of using localhost:$port you can use ip:$port!

Done! 