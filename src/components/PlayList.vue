<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-toolbar clearfix">
                        <form class="pull-right search-bar" method="get" action="#!" role="form">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <input type="hidden" name="search_field" id="search-field" value="title">
                                    <button class="btn btn-default dropdown-toggle" id="search-btn" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
                                     {{playtype_click}}<span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title" @click="allClick">全部</a> </li>
                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title" @click="easyClick">入门</a> </li>
                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title" @click="middleClick">进阶</a> </li>
                                        <li> <a tabindex="-1" href="javascript:void(0)" data-field="title" @click="difficultClick">烧脑</a> </li>
                                    </ul>
                                </div>
                                <input type="text" class="form-control" value="" name="keyword" placeholder="请输入剧本名称" v-model="playName">
                            </div>
                        </form>
                        <div class="toolbar-btn-action">
                            <a class="btn btn-primary"  @click="playSearch"><i class="mdi mdi-magnify"></i> 查询</a>
<!--                            <a class="btn btn-danger" href="#!"><i class="mdi mdi-window-close"></i> 删除</a>-->
                        </div>
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
                                    <th>剧本名</th>
                                    <th>剧本简介</th>
                                    <th>封面图片</th>
                                    <th>详情图片</th>
                                    <th>排序</th>
                                    <th>价格</th>
                                    <th>难易程度</th>
                                    <th>人数</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in playList" :key="item.play_id">
<!--                                    <td>-->
<!--                                        <label class="lyear-checkbox checkbox-primary">-->
<!--                                            <input type="checkbox" name="ids[]" value="1"><span></span>-->
<!--                                        </label>-->
<!--                                    </td>-->
                                    <td>{{item.play_name}}</td>
                                    <td>{{item.play_detail}}</td>
                                    <td><img :src="`${item.play_photo}?x-oss-process=image/resize,h_50,m_lfit`"/></td>
                                    <td><img :src="`${item.play_detail_photo}?x-oss-process=image/resize,h_50,m_lfit`"/></td>
                                    <td>
                                        <select :id="item.play_number" @change="changeOrder" v-model="item.play_sort">
                                            <option v-for="index of 50" :value="index" :key="index">{{ index }}</option>
                                        </select>
                                    </td>
                                    <td>{{item.play_price}}</td>
                                    <td>
                                        <select name="play_type" class="form-control" id="play_type" v-model="item.play_type" disabled>
                                            <option label="入门" value="easy"></option>
                                            <option label="进阶" value="middle"></option>
                                            <option label="烧脑" value="difficult"></option>
                                        </select>
                                    </td>

                                    <td>{{item.play_people}}</td>
<!--                                    操作-->
                                    <td>
                                        <div class="btn-group">
                                            <a :id="item.play_number" @click="changePlay(item.play_number)" class="btn btn-xs btn-default" title="编辑" data-toggle="tooltip"><i class="mdi mdi-pencil"></i></a>
<!--                                            <a class="btn btn-xs btn-default" href="#!" title="查看" data-toggle="tooltip"><i class="mdi mdi-eye"></i></a>-->
                                            <a :id="item.play_number" @click="deletePlay(item.play_number,item.play_name)" class="btn btn-xs btn-default" title="删除" data-toggle="modal" data-target=".bs-example-modal-sm"><i class="mdi mdi-window-close"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" id="closeButton" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <h4 class="modal-title" id="myLargeModalLabel">确认弹框</h4>
                                        </div>
                                        <div class="modal-body">
                                            确认删除{{showplayName}}吗？
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                            <button type="button" class="btn btn-primary" @click="dodel">确认删除</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    import axios from 'axios'
    import qs from 'qs'

    export default {
        name: "PlayList",
        data(){
            return{
                playtype_click:'全部',//选择剧本种类
                playName:"",//确定搜索框是否为空
                playList:[],
                //实现删除传参
                playNumber:"",
                showplayName:""
            }
        },

        // 调用父页面方法
        inject:['changeTitle'],        //页面加载---生命周期
        mounted() {
            let recaptchaScript1 = document.createElement('script')
            recaptchaScript1.setAttribute('src', './static/js/jconfirm/jquery-confirm.min.js')
            document.head.appendChild(recaptchaScript1)
            this.changeTitle('剧本-剧本列表')
            this.loadPlaylist()
        },
        methods:{
            allClick(){
                this.playtype_click='全部'
                this.loadPlaylist()
            },
            easyClick(){
                this.playtype_click='入门'
                this.loadTypelist('easy')
            },
            middleClick(){
                this.playtype_click='进阶'
                this.loadTypelist('middle')

            },
            difficultClick(){
                this.playtype_click='烧脑'
                this.loadTypelist('difficult')

            },

            loadPlaylist(){
                console.log("获取剧本列表")
                var that = this
                //取token
                let token = localStorage.getItem("token")
                console.log(token)
                if(!token){
                    this.$router.push("/login")
                }else{
                    axios.get(that.GLOBAL.API_ROOT + "/get_play", {params:{
                        },
                        headers:{'token':token}
                    }).then(
                        function (response) {
                            that.playList = response.data
                            console.log(response);
                        },
                        function (err) {
                            console.log(err);
                        }
                    )
                }
            },

            loadTypelist(type){
                console.log("获取剧本类型列表")
                var that = this
                axios.get(that.GLOBAL.API_ROOT + "/get_playbytype", {params:{
                        "type":type,
                }}).then(
                    function (response) {
                        that.playList = response.data
                        console.log(response);
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            },


            changeOrder:function(event ){
                var that=this
                let playId=event.target.id
                let sortNum=event.target.value
                axios.post(that.GLOBAL.API_ROOT + "/change_sort", qs.stringify({
                    "playNumber": playId,
                    "playSort": sortNum
                })).then(
                    function (response) {
                        console.log(response);
                        that.loadPlaylist();
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            },
            //删除所选剧本
            deletePlay:function(playNumber,playname){
                this.playNumber = playNumber
                this.showplayName = playname
            },
            dodel:function(){
                var that=this
                console.log("删除所选剧本")
                axios.post(that.GLOBAL.API_ROOT + "/delete_play", qs.stringify({
                    "playNumber": that.playNumber,
                })).then(
                    function (response) {
                        if(response.data.status == "ok"){
                            document.getElementById('closeButton').click();
                            that.loadPlaylist();
                        }
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            },

            //修改剧本
            changePlay:function(playNumber){
                let that = this
                localStorage.setItem("play_number",playNumber)
                that.$router.push("/changeplay")

            },

            //剧本查询
            playSearch:function () {
                console.log("根据剧本名称查询剧本")
                var that = this
                if(that.playName == null){
                    that.loadPlaylist()
                }else{
                    axios.get(that.GLOBAL.API_ROOT + "/search_play", {params:{
                            "playName":that.playName,
                        }}).then(
                        function (response) {
                            that.playList = response.data
                            console.log(response);
                        },
                        function (err) {
                            console.log(err);
                        }
                    )
                }

            }
        }

    }
</script>

<style scoped>

</style>
