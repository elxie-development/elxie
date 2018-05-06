const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
    console.log(`Loaded ${files.length} commands.`)
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0){
	console.log("Couldn't find commands.");
	return;
	}


	jsfile.forEach((f, i) =>{
	let props = require(`./commands/${f}`);
	console.log(`${f} loaded!`);
	
	});
    });
    client.on("message", async message => {
        if(message.author.bot) return undefined;
        if(message.channel.type === 'dm') return ;
        
            if(message.content.toLowerCase() === '<@442789884097462283>'){
            let embed = new Discord.RichEmbed()
           .setTitle("Elxie")
           .addField("Prefix", "`e.`", true)
           .addField("Help", "`e.help`", true)
           .addField("wanna add a bot?",'then do `e.addbot`')
           .setThumbnail(client.user.displayAvatarURL)
           .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
            message.channel.send(embed);
            }


let prefix = "e.";
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
if(message.author.bot) return undefined;;
if(!message.content.startsWith(prefix)) return undefined;


try {
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(client, message, args);
if(!commandFile) return message.channel.send("No command found with that name.");
} catch (e) { console.log(e) }



});

    client.on("ready", function() {
        var clientonmessage = `
    ------------------------------------------------------
    > Logging in...
    ------------------------------------------------------
    Logged in as ${client.user.tag}
    Working on ${client.guilds.size} servers!
    ${client.channels.size} channels and ${client.users.size} users cached!
    I am logged in and ready to roll!
    LET'S GO!
    ------------------------------------------------------
    ----------Bot created by Tea Cup#3433-----------
    ------------------------------------------------------
    -----------------Bot's commands logs------------------`
    
        console.log(clientonmessage);
    })
    function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Prefix: e.`, `${client.users.size} Friends`, `Running Commands`, `Try e.help`, `e.help`,
        `Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`, `Ping to API: ${(client.ping).toFixed(0)} Ms`, `https://is.gd/iOakEh` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}


setInterval(setActivity, 1000 * 60 * 2)
client.login("");
