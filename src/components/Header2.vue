<template>
  <p class=theme>
      {{ msg }}
  </p>
</template>

<script>
export default {
    props: {
        msg: String,
        theme: String
    }
}
</script>

<style>
.red{
    color: red;
    background-color: black;
}
.blue{
    color: blue;
    background-color: black;
}

</style>