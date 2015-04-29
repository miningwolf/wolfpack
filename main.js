/*
 * Example WolfPack for WolfScript 
 *
 * Plugin for Minecraft (Spigot / Bukkit / CraftBukkit)
 * to set the color of player chat
 *
 * Copyright (c) 2015 Mining Wolf
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var util = require('util');
var echo = require('./lib/echo.js');

exports.onload = function (){ 

    var store = {players: {}};

    var colors = ['black', 'blue', 'darkgreen', 'darkaqua', 'darkred',
                  'purple', 'gold', 'gray', 'darkgray', 'indigo',
                  'brightgreen', 'aqua', 'red', 'pink',
                  'yellow', 'white'];

    var colorCodes = {};
    for (var i =0;i < colors.length;i++) 
      colorCodes[colors[i]] = i.toString(16);

    this.events.on("player.PlayerChat", function(evt) {
      var player = evt.player;
      var playerChatColor = store.players[ player.name ];
      if ( playerChatColor ) {
        evt.message = '§' + colorCodes[ playerChatColor ] + evt.message;
      }
    });

    var cmd = {"name" : "chatcolor"
     , "aliases" : ["color"]
     , "description" : "set the color for player chat"
     , "toolTip" : "/chatcolor color"};

     cmd.execute = function(sender, command, label, args) {

      if (args.length == 1)
      {
       var color = args[0];
          if (colorCodes[color]){
             store.players[sender.name] = color;
             echo(sender, 'color set to ' + color);
          }else{
            echo(sender, color + ' is not a valid color');
            echo(sender, 'valid colors: ' + colors.join(', '));
          }

          return true;
        };

        return false;
     };

     cmd.tabComplete = function(sender, command, alias, args) {
          return colors;
     };

     this.registerCommand(cmd);
}

exports.enable = function (){ }; 
 
exports.disable = function (){ };
