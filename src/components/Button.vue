<template>
  <button @click="onClick" v-bind:class="classValue" class="button">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: String,
    },
    computed: {
        classValue() {
            /* if (this.type == 'primary') return 'button-primary'; //2h43'
            if (this.type == 'secondary') return 'button-secondary';
            if (this.type =='ghost') return 'button-ghost'; */
            return this.type === 'primary' ? 'button-primary' : 'button-ghost';
        },
    },
    methods: {
        onClick() {
            console.log('hola!!');
            this.$emit('onclick');
        },
    },
};
</script>

<style lang="scss">
.button {
    width: 300px;
    height: 50px;
    border-radius: 25px;
    opacity: 1;
    text-decoration: none;
    cursor: pointer;

    &-primary {
        background: #ff1558 0% 0% no-repeat padding-box;
        border: none;
        color: #ffffff;
        font-family: Poppins;
        font-weight: bold;
        font-size: 1.5rem;
    }

    &-secondary {
        background: blue;
    }

    &-ghost {
        background: transparent 0% 0% no-repeat padding-box;
        color: #ffffff;
        border: 3px solid #ffffff;
        font-family: Poppins;
        font-weight: bold;
        font-size: 1.5rem;
    }
}
</style>