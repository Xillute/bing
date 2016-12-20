var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "bing, "

bot.on("message", msg => {
	if(msg.author.bot) return;
	if(msg.content.startsWith(prefix + "ping")) {
		msg.channel.sendMessage("Pong!")
	}
else
	if(msg.content.startsWith(prefix)) {
	var args = msg.content.split(" ").slice(1);
	if(args === undefined) {
		msg.channel.sendMessage("You need to enter something to lookup!a")
	}
	msg.channel.sendMessage("https://www.bing.com/search?q=" + args.join("+"))
}
else
	if(msg.content.startsWith(prefix + "kys")) {
	msg.channel.sendMessage("https://suicidepreventionlifeline.org/");
}
});

bot.on('ready', () => {
  console.log('Activated!');
  bot.user.setGame("With a lot of buttons")
  bot.user.setAvatar('./pp.png')
  console.log(bot.guilds.map(g => g.name))
});

bot.login(config.token)
