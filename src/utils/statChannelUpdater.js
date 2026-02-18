const { discordBotCount, discordStatChannelId, groupBotCount, groupId, guildId, robloxStatChannelId } = require('../../config.json');

async function updateStatChannels(client) {
    try {
        console.log('[Stats]: Starting update...');

        const guild = client.guilds.cache.get(guildId);
        if (!guild) return;

        const guildMemberCount = guild.memberCount - discordBotCount;
        const robloxCountPre = await getRobloxGroupMemberCount();
        const robloxMemberCount = robloxCountPre === null ? 'N/A' : robloxCountPre - groupBotCount;
        const discordChannel = guild.channels.cache.get(discordStatChannelId);
        const robloxChannel = guild.channels.cache.get(robloxStatChannelId);
        const newDiscord = `Member Count: ${guildMemberCount}`;
        const newRoblox = `Group Members: ${robloxMemberCount}`;

        const promises = [];

        if (discordChannel.name !== newDiscord) {
            console.log("[Stats]: Updating discord...");

            promises.push(discordChannel.setName(newDiscord));
        } else {
            console.log("[Stats]: Skipped discord.");
        }

        if (robloxChannel.name !== newRoblox) {
            console.log("[Stats]: Updating roblox...");
            
            promises.push(robloxChannel.setName(newRoblox));
        } else {
            console.log("[Stats]: Skipped roblox.");
        }

        await Promise.all(promises);

        console.log('[Stats]: Successfully updated.');
    } catch (error) {
        console.warn("[Stats]: An error occurred:");
        console.warn(error);
    }
}

async function getRobloxGroupMemberCount() {
    const response = await fetch(`https://groups.roblox.com/v1/groups/${groupId}`);
    if (!response.ok) {
        console.warn("[Stats]: Could not fetch group members.");

        return null;
    }
    
    const data = await response.json();
    
    return data.memberCount;
}

module.exports = {
    updateStatChannels,
};
