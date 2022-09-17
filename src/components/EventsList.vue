<template>
  <el-table :data="events" style="width: 50%; border: 1px solid black">
    <el-table-column label="Дата">
      <template #default="scope">
        <div>{{ scope.row.ctime }}</div>
      </template>
    </el-table-column>

    <el-table-column label="Событие">
      <template #default="scope">
        <div>{{ scope.row.event }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      events: [],
    };
  },
  computed: {
    ...mapGetters(["socketData"]),
  },
  watch: {
    socketData(val) {
      this.events.push(JSON.parse(val.data));
    },
  },
};
</script>

<style></style>
