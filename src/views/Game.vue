<template>
  <v-main>
    <h2 class="text-center">{{ userName }}</h2>
    <GameField />
  </v-main>
</template>

<script>
import GameField from "@/components/GameField";

export default {
  components: {
    GameField
  },
  beforeMount() {
    if (this.$store.state.user.id === "") {
      this.$router.push('/');
    }
  },
  computed: {
    userName: function () { return this.$store.state.user.name }
  }
}
</script>
