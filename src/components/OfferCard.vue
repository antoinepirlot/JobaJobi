<script setup>
import { ref } from "vue";

const props = defineProps({
  offer: {
    type: Object,
    required: true,
  },
  displayFavouriteCase: {
    type: Boolean,
    default: true,
  },
  isIntrested: Boolean,
  userType: String,
});

const emit = defineEmits(["onButtonClick", "onIntrestedClick"]);

const onButtonClick = () => {
  emit("onButtonClick", props.offer.idJobOffer);
};

const onIntrestedClick = () => {
  emit("onIntrestedClick", props.offer.idJobOffer);
};

// v-if="displayFavouriteCase ?? ''"
</script>

<template>
  <div class="card">
    <div class="image"></div>
    <div class="title">
      <h1>{{ !offer.title ? "Titre non défini" : offer.title }}</h1>
    </div>
    <button
      v-if="userType === 'Particulier' && !isIntrested && !displayFavouriteCase"
      class="star"
      @click="onIntrestedClick"
    >
      love it!
    </button>
    <div class="des">
      <h2>
        {{
          !offer.contractType
            ? "Type de contrat non défini"
            : offer.contractType
        }}
      </h2>
      <div class="date">
        <p>
          {{
            !offer.publicationDate ? "Date non définie" : offer.publicationDate
          }}
        </p>
      </div>
      <p v-if="displayFavouriteCase">
        {{ offer.interestedUsersId.length }} personne(s) intéressée(s)
      </p>

      <button @click="onButtonClick">Voir plus</button>
    </div>
  </div>
</template>

<style>
.date {
  margin-top: 10%;
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
  top: -10%;
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
