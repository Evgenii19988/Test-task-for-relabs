<template>
  <div class="tables-container">
    <users-list />
    <event-list />
  </div>
</template>

<script>
import UsersList from "../components/main_page_components/UsersList.vue";
import EventList from "../components/main_page_components/EventsList.vue";

export default {
  components: {
    UsersList,
    EventList,
  },
};
</script>

<style scoped>
.tables-container {
  display: flex;
  gap: 2rem;
  margin: 2rem 0 0 0;
}
</style>
