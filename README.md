# Basto_Challengue



// instrucciones para la ejecucion de la aplicacion //

Para correr el front-end y el back-end necesitamos abrir 2 terminales.


-------------{INICIALIZAR BACK-END}----------

1)_  -> Una vez la terminal este en la carpeta api escribimos el comando npm install e instalamos dependencias

2) creamos un archivo .env dentro la carpeta api con 2 variables

PORT= introducir numero de puerto que quiere que se ejecute
DATABASEURL = introduzca su url de base de datos mongoDB

ejemplo : 

PORT= 3001

DATABASEURL= mongodb://localhost/Basto_challenge

3)dentro de la carpeta api escribimos npm test y correran los test unitarios 

(no ejecutar test con el servidor escuchando )

4) dentro la carpeta api escribimos npm start y se estara ejecutando el server en node


-------------{INICIALIZAR FRONT-END}----------

1) en la otra terminal ingresamos a la carpeta client e instalamos las dependencias con npm install 

2) escribimos en la terminal npm run dev 

 LISTO ! La aplicacion esta lista para ser ejecutada y probada 


