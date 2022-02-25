<template>
  <v-main>
    <h2 class="text-center">
      {{ userName }}
        <span v-if="isWait">ожидание другого игрока</span>
        <span v-else>VS {{ getEnemyName }}</span>
    </h2>
    <GameField />
  </v-main>
</template>

<script>
import StorageService from "../firebase/StorageService";
import GameField from "../components/GameField";

export default {
  components: {
    GameField
  },
  beforeMount() {
    if (this.$store.state.user.id === "") {
      this.$router.push('/');
    }
    this.$bind('lobby', StorageService.setRef('lobby').findById(this.$store.state.lobby.id))
  },
  data() {
    return {
      enemy: [],
      lobby: []
    }
  },
  computed: {
    userName: function () { return this.$store.state.user.name },
    host: function () { return this.$store.state.host },
    isWait: function () { return this.lobby.enemyId === undefined }
  },
  methods: {
    async getEnemyName() {
      await this.$bind('enemy',StorageService.setRef('user').findById(this.$store.state.lobby.enemyId));
      return this.enemy.name;
    }
  },
}
</script>
