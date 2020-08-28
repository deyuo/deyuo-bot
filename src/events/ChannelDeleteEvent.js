// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelDelete
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ChannelDeleteEvent extends BaseEvent {
  constructor() {
    super('channelDelete');
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
