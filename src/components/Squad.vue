<template>
  <div class="squad" @click="select">
    <v-icon color="primary" x-large class="icon-align-center" v-if="this.state === 'circle'">mdi-circle-outline</v-icon>
    <v-icon color="primary" x-large class="icon-align-center" v-if="this.state === 'close'">mdi-close</v-icon>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    state: String
  },
  methods: {
    select() {
      this.$emit('selectSquad', this.id)
    }
  }
}
</script>

<style>
.squad {
  width: 50px;
  height: 50px;
  border: gray solid 2px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.icon-align-center {
  display: flex !important;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>