<template>
    <ion-item>
        <div id="lembrete">
        <ion-icon :icon="waterOutline"></ion-icon>
        <div id="texto">
        <ion-label><strong>Aguação</strong></ion-label>
        <ion-label>Repetição</ion-label>
        </div>
        </div>
        <ion-toggle checked></ion-toggle>
    </ion-item>
</template>

<script lang="ts">
import { } from '@ionic/vue';
import { defineComponent } from 'vue';
import { waterOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LembretesPlanta',
  components: {
  },
  setup() {
    const router = useRouter();
    return{
      waterOutline,
      router
    }
  },
});
</script>

<style scoped>
ion-toggle{
  --background-checked: #70A333;
  --handle-background-checked: #167D2E;
}

ion-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #167D2E;
}

#texto{
    display: flex;
    flex-direction: column;
    font-size: 12px;
}

ion-icon{
    margin: auto 0;
    font-size: 30px;
}

#lembrete{
    display: inline-flex;
}

</style>