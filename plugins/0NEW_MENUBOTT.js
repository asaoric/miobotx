import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, isPrems, groupMetadata}) => {
  const pp = imagen4;
  const img = './Menu2.jpg';
  const locale = 'it';
  const d = new Date(new Date + 3600000);
  const week = d.toLocaleDateString(locale, {weekday: 'long'});
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totaluser = Object.values(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(850);
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const grup = './no.png';
  const name = await
  conn.getName(m.sender);
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const prova ={'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': true, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  const text = `  *☁️𝑴𝒐𝒐𝒏𝑪𝒍𝒐𝒖𝒅𝒔⇝𝐁Ꮻ𝐓|mənū☁️*
┌──•✧𝑶𝒈𝒈𝒊✧•─────┐
┊─•✧*𝘿𝘼𝙏𝘼:* ${date}
┊─•✧*𝙊𝙍𝘼:* ${bottime}
└──── •✧✧• ────┘ 

┌──•✧𝑰𝒏𝒇𝒐 𝑼𝒕𝒆𝒏𝒕𝒆✧•─────┐
┊─•✧*𝑼𝙏𝑬𝙉𝙏𝑬: ${name} ✧* 
┊─•✧*𝑮𝙍𝙐𝙋𝙋𝙊:*
┊* _${groupMetadata.subject}_*
┊─•✧*𝙈𝙀𝙎𝙎𝘼𝑮𝑮𝑰: _${user.messaggi}_*
┊─•✧*𝙍𝘼𝙉𝑮𝙊: _${role}_*
└─── •✧✧• ────┘ 

┌─•✧𝑩𝑶𝑻 𝑰𝑵𝑭𝑶✧•──┐
┊─•✧*𝘽𝙊𝙏 𝙉𝘼𝙈𝙀:*${gt}
┊─•✧*𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬 𝘽𝙊𝙏:${vs}*
┊─•✧*𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈: 𝑳𝒊𝒏𝒖𝒙 *
┊─•✧*𝙋𝙍𝙀𝙁𝙄𝙓:* ${usedPrefix}
┊─•✧*𝙐𝙋𝙏𝙄𝙈𝙀:* ${uptime} 
┊─•✧*𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀:* ${rtotalreg} 𝑭𝑹𝑶𝑴 ${totaluser}
┊─•✧*𝑼𝙏𝑬𝙉𝙏𝙄 𝑻𝑶𝑻𝑨𝑳𝙄:* ${totaluser}
└──𝑩𝑶𝑻𝑾𝑯𝑨𝑰𝑻𝑨 V${vs}

└── ⇝ 𝖊𝖗 𝖇𝖔𝖙 𝖓𝖊𝖌𝖗𝖔`;
  const templateButtons = [
    {index: 1, quickReplyButton: {displayText: '.menuowner'}},
    {index: 2, quickReplyButton: {displayText: '.menuattiva'}},
    {index: 3, quickReplyButton: {displayText: '.menugruppo'}},
    {index: 4, quickReplyButton: {displayText: '.menuaudio'}},
    {index: 5, quickReplyButton: {displayText: '.menumedia'}},
    {index: 6, quickReplyButton: {displayText: '.comandi'}},
    {index: 7, quickReplyButton: {displayText: '.news'}},


  ];
  const tm = {
    text: text,
    footer: global.wm,
    templateButtons: templateButtons,
    image: 'no.png',
  };
  conn.sendMessage(m.chat, tm, m);
};
handler.help = ['text2'];
handler.tags = ['maker'];
handler.command = /^menudani$/i;


export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
