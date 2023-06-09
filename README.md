# Site web JustStreamIt 
***
Application web permettant de visualiser en temps réel un classement de films intéressants




## Fonctionnalités de l'application

Cette application  permettra aux abonnés de l'association JustStreamIt de visualiser en temps réel des films intéressants. 

Les données des films sont récupérées depuis une API "maison" : OCMovies-API.  Cette dernière n’est pas encore en ligne, mais le développeur qui s’est occupé du développement a fourni une version locale pour pouvoir faciliter la réalisation du front-end de l'application. Cette version de test de OCMovies-API se trouve sur le dépôt de code suivant : [OCMovies-API](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR)



## Installation


### 1° Installation et exécution de l'API OCMovies-API

1. Ouvrez le terminal et cloner le dépôt de code de l'API à l'aide de la commande 
```
$ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git
```
Vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip)

Puis suivez les consignes d'installation indiquées dans le fichier README de l'API.


2. Démarrer le serveur avec cette commande 
```
$ pipenv run python manage.py runserver
```
ou (selon le mode d'installation choisi pour l'API)
```
$ python manage.py runserver
```

### 2° Installation et exécution de l'application web

1. Télécharger le code du site web en tapant 
```
$ git clone https://github.com/Nunespace/Site_JustStreamIt.git
```
Vous pouvez également télécharger le code en temps qu'archive zip : [Site_JustSreamIt](https://github.com/Nunespace/Site_JustStreamIt/archive/refs/heads/main.zip)


2. Ouvrez le fichier index.html à partir de votre navigateur

OU

Si vous utiliser VSCode ou un autre éditeur de code avec une extersion de serveur web comme live server, vous pouvez lancer direcement votre site avec l'extension que vous utilisez habituellement. 







