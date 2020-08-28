const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  
  async run(client) {
    let time = new Date().getTime();
    client.src.startup(client, time);
  }
}