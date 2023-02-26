<template>
  <div class="content">
    <div class="row">
      <div class="col-md-6">
        <bill-add :model="model"> </bill-add>
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
import BillAdd from "./Bill/BillAdd.vue";
import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    BillAdd,
    // ,UserCard,
    Card,
    BaseTable,
  },
  data() {
    return {
      model: {
        table2: {
        title: "Room Master Details",
        subTitle:"",
        columns: ["RoomNo", "RoomType", "Occupence", "Floor","Block","Fees"],
        data: [
            {
            roomno: 1,
            roomtype: "A/C",
            fees: "₹35.738",
            occupence: 5,
            block:"A",
            floor: "Oud-Turnhout",
          },
          {
            roomno: 2,
            roomtype: "A/C",
            fees: "₹23,789",
            block:"A",
            occupence: 5,
            floor: "Sinaai-Waas",
          },
          {
            roomno: 3,
            roomtype: "A/C",
            fees: "₹56,142",
            block:"A",
            occupence: 5,
            floor: "Baileux",
          },
          {
            roomno: 4,
            roomtype: "Non A/C",
            fees: "₹38,735",
            block:"A",
            occupence: "Korea, South",
            floor: "Overland Park",
          },
          {
            roomno: 5,
            roomtype: "Non A/C",
            fees: "₹63,542",
            block:"A",
            occupence: "Malawi",
            floor: "Feldkirchen in Kärnten",
          },
          {
            roomno: 6,
            roomtype: "Non A/C",
            fees: "₹98,615",
            block:"A",
            occupence: "Chile",
            floor: "Gloucester",
          },
          {
            roomno: 7,
            roomtype: "Non A/C",
            fees: "₹78,615",
            block:"A",
            occupence: "Portugal",
            floor: "Gloucester",
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
