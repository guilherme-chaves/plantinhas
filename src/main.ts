import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue, isPlatform } from '@ionic/vue';
// Firebase Auth
import useFirebaseAuth from './api/firebase-auth'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

const { authCheck } = useFirebaseAuth();

// TypeORM
import 'reflect-metadata';
import { createConnections } from 'typeorm';
import { useSQLite } from 'vue-sqlite-hook/dist';
import getConnections from './database/getConnections'

const app = createApp(App)
  .use(IonicVue);

const {
  getCapacitorSQLite, checkConnectionsConsistency
} = useSQLite({});

checkConnectionsConsistency().catch((e) => {
  console.log(e);
  return {};
});

const sqliteConnection = getCapacitorSQLite();

createConnections(getConnections(sqliteConnection))
.then(async connections => {
  try {
    // run all migrations
    for (const connection of connections) {
      await connection.runMigrations();
    }
    console.log(sqliteConnection);
    authCheck().then(() => {
      app.use(router);
      router.isReady();
    }).then(() => {
      app.mount('#app');
      
      defineCustomElements(window);
    });
  } catch (e) {
    console.log(e.message);
  }
});
  
