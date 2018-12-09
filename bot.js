const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTA5Nzk0NjMyMDA4MzM1Mzgw.Du8Brg.CiMckyzRQBF8RL1JCZYGPItd1RY);//where BOT_TOKEN is the token of our bot
