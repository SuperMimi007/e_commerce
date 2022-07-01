
# SITE ECOMMERCE

## Introduction

Il s'agit dela conception d'un site e-commerce avec labibliothèque React
Il est possible 'y faire des ajouts et des suppresions d'articles
La version finale permettra une connexion avec login et mot de passe.
Il comporte un fichier test

## Installation

Afin d'utiliser le projet sur la page web, il vous faudra effectuer les installations suivantes : 
node / express / postgreSQL/jest

--- 


## Utilisation 
Afin 'accéder à la page web il faudra effectuer la commande suivante : 
1. aller dans l'invit commande 
2. indiquer cd + chemin d'accès au fichier my_app
3. lancer le serveur avec node backendExpress.js
4. un message s'affiche indiquant que le port est en écoute & affiche : Connection au port 3000
5. lancer ensuite le front  avec la commande npm start. La fenetre html s'ouvrira automatiquement dans le navigateur (http://localhost:3000).



## Descriptif du projets 
1. public => comprends le fichier style.css aindiq eu les fichiers JPG  
2. src => contient le code source de l'application
app.cs => mis en forme du site
app.js => permet d'utiliser le code défini dans d'autre composant. La fonction app  quand a elle  renvoie une expression JSX. Cette expression définit ce que votre navigateur restitue finalement au DOM
app.test.js => test 
dbUtils.js => contient la connexion à la base SQL et les fonctions permettant de faire le lient avec elle
DeleteProduct.js  => formulaire permettantla suppression d'un article
index.js => point d'entrée de l'application ou le fichier app est utilisé.
LoginPage.js => permet la connection du user
Mycart.js  => récapitulatif des produits achétés
ProductPreview.js => indique les différents objets qui vont etre importés et/ou exportés de la base de donnée
3.gitignore => fichier ne devend pas etre transmis dans GIT
4.backendExpress => mon back   (app/get/cookie/connexion)
5. les packages "json"
6. readme.md

Test unitaire (lancer via le terminal pour exécuter le fichier js)

--- 

## License & copyright 
© Emilie 