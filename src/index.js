const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
	]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(path.join(commandsPath, file));
	
    if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(path.join(eventsPath, file));

	if (event.once) {
		client.once(event.type, (...args) => event.execute(...args));
	} else {
		client.on(event.type, (...args) => event.execute(...args));
	}
}

client.login(token);
