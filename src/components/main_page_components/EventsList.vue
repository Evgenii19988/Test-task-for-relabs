<template>
  <div style="width: 30%" class="wrapper-events">
    <h2>События</h2>
    <el-table :data="events">
      <el-table-column label="Дата">
        <template #default="scope">
          <div>{{ formateDate(new Date(scope.row.ctime * 1000)) }}</div>
        </template>
      </el-table-column>

      <el-table-column label="Событие">
        <template #default="scope">
          <div>{{ scope.row.event }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      events: [],
    };
  },

  methods: {
    formateDate(date) {
      return (
        ("00" + date.getDate()).slice(-2) +
        "." +
        ("00" + (date.getMonth() + 1)).slice(-2) +
        "." +
        date.getFullYear() +
        " " +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2)
      );
    },
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
