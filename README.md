# Projet KeyMood 
## Prélude
 Bienvenue sur Keymood,   
 avant de poursuivre l'installation vous devez avoir installer les programmes suivants
 sur votre machine **comme**:  
 
    1. npm ( min v 3.8.9)  
    2. node js ( min v 6.2.0)  
    3. mongo ( min v 3.2.6)
      
### Installation de la base de données
-----------------------------------------
 1. ```$ mongod``` ( on démarre la DB )
 2. ```$ mongo``` (démarre le shell mongo)
 3. ```$ use data``` ( utilise la DB data (et la crée si elle n'existe pas )
 4. Allez  à la racine du  projet 
 5. ```$ mongoimport --db data --collection datas --file datas.json```
 6. output si tout a bien marché  
  ```
  2016-06-03T17:09:52.951+0200    connected to: localhost  
  2016-06-03T17:09:53.005+0200    imported 5 documents
 ```
 
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
8. Charts.js