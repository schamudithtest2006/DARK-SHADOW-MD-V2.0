const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')

cmd({
        pattern: "save",
        react: "🛠️",
        alias: ["savejid"],
        desc: "Get Bot All Cmd List",
        category: "main",
        use: '.menu',
        dontAddCommandList : true ,
        filename: __filename
    },
async(conn, mek, m,{from, l, quoted, body, isCmd, prefix , command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try {
    if ( !isDev ) return reply('⚠️ *You dont have permission to use this cmd.* ‼️')
             let msgg =`*𝗗𝗔𝗥𝗞 𝗦𝗛𝗔𝗗𝗢𝗪-𝗠𝗗 𝗕𝗢𝗧 𝗩𝗢𝗟-𝗜𝗜* 🎬 
        
> Please select you need DB Section

`

		let rows = [
{
title : "SAVE AS JID ADDRESS NUMBER 01",
description : "For customizable jid sender",
id: prefix + `setimg JID_NUMBER_ONE=${from}`
},
{
title : "SAVE AS JID ADDRESS NUMBER 02",
description : "For customizable jid sender",
id: prefix + `setimg JID_NUMBER_TWO=${from}`
},
{
title : "SAVE AS JID ADDRESS NUMBER 03",
description : "For customizable jid sender",
id: prefix + `setimg JID_NUMBER_THREE=${from}`
},
{
title : "SAVE AS JID ADDRESS NUMBER 04",
description : "For customizable jid sender",
id: prefix + `setimg JID_NUMBER_FOUR=${from}`
},
{
title : "SAVE AS JID ADDRESS NUMBER 05",
description : "For customizable jid sender",
id: prefix + `setimg JID_NUMBER_FIVE=${from}`
}

]

            let buttons = [{
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: 'SELECT NUM',
                        sections: [{
                            title: 'Please select',
                            highlight_label: 'MENU',
                            rows: rows

                        }]
})
}]
	   let opts = {
                image: '',
                header: '',
                footer: 'ᴄᴏʀᴅᴇᴅ ʙʏ ꜱᴀᴅᴇᴇᴘᴀ ᴄʜᴀᴍᴜᴅɪᴛʜ',
                body: msgg

            }

 return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
        reply(e)
        }
      })
      
// DERECT MOVIE SENDER ALL CMD IN DOWN.............. 



cmd({
    pattern: "uploadfile",
    alias: ["upsendfile"],
    desc: "Direct link file uploader",
    category: "main",
    use: '.uploadfile [ Direct link ]',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, prefix , command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isDev && isCreator ) return reply('⚠️ *You dont have permission to use this Bot..* ‼️')
if ( !q && isUrl(q) ) return reply('*Please enter Direct Link*')
const db_pool = new DBM({
    db: config.DATABASE_URL
})
const data = q.split(" | ")[0] 
const datas = q.split(" | ")[1] 
await db_pool.insert( sender + "FILE" , data )  
await db_pool.insert( sender + "NAME" , datas )  
let rows = [
{
title : "FILE TYPE | AUDIO MP3",
description : "For customizable jid sender",
id: prefix + `adddata audio`
},
{
title : "FILE TYPE | VIDEO MP4",
description : "For customizable jid sender",
id: prefix + `adddata video`
},
{
title : "DONE | SEND IT",
description : "For customizable jid sender",
id: prefix + `sendfromfile`
},
]

            let buttons = [{
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: 'ADD DETAILS',
                        sections: [{
                            title: 'Please select',
                            highlight_label: 'MENU',
                            rows: rows

                        }]
})
}]
	   let opts = {
                image: '',
                header: '',
                footer: 'ᴄᴏʀᴅᴇᴅ ʙʏ ꜱᴀᴅᴇᴇᴘᴀ ᴄʜᴀᴍᴜᴅɪᴛʜ',
                body: "> Please add details using this List message"

            }

 return await conn.sendButtonMessage(from, buttons, m, opts)

		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})


cmd({
    pattern: "adddata",
    alias: ["upcinemv"],
    desc: "Movie Searcher",
    category: "extra",
    use: '.activate_18+',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isDev && isCreator ) return reply('⚠️ *You dont have permission to use this Bot..* ‼️')
if ( !q ) return 
const db_pool = new DBM({
    db: config.DATABASE_URL
})

if ( q === "video" ) {
await db_pool.insert( sender + "MIMETYPE" , "video/mp4" )  
await db_pool.insert( sender + "TYPE" , "mp4" )  
await conn.sendMessage(from , { text: '🖇️ *Database updated*' }, { quoted: mek } )
}
if ( q === "audio" ) {
await db_pool.insert( sender + "MIMETYPE" , "audio/mp3" )  
await db_pool.insert( sender + "TYPE" , "mp3" )  
await conn.sendMessage(from , { text: '🖇️ *Database updated*' }, { quoted: mek } )
}
	} catch (e) {
reply('❗ Error' + e )
l(e)
}
})


cmd({
    pattern: "sendfromfile",
    alias: ["upsendfile"],
    desc: "Movie Searcher",
    category: "extra",
    use: '.activate_18+',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ *You dont have permission to use this Bot..* ‼️')
const db_pool = new DBM({
    db: config.DATABASE_URL
})

const dl_link = await db_pool.get(sender+"FILE")
const dl_name = await db_pool.get(sender+"NAME")
const dl_mime = await db_pool.get(sender+"MIME")
const dl_type = await db_pool.get(sender+"TYPE")
await conn.sendMessage(from , { text: '*Buffering your file...Please wait...*' }, { quoted: mek } )
 await conn.sendMessage(from, { document : { url :  dl_link },caption: `\n${dl_name}\n\n> *DARK SHADOW MD*`  ,mimetype: dl_mime , fileName: `🎬 DARK SHADOW | ${dl_name}.${dl_type}` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

// JID SENDER WITH BUTTONS

cmd({
    pattern: "sendfile",
    alias: ["sendjidfile"],
    desc: "Direct link file uploader",
    category: "main",
    use: '.uploadfile [ Direct link ]',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, prefix , command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isDev && isCreator ) return reply('⚠️ *You dont have permission to use this Bot..* ‼️')
if ( !q && isUrl(q) ) return reply('*Please enter Direct Link*')
const db_pool = new DBM({
    db: config.DATABASE_URL
})
const data = q.split(" | ")[0] 
const datas = q.split(" | ")[1] 
await db_pool.insert( sender + "FILE" , data )  
await db_pool.insert( sender + "NAME" , datas )  
let rows = [
{
title : "---------------------------------------------",
description : "-----------------------------------------------",
id: prefix + `pakaya`
},
{
title : "FILE TYPE | AUDIO MP3",
description : "For customizable jid sender",
id: prefix + `adddata audio`
},
{
title : "FILE TYPE | VIDEO MP4",
description : "For customizable jid sender",
id: prefix + `adddata video`
},
{
title : "---------------------------------------------",
description : "-----------------------------------------------",
id: prefix + `pakaya`
},
{
title : "SEND FILE | JID 01",
description : "Send this file for jid number 01",
id: prefix +  `sendjidfile JID_NUMBER_ONE`
},
{
title : "SEND FILE | JID 02",
description : "Send this file for jid number 02",
id: prefix +  `sendjidfile JID_NUMBER_TWO`
},
{
title : "SEND FILE | JID 03",
description : "Send this file for jid number 03",
id: prefix +  `sendjidfile JID_NUMBER_THREE`
},
{
title : "SEND FILE | JID 04",
description : "Send this file for jid number 04",
id: prefix +  `sendjidfile JID_NUMBER_FOUR`
},
{
title : "SEND FILE | JID 05",
description : "Send this file for jid number 05",
id: prefix +  `sendjidfile JID_NUMBER_FIVE`
}
]

            let buttons = [{
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: 'SEND FILE',
                        sections: [{
                            title: 'Please select',
                            highlight_label: 'MAIN',
                            rows: rows

                        }]
})
}]
	   let opts = {
                image: '',
                header: '',
                footer: 'ᴄᴏʀᴅᴇᴅ ʙʏ ꜱᴀᴅᴇᴇᴘᴀ ᴄʜᴀᴍᴜᴅɪᴛʜ',
                body: "> Please add details using this List message"

            }

 return await conn.sendButtonMessage(from, buttons, m, opts)

		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})








cmd({
    pattern: "sendjidfile",
    alias: ["upsendjidfile"],
    desc: "Movie Searcher",
    category: "extra",
    use: '.activate_18+',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ *You dont have permission to use this Bot..* ‼️')
const db_pool = new DBM({
    db: config.DATABASE_URL
})
const dl_jid =  await db_pool.get(q)
const dl_link = await db_pool.get(sender+"FILE")
const dl_name = await db_pool.get(sender+"NAME")
const dl_mime = await db_pool.get(sender+"MIME")
const dl_type = await db_pool.get(sender+"TYPE")
await conn.sendMessage(from , { text: '*Buffering your file...Please wait...*' }, { quoted: mek } )
 await conn.sendMessage(dl_jid, { document : { url :  dl_link },caption: `\n${dl_name}\n\n> *DARK SHADOW MD*`  ,mimetype: dl_mime , fileName: `🎬 DARK SHADOW | ${dl_name}.${dl_type}` } )
 await conn.sendMessage(from , { text: '*File sent...* ✅' }, { quoted: mek } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})





