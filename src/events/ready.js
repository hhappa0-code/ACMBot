const { Events } = require('discord.js');

module.exports = {
    type: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log('Ready! Logged in as', client.user.tag);
    },
};
