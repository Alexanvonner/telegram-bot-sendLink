README - Bot d'invitation automatique Telegram
Ce dépôt contient un bot Telegram permettant de générer des liens d'invitation pour un groupe spécifié. Lorsqu'un utilisateur envoie le mot-clé "invite" au bot, celui-ci générera un lien d'invitation unique et l'enverra en message privé à l'utilisateur. Le lien expirera automatiquement après 7 jours ou après la première utilisation.

Configuration
Avant d'utiliser ce bot, assurez-vous de créer un fichier .env à la racine du projet et d'y ajouter votre jeton (token) d'accès à l'API de Telegram. Vous pouvez obtenir ce jeton en créant un nouveau bot Telegram via le BotFather.

makefile
Copy code
TOKEN=Votre_Token_ICI
Installation
Cloner le dépôt :
bash
Copy code
git clone https://github.com/VotreNomUtilisateur/votre-repo.git
cd votre-repo
Installer les dépendances :
Copy code
npm install
Utilisation
Exécutez le bot en utilisant la commande suivante :

Copy code
nodemon || npm start 
Fonctionnement
Le bot surveille les messages entrants dans le groupe et détecte ceux contenant le mot-clé "invite". Lorsqu'un tel message est repéré, le bot génère un lien d'invitation, l'envoie en message privé à l'utilisateur et fournit également une brève présentation du bot.

Fonctionnalités
Génération de liens d'invitation uniques pour un groupe Telegram.
Limite le lien d'invitation à une seule utilisation.
Lien d'invitation automatiquement expiré après 7 jours.
Envoi d'un message de présentation personnalisé au destinataire du lien d'invitation.
Contributions
Les contributions à ce projet sont les bienvenues ! Si vous souhaitez contribuer, veuillez ouvrir une "pull request" pour discuter de vos idées ou des modifications que vous proposez.

Auteur
Ce bot a été développé par Alexan Vonner .

Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

N'hésitez pas à explorer le code source pour en apprendre davantage sur le fonctionnement du bot et à améliorer ses fonctionnalités selon vos besoins. Si vous avez des questions ou des suggestions, n'hésitez pas à les partager dans les "issues" du dépôt. Bon codage ! 🤖💻
