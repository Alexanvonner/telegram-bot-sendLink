
# Telegram Bot Send Link to channel user


## Information

Ce dépôt contient un bot Telegram permettant de générer des liens d'invitation pour un groupe spécifié. Lorsqu'un utilisateur envoie le mot-clé "/invite" dans le groupe le bot détecte, et génére un lien d'invitation unique et l'enverra en message privé à l'utilisateur. Le lien expirera automatiquement après 7 jours ou après la première utilisation.

Le bot doit être ajouté Admin du groupe avec toutes les autoristations pour pouvoir lire les messages et écrire


## Run Locally


Clone the project



```bash
  git clone  https://github.com/Alexanvonner/telegram-bot-sendLink/
```

Go to the project directory

```bash
  cd my-project
```

Configuration
Avant d'utiliser ce bot, assurez-vous de créer un fichier .env à la racine du projet et d'y ajouter votre jeton (token) d'accès à l'API de Telegram. Vous pouvez obtenir ce jeton en créant un nouveau bot Telegram via le BotFather.
```bash
  TOKEN=Votre_Token_ICI
```


Install dependencies

```bash
  npm install && npm install nodemon
```

Start the server

```bash
  npm run start || nodemon
```


## Authors

- [@Alexanvonner](https://github.com/Alexanvonner/)

