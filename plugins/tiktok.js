const config = require('../config')
const fg = require('api-dylux');
const l = console.log
const { cmd, commands } = require('../command')
const { tiktokdl } = require('@bochilteam/scraper-tiktok')
var videotime = 60000 // 1000 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "tiktok",
    alias: ["tk","tiktokdl","tt"],
    use: '.tiktok [ Link ]',
    react: "🎉",
    desc: "To Download tiktok videos",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply("❔ *Please enter tiktok link to download* ")
const data = await tiktokdl(q)
console.log(data)
const  led =`*𝗗𝗔𝗥𝗞 𝗦𝗛𝗔𝗗𝗢𝗪 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*  📥

`
} catch (e) {
  reply('*Error Detected !* ```ERROR CODE - 014```\n\n' + e)
}
})