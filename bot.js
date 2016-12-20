var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "bing, "
var admins = ['128942674722947072', '259044020926414848'];

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
	else
if (message.content.startsWith(prefix + 'eval') && admins.includes(message.author.id)) {
   evaluateString(message);
   return;
}//IN the client.on(message)
});
function evaluateString(message){
  if (!admins.includes(message.author.id)) {
  console.log(" WARN ") + (" Somehow an unauthorized user got into eval!");
  return;
  }
  let result = 'u13g5u35y7jg73';
  console.log("Running eval");
  try {
  result = eval(message.content.substring(6));
  } catch (e) {
  console.log(" ERROR ") + (" " + e);
  message.channel.sendMessage("```diff\n- " + e + "```");
  }
  if (result !== 'u13g5u35y7jg73') {
  message.channel.sendMessage( "**Output:**```js\n" + result + "```");
  console.log("Output: " + result);
 }
}
});

bot.on('ready', () => {
  console.log('Activated!');
  bot.user.setGame("With a lot of buttons")
  bot.user.setAvatar('./pp.png')
  console.log(bot.guilds.map(g => g.name))
});

bot.login(config.token)
