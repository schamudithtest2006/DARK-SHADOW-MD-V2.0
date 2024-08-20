const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { search , download } = require('aptoide-scraper')

cmd({
    pattern: "ps",
    react: "📚",
    alias: ["apksh","playstore"],
    desc: "Play Store Apk Searcher",
    category: "search",
    use: '.apk < App Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('*Please enter a App name* 📱')
const vid = await fetchJson(`https://slim-noel-gmthinura-eb9764cb.koyeb.app/api/apps/?q=${q}`)
    let yt = '*Dark Shadow PLAY STORE APP SEARCHER*\n\n'
    for (let i of vid.results ) {
        yt += `📱 *${i.title}*\n🔗 Link : ${i.playstoreUrl} \n\n`
    }
reply(yt)
} catch (e) {
reply('❌ *Apps not found (404 Error)*\n\nThis is a data feature provided by Google Play Store. Therefore Mod Apk or 3rd party application cannot be provided')
l(e)
}
})

cmd({
    pattern: "apk",
    react: "📱",
    alias: ["apkdl","cyber_apk"],
    desc: "Apk Downloader",
    category: "download",
    use: '.apk < App Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, prefix , command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('*Please enter a App name* 📱')
if ( isUrl(q) ) {
if ( q.includes('https://play.google.com') ) {
const getlink = q.split("?id=")[1]
const app = await download(getlink)
let msgg =`*Dark Shadow APK DOWNLOADER* 📱

📚 *App name -: ${app.name}*

🖇️ Url : ${q}

📂 Size -: ${app.size}

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ*`

 await conn.sendMessage(from, { image: { url : app.icon } , caption: msgg }, { quoted: mek })
return await conn.sendMessage(from, { document : { url : app.dllink } , caption:"\n*ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ ᴏꜰᴄ*" ,mimetype: 'application/vnd.android.package-archive', fileName: `${app.name}.apk` }, { quoted: mek })

}
}
let psdata = await fetchJson(`https://slim-noel-gmthinura-eb9764cb.koyeb.app/api/apps/?q=${q}`)
let msgg =`*Dark Shadow APK DOWNLOADER* 📱

This is a data feature provided by Google Play Store. Therefore Mod Apk or 3rd party application cannot be provided`
const rows = []
           

	
        for (let i of psdata.results ) {
                rows.push({
                    header: ``,
                    title: `${i.title}`,
                    description: `${i.developer.devId}`,
                    id: prefix + `apk ${i.playstoreUrl}`
                }) 
	    }
            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗨𝗦",
                        url: "https://chat.whatsapp.com/Iz8D2MsRH9qGjXj3WwSle4",
                        merchant_url: "https://chat.whatsapp.com/Iz8D2MsRH9qGjXj3WwSle4"
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'SELECT APK',
                        sections: [{
                            title: 'Please select a result',
                            highlight_label: 'SELECT',
                            rows: rows

                        }]
                    }),
                }

            ]
            let opts = {
                image: "",
                header: '',
                footer: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋꜱʜᴀᴅᴏᴡxᴛᴇᴀᴍ",
                body: msgg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
            } catch (e) {
reply('❌ *App not found (404 Error)*\n\nThis is a data feature provided by Google Play Store. Therefore Mod Apk or 3rd party application cannot be provided')
l(e)
}
})