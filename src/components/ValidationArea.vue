<template>
  <div>
    <h1>{{ message }}{{ title }}</h1>

    <ValidationObserver ref="observer">
      <div class="borderArea">
        <v-input v-model="test1" name="test1" validate="required" />
        <v-input v-model="test2" name="test2" validate="required" />
        <input type="button" @click="submit('observer')" value="submit" style="margin-top:200px" />
        <input type="button" @click="clear('observer')" value="clear" />
      </div>
    </ValidationObserver>

    <ValidationObserver ref="observer2">
      <div class="borderArea">
        <v-input v-model="test3" name="test3" />
        <input type="button" @click="submit('observer2')" value="submit" />
        <input type="button" @click="clear('observer2')" value="clear" />
      </div>
    </ValidationObserver>

    <div class="borderArea">
      <h5>{{ title }}</h5>
      <input type="button" @click="submitAll" value="submit all" />
      <input type="button" @click="clearAll" value="clear all" />
    </div>
  </div>
</template>

<script>
import "babel-polyfill"
import VInput from './VInput.vue'

export default {
  components: { VInput },
  props: {
    title: String
  },
  data: ()=>({
    message: 'Hello, Vue!!',
    test1: undefined,
    test2: undefined,
    test3: undefined,
  }),
  methods :{
    async submit(target){
      console.log(this.test1,this.test2,this.test3)
      // const validResult = await this.$refs[target].validate()
      const validResult = await this.validateFocus([this.$refs[target]])
      console.log(target, validResult, this.test1,this.test2,this.test3,this)
    },

    clear(target){
      this.$refs[target].reset()
    },

    async submitAll(){
      let allResult = true
      const $refs = this.$refs
      // const keys = Object.keys($refs)
      // for await (const key of keys){
      //   const result = await $refs[key].validate()
      //   if(!result) allResult = result
      // }
      allResult = await this.validateFocus(this.$refs)
      console.log('all Result', allResult, this.test1,this.test2,this.test3,this)
    },

    clearAll(){
      const $refs = this.$refs
      Object.keys($refs).map((obj)=>{
        $refs[obj].reset()
      })
    }
  }
};
</script>
<style scoped>
  .borderArea{
    background-color: bisque;
    margin-top: 10px
  }
</style>