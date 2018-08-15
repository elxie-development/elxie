//Configuration:
const http = require('http');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.get("/", function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

                      /*DEV MESSAGE BOARD*/
/**********************************************************************
Make sure that after un-collapsing the code, you recollapse it. 
Also make sure to debug...
Often. 
**********************************************************************/
if(true){
app.listen(process.env.PORT);
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//Define: 
  const/*ant Vaiable Definitions:*/
Discord = require(`discord.js`),
{
  Client,
    Util
} = require('discord.js'),
favsong = ["https://www.youtube.com/watch?v=L-aN4Y84SYk",
    "https://www.youtube.com/watch?v=ODV-_VPTv1I",
    "https://www.youtube.com/watch?v=hMWFOyb-abs",
    "https://www.youtube.com/watch?v=b7FcWFNgS64",
    "https://www.youtube.com/watch?v=x3lP-7Sg4Uc",
    "https://www.youtube.com/watch?v=LpNMIzXTISY",
    "https://www.youtube.com/watch?v=TkDU8P9BVhU"
],
YouTube = require('simple-youtube-api'),
ytdl = require('ytdl-core'),
youtube = new YouTube("AIzaSyB2NjfqpDEeuRwluBSdkAA9XpIZG6KfwK0"),
//Yes I know. If you are on glitch.com there is an error here. ITS SO DUMB
queue = new Map(),
midi = "338192747754160138",
cur = "Botpoints:sparkles:",
moncol = "28894c",
daily = require("./daily.json"),
bots = require("./bots.json"),
chalk = require('chalk'),
fs = require("fs"),
client = new Discord.Client();
  /*Regular*/ var/*iable Definitions:*/
config = require("./config.json"),
economy = require('discord-eco');

//Bot Config:
if (true) {
client.on("ready", () => {
    client.user.setActivity(`Discord| Do e.help`);
  console.log("Status: Ready");
});
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'hello');
    if (!channel) return;
    var embed = new Discord.RichEmbed().setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL).addField("Welcome To", member.guild.name).setFooter("User Joined").setColor("57d84b").setTimestamp()
    channel.send(embed)
    member.addRole(client.guilds.get(member.guild.id).roles.find('name', 'Member'))
});
  client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
  client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

  
  client.on('guildCreate', guild => {

    guild.owner.send("Thank You for adding me  Type `e.help` in your server to see my commands! ")

});
  client.on("guildCreate", async guild => {
    const logsServerJoin = client.channels.get('442830419944275978');



    console.log(`The bot just joined to ${guild.name}, Owned by ${guild.owner.user.tag}`);

    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(`I was invited to join ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("New Server", "Awesome!")
        .addField(":white_small_square: Owner", guild.owner)
        .addField(":white_small_square: ID", guild.id, true)
        .addField(":white_small_square: Users", guild.memberCount, true)
        .addField(":white_small_square: Channels", guild.channels.size, true)

    logsServerJoin.send(embed);

});
  client.on("guildDelete", guild => {
    const logsServerLeave = client.channels.get('442830419944275978');
    console.log(`The bot has been left ${guild.name}, Owned by ${guild.owner.user.tag}`);
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(` I left ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField(":door: :( I was delet from server.")
        .addField(":white_small_square: Owner", guild.owner)
        .addField(":white_small_square: ID", guild.id, true)
        .addField(":white_small_square: Users", guild.memberCount, true)

    logsServerLeave.send(embed);
});
  client.on("guildCreate", async guild => {
    const invite = await guild.channels.first().createInvite({
        maxAge: 0
    });
    console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
    client.channels.get('442830419944275978').send(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
});
  client.on('guildMemberAdd', member => {
     if (member.guild.id !== '442145124282269697') return;
    member.guild.channels.get('449746944084934668').setName(`Total Users: ${member.guild.memberCount}`);
       let humans = member.guild.members.filter(m => !m.user.bot).size;
  member.guild.channels.get('449747059206258698').setName(`Member Count: ${humans}`)
   let bots = member.guild.members.filter(m => m.user.bot).size;
   member.guild.channels.get('449747232221298691').setName(`Bot Count: ${bots}`)
});

client.on('guildMemberRemove', member => {
   if (member.guild.id !== '442145124282269697') return;
    member.guild.channels.get('449746944084934668').setName(`Total Users: ${member.guild.memberCount}`);
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('449747059206258698').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('449747232221298691').setName(`Bot Count: ${bots}`)
    
});
}

//Bot Commands:
if (true) {
  //Regular:
  const sechan = client.channels.get("463748644785356801");
  client.on("message", async message => {
    if (message.guild.name === "Discord Bot List") return;
    const sechan = client.channels.get("463748644785356801");   
    if (message.content.length == 0) return;
    var MessageEmbed = new Discord.RichEmbed()
        .setTitle(message.author.username + " " + message.author.id + " " + " sent a message in " + message.guild.name)
        .addField("In channel #" + message.channel.name, message.content)
        .setFooter("e.devsay " + message.channel.id, message.author.displayAvatarURL)
        .setColor("330099")
    if (message.channel.id === sechan.id) {} else {
        sechan.send(MessageEmbed)
    } 
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    if (command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }
        if (command === "inv") {
        if (!message.author.id === "297096161842429963") return;
      if(!args[1] && !args[0]) return;   
      if(args[1]){
        const x = client.guilds.get(args[1])
        if (!x) {
          const GuildList = client.guilds.map(g=>g.name).join('\n');
          const GuildListi = client.guilds.map(g=>g.id).join('\n');
          message.channel.send("Please type `e.inv . [guild.id]`")
          message.channel.send(GuildList);
          message.channel.send(GuildListi);
        }
        const c = x.channels.map(e => e.id.toString()).join("\n");
        message.channel.send("Please Type `e.inv` and one of the following below \n" + c)
        } else {
          var inv = client.channels.get(args[0])
          const invite = await inv.createInvite({
              maxAge: 0
          });
        message.channel.send("https://discord.gg/" + invite.code);
        }
    } 
        if (command === "devsay") {
        if (!message.author.id === "297096161842429963" || "") return;
        const sayMessage = args.slice(1).join(" ");
        message.delete().catch(O_o => {});
        const channel = client.channels.get(args[0]);
        channel.send(sayMessage);
    }
      if (command === "elxie") {
      message.guild.member(message.author.id).addRole(client.guilds.get(message.guild.id).roles.find('name', 'elxie'))
        message.channel.send("You now have the `Elxie` Role ✅");
      }
     if (command === "noelxie") {
      message.guild.member(message.author.id).removeRole(client.guilds.get(message.guild.id).roles.find('name', 'elxie'))
        message.channel.send("You now have the `noElxie` Role ✅");
      }
         if (command === "hidensfw") {
      message.guild.member(message.author.id).addRole(client.guilds.get(message.guild.id).roles.find('name', 'hidensfw'))
        message.channel.send("You no longer can see in #nsfw!");
         }
                if (command === "nsfw") {
      message.guild.member(message.author.id).removeRole(client.guilds.get(message.guild.id).roles.find('name', 'hidensfw'))
        message.channel.send("You can see in #nsfw!");
      }
       
     if (command === "adlog") {
      message.guild.member(message.author.id).addRole(client.guilds.get(message.guild.id).roles.find('name', 'logging access'))
        message.channel.send("You now have access to logs");
     }
    if (command === "avatar") {
  if (!message.author.id === "297096161842429963") return; 
    client.user.setAvatar(args.join(' '))
}
  if (command === "name") {
  if (!message.author.id === "297096161842429963") return; 
    client.user.setUsername(args.join(' '))
}
    if (command === "kick") {
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member) return message.reply("Please mention a valid member of this server");
        if (!member.kickable) return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";
        await member.kick(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    }
    if (command === "ban") {
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a valid member of this server");
        if (!member.bannable) return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";
        await member.ban(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }
    if (command === "mute") {
        if (!message.guild.member(message.author).hasPermission('MUTE_MEMBERS') || !message.author.id === "297096161842429963") {
            message.channel.send(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`');
            return;
        }
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
        }
        const msmute = require('ms');
        let reasonMute = message.content.split(' ').slice(3).join(' ');
        let timeMute = message.content.split(' ')[2];
        let guildMute = message.guild;
        let memberMute = message.guild.member;
        let userMute = message.mentions.users.first();
        let muteRoleMute = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRoleMute) {
            return message.reply('`Please create a role called "Muted"`');
        }
        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to Mute .');
        }
        if (message.author.id === userMute.id) {
            return message.reply('What are you trying to achieve? ');
        }
        if (!timeMute) {
            return message.reply('specify the time for the mute!');
        }
        if (!timeMute.match(/[1-60][s,m,h,d,w]/g)) {
            return message.reply('I need a valid time!');
        }
        if (!reasonMute) {
            return message.reply('You must give me a reason for Mute');
        }
        if (reasonMute.time < 1) {
            return message.reply('TIME?').then(message => message.delete(2000));
        }
        if (reasonMute.length < 1) {
            return message.reply('You must give me a reason for Mute');
        }
        message.guild.member(userMute).addRole(muteRoleMute)
        setTimeout(() => {
            message.guild.member(userMute).removeRole(muteRoleMute)
        }, msmute(timeMute));
        message.guild.channels.filter(textchannel => textchannel.type === 'text').forEach(cnl => {
            cnl.overwritePermissions(muteRoleMute, {
                SEND_MESSAGES: false
            });
        });
        message.reply("This user has been muted.");
        message.channel.send({
            embed: {
                color: 16745560,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: 'Mute',
                    value: `**Muted:**${userMute.username}#${userMute.discriminator}\n**Moderator:** ${message.author.username}\n**Duration:** ${msmute(msmute(timeMute), {long: true})}\n**Reason:** ${reasonMute}`
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL
                }
            }
        });
    }
    if (command === "purge") {
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        const fetched = await message.channel.fetchMessages({
            count: deleteCount
        });
        message.channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
    if (command === "bal") {
      economy.fetchBalance(message.author.id).then((i) => {
            var balembed = new Discord.RichEmbed()
                .addField(message.author.username, `You have **${i.money}** ${cur} in your account.`)
                .setFooter(`Pleogg Bank Inc. ` + message.author.username + ` 's account.`, message.author.displayAvatarURL).setColor(moncol)
            message.channel.send(balembed)
      })   
    }
    if (command === "roll") {
        economy.fetchBalance(message.author.id).then((o) => {
            var randrol = Math.floor(Math.random() * 10) - 6;
            const sayMessageiol = args.join(" ");
            var inted = parseInt(sayMessageiol);
            if (inted !== inted) {
                if (o.money >= inted - 1) {
                    message.channel.send("Please Enter an amount of " + cur + " from 1 -" + o.money);
                } else {
                    message.channel.send("No.")
                }
            } else {
                if (inted >= 0) {
                    if (o.money >= inted - 1) {
                        economy.updateBalance(message.author.id, inted * randrol).then((i) => {
                            if (o.money >= o.money + (inted * randrol)) {
                                var rollembed = new Discord.RichEmbed().setTitle(message.author.username).addField(`You lost ` + inted * randrol + ` ` + cur, `New Balance:** ${i.money}**`).setFooter(`Pleogg Casino Inc. ` + message.author.username + ` 's account.'`, message.author.displayAvatarURL).setColor("ff0000");
                            } else {
                                var rollembed = new Discord.RichEmbed().setTitle(message.author.username).addField(`You got ` + inted * randrol + ` ` + cur, `New Balance:** ${i.money}**`).setFooter(`Pleogg Casino Inc. ` + message.author.username + ` 's account.'`, message.author.displayAvatarURL).setColor(moncol);
                            }
                            message.channel.send(rollembed);
                        })
                    } else {
                        message.channel.send("You do not have enough " + cur + " to gamble this amount!")
                    }
                } else {
                    message.channel.send("Do you want me to roll **your** money into the negatives.")
                }
            }
        })
    }
    if (command === "give") {
        if (message.author.id === midi) {
            var gr = message.mentions.members.first()
            if (!gr) return message.reply("Please provide a vaild Mention.");
            var atg = parseInt(args[1], 10)
            if (!atg) return message.channel.send(message.author.username + " Please provide an amount to give")
            economy.updateBalance(gr.id, atg).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
                var givebed = new Discord.RichEmbed().setTitle(`**Balance:** ${i.money}`).setFooter(`Pleogg Funding Inc. ` + message.mentions.users.first().username + ` 's account was funded.`, message.mentions.users.first().displayAvatarURL).setColor(moncol);
                message.channel.send(givebed)
            })
        }
    }
    if (command === "pay") {
        let member = message.mentions.members.first();
        let amountq = args.slice(1).join(" ");
        var amount = parseInt(amountq);
        if (!member) {
            message.channel.send("Please provide a valid mention!")
        } else {
            economy.fetchBalance(message.author.id).then((o) => {
                if (amount !== amount) {
                    if (o.money >= amount - 1) {
                        message.channel.send("Please Enter an amount of " + cur + " from 1 -" + o.money);
                    } else {
                        message.channel.send("That isn't a valid amount of" + " " + cur)
                    }
                } else {
                    if (amount >= 0) {
                        if (o.money >= amount - 1) {
                            //UpdateBal
                            economy.updateBalance(message.author.id, -amount)
                            economy.updateBalance(member.id, amount)
                            var payembed = new Discord.RichEmbed().setTitle("Paid " + message.mentions.users.first().username + " " + amount + " " + cur).addField(message.author.username + " paid", message.mentions.users.first().username + " " + amount + " " + cur).setDescription("Transaction Made. The funds have been paid.").setFooter(`Pleogg Bank Inc. `).setColor(moncol);
                            message.channel.send(payembed);
                            //UpdateBalend
                        }
                    }
                }
            })
        }
    }
    if (command === "daily") {
        //<getdate>\\
        var fulldate = new Date();
        var date = fulldate.getDate();
        console.log(date)
        //</getdate>\\
        if (!daily[message.author.id]) {
            daily[message.author.id] = {
                last: -7
            };
        }

        if (daily[message.author.id].last == date) return message.channel.send("You have already used up today's daily. Come back tommorow");
        economy.updateBalance(message.author.id, 100)
        message.channel.send("You have recived 100 " + cur)
        daily[message.author.id].last = date

    }
    if (command === "addbot") {
        if (!message.guild.id === "442145124282269697") return;
        
        var channel = client.channels.get("445752369565925377");
      var channel2 = client.channels.get("442465425159356418")
        var name = (args[2]).replace(/-/g, " ")
        var pre = args[1]
        var il = "[Click Me!](https://discordapp.com/oauth2/authorize?client_id=" + args[0] + "&scope=bot&permissions=104324289)"
        var des = args.slice(3).join(" ")
        var BotEmbed = new Discord.RichEmbed()

            .setTitle("NEW BOT")
            .addField("Bot Name", name)
            .addField("Prefix", pre)
            .addField("Invite Link", il)
            .addField("Description", des)
            .setFooter("Sender's ID: " + message.author.id + " Do e.acc " + message.author.id + " to accept")
            .setColor("RANDOM")
        channel.send(BotEmbed)
      channel2.send(BotEmbed)
        if (!bots[message.author.id]) {
            bots[message.author.id] = {
                name: name,
                prefix: pre,
                invitl: il,
                des: des
            }
        }
    }
    if (command === "acc") {
        var m = message.author.id;
        if (!m === "297096161842429963" && !m === "338192747754160138") return message.channel.send("You will be banned");
        if (!bots[args[0]]) return message.channel.send("I cannot find that user");
        var BotEmbed = new Discord.RichEmbed()
            .setTitle("NEW BOT")
            .addField("Bot Name", bots[args[0]].name)
            .addField("Prefix", bots[args[0]].prefix)
            .addField("Invite Link", bots[args[0]].invitl)
            .addField("Description", bots[args[0]].des)
            .setColor("RANDOM")
        message.channel.send(BotEmbed)
    }
    if (command === "acc") {
        let channel = client.channels.get("442465425159356418");
        var AE = new Discord.RichEmbed()
            .setColor('#39c0b0')
            .setTitle("BOT ACCEPTED")
            .addField(args[0], "was accepted")
        channel.send(AE)
    client.user.setActivity(`with ${args[0]}`)
    }
    if (command === "dec") {
        let channel = client.channels.get("442465425159356418");
        var DE = new Discord.RichEmbed()
            .setColor('#fc0d16')
            .setTitle("BOT DENIED")
            .addField(args[0], "was denied")
            .addField("Reason:", args.slice(1).join(" "))
        channel.send(DE)
    }
    if (command === "dm") {
        if (!message.author.id === "297096161842429963" && !message.author.id === "338192747754160138") return;
        var msgi = args.slice(1).join(" ");
        var dmdu = (args[0]).replace(/@/g, "")
        var dmdo = (dmdu).replace(/!/g, "")
        var dmdi = (dmdo).replace(/>/g, "")
        var dmed = (dmdi).replace(/</g, "")

        client.users.get(dmed).send(msgi);
    }
    if (command === "game") { 
      if (!message.author.id === "338192747754160138" && !message.author.id === "297096161842429963") return;
          if (!args[0]) return client.user.setActivity(`Discord| Do e.help`);
      client.user.setActivity(args.join(" "));
    }
      //Help Command:
      if (command === "help") {
      client.user.setActivity(`Discord| Do e.help`);
      var HelpEmbed = new Discord.RichEmbed()
            .setTitle("Commands")
            .addField("Help", "`e.help`")
            .addField("Ping", "`e.ping`")
            .addField("Say", "`e.say [message]`")
            .addField("Balance", "`e.bal`")
            .addField("Roll", "`e.roll [amount]`")
            .addField("Pay", "`e.pay [user] [amount]`")
            .addField("Invite", "[Click Me!](https://discordapp.com/oauth2/authorize?client_id=442789884097462283&scope=bot&permissions=2146958591)")
            .addField("Music", "Music is not listed. We are lazy.")
            .setColor("RANDOM")
            .setFooter("These are the commands hosted on glitch.com")
        message.channel.send(HelpEmbed)


    }

});  

  //Bot Music Commands:
  client.on('message', async msg => {
    if (msg.author.id === midi || msg.author.id === "274198819216949248" || msg.member.roles.some(r => ["DJ", "The Music Meister"].includes(r.name))) {
        if (!msg.content.startsWith(config.prefix)) return undefined;
        const args = msg.content.split(' ');
        const searchString = args.slice(1).join(' ');
        var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const serverQueue = queue.get(msg.guild.id);
        let command = msg.content.toLowerCase().split(' ')[0];
        if (command === 'play') {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 10);
                        let index = 0;
                        msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the 🔎 results ranging from 1-10.
					`);
                        try {
                            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                maxMatches: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.error(err);
                            return msg.channel.send('No or invalid value entered, cancelling video selection.');
                        }
                        const videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        }
        if (command === 'fav') {
            var url = favsong[args[1]] ? favsong[args[1]].replace(/<(.+)>/g, '$1') : '';
            console.log(favsong[args[1]]);
            console.log(" ")
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        msg.channel.send(`__**Song selection:**__\nPlease Choose a song on this list from 1-` + favsong.length + "\nSongs");
                        var songarnum = 1;
                        while (songarnum < favsong.length) {
                            msg.channel.send(songarnum + ". " + favsong[songarnum])
                            songarnum++
                        }
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        } else if (command === 'skip') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
            serverQueue.connection.dispatcher.end('Skip command has been used!');
            return undefined;
        } else if (command === 'stop') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end('Stop command has been used!');
            return undefined;
        } else if (command === 'volume') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            return msg.channel.send(`I set the volume to: **${args[1]}**`);
        } else if (command === 'np') {
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
        } else if (command === 'queue') {
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
        } else if (command === 'pause') {
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return msg.channel.send('⏸ Paused the music for you!');
            }
            return msg.channel.send('There is nothing playing.');
        } else if (command === 'resume') {
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return msg.channel.send('▶ Resumed the music for you!');
            }
            return msg.channel.send('There is nothing playing.');
        }
        return undefined;
    }
});
  async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(chalk.red("MOOOOSIK"));
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
    }
    return undefined;
}
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url)).on('end', reason => {
        if (reason === 'Stream is not generating quickly enough.') console.log(reason);
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    }).on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
    //Mention Handler:
  client.on("message", async message => {
    if (message.author.bot) return undefined;
    if (message.channel.type === 'dm') return;

    if (message.content.toLowerCase() === '<@442789884097462283>') {
        let embed = new Discord.RichEmbed()
            .setTitle("Elxie")
            .addField("Prefix", "`e.`", true)
            .addField("Help", "`e.help`", true)

            .setThumbnail(client.user.displayAvatarURL)
            .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
        message.channel.send(embed);
    }




});
}
//Bot Login:
client.login(process.env.TOKEN);

/* Html by: Skrub| GJÁ |◥θ┴θ◤#3372*/

}
