<template>
  <users-list />
  <event-list />
</template>

<script>
import UsersList from "../components/UsersList.vue";
import EventList from "../components/EventsList.vue";

export default {
  components: {
    UsersList,
    EventList,
  },
};
</script>
