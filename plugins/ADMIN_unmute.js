const handler = async (m, {conn, text}) => {
  if (!text) return;
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) return;
  const users = global.db.data.users;
  users[who].muto = false;
  conn.reply(m.chat, `*smutato* 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨, ✓ *dai te torgo er guinzajo*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^smuta|unmute$/i;
handler.admin = true;
export default handler;
