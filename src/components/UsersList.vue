<template>
  <el-table :data="tableData" style="width: 100%; border: 1px solid black">
    <el-table-column label="ID">
      <template #default="scope">
        <div>{{ scope.row.id }}</div>
      </template>
    </el-table-column>

    <el-table-column label="Имя">
      <template #default="scope">
        <div>{{ scope.row.name }}</div>
      </template>
    </el-table-column>

    <el-table-column label="Роль">
      <template #default="scope">
        <div>{{ scope.row.role }}</div>
      </template>
    </el-table-column>

    <el-table-column label="Дата создания">
      <template #default="scope">
        <div>{{ formateDate(new Date(scope.row.ctime * 1000)) }}</div>
      </template>
    </el-table-column>

    <el-table-column label="Дeйствия">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Удалить</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @click="getUsers"
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    background
    layout="prev, pager, next"
    :total="30"
  />
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,

      tableData: null,

      dateNow: null,
    };
  },

  methods: {
    handleDelete(idx) {
      this.tableData.splice(idx, 1);
    },

    formateDate(date) {
      return (
        date.getDate() +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    },

    async getUsers() {
      const result = await fetch(
        `https://test.relabs.ru/api/users/list?offset=${
          (this.currentPage - 1) * 5
        }`
      );
      const users = await result.json();
      this.tableData = users.items;
    },
  },

  created() {
    this.getUsers();
  },
};
</script>

<style scoped></style>
