<template>
  <div class="wrapper-users" style="width: 70%">
    <h2>Список пользователей</h2>
    <el-table :data="tableData">
      <el-table-column label="ID" style="width: 180">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,

      tableData: null,
    };
  },

  methods: {
    handleDelete(idx) {
      this.tableData.splice(idx, 1);
    },

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

<style scoped>
div.el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>
