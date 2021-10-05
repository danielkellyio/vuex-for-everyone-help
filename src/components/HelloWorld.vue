<template>
  <div>
      <h1>{{msg.msg}} {{msg.from}}</h1>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>