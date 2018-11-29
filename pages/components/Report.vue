<template>
  <div>
	<h3>用户注册</h3>
	<p>{{$route|json}}</p>
	<p>{{select|json}}</p>
</div>
</template>



<script>

export default {
  props: {
    select: {
		type:Object
    }
  },
  watch: {
    show (val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(() => { this.show = false }, this.duration)
      }
    }
  },
  created(){
	  alert(this.$route.params.id=='4')
      if(this.$route.params.id=='4'){
		  this.select.reportEnable=true
	  }
     console.log(this.select);
  }
}
</script>