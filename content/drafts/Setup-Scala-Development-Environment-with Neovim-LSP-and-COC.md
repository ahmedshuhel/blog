Steps:

- Scala requires Java 8 JDK (also known as 1.8) to be Installed. Install [from here](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- Install SBT `brew install sbt@1`
  - What is SBT?


- Add `derekwyatt/vim-scala` for syntax highlighting and sbt source file

Next, build a metals-vim binary for the latest Metals release using the Coursier command-line interface.

```shell
curl -L -o coursier https://git.io/coursier
chmod +x coursier
./coursier bootstrap \
  --java-opt -Xss4m \
  --java-opt -Xms100m \
  --java-opt -Dmetals.client=coc.nvim \
  org.scalameta:metals_2.12:0.7.0 \
  -r bintray:scalacenter/releases \
  -r sonatype:snapshots \
  -o /usr/local/bin/metals-vim -f

```

Make sure the generated metals-vim binary is available on your $PATH.

Start a project with sbt new

```
sbt new scala/hello-world.g8
```

cd into `hello-world-template`


Importing a build
The first time you open Metals in a new workspace it prompts you to import the build. Click "Import build" to start the installation step.

[scala-import-build.png]


```bash
➜  hello-world-template tail -f .metals/metals.log
Downloading https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom.sha1
Downloading https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom
Downloaded https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom.sha1
Downloaded https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/perfolation-macros_2.12-1.0.2.pom
Downloaded https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/perfolation-macros_2.12-1.0.2.pom.sha1
Downloaded https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom
Downloading https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/
Downloading https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/
Downloaded https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/
Downloaded https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/
```
> It took 15 minutes for me to complete.

Once completed you should see

```
➜  hello-world-template tail -f .metals/metals.log
Downloading https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom.sha1
Downloading https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom
Downloaded https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom.sha1
Downloaded https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/perfolation-macros_2.12-1.0.2.pom
Downloaded https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/perfolation-macros_2.12-1.0.2.pom.sha1
Downloaded https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/config-1.2.0.pom
Downloading https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/
Downloading https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/
Downloaded https://repo1.maven.org/maven2/com/outr/perfolation-macros_2.12/1.0.2/
Downloaded https://repo1.maven.org/maven2/com/typesafe/config/1.2.0/
The server is listening for incoming connections at local:///var/folders/qr/81llrsn92v99479qnwmbgzq40000gp/T/bsp893694693305760194/-s101vq0dcwb2.socket...
Accepted incoming BSP client connection at local:///var/folders/qr/81llrsn92v99479qnwmbgzq40000gp/T/bsp893694693305760194/-s101vq0dcwb2.socket
INFO  tracing is disabled for protocol BSP, to enable tracing of incoming and outgoing JSON messages create an empty file at /Users/ahmedshuhel/Library/Caches/org.scalameta.metals/bsp.trace.json
request received: build/initialize
INFO  time: connected to build server in 1m40s
BSP initialization handshake complete.
INFO  time: imported build in 0.15s
INFO  time: indexed workspace in 3.33s
WARN  no build target: /Users/ahmedshuhel/Workspace/scala-demo/hello-world-template/build.sbt
```

# ~/.gitignore
.metals/
.bloop/
