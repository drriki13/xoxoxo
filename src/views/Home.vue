<template>
  <v-main>
    <div class="d-flex justify-center flex-column align-center" style="height: 100%;">
      <h1 class="mb-5">XOXOXO Game</h1>
      <div>
        <v-text-field
            label="Ваше имя"
            :rules="rules"
            hide-details="auto"
            v-model="playerName"
            style="min-height: 80px"
        ></v-text-field>
      </div>
      <v-btn class="mb-5" @click="createGame" color="success">Создать матч</v-btn>
      <v-btn class="mb-5" @click="searchGame" color="primary">Присоедениться</v-btn>
    </div>
  </v-main>
</template>

<script>
import StorageService from "../firebase/StorageService";

function randomId() {
  return Math.floor(Math.random() * (999999999 - 1 + 1) + 1)
}

export default {
  data() {
    return {
      playerName: "",
      rules: [
        value => !!value || 'Обязательное поле',
        value => (value && value.length >= 3) || 'Мин. 3 символа',
      ],
    }
  },
  methods: {
    createGame() {
      if (this.playerName !== "" && this.playerName.length > 2) {
        StorageService.setRef('user').create({name: this.playerName})
            .then((data) => {
              this.$store.commit('userChange', {id: data.id, name: this.playerName});
              let localId = randomId();
              StorageService.setRef('lobby').create({name: 'game_' + localId, playerId: this.$store.state.user.id})
                  .then((data) => {
                    this.$store.commit('lobbyChange', {id: data.id, name: 'game_' + localId});
                    this.$store.commit('hostChange', true);
                  });
              this.$router.push('/game');
            }, (reason) => console.log(reason));
      }
    },
    searchGame() {
      if (this.playerName !== "" && this.playerName.length > 2) {
        let promise = StorageService.setRef('user').create({name: this.playerName});
        promise.then((data) => {
          this.$store.commit('userChange', {id: data.id, name: this.playerName});
          this.$router.push('/lobby');
        }, (reason) => console.log(reason));
      }
    }
  }
}
</script>
