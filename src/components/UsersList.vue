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
        <div>{{ scope.row.date }}</div>
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
    :total="40"
  />
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,

      tableData: [
        {
          id: 2,
          date: "2016-05-03",
          name: "Tom",
          role: "dd",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: "Tom",
          role: "dd",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 4,
          date: "2016-05-04",
          name: "Tom",
          role: "dd",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          id: 5,
          date: "2016-05-01",
          name: "Tom",
          role: "dd",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  methods: {
    handleDelete(idx) {
      this.tableData.splice(idx, 1);
    },

    async getUsers() {
      const result = await fetch(
        "https://test.relabs.ru/api/users/list?offset=5"
      );
      console.log(await result.json());
    },
  },
};
</script>

<style scoped></style>
