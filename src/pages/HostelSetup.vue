<template>
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <hostel-setup-edit :model="model"> </hostel-setup-edit>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HostelSetupEdit from "./HostelSetup/HostelSetupEdit.vue";
  // import UserCard from "./Profile/UserCard.vue";
  
  export default {
    components: {
        HostelSetupEdit,
      // UserCard,
    },
    data() {
      return {
        model: {
          company: "Creative Code Inc.",
          email: "mike@email.com",
          username: "michael23",
          firstName: "Mike",
          lastName: "Andrew",
          address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
          city: "Melbourne",
          country: "Australia",
          about:
            "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
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