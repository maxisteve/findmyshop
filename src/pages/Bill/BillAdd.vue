<template>
  <card>
    <template slot="header">
      <h5 class="title">Bill</h5>
    </template>
    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Student Name" placeholder="Student Name" v-model="model.RoomNumber">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="EB Charge" placeholder="EB Charge" v-model="model.RoomType">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Eb Unit"  placeholder="Eb Unit" v-model="model.NoOfOccupence">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Last Month Eb Unit" placeholder="Last Month Eb Unit" v-model="model.Floor" >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Fees" v-model="model.Block" placeholder="Fees"  >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Status" v-model="model.Fees" placeholder="Status">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="Date" v-model="model.Block" placeholder="Date">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Paid Date" v-model="model.Fees" placeholder="Paid Date">
        </base-input>
      </div>
    </div>

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
          <label>About Room</label>
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
