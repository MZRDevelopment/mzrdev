const { Client, GatewayIntentBits, Partials, REST, Routes } = require("discord.js");
const { token, botID } = require('./config.json');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations, 
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.MessageContent,
],
  partials: [
    Partials.User,
    Partials.Message,
    Partials.GuildMember,
    Partials.ThreadMember,
],
});

const commands = [
  {
    name: 'test',
    description: 'Test Slash Komutu',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    await rest.put(Routes.applicationCommands(botID), { body: commands });

    console.log('Komutlar Yüklendi!');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log("Bot Aktif!");
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'test') {
    await interaction.reply(`Bu bir test mesajıdır.`);
  }
});

client.login(token); // YouTube: MZR Development