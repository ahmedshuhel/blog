---
title: Telnet a Network POS Printer
date: 2018-02-24 14:25:27
comments: true
tags:
  - POS
  - Network
  - Printer
  - ESC
categories:
  - How To
---

Telnet is a useful program that can be used to test network POS printers. On Windows 10/Server 2014 however, it does not come pre-installed like the previous versions of windows.

We can install telnet using "Programs/Turn Windows features on or off" in Control Panel. Follow [this article](https://www.technipages.com/windows-10-enable-telnet) for more details around the installation process.

When connected to a network, most POS printers run on port `9100`. Here's the command to connect to the printer using telnet. `telnet <host_name_or_ip> <port>`. We will be using IP for example.

```shell
telnet 192.168.1.12 9100

```

We will be presented with a terminal screen with a cursor. Type anything and press "Enter" and the printer should be responding with printing the command. Terminal screen may appear blank even though you are typing in it. That's normal as long as the printer is responding to the key stroke.
