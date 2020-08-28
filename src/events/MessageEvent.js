// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === `${client.user.username.toLowerCase()}?` || (message.channel.type !== `dm` && message.content.toLowerCase() === `${message.guild.members.cache.get(client.user.id).displayName.toLowerCase()}?`)) { return message.channel.send(`**All Systems Operational, running prefix \`${client.prefix}\`**`); }; // Quick Status checker, just type {BOT_NAME}?
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}