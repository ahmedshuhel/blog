---
title: Forwarding port 80 via SSH
cover: "https://unsplash.it/1280/900/?random?SSH"
author: "ahmedshuhel"
date: 2018-03-07 13:27:22
tags:
  - SSH
  - Port Forwarding
  - Port 80
categories:
  - Self Help
  - Micro Post
---


Forwarding port 80 via SSH requires `sudo` privileges.

```bash
sudo ssh username@163.xx.xxx.xxx -L 80:localhost:80
```

But, if your server is setup to accept identity file only, things may not work as expected with the above command. This is because you may not have the identity file setup for the `root` user. Fortunately, `ssh` offers `-i` option to specify the file explicitly.


```bash
sudo ssh -i ~/.ssh/id_rsa username@163.xx.xxx.xxx -L 80:localhost:80
```
