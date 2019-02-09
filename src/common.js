import "babel-polyfill"
import { ValidationObserver } from 'vee-validate';

export default {
  components: { ValidationObserver },
  methods: {
    async validateFocus(args){
      if(!args) console.error('validateFocus error')
      let list = args
      if(!(args instanceof Array)){
        list = Object.keys(args).map((arg)=>{
          return args[arg]
        })
      }
      let result = true
      let invalidRef = undefined
      for await (const arg of list){
        const unitResult = await arg.validate()
        if(!unitResult && !invalidRef){
          result = false
          invalidRef = arg
        }
      }

      // focus
      if(invalidRef){
        const elm = invalidRef.$vnode && invalidRef.$vnode.elm && invalidRef.$vnode.elm
        if(elm){
          elm.querySelector('.errorStyle').focus()
        }
      }

      return result
    }
  }
}