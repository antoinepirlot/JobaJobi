<script setup>
import { ref } from "vue";

const props = defineProps({
  offertitle: String,
  offerDescription: String,
  offerType: String,
  id: Number,
});
//Get the token in the localStorage
const token = localStorage.getItem("token");

const emit = defineEmits(["onButtonClick", "onIntrestedClick"]);

const isIntrested = ref(null);
const user = ref([]);

const getUserFromSession = async () => {
  //Set the header of the request
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2Vib2tAZ21haWwuY29tIiwiaWF0IjoxNjY4Nzg0Mzg3LCJleHAiOjE3NTUxODQzODd9.39V_8TOGeop3GMDPqOrDVo431iyFkwdxMwFmIVcKrcA"
  );
  //Set the options of the request
  const options = {
    method: "GET",
    headers: header,
  };
  await fetch("/api/users/getUserSession", options)
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      //Assign the data to the user ref
      user.value = data;
    })
    .catch((error) => {
      console.error("There was an error : ", error);
    });
};

getUserFromSession();

const onButtonClick = () => {
  emit("onButtonClick", props.id);
};

const onIntrestedClick = () => {
  emit("onIntrestedClick", props.id);
};
</script>

<template>
  <div class="card">
    <div class="image"></div>
    <div class="title">
      <h1>{{ offertitle }}</h1>
    </div>
    <button class="star" @click="onIntrestedClick">
      <span class="fa fa-star"></span>
    </button>
    <div class="des">
      <h2>{{ !offerType ? "Type de contrat non défini" : offerType }}</h2>
      <div class="description">
        <p>{{ offerDescription }}</p>
      </div>

      <button @click="onButtonClick">Voir plus</button>
    </div>
  </div>
</template>

<style>
.description {
  width: auto;
  height: 50px;
  overflow: hidden;
}

.checked {
  color: orange;
}

.star {
  display: flex;
  position: absolute;
  top: -5%;
  right: 7%;
}

.main {
  margin: 2%;
}

.card {
  width: 20%;
  position: relative;
  display: inline-block;
  box-shadow: 2px 2px 20px black;
  border-radius: 5px;
  margin: 2%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  overflow: hidden;
}
.card:hover {
  box-shadow: 2px 2px 30px black;
  transition: 0.2s;
}

.title {
  text-align: center;
  padding: 10px;
}

.des {
  padding: 3px;
  text-align: center;

  padding-top: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
button {
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}
button:hover {
  background-color: black;
  color: white;
  transition: 0.5s;
  cursor: pointer;
}
</style>
