<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-toolbar clearfix">
                        <form class="pull-right search-bar" method="get" action="#!" role="form">
                            <div class="input-group">
                                <!--                                <div class="input-group-btn">-->
                                <!--                                    <input type="hidden" name="search_field" id="search-field" value="title">-->
                                <!--                                    <button class="btn btn-default dropdown-toggle" id="search-btn" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">-->
                                <!--                                        全部 <span class="caret"></span>-->
                                <!--                                    </button>-->
                                <!--                                    <ul class="dropdown-menu">-->
                                <!--                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title">全部</a> </li>-->
                                <!--                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title">入门</a> </li>-->
                                <!--                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title">进阶</a> </li>-->
                                <!--                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title">烧脑</a> </li>-->
                                <!--                                    </ul>-->
                                <!--                                </div>-->
                                <input type="text" class="form-control" value="" name="keyword" placeholder="请输入玩家用户名称">
                            </div>
                        </form>
                            <a class="btn btn-primary"><i class="mdi mdi-magnify"></i> 查询</a>


                        <!--                        <div class="toolbar-btn-action">-->
                        <!--                            <a class="btn btn-warning m-r-5" href="#!"><i class="mdi mdi-block-helper"></i> 禁用</a>-->
                        <!--                            <a class="btn btn-danger" href="#!"><i class="mdi mdi-window-close"></i> 删除</a>-->
                        <!--                        </div>-->
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
<!--                                    <th>-->
<!--                                        <label class="lyear-checkbox checkbox-primary">-->
<!--                                            <input type="checkbox" id="check-all"><span></span>-->
<!--                                        </label>-->
<!--                                    </th>-->
                                    <th>玩家用户编号</th>
                                    <th>玩家用户名称</th>
                                    <th>剧本编号</th>
                                    <th>剧本名称</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in orderList" :key="item.id">
<!--                                    <td>-->
<!--                                        <label class="lyear-checkbox checkbox-primary">-->
<!--                                            <input type="checkbox" name="ids[]" value="1"><span></span>-->
<!--                                        </label>-->
<!--                                    </td>-->

                                    <td>{{item.user_number}}</td>
                                    <td>{{item.user_name}}</td>
                                    <td>{{item.play_number}}</td>
                                    <td>{{item.play_name}}</td>
<!--                                    &lt;!&ndash;                                    操作&ndash;&gt;-->
                                    <td>
                                        <div class="btn-group">
<!--                                            <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip"><i class="mdi mdi-pencil"></i></a>-->
                                            <a class="btn btn-xs btn-default" href="#!" title="查看" data-toggle="tooltip"><i class="mdi mdi-eye"></i></a>
<!--                                            <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>-->
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--                        分页-->
                        <!--                        <ul class="pagination">-->
                        <!--                            <li class="disabled"><span>«</span></li>-->
                        <!--                            <li class="active"><span>1</span></li>-->
                        <!--                            <li><a href="#1">2</a></li>-->
                        <!--                            <li><a href="#1">3</a></li>-->
                        <!--                            <li><a href="#1">4</a></li>-->
                        <!--                            <li><a href="#1">5</a></li>-->
                        <!--                            <li><a href="#1">6</a></li>-->
                        <!--                            <li><a href="#1">7</a></li>-->
                        <!--                            <li><a href="#1">8</a></li>-->
                        <!--                            <li class="disabled"><span>...</span></li>-->
                        <!--                            <li><a href="#!">14452</a></li>-->
                        <!--                            <li><a href="#!">14453</a></li>-->
                        <!--                            <li><a href="#!">»</a></li>-->
                        <!--                        </ul>-->

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "OrderList",
        data(){
            return{
                orderList:[]
            }
        },

        // 调用父页面方法
        inject:['changeTitle'],        //页面加载---生命周期
        mounted() {
            this.changeTitle('剧本预定-预定列表')
            this.loadOrderlist()
        },
        methods:{
            loadOrderlist(){
                console.log("获取预定列表")
                var that = this
                //取token
                let token = localStorage.getItem("token")
                if(!token){
                    this.$router.push("/login")
                }else{
                    axios.get(that.GLOBAL.API_ROOT + "/get_order", {params:{
                        },
                        headers:{'token':token}
                    }).then(
                        function (response) {
                            that.orderList = response.data
                            console.log(response);
                        },
                        function (err) {
                            console.log(err);
                        }
                    )
                }



            },

        }
    }
</script>

<style scoped>

</style>
