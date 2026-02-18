const { Events } = require('discord.js');
const { updateStatChannels } = require('../utils/statChannelUpdater');

module.exports = {
    type: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log('[Bot]: Ready! Logged in as', client.user.tag);

        updateStatChannels(client);

        setInterval(updateStatChannels, 600000, client);
    },
};
