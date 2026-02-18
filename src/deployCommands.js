const { REST } = require('@discordjs/rest')
const { Routes } = require('discord.js');
const { clientId, token } = require('../config.json');
const fs = require('fs');
const path = require('path');

const commands = [];

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(path.join(commandsPath, file));

	if ('data' in command && 'execute' in command) {
		commands.push(command.data.toJSON());
	}
}

const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`Started reloading ${commands.length} application (/) commands.`);
		
        const data = await rest.put(Routes.applicationCommands(clientId), { body: commands });
		
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
        console.warn(error);
	}
})();
