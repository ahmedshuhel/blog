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

