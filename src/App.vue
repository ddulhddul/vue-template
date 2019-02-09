<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      <input name="email" type="text"
        v-validate="'required|email'"
        :class="{errorStyle: errors && errors.has('email')}" >
      <span class="errorMsg">{{ errors.first('email') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello, Vue!!'
    };
  }
};
</script>
<style scoped>
  .errorStyle{
    border-color: red;
    border-width: 1px;
    background-color: darksalmon;
  }
  .errorMsg{
    color: red;
  }
</style>