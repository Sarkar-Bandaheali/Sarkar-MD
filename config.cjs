// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0kzdlF1N0d5NXYzV3dhcGtpbmVNb1BoanhQYXVkdXBzUFJIOGJSWktFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnIvaE10QkwxaG5NSVcwdWE4RHVqbDVaR3h3dk5ITHVaalBLR2RlcDIwQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRHlFbndLQWZTdXlaQUlWUDdvUTRqb3JWczB3azRYVHJoZU1wbzd0NDE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZFRJNVhqSi9MRkRKSjg3MVJ6SzdjZm03aC9KVUYwTmdvVzBGSDlNOXpRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNWnN4RG9PcVVmZkxmVG5TdVVEWk1IZ1FTcXY3OHRVSzhFTjl1c2NobDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBCbDZCYTdOY2NOR3c3U0UvQmlIb2hWa2gycFd4Y2lrS013akZCVnZoVmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FoUTgzcC90cVplM3huMi9OUklwV3RDWm9ubE1GWHd6R0JkbWNCdzRFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajhnK0FZWVYxSnlBcGhLU0k3UkROL0p5d0NsNllNTE9LQVhBY0Z5SmJpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZHZ1pZM1BrRnpmN1h1ais3NE1XVkhnQ29vTXdjU3ZBOExHd3VkSHhjbzZwNHYrZzJZRTAxMExodTBQbkRpTXE3aUVSeWsvSWhtbTVURUl6bVpYWWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiIxaU82Y09kWWtDankxSmtyVmJYNXZJQ2g5T0hDRXQ2eDhvMHc3d0k4UFVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiOTQ3NjQxMDQ1ODg6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTSEFOQV8iLCJsaWQiOiIyMzE1NDY1MzU1NTkyOTA6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HOXpZa0dFTitIb2NJR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBUVUQ2K3pDcHdGWjhybldNeGFrL1lwbCt5MFJQbVl1eHlEaXpkejhQQm89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ino3a3owZ0FCVHRHL1hqTUl3WGI5bWFhdDFwcDRnbGRDZFRPZDFDbUhhRk54TkM1NUdwM3l5S1NlRGtWZlBITlNkU0txVEtuajdjOW1GRnRCRWExRUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQeXRlZ2lYZWVwTFA0elNLUnJSZzlWNUFySGovSkhZenBhQmx0b2xqM1VSY0F2TUdsa3FvNi8vRzY5MzNLMXc4dVlMMzVqNlMrL3hXdm9NdkhrejVnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY0MTA0NTg4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEUxQSt2c3dxY0JXZks1MWpNV3BQMktaZnN0RVQ1bUxzY2c0czNjL0R3YSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NTY2NDM1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpxZSJ9"
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
