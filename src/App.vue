<template>
  <div>
    <h1>{{ message }}</h1>

    <div class="borderArea">
      <div>
        <input name="email" type="text" v-validate="'required'"
          :class="{errorStyle: errors && errors.has('email')}" >
        <span class="errorMsg">{{ errors.first('email') }}</span>
      </div>
      <v-input />
      <input type="button" @click="submit" value="submit" />
      <input type="button" @click="clear" value="clear" />
    </div>

    <div class="borderArea">
      <div>
        <input name="test2" type="text" v-validate="'required'"
          :class="{errorStyle: errors && errors.has('test2')}" >
        <span class="errorMsg">{{ errors.first('test2') }}</span>
      </div>
      <v-input />
      <input type="button" @click="submit" value="submit" />
      <input type="button" @click="clear" value="clear" />
    </div>
  </div>
</template>

<script>
import "babel-polyfill"
import VInput from './components/VInput.vue'

export default {
  components: { VInput },
  data() {
    return {
      message: 'Hello, Vue!!'
    }
  },
  methods :{
    async submit(){
      const validResult = await this.$validator.validate()
      console.log('validResult', validResult, this.errors)
    },

    clear(){
      this.$validator.reset()
    }
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
  .borderArea{
    background-color: bisque;
    margin-top: 10px
  }
</style>