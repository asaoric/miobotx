const handler = async (m, {conn, participants, usedPrefix, command, isAdmin}) => {
  const BANtext = `chi? tagga qualcuno`;
  if (!m.mentionedJid[0] && !m.quoted) return;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].muto = true;
  m.reply('*Mutato* 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓ *cane devi sta zitto a cuccia.*');
};
handler.command = /^muta$/i;
handler.admin = true;
export default handler;
