const config = require('../config')
const os = require('os')
let { img2url } = require('@blackamda/telegram-image-url')
const { DBM } = require('postgres_dbm')
const si = require('systeminformation')
const fs = require('fs')
const { cmd , commands } = require('../command')
const { getBuffer , getGroupAdmins, getRandom, h2k, isUrl,Json,runtime,sleep,fetchJson} = require('../lib/functions')
cmd({
        pattern: "menu",
        react: "🗒",
        alias: ["list", "cmd", "botmenu"],
        desc: "Get Bot All Cmd List",
        category: "main",
        use: '.menu',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
        const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const data = await db_pool.get('MENU_MESSAGE')
		let logoimage = await db_pool.get('MENU_IMAGE')
		let rows = [
{
title : "🥷🏻 MAIN COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `mainmenu`
},
{
title : "🥷🏻 DOWNLOAD COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix  + `downloadmenu`
},
{
title : "🥷🏻 SEARCH COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `searchmenu`
},
{
title : "🥷🏻 WHATSAPP GROUP COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `groupmenu`
},
{
title : "🥷🏻 WHATSAPP PROFILE COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴘʀᴏꜰɪʟᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix +  `profilemenu`
},
{
title : "🥷🏻 CONVERT COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `convertmenu`
},
{
title : "🥷🏻 TEXT TO IMAGE COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴛᴇxᴛ 2 ɪᴍɢ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `t2imenu`
},
{
title : "🥷🏻 PHOTO EDIT COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴘʜᴏᴛᴏ ᴇᴅɪᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `editmenu`
},
{
title : "🥷🏻 OTHER COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `othermenu`
}

]

            let buttons = [{
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: 'SELECT',
                        sections: [{
                            title: 'Please select',
                            highlight_label: 'MENU',
                            rows: rows

                        }]
})
}]
	   let opts = {
                image: logoimage || '',
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: data 

            }

 return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
        let rows = [
{
title : "🥷🏻 MAIN COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `mainmenu`
},
{
title : "🥷🏻 DOWNLOAD COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix  + `downloadmenu`
},
{
title : "🥷🏻 SEARCH COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `searchmenu`
},
{
title : "🥷🏻 WHATSAPP GROUP COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `groupmenu`
},
{
title : "🥷🏻 WHATSAPP PROFILE COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴘʀᴏꜰɪʟᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix +  `profilemenu`
},
{
title : "🥷🏻 CONVERT COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `convertmenu`
},
{
title : "🥷🏻 TEXT TO IMAGE COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴛᴇxᴛ 2 ɪᴍɢ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `t2imenu`
},
{
title : "🥷🏻 PHOTO EDIT COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴘʜᴏᴛᴏ ᴇᴅɪᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `editmenu`
},

{
title : "🥷🏻 OTHER COMMANDS",
description : "ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ",
id: prefix + `othermenu`
}

]

            let buttons = [{
                  name: "single_select",
                   buttonParamsJson: JSON.stringify({
                        title: 'SELECT',
                        sections: [{
                            title: 'PLEASE SELECT',
                            highlight_label: 'MENU',
                            rows: rows

                        }]
})
}]
	   let opts = {
                image: 'https://i.ibb.co/sq3WWDv/MenuList.png',
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: "Welcome to *Dark Shadow MD*. This is designed to make your day to day activities very fast. ᴄᴏʀᴅᴇᴅ ʙʏ ꜱᴀᴅᴇᴇᴘᴀ ᴄʜᴀᴍᴜᴅɪᴛʜ"

            }

 return await conn.sendButtonMessage(from, buttons, m, opts)
      }
      })



    cmd({
    pattern: "downloadmenu",
    react: "📁",
    alias: ["dmenu"],
    desc: "Download menu",
    category: "edit",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('DOWNLOAD_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇️  *PATTERN - ${commands[i].pattern}*
ℹ️  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇️  *PATTERN  - ${commands[i].pattern}*
ℹ️  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})

cmd({
    pattern: "searchmenu",
    react: "🔎",
    alias: ["smenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('SEARCH_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})



// Group command

cmd({
    pattern: "groupmenu",
    react: "👥",
    alias: ["gmenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('GROUP_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})





// profile menu


cmd({
    pattern: "profilemenu",
    react: "👤",
    alias: ["pmenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('PROFILE_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'profile'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'profile'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})







// convert menu


cmd({
    pattern: "convertmenu",
    react: "🔁",
    alias: ["cmenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('CONVERT_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})




// Other command

cmd({
    pattern: "othermenu",
    react: "🏹",
    alias: ["omenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('OTHER_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})






// Main command

cmd({
    pattern: "mainmenu",
    react: "📜",
    alias: ["mmenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('MAIN_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})








// Text to Image Command




cmd({
    pattern: "text2imagemenu",
    react: "🐦🎑",
    alias: ["t2imenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('TEXT2IMAGE_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'text2image'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'text2image'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})



// Edit Command


cmd({
    pattern: "editmenu",
    react: "🐦‍🔥",
    alias: ["emenu"],
    desc: "Download menu",
    category: "main",
    use: '.blur',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , prefix , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
 const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const menuimg = await db_pool.get('EDIT_IMAGE')
		
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'edit'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN - ${commands[i].pattern}
ℹ  DESCRIPTION - ${commands[i].desc}
✅ USAGE - ${commands[i].use}

`
}}};




let menumg = `
${menuc}
`
let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "SUBSCRIBE US",
                        url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x",
                        merchant_url: "https://whatsapp.com/channel/0029Va5EQi7CRs1lXmZYKw0x"
                    }),
                }
              
             
            ]
            let opts = {
                image: menuimg,
                header: '',
                footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ',
                body: menumg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'edit'){
  if(!commands[i].dontAddCommandList){
menuc += `⬇  PATTERN  - ${commands[i].pattern}
ℹ  DESCRIPTION  - ${commands[i].desc}
✅  USAGE - ${commands[i].use}

`
}}};

let menumg = `
${menuc}
`

reply(menumg)
}
})