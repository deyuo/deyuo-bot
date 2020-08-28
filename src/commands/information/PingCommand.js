const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'information', []);
  }

  async run(client, message, args) {
    let word;
    switch (message.content.split(` `)[0].slice(client.prefix.length).toLowerCase()) {
      case `ding`: word = `Dong!`; break;
      case `beep`: word = `Boop!`; break;
      default: word = `Pong!` 
    }
    let loading = await message.channel.send(client.src.loading()), field = client.src.code(word);
    field += client.src.code(`Latency is ${loading.createdTimestamp - message.createdTimestamp}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms\nServer Latency is ${message.channel.type === `dm` ? `not avaliable in DMs` : `${Math.round(message.guild.shard.ping)}ms`}`, `js`);
    setTimeout(async () => { await loading.edit(client.src.embed().setDescription(field)) }, 1000);
    return client.src.log(message);
  }
} 