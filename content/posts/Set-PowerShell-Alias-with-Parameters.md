---
title: Create PowerShell Alias with Parameters 
cover: "https://unsplash.it/1280/900/?random?powershell"
author: "ahmedshuhel"
date: 2019-08-12 13:54:00
tags:
 - Shell
 - PowerShell
 - Alias
 - Parameter
 - Option
categories:
 - Tutorial
 - Self Help
 - Micro Post
---


I wanted to create an `ls` alias that takes a few parameters by default. But, that is not possible in PowerShell. To get around that, however, you can create a function that runs the command with the parameter and then create an `alias` for that function.

Declare a `function` as follows:

```powershell
Function Show-AllFiles {
 Get-ChilldItem -Force
}
```

Create the alias

```powershell
Set-Alias ls Show-AllFiles
```

If you want reusability across your PowerShell sessions, add this in your `$PROFILE` file. To open `Microsoft.PowerShell_profile.ps1` in Notepad invoke the following command in your shell.

```powershell
notepad $PROFILE

```

> You can invoke `code $PROFILE` if you have VS Code installed on your machine. Use [PowerShell Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) in VS Code to get better code completion and syntax highlighting.

Once the file is open in Notepad/VS Code, add the following lines:

```powershell{numberLines: true}
Function Show-AllFiles { Get-ChilldItem -Force }
Set-Alias ls Show-AllFiles
Set-Alias ll Show-AllFiles
```

Aliases to take effect, `source` your newly edited file:

```powershell
. $profile
```
> You can also restart your console to get the same effect. You might have to `Set-ExecutionPolicy` to get the `$profile` working.
