<template>
  <div style="display: flex; height: 100%; justify-content: center; align-items: center; padding: 0;">
    <div class="d-flex flex-wrap" style="width: 165px">
      <Squad
          v-for="item in field"
          :key="item.id"
          :id="item.id"
          :state="item.state"
          @selectSquad="selectSquad"
      />
    </div>
  </div>
</template>

<script>
import Squad from "@/components/Squad";

export default {
  components: {
    Squad
  },
  data() {
    return {
      field: [
        {
          id: 1,
          state: "empty"
        },
        {
          id: 2,
          state: "empty"
        },
        {
          id: 3,
          state: "empty"
        },
        {
          id: 4,
          state: "empty"
        },
        {
          id: 5,
          state: "empty"
        },
        {
          id: 6,
          state: "empty"
        },
        {
          id: 7,
          state: "empty"
        },
        {
          id: 8,
          state: "empty"
        },
        {
          id: 9,
          state: "empty"
        }
      ],
      firstPlayer: true
    }
  },
  methods: {
    selectSquad(id) {
      this.field.find(item => item.id === id).state = this.firstPlayer ? 'close' : 'circle';
      this.firstPlayer = !this.firstPlayer;
    }
  }
}
</script>