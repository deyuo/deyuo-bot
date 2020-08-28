// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super('channelCreate');
  }
  
  async run(client, channel) {
    if (channel.type === `dm`) return;
    if (channel.guild.id === client.id.jonin.home) { await update(client.id.jonin); };

    async function update(bot) {
        let home = client.guilds.cache.get(bot.home);
        if (bot.channels) { await home.channels.cache.get(bot.channels).setName(`Channel Count: ${home.channels.cache.size}`); };
    }
  }
}