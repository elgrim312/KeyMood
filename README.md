# Projet KeyMood 
## Prélude
-------------
 Bonjour et bien venus sur Keymood avant  de suivrel'instalation possible vous devez disposer de quelque technologie
 sur votre machine **comme**  
    1. npm (v 3.8.9)
    2. node js (v 6.2.0)
    3. mongo (v 3.2.6)
### Instalation de la base de donée
-----------------------------------------
 1. lancer mongo ```mongod```
 2. allez dans le terminal
 3. taper ``mongo``
 4. taper ```use data```
 5. allez  à la racine du  projet 
 6. taper " mongoimport --db data --collection datas --file datas.json"
 7. retour si c'est ok  
  `
  2016-06-03T17:09:52.951+0200    connected to: localhost`  
   `2016-06-03T17:09:53.005+0200    imported 5 documents
 `
 
### Démarage
----------------------------
1. ```$ npm install```  
2. ```$ npm start```  
3. [http://localhost:3001/] (http://localhost:3001/) :feelsgood:  

### La liste des Dépendances
---------------------------------
1. NodeJs
2. MongoDB
3. Express 
4. SoundCloud API
5. Web Speech API
6. Jquery
7. Mongoose
8. Mocha/Chai
9. charts.js