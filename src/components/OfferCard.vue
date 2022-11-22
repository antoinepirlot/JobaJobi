<script setup>
import { ref } from "vue";

const props = defineProps({
  offer: {
    type: Object,
    required: true
  },
  displayFavouriteCase: {
    type: Boolean,
    default: true,
  },
});
//Get the token in the localStorage
const token = localStorage.getItem("token");

const emit = defineEmits(["onButtonClick", "onIntrestedClick"]);

const isIntrested = ref(null);

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
      <h1>{{ offer.title }}</h1>
    </div>
    <button v-if="displayFavouriteCase ?? ''" class="star" @click="onIntrestedClick">
      <span class="fa fa-star"></span>
    </button>
    <div class="des">
      <h2>{{ !offer.contractType ? "Type de contrat non défini" : offer.contractType }}</h2>
      <div class="description">
        <p>{{ offer.description }}</p>
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
