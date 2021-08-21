<template>
    <div id="card">
        <ion-icon :icon="sunnyOutline"></ion-icon>
        <div>
        <ion-label><strong>Iluminação</strong></ion-label>
        <ion-label>Luz Indireta</ion-label>
        </div>
    </div>
</template>

<script lang="ts">
import { } from '@ionic/vue';
import { defineComponent } from 'vue';
import { sunnyOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NecessidadesPlanta',
  components: {
  },
  setup() {
    const router = useRouter();
    return{
      sunnyOutline,
      router
    }
  },
});
</script>

<style scoped>

#card{
    color: #167D2E;
    display: inline-flex;
    font-size: 12px;
    margin: 4px;
}

ion-icon{
    border-radius: 50%;
    border: 1px white solid;
    position: relative;
    background: #C2DC82;
    margin: auto 4px auto 4px;
    font-size: 30px;
}

ion-icon::after {
    content: '';
    display: block;
    position: absolute;
    top: -1;
    bottom: -1;
    left: -1;
    right: -1;
    border-radius: 50%;
    border: 2px #167D2E solid;
}

#card > div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
}
</style>