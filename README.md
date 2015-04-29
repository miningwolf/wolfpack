# WolfPack by Mining Wolf for WolfScript

##### WolfPack is a set of core language features for WolfScript

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/miningwolf/wolfscript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


### About

This repository contains core features to make programming in WolfScript really productive.

### Getting started

Place `wolfscript.jar` in the `/pluginlangs` directory of the CanaryMod server. 

Edit `server.cfg` to include `plugin-dev-mode=true` (to allow loading of plugins from directories, unless you want to zip or jar your WolfScript plugins).

Create a new subdirectory `wolfpack` of `/plugins` with the contents of this repository
 
Run the server from the root of the canarymod server directory (contains canarymod.jar, the plugins, and pluginlangs folders)
 
     java -cp "canarymod.jar":"pluginlangs/wolfscript.jar" net.canarymod.Main


### License

Open-sourced under Apache 2.0 license.


### Disclaimers and Relationship to Other Work

This is an early development creation intended for private alpha testing.  

Any source code from the Minecraft Server or the CanaryMod Server is not owned by Mining Wolf or its contributors and is not covered by above license.

Usage of source code from the Minecraft Server is subject to the Minecraft End User License Agreement as set forth by Mojang AB.

"Minecraft" is a trademark of Notch Development AB
"CanaryMod" name is used under license from FallenMoonNetwork.

This site is a highly modified fork of ScriptCraft by Walter Higgins and the ideas contained here are highly inspired by that excellent work.  We have re-written and re-factored the code base to 

* Leverage Node.js runtime to ensure that programming skills learned with WolfScript are directly applicable to writing other production applications
* Runs as a language addition under CanaryMod instead of as a user plugin.  This allows the end user to write plugins in javascript and load on the server in the same way they might java, scala, lua or clojure plugins
* Unbundles all the sample and utility code from the language plugin, and relies on NPM to manage package dependencies
