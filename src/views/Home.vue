<template>
  <v-main>
    <div class="d-flex justify-center flex-column align-center" style="height: 100%;">
      <h1 class="mb-5">XOXOXO Game</h1>
      <div>
        <v-text-field
            label="Ваше имя"
            :rules="rules"
            hide-details="auto"
            style="min-height: 80px"
        ></v-text-field>
      </div>
      <v-btn class="mb-5" @click="$router.push('/game')" color="success">Создать матч</v-btn>
      <v-btn class="mb-5" color="primary">Присоедениться</v-btn>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        value => !!value || 'Обязательное поле',
        value => (value && value.length >= 3) || 'Мин. 3 символа',
      ],
    }
  }
}
</script>