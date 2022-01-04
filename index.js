//CONEXÃO COM BOT
const { Telegraf } = require('telegraf');
Bot_token = '2093462492:AAFrmS2h8RjOyTKNnE685JW98uju5Mwl1rk'
const bot = new Telegraf(Bot_token);



// COMANDOS
bot.start((ctx) =>{
    ctx.reply('Olá, comando de teste');
});


bot.launch();