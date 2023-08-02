require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN
const bot = new TelegramBot(token, { polling: true });





// Événement pour écouter les messages dans le groupe
bot.onText(/invite/, (msg) => {
  const chat_id = msg.chat.id;

  // Obtenir la date d'expiration en timestamp (7 jours à partir de maintenant)
  const expireDate = Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60);

  // Paramètres optionnels que nous pouvons passer
  const ops = {
    expire_date: expireDate,
    member_limit: 1
  };

  bot.createChatInviteLink(chat_id, ops)
    .then((data) => {
      // Voir les données dans la console
      console.log(data);

     // Envoyer un message avec l'information du lien d'invitation
     const inviteLinkMessage = `Lien d'invitation créé :\n${data.invite_link}\nLimite de membres : ${data.member_limit}`;
     bot.sendMessage(msg.from.id, inviteLinkMessage);

       
     // Texte de présentation du bot qui sera envoyé en même temps que le lien
     const presentationText = `🎉💌 Bonjour ${msg.from.username} ! Vous avez initié une invitation au groupe. 💌🎉\n\n` +
     `Votre lien unique, valable pour une seule utilisation et expirant dans 7 jours, vous a été envoyé en privé par notre bot. 💌 \n\n` +
     `Partagez ce lien avec votre pote.\n\n` +
     `🤖 Merci d'utiliser notre service d'invitation automatique ! 🤖\n\n` +
     `Bot développé par @Naxeal`;
      bot.sendMessage(chat_id, presentationText);

      // Vous pouvez ajouter ici le code pour envoyer un message au groupe pour indiquer que l'utilisateur a rejoint via le lien
      // const joinMessage = `${msg.from.username} a rejoint le groupe via le lien d'invitation !`;
      // bot.sendMessage(chat_id, joinMessage);
    })
    .catch((error) => {
      console.error('Erreur lors de la création du lien d\'invitation :', error);
    });
});

