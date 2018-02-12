<template>
<div class='children-container'></div>
</template>

<script>
export default {
    props: {
        childrenshowflag: {
            type: Boolean
        },
        tolowerdata: {
            type: String
        }
    },
    computed: {
        normalizedUsername: function() {
            // this.tolowerString = this.tolowerdata.toLowerCase();
            // return this.tolowerdata.toLowerCase();
        }
    },
    components: {},
    mounted: function() {
        // this.$parent.childrenShowFlag = !this.childrenshowflag;
        // this.$emit('update:tolowerdata', this.tolowerString);

    },
    methods: {},
    data() {
        return {
        }
    }
}
</script>
