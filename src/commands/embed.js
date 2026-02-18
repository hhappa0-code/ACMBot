const { EmbedBuilder, MessageFlags, PermissionsBitField, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Send an embed into a channel')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageGuild)
        .addIntegerOption(option => option
            .setName('embed')
            .setDescription('Which embed to send into the channel')
            .setRequired(true)
            .addChoices({ name: 'instructions', value: 1 },
                        { name: 'links', value: 2 },
                        { name: 'verification', value: 3 },
                        { name: 'rules', value: 4 },
                        { name: 'hierarchy', value: 5 },
                        { name: 'applications', value: 6 },
                        { name: 'toinfo', value: 7 },
                        { name: 'hrinfo', value: 8 },
                        { name: 'hcinfo', value: 9 })),

    async execute(interaction) {
        const channel = await interaction.channel;
        const embed = await interaction.options.getInteger('embed');

        switch (embed) {
            case 1:
                await channel.send({ embeds: instructionsChannelEmbed() });
                
                break;
            case 2:
                await channel.send({ embeds: linksChannelEmbed() });
                
                break;
            case 3:
                await channel.send({ embeds: verificationChannelEmbed() });
                
                break;
            case 4:
                await channel.send({ embeds: rulesChannelEmbed() });
                
                break;
            case 5:
                await channel.send({ embeds: hierarchyChannelEmbed() });
                
                break;
            case 6:
                await channel.send({ embeds: applicationsChannelEmbed() });
                
                break;
            case 7:
                await channel.send({ embeds: toInfoEmbed() });
                
                break;
            case 8:
                await channel.send({ embeds: hrInfoEmbed() });
                
                break;
            case 9:
                await channel.send({ embeds: hcInfoEmbed() });
                
                break;
            default:
                return await interaction.reply({ content: 'Not a valid embed!', flags: MessageFlags.Ephemeral });
        }

        await interaction.reply({ content: 'Sent!', flags: MessageFlags.Ephemeral });
    },
};

function instructionsChannelEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/bhI3kL6.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/QcQAFob.png')
            .setDescription('Welcome to Aerial Combat Missions! Before you can access the Discord server, please link your Roblox account with your Discord account. To do that, follow the steps below:\n\n**First Steps:**\n> After joining, you have access to multiple different channels. In the channel <#1465720656388690076>, you will find a few different links. Please join all of them to continue.\n\n**Verification:**\n> After you joined all the groups and servers in the first step, please head over to <#1465710897715740745>. In the channel, click on ***Update my roles*** with the <@298796807323123712> bot. If you followed all the steps correctly, you are now verified.\n\n**Assistance:**\n> If there are any issues, ping the <@&1465719077032165590> role in <#1465710984009351342>.'),
    ];
}

function linksChannelEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/IJxMeO7.jpeg'),
        new EmbedBuilder()
        .setColor(2859454)
        .setImage('https://i.imgur.com/QcQAFob.png')
        .setDescription('Below you will find a list of links. Please join all of them to gain access to the server:\n\n**Official SEA Military Group:**\n> https://www.roblox.com/communities/2648601/SEA-Military\n\n**Official Aerial Combat Missions Group:**\n> https://www.roblox.com/communities/79507695/SEA-Aerial-Combat-Missions\n\n**Official SEA Military Discord Server:**\n> https://discord.gg/seamilitary'),
    ];
}

function verificationChannelEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/AqwTdAG.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/QcQAFob.png')
            .setDescription('Welcome to the verification channel. To verify, click the ***Update my roles*** button with the <@298796807323123712> bot below.\n\n> Make sure that you followed all steps in <#1465710828497141800> before verifying.'),
    ];
}

function rulesChannelEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/JpCvP1a.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/QcQAFob.png')
            .setDescription('**SEA Military Rules:**\n> Follow all SEA Military Rules: https://shorturl.at/vuIJH\n\n**Respect:**\n> Be friendly and respectful to other members. Racism, sexism, harassment, and hatred will not be tolerated.\n\n**Channel Usage:**\n> Use channels only as intended.\n\n**Mentions:**\n> Refrain from mentioning others without a reason.'),
    ];
}

function hierarchyChannelEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/i5rgGBD.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/QcQAFob.png')
            .setDescription('## Low Ranks\n<@&1460378434969665770> The role you get upon joining. Attend events to rank up!\n\n<@&1460378432654282966> Attend one event as <@&1460378434969665770>\n\n<@&1460378422411792497> Attend one event as <@&1460378432654282966>\n\n<@&1460378412198662217> Attend one event as <@&1460378422411792497>\n\n<@&1460378410386718823> Attend one event as <@&1460378412198662217>\n\n## Middle Ranks\n<@&1460378407693975729> Attend one event as <@&1460378410386718823>\n\n<@&1460378405408346365> Attend one event as <@&1460378407693975729>\n\n<@&1460378402673655849> Attend one event as <@&1460378405408346365>\n\n<@&1460378400358141955> Attend two events or one rally as <@&1460378402673655849>\n\n<@&1460378396608561439> Attend two events or one rally as <@&1460378400358141955>\n\n## High Ranks\n<@&1460378393940988066> Apply for officer in <#1467473654794158287> and get accepted.\n\n<@&1460378391160029344> Pass the officer training.\n\n<@&1460378389067206847> Gain 10 XP Points.\n\n<@&1460378385741250584> Gain 25 XP Points.\n\n<@&1460378383778320404> Gain 50 XP Points.\n\n<@&1460378381605535890> Gain 80 XP Points.\n\n<@&1460378379176906812> Gain 110 XP Points.\n\n## High Commands\n<@&1460378376798998589> Get selected by a Supreme Commands Internal Vote. They lead the recruiting department.\n\n<@&1460378373313269780> Get selected by a Supreme Commands Internal Vote. They lead the hosting department.\n\n## Special Roles\n<@&1472341928178876569> Boost the server to get this role. All perks are listed in <#1472343113602437272>.\n\n<@&1464700385531920516> Given only to a few selected individuals.\n\n<@&1464700642533577008> Given only to official SEA Staff members.\n\n## Supreme Commands\n<@&1460378369383469223> Get selected by a Supreme Commands Internal Vote.\n\n<@&1460378367374393344> Get selected by a Supreme Commands Internal Vote.\n\n<@&1460378365084176617> Get selected by the Commandant or Vice Commandant.\n\n<@&1460378362672451818> Get selected by the Commandant or Vice Commandant.\n\n<@&1460378359417536794> Get selected by the Commandant.\n\n<@&1460378356657684561> Only obtainable through Ownership Transfer.'),
    ];
}

function applicationsChannelEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/HkiOtWB.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/QcQAFob.png')
            .setDescription('Welcome to the application channel. To apply, pick the department you want to apply for by clicking one of the buttons below.'),
    ];
}

function hcInfoEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/7Z9uFe9.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setDescription('As a high command, you lead your respective department. You should ensure its activity, remind members to do their quota, and bring new ideas to the department.\n\nTo check in with all your officers, you can find the officer management sheet here:\nhttps://docs.google.com/spreadsheets/d/1fl2iT2Qv89_HCfXltrMRTlS3Ba4GUKQ0m_NikaOUYTI/view')
            .setImage('https://i.imgur.com/QcQAFob.png'),
    ];
}

function hrInfoEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/MVO1QYf.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setDescription('### XP Points\nYou can always view your XP Points here:\nhttps://docs.google.com/spreadsheets/d/1FGHzqo-K9GA8tIPmnGDWRcNS0SSUKBBzYrxO-2jbhkQ/view\n### Quota\n- Hosting Department: 1 XP Point per week\n- Recruiting Department: 1 XP Point per week\n- Hosting & Recruiting Department: 1 XP Point in the Hosting and 1 XP Point in the Recruiting Department per week\n\n**Quota checks are on Sundays!**\n### Logging\nTo log events/recruits, head into either <#1467990959899017336> or <#1467990920824750263> and follow the pinned format.\n### Ranking up\n**HR Ranks:**\n<@&1460378393940988066> - Pass officer application.\n<@&1460378391160029344> - Pass officer training.\n<@&1460378389067206847> - Gain 10 XP Points.\n<@&1460378385741250584>  - Gain 25 XP Points.\n<@&1460378383778320404> - Gain 50 XP Points.\n<@&1460378381605535890> - Gain 80 XP Points.\n<@&1460378379176906812> - Gain 110 XP Points.\n**HC Ranks:**\n<@&1460378373313269780> - Get selected by a Supreme Commands Internal Vote.\n<@&1460378376798998589> - Get selected by a Supreme Commands Internal Vote.\n### HR Slots\nOnce we become official, HR Slots will be chosen by the Commandant and Vice Commandant.')
            .setImage('https://i.imgur.com/QcQAFob.png'),
    ];
}

function toInfoEmbed() {
    return [
        new EmbedBuilder()
            .setColor(2859454)
            .setImage('https://i.imgur.com/GwXlUsw.jpeg'),
        new EmbedBuilder()
            .setColor(2859454)
            .setDescription('Welcome, new officer. With the information below, you can get started with hosting/recruiting.\n\n### Hosting Information\n- Before you host your first event, follow the steps in the [YouTube video](https://youtu.be/Q9UwQkVvRmc) (clickable) to see how to turn on your joins for everyone.\n- Make sure to follow the format below when announcing an event.\n- Everybody must be in the default uniform (SEA Uniform).\n- Being in a VC is highly recommended, though not required. If you do not have a microphone, use the <@513423712582762502>s /join command to make it join your VC.\n- Take a screenshot when the event starts. If there are late attendees, retake the screenshot with all of them.\n- Now proceed with your event. For patrols, spawn a ship, for trainings, load a map, and for game nights, go into the game.\n- If you host a training, please get used to the important commands before hosting your first one.\n- When your event has ended, you need to log it. For that, you will find information in <#1468246640266842246>.\n### Recruiting Information\n- To recruit someone, come up to them and ask them if they would like to join our division.\n- If they do want to join, tell them to join our Roblox group **[SEA] Aerial Combat Missions**.\n- Also, ask them to join our Discord server if they have Discord. Unfortunately, Roblox censors the word \'Discord\'. Instead, ask them to do what the group announcement says or use the words \'comms server\', \'communications server\', or \'dizzy\'.\n- Once they are in, take a screenshot of them in the group like [this](https://imgur.com/FAM4L1m) (clickable).\n- When the recruit has joined the group (and Discord if they have it), you need to log the recruit. For that, you will find information in <#1468246640266842246>.\n### Passing Trainee Officer Stage\nTo pass the trainee officer stage, you need to host at least 2 events or recruit 2 members. After that, you will get promoted to <@&1460378391160029344>.\n### Next Step\nAfter reading everything above, read through <#1468246640266842246> for information about quota, logging, and more.')
            .setImage('https://i.imgur.com/QcQAFob.png'),
    ];
}
