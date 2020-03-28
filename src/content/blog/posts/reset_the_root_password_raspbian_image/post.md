![root raspbian](~posts/reset_the_root_password_raspbian_image/rootraspbian.png)

This post assumes you're either on Ubuntu, Windows or macOS. Although most any Linux distro will do but there might be minor differences.

# Step 1 - Flash your image to an SD Card
Flash your image to an SD Card using your favorite tool or command line utility. My favorite is balena's [etcher](https://www.balena.io/etcher/).

If you're on Ubuntu, mount the SD Card, and specifically the rootfs partition. Then skip to step 3. 

If you're on macOS or Windows, continue to step 2 because you will need to use 3rd party software to mount the rootfs partition and then use Docker to pass in the mounted partition into Ubuntu.


# Step 2 - (If on macOS or Windows) Using Docker to mount the root filesystem partition in Ubuntu
You will need a utility to mount the [ext4](https://en.wikipedia.org/wiki/Ext4) root filesystem (rootfs) partition on both macOS and Windows. On Ubuntu (most linux distros) you can skip this step, since ext4 is a known format. I've had success using Paragon Software's extFS software free trial to mount the rootfs partition on macOS. It looks like they offer the same functionality in their Linux File Systems for Windows software.

Once you have the rootfs partition mounted you will need to use [Docker](https://docker.io) to pass in the mounted partition to an Ubuntu image.

macOS example
```
docker run -v /Volumes/rootfs:/Volumes/rootfs -it ubuntu:latest /bin/bash
```

Windows example - replace `M:\\` with the drive that your rootfs is mounted on
```
docker run -v M:\\:/Volumes/rootfs -it ubuntu:latest /bin/bash
```

# Step 3 - Use QEMU to boot the rootfs partition
Once you have your rootfs partition mounted in Ubuntu natively or via Docker you can boot the partition using [QEMU](https://en.wikibooks.org/wiki/QEMU). `QEMU` is a [hypervisor](https://en.wikipedia.org/wiki/Hypervisor) that will allow you to boot your rootfs partition as root.

Install `QEMU` on your distro's package manager; on Ubuntu:
```
apt-get update && apt-get install qemu
```

Copy the static `QEMU` binary into your partition:
```
cp $(which qemu-system-arm) /Volumes/rootfs/usr/bin/
```

Then use `chroot` to execute `qemu-system-arm` compiled for your host architecture, in this case Ubuntu, then `qemu-system-arm` can execute your PI's `/bin/sh` (compiled for arm).
```
chroot /Volumes/rootfs/
```
In this case, what `chroot` does is allow you to emulate the Pi's shell (`/bin/sh`) using `qemu-system-arm` escapsulated in the rootfs filesystem while preventing interaction with the host filesystem.

To change the password of the root user (and any other user) run the following in your `chroot`:
```
passwd root
```


