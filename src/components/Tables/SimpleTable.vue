<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Shop Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Rating">{{ item.city }}</md-table-cell>
        <!-- <md-table-cell md-label="Salary">{{ item.salary }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "⭐ ⭐ ⭐ ⭐ ⭐",
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "⭐ ⭐ ⭐ ⭐  ",
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "⭐ ⭐ ⭐ ⭐  ",
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "⭐ ⭐ ⭐ ⭐ ",
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "⭐ ⭐ ⭐ ⭐  ",
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "⭐ ⭐ ⭐ ",
        },
      ],
    };
  },
};
</script>
