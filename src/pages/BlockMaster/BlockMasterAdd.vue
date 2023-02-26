<template>
  <card>
    <template slot="header">
      <h5 class="title">Room Master</h5>
    </template>
    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Block Name" placeholder="Room Number" v-model="model.RoomNumber">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="No. Of. Occupence" type="email" placeholder="No. Of. Occupence" v-model="model.NoOfOccupence">
        </base-input>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="No. Of. Occupence" type="email" placeholder="No. Of. Occupence" v-model="model.NoOfOccupence">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Floor" placeholder="Floor Name" v-model="model.Floor" >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Block" v-model="model.Block" placeholder="Block Name"  >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Fees" v-model="model.Fees" placeholder="Fees">
        </base-input>
      </div>
    </div> -->

    <!-- <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="City" v-model="model.city" placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1 text-left">
        <base-input label="Country" v-model="model.country" placeholder="Country">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input label="Postal Code" placeholder="ZIP Code"> </base-input>
      </div>
    </div> -->
    <div class="row">
      <div class="col-md-8 text-left">
        <base-input>
          <label>About Block</label>
          <textarea rows="4" cols="80" class="form-control" placeholder="Here can be your description" v-model="model.about">
          </textarea>
        </base-input>
      </div>
    </div>
    <template slot="footer">
      <base-button type="success" fill>Save</base-button>
    </template>
  </card>
</template>
<script>
import { Card, BaseInput } from "@/components/index";

import BaseButton from "@/components/BaseButton";

export default {
  components: {
    Card,
    BaseInput,
    BaseButton,
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style></style>
