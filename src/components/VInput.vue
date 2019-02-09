<template>
    <ValidationProvider :rules="validate" :name="name">
        <div slot-scope="{ errors }">
            <input type="text" 
                :class="{errorStyle: errors && errors[0]}"
                v-model="thisValue"
                @input="input"
                >
            <span id="error">{{ errors[0] }}</span>
        </div>
    </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate';

export default {
    components: { ValidationProvider },
    props: {
        value: String,
        name: String,
        validate: String
    },
    data: ()=>({
        thisValue: undefined
    }),
    mounted(){
        this.thisValue = this.value
    },
    methods: {
        input(event){
            const value = String(event.target.value || '').replace(/[a-z]+/g,'')
            this.$emit('input', value)
        }
    }
}
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