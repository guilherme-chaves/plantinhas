<template>
    <ion-col size="4">
        <ion-item>
            <ion-thumbnail>
                <ion-icon :icon="trophyOutline"></ion-icon>
            </ion-thumbnail>
        </ion-item>
    </ion-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { trophyOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TrofeusConquista',
  components: {
  },
  setup(){
    return{
      trophyOutline
    }
  }
});
</script>

<style scoped>
    ion-icon{
        font-size: 45px;
    }

    ion-thumbnail{
        max-width: max-content;
        max-height: max-content;
        text-align: center;
        vertical-align: middle;
        padding-top: 6px;
    }

    ion-item{
        max-height: fit-content;
        vertical-align: middle;
        border-radius: 50%;
        border: 4px white solid;
        box-shadow: 0 0 16 8 #00000020;
    }

</style>