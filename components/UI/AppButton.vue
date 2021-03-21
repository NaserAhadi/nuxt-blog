<template>
    <button
        class="button"
        :class="btnStyle"
        v-bind="$attrs"
        v-on="$listeners"
    ><slot /></button>
</template>

<script>
export default{
    name:"AppButton",
    props:{
        btnStyle:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
.button{
    font: inherit;
    background-color: #000;
    color: #fff;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 0.5rem;
    outline: none;
}
.button:hover,
.button:active{
    background-color: rgb(51, 51, 51);
    border: 1px solid #000;
}

.inverted {
    background-color: #fff;
    color: #000;
    border: 1px solid transparent;
}
.inverted:hover,
.inverted:active{
    color: #ccc;
    background-color: #fff;
    border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: #fff;
  border: 1px solid transparent;
}
.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: #fff;
}
</style>