<template>
  <v-main>
    <div class="d-flex justify-center flex-column align-center" style="height: 100%;">
      <v-card>
        <v-list-item-group color="primary">
          <v-list-item v-for="item in lobbyList" :key="item.id">
            <v-list-item-content @click="connectLobby(item.id)">{{ item.name }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </div>
  </v-main>
</template>

<script>
import StorageService from "../firebase/StorageService";

export default {
  beforeMount() {
    if (this.$store.state.user.id === "") {
      this.$router.push('/');
    }
  },
  data() {
    return {
      lobbyList: []
    }
  },
  methods: {
    connectLobby(id) {
      StorageService.setRef('lobby').update(id, {enemyId: this.$store.state.user.id});
      this.$router.push('/game');
    }
  },
  firestore: {
    lobbyList: StorageService.setRef('lobby').getAll()
  }
}
</script>
