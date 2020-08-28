// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelUpdate
const BaseEvent = require('../utils/structures/BaseEvent');
  let logger = false;
module.exports = class ChannelUpdateEvent extends BaseEvent {
  constructor() {
    super('channelUpdate');
  }
  
  async run(client, oldChannel, newChannel) {
    if (logger) return;
    if (newChannel.guild.id !== `641709561430016002`) return;
    if (oldChannel.rawPosition !== newChannel.rawPosition) { client.channels.cache.get(`642984490364436510`).send(client.embed().setDescription(`**Old Category:** \`${oldChannel.parent.name}\`\n**New Category:** \`${newChannel.parent.name}\`\n**Channel:** ${newChannel.toString()}\n**Old Position:** ${oldChannel.rawPosition}\n**New Position:** ${newChannel.rawPosition}`)); };
    logger = true;
    setTimeout(() => { logger = false; }, 3000);
  }
}