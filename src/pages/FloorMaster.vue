<template>
  <div class="content">
    <div class="row">
      <div class="col-md-6">
        <floor-master-add :model="model"> </floor-master-add>
      </div>
      <div class="col-md-6">
        <!-- <user-card :user="user"></user-card> -->
        <card class="card-plain">
          <template slot="header">
            <h4 class="card-title">{{model.table2.title}}</h4>
            <p class="category">{{ model.table2.subTitle }}</p>
          </template>
          <div class="table-full-width table-responsive text-left">
            <base-table
              :title="model.table2.title"
              :sub-title="model.table2.subTitle"
              :data="model.table2.data"
              :columns="model.table2.columns"
            >
            </base-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>

import { Card } from "@/components/index";
import BaseTable from "@/components/BaseTable";
import FloorMasterAdd from "./FloorMaster/FloorMasterAdd.vue";
import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    FloorMasterAdd,
    // ,UserCard,
    Card,
    BaseTable,
  },
  data() {
    return {
      model: {
        table2: {
        title: "Floor Master Details",
        subTitle:"",
        columns: ["FloorNo", "FloorName", "OnOfRoom", "Block"],
        data: [
            {
            floorno: 1,
            roomtype: "A/C",
            fees: "$35.738",
            onofroom: 5,
            block:"A",
            floorname: "Oud-Turnhout",
          },
          {
            floorno: 2,
            roomtype: "A/C",
            fees: "$23,789",
            block:"A",
            onofroom: 5,
            floorname: "Sinaai-Waas",
          },
          {
            floorno: 3,
            roomtype: "A/C",
            fees: "$56,142",
            block:"A",
            onofroom: 5,
            floorname: "Baileux",
          },
          {
            floorno: 4,
            roomtype: "Non A/C",
            fees: "$38,735",
            block:"A",
            onofroom: "6",
            floorname: "Overland Park",
          },
          {
            floorno: 5,
            roomtype: "Non A/C",
            fees: "$63,542",
            block:"A",
            onofroom: "5",
            floorname: "Feldkirchen in Kärnten",
          },
          {
            floorno: 6,
            roomtype: "Non A/C",
            fees: "$98,615",
            block:"A",
            onofroom: "4",
            floorname: "Gloucester",
          },
          {
            floorno: 7,
            roomtype: "Non A/C",
            fees: "$78,615",
            block:"A",
            onofroom: "6",
            floorname: "Gloucester",
          },
        ]
        },
        
        company: "Creative Code Inc.",
        email: "mike@email.com",
        username: "michael23",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "Melbourne",
        country: "Australia",

        about:null,
        RoomNumber:null,
        RoomType: null,
        NoOfOccupence: null,
        Floor:null,
        Block:null,
        Hostel:null,
        Fees:null,
      },
      user: {
        fullName: "Mike Andrew",
        title: "Ceo/Co-Founder",
        description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
      },
    };
  },
};
</script>
<style></style>
