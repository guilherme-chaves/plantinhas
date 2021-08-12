<template>
  <ion-page>
     <ion-content :fullscreen="true"> 
     <ion-grid>
     <ion-row>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Nome</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua senha atual"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="password" placeholder="sua nova senha"><ion-icon :icon="lockClosed"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Salvar Alterações
      </ion-button>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="container">
        <strong>Alterar email</strong>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
         <ion-input type="email" placeholder="seu email"><ion-icon :icon="mail"></ion-icon></ion-input>
     </div>
     </ion-col>
     <ion-col size="12" size-sm>
     <div id="input">
      <ion-button expand="block" color="primary" shape="round" class="botao">
        Salvar Alterações
      </ion-button>
     </div>
     </ion-col>
     </ion-row>
     </ion-grid>
    </ion-content>
  </ion-page>
</template>