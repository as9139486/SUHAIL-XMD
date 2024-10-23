const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "♡︎ by 𝐀в∂υℓℓαн•ꭗ⁰⁸¹" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923223411081";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_35_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlwMkpUd2dqRzFNVWN0dWNtdWd3cHBGVnNNeXdVL2RYeEkxaVJZOUZqczA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDM0ODU0MjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyM0NGRTAxNTc0M0E3MDUwQzIyODlCREI5ODBDNTFFOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk2ODY5NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOWF2c0Q5MlZULUtqZTlKM1ZSRkRaZ1wiLFxuICBcInBob25lSWRcIjogXCIwMTU0YzU5Ni1iYWZjLTQ0NDAtYjg3NC04MDc0ZjNhMzI0NTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgNTAsXG4gICAgICAxNDYsXG4gICAgICA4NixcbiAgICAgIDMxLFxuICAgICAgMCxcbiAgICAgIDEwNSxcbiAgICAgIDEwNixcbiAgICAgIDEyNixcbiAgICAgIDE3LFxuICAgICAgMTE1LFxuICAgICAgOTAsXG4gICAgICAzNyxcbiAgICAgIDEzNyxcbiAgICAgIDE0LFxuICAgICAgMjE0LFxuICAgICAgMTA0LFxuICAgICAgMTEwLFxuICAgICAgMTAsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTcxLFxuICAgICAgMjAzLFxuICAgICAgMTMxLFxuICAgICAgNzQsXG4gICAgICAxNjEsXG4gICAgICAyMTQsXG4gICAgICA1NCxcbiAgICAgIDk0LFxuICAgICAgNzcsXG4gICAgICAxNyxcbiAgICAgIDI1MCxcbiAgICAgIDg4LFxuICAgICAgMjA2LFxuICAgICAgMjQxLFxuICAgICAgNCxcbiAgICAgIDI0MSxcbiAgICAgIDEzMCxcbiAgICAgIDQ1LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpESzhMN1MyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzQ4NTQyNTE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NTY1Mjc4NzAxMTY1MzoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIt44CMya3wnZCA0LLiiILPheKEk+KEk86x0L3igKLqrZfigbDigbjCucmtIOK4mSDnrZYzOilcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdmR2dTRIRUpEYjQ3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9ya3RLYUdjbFN0dE1BakcvZWsxa3FuSEVnNzFDQTJlWGZCbWxZRSt3bWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDdXVlZNSnh3d2dLS1JkZ1lqVmhCQTBNMzhLeUFLUnM1UFl4cFcvZ3dZVVloR3RGK2VCZ25vWTBTTW5qdjloSDFPM3IxdEUxdGVRclRpWWdmZzFJQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ0ZuLzVJTjFkZTB3a0V6SmYzY2tjSXdFMnJoOWNXMUxoWThuakdZbzVGQmh3VVdYV29LT3hoSllLazUycDdLU1MyNEpsanRBZVA2MStzUlRzWk1kaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM0ODU0MjUxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTY4NjkzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVZVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVlULmpzb24iOiAie1wia2V5RGF0YVwiOlwiMy92MnFXRzlWOUlKUE5iZTFhTjFoQ3d4T2hHS1Vic1YzVThOWHNQV1Bmdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTEwNzYyNzQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk2ODY5MzU3NDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "♡︎ by 𝐀в∂υℓℓαн•ꭗ⁰⁸¹" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐀в∂υℓℓαн•ꭗ⁰⁸¹",
  packname: process.env.PACK_NAME || "♡︎",
  botname : process.env.BOT_NAME  || "𝐀в∂υℓℓαн•ꭗ⁰⁸¹",
  ownername:process.env.OWNER_NAME|| "𝐀в∂υℓℓαн•ꭗ⁰⁸¹",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
