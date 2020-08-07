const admin = require("firebase-admin");

// ConFiguracion de accesos
const serviceAccount = require("./notificacionenjoy2030dsfwefsd-firebase-adminsdk-qrddl-14b3b7d5fe.json");

//Inicializar App
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://notificacionenjoy2030dsfwefsd.firebaseio.com"
});

// Instanciar Firestore
let db = admin.firestore();
db.collection('push-notification').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });