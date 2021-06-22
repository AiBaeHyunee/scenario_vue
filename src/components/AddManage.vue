<template>
    <div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "AddManage",
        data(){
            return{
                manage_number:"",
            }
        },
        mounted() {
            this.getManageNumber()
        },
        methods:{
            getManageNumber:function () {
                console.log("获取管理员编号列表")
                var that = this
                axios.get(that.GLOBAL.API_ROOT + "/get_managenumber", {params:{
                    },
                }).then(
                    function (response) {
                        that.manage_number = response.data
                        console.log(response);
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
