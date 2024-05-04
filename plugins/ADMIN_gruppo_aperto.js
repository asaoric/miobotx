const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    '': 'not_announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    return;
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  m.reply('bu merde è aperto');
};
handler.help = ['group open / close', 'gruppo aperto / chiuso'];
handler.tags = ['group'];
handler.command = /^(aperto)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
