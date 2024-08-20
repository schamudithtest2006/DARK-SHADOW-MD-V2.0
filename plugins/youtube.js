const config = require('../config')
const fg = require('api-dylux');
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper') 
const { youtubedl } = require('@bochilteam/scraper-youtube')
const fs = require('fs-extra')
const ytdl = require("youtubedl-core")
var videotime = 60000 // 1000 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "song",
    alias: ["play","yt","audio"],
    use: '.song Faded',
    react: "🎶",
    desc: "To Download song From Youtube",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply("❔ *Please enter Query for Search* ")
if ( isUrl(q) ) {
if ( !q.includes('youtu') ) return reply('*Please enter valid Youtube Url* ❗')
 const kanu = await dl.youtubedl(q)
 let niyama = kanu.audio['128kbps'].fileSizeH
let thama =`*𝗗𝗔𝗥𝗞 𝗦𝗛𝗔𝗗𝗢𝗪 𝗬𝗧 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*  📥

*🎶 Title : ${kanu.title}*

🖇️ Url : ${q}

⏲️ Duration : ${kanu.duration} seconds

📁 Audio Size : ${niyama}
`

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🖇️ Watch on Youtube",
                        url: q ,
                        merchant_url: q
                    }),
                },
                
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🎶 Audio",
                        id: prefix + `ytmp3 ${q}`
                    }),
                },
                 {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "📁 Document",
                        id: prefix + `ytdoc ${q}`
                    }),
                }
            ]
            let opts = {
                image: kanu.thumbnail ,
                header: '',
                footer: 'ʀᴇꜱᴜʟᴛꜱ ꜰʀᴏᴍ y2mate.com\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: thama

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)

}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]

const  led =`*𝗗𝗔𝗥𝗞 𝗦𝗛𝗔𝗗𝗢𝗪 𝗬𝗧 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*  📥

> Get instant access to your favorite YouTube videos right on WhatsApp! With this powerful bot, you can download any YouTube video directly to your device in just a few taps
`

const rows = []
           

	
        for (let i of search.videos) {
                rows.push({
                    header: ``,
                    title: `${i.title}`,
                    description: `${i.author.name}`,
                    id: prefix + `song ${i.url}`
                }) 
	    }
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦",
                        url: "https://wa.me/94740952096",
                        merchant_url: "https://wa.me/94740952096"
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'SELECT SONG',
                        sections: [{
                            title: 'Please select a result',
                            highlight_label: '𝙲𝚈𝙱𝙴𝚁-𝚇 𝚈𝚃𝙳𝙻',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: "" ,
                header: '',
                footer: "ʀᴇꜱᴜʟᴛꜱ ꜰʀᴏᴍ youtube.com\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ",
                body: led

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})

cmd({  
    pattern: "ytmp3",
    react: "🔄️",
    alias: ["ytdlmp3"],
    desc: "Youtube MP3 Downloader",
    category: "download",
    use: '.ytmp3 Faded',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, prefix , isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('❗ *Please enter Youtube video Link*')
const dj = await dl.youtubedl(q)
let checkdata = dj.audio['128kbps'].fileSize
if ( checkdata > 102400 ) {
const msgg = `You requested file over Media upload limit.So I can not upload it as Audio file..Please request it as Document type`
let buttons = [   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Download as document",
                        id: prefix + `ytdoc ${q}`
                    }),
                }
            ]
            let opts = {
                image: '',
                header: '❌ *SORRY YOUR REQUEST CAN NOT BE PROCESS*',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: msgg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)


}
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

const msg = await conn.sendMessage(from, { audio: { url : await dj.audio['128kbps'].download() }   , mimetype: 'audio/mpeg', fileName:  `${dj.title}.mp3` }, { quoted: mek })

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
await conn.sendMessage(from, { react: { text: "🎶", key: msg.key }})
}
} catch (e) {
const dd = await fg.yta(q)
console.log(dd)

}
})


cmd({  
    pattern: "ytdoc",
    react: "🔄️",
    alias: ["ytdocmp3"],
    desc: "Youtube Document downloader",
    category: "download",
    use: '.ytdoc Faded',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('❗ *Please enter Youtube video Link*')
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}
const dj = await dl.youtubedl(q)
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

const msg = await conn.sendMessage(from, { document : { url : await dj.audio['128kbps'].download() } , caption: dj.title+ "\n\n*ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ ᴏꜰᴄ*" ,mimetype: 'audio/mp3', fileName: `${dj.title}.mp3` }, { quoted: mek })
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
await conn.sendMessage(from, { react: { text: "🎶", key: msg.key }})
}
} catch (e) {
const dd = await fg.yta(q)
console.log(dd)
}
})

cmd({
    pattern: "yts",
    alias: ["ytsearch","cyber_yts"],
    use: '.yts lelena',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me a words to search*')
try {
let yts = require("yt-search")
var arama = await yts(q);
} catch(e) {
    l(e)
return await conn.sendMessage(from , { text: '🚫 *Unfortunately Error found..!!*' }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj }, { quoted: mek } )
} catch (e) {
    l(e)
  reply('*Error !!*')
}
})

cmd({
    pattern: "video",
    alias: ["mp4"],
    use: '.video [ Faded ]',
    react: "🎶",
    desc: "To Download song From Youtube",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply("❔ *Please enter Query for Search* ")
if ( isUrl(q) ) {
if ( !q.includes('youtu') ) return reply('*Please enter valid Youtube Url* ❗')
 const kanu = await dl.youtubedl(q)
let thama =`*𝗗𝗔𝗥𝗞 𝗦𝗛𝗔𝗗𝗢𝗪 𝗬𝗧 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*  📥

*🎶 Title : ${kanu.title}*

🖇️ Url : ${q}

⏲️ Duration : ${kanu.duration} seconds
`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🖇️ Youtube Url",
                        url: q,
                        merchant_url: q
                    }),
                },
            {
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: '🎬 Video',
                        sections: [{
                            title: 'PLEASE SELECT QUALITY',
                            highlight_label: 'YTDL',
                            rows: [

{
title : "144P QUALITY",
description : "Lowest quality",
id: prefix +  `vidvid ${q} & 144`
},
{
title : "360P QUALITY",
description : "Normal quality",
id: prefix + `vidvid ${q} & 360`
},
{
title : "480P QUALITY",
description : "Normal good quality",
id: prefix +  `vidvid ${q} & 480`
},
{
title : "720P QUALITY",
description : "Good Quality",
id: prefix + `vidvid ${q} & 720`
},
{
title : "1080P QUALITY",
description : "Best quality",
id: prefix +  `vidvid ${q} & 1080`
}
]  }]
})
},
{
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: '📁 Document',
                        sections: [{
                            title: 'PLEASE SELECT QUALITY',
                            highlight_label: 'YTDL',
                            rows: [

{
title : "144P QUALITY",
description : "Lowest quality",
id: prefix +  `viddoc ${q} & 144`
},
{
title : "360P QUALITY",
description : "Normal quality",
id: prefix + `viddoc ${q} & 360`
},
{
title : "480P QUALITY",
description : "Normal good quality",
id: prefix +  `viddoc ${q} & 480`
},
{
title : "720P QUALITY",
description : "Good Quality",
id: prefix + `viddoc ${q} & 720`
},
{
title : "1080P QUALITY",
description : "Best quality",
id: prefix +  `viddoc ${q} & 1080`
}

]


                        }]
})
}]
	   let opts = {
                image: kanu.thumbnail ,
                header: '',
                footer: 'ʀᴇꜱᴜʟᴛꜱ ꜰʀᴏᴍ y2mate.com\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: thama

            }

 return await conn.sendButtonMessage(from, buttons, m, opts)


}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const  led =`*𝗗𝗔𝗥𝗞 𝗦𝗛𝗔𝗗𝗢𝗪 𝗬𝗧 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*  📥

> Get instant access to your favorite YouTube videos right on WhatsApp! With this powerful bot, you can download any YouTube video directly to your device in just a few taps.
`

const rows = []
           

	
        for (let i of search.videos) {
                rows.push({
                    header: ``,
                    title: `${i.title}`,
                    description: `${i.author.name}`,
                    id: prefix + `video ${i.url}`
                }) 
	    }
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦",
                        url: "https://wa.me/94740952096",
                        merchant_url: "https://wa.me/94740952096"
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'SELECT VIDEO',
                        sections: [{
                            title: 'Please select a result',
                            highlight_label: '𝙲𝚈𝙱𝙴𝚁-𝚇 𝚈𝚃𝙳𝙻',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: "",
                header: '',
                footer: "ʀᴇꜱᴜʟᴛꜱ ꜰʀᴏᴍ youtube.com\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ",
                body: led

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
   reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})


cmd({  
    pattern: "vidvid",
    react: "🔄️",
    alias: ["videovid"],
    desc: "Youtube MP3 Downloader",
    category: "download",
    use: '.ytmp3 Faded',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, prefix , isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('❗ *Please enter Youtube video Link*')
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 

const dj = await dl.youtubedl(data)
let checkdata = dj.audio[`${datas}p`].fileSize
if ( checkdata > 102400 ) {
const msgg = `You requested file over Media upload limit.So I can not upload it as Video Media file..Please request it as Document video type`
let buttons = [   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Download as document",
                        id: prefix + `videodoc ${data}`
                    }),
                }
            ]
            let opts = {
                image: '',
                header: '❌ *SORRY YOUR REQUEST CAN NOT BE PROCESS*',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: msgg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)


}
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}
if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

const msg = await conn.sendMessage(from, { document : { url : await dj.video[`${datas}p`].download() }  ,caption: dj.title + "\n\n*ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ ᴏꜰᴄ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
await conn.sendMessage(from, { react: { text: "🎶", key: msg.key }})
}
} catch (e) {
reply('*Selected quality not available....Default quality uploading...*')
const dd = await fg.ytv(q)
console.log(dd)
}
})


cmd({  
    pattern: "viddoc",
    react: "🔄️",
    alias: ["videodoc"],
    desc: "Youtube Document downloader",
    category: "download",
    use: '.ytdoc Faded',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('❗ *Please enter Youtube video Link*')
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬇️`, key: mek.key }})
}
const dj = await dl.youtubedl(data)

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
}

const msg =await conn.sendMessage(from, { document : { url : await dj.video[`${datas}p`].download() }  ,caption: dj.title + "\n\n*ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ ᴏꜰᴄ*" ,mimetype: 'video/mp4', fileName: `${dj.title}.mp4` }, { quoted: mek })

if ( config.AUTO_REACT == 'true' ) {
await conn.sendMessage(from, { react: { text: `☑️`, key: mek.key }})
await conn.sendMessage(from, { react: { text: "🎶", key: msg.key }})
}
} catch (e) {
reply('*Selected quality not available....Default quality uploading...*')
const dd = await fg.ytv(q)
console.log(dd)
}
})