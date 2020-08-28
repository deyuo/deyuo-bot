let client;

module.exports = {
    startup(input, time) {
        client = input;
        client.src = this;
        client.util = require(`../utils/util.js`);
        client.comment = client.src.comment;
        client.embed = client.src.embed;
        client.id = client.util.id;
        client.log = client.src.log;
        let cron = require(`cron`),
          remind = new cron.CronJob(`00 00 8,20 * * *`, client.src.vote, null, true, `America/Chicago`); 
          remind.start(); 
        console.log(`[PROGRM]: [${((new Date().getTime() - time) / 1000).toFixed(2)}s] ${client.user.tag} Connection Successful!`.yellow);
    },
    log(input) { console.log(input.content) },
    clean(input) { input.replace(/{B}/g, client.user.username); input.replace(/{P}/g, client.prefix); return input; },
    embed() { let Discord = require(`discord.js`); return new Discord.MessageEmbed().setFooter(`Provided by: ${client.user.tag}`, client.user.avatarURL({ format: "png", dynamic: true, size: 2048 })).setColor(client.id.main).setTimestamp(); },
    loading() { return client.embed().setTitle(`Loading...`); },
    code(input, type) { return `\`\`\`${type}\n${input}\n\`\`\``; },
    vote() { client.commands.get(`vote`).run(client); }
}