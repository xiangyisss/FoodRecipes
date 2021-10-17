<template>
  <div class="quote_container">
    <div class="hero_image">
      <div class="quotecard">
        <p class="quote">
          The only time to eat diet food is while you're waiting for the steak
          to cook
        </p>
        <h3 class="authour">- Julia Child</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.quote_container {
  width: 100%;
  min-height: 600px;
  position: relative;
  /* position: static; */
}
.hero_image {
  width: 100%;
  min-height: 600px;
  background-image: url("../assets/food-1.jpg");
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.quotecard {
  width: 25rem;
  height: 6rem;
  padding: 0.75rem;
  color: #f1eeee;
  background-color: rgba(83, 86, 97, 0.5);
  position: absolute;
  top: 60%;
  left: 8%;
  backdrop-filter: blur(3px);
}
.quote {
  font-size: 1.5rem;
  font-weight: 700;
}
.authour {
  padding-top: 1rem;
  text-align: right;
}

@media screen and (max-width: 600px) {
  .quotecard {
    width: 17.5rem;
    height: 6.25rem;
  }
  .quote {
    font-size: 1.25rem;
    font-weight: 700;
  }
}
</style>
