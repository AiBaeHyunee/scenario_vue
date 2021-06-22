<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">

                        <form action="#!" method="post" class="row">
                            <!--      剧本编号                      -->
                            <div class="form-group col-md-12">
                                <label for="play_number">剧本编号</label>
                                <input type="text" class="form-control" id="play_number" name="play_number" value="" placeholder="" disabled="true" v-model="play_number"/>
                            </div>
                            <!--                            剧本名-->
                            <div class="form-group col-md-12">
                                <label for="play_name">剧本名</label>
                                <input type="text" class="form-control" id="play_name" name="play_name" value="" placeholder="请输入剧本名" v-model="play_name"/>
                            </div>
<!--                            剧本简介-->
                            <div class="form-group col-md-12">
                                <label for="play_detail">剧本简介</label>
                                <textarea class="form-control" id="play_detail" name="play_detail" rows="5" value="" placeholder="请输入剧本简介" v-model="play_detail"></textarea>
                            </div>
<!--                            封面图片-->
                            <div class="form-group col-md-12">
                                <label for="seo_keywords">封面图片</label>
                                <img :src="`${play_photo}?x-oss-process=image/resize,h_100,m_lfit`"/>
                                <input name="coverImage" type="file" value="" @change="uploadImage" id="seo_keywords"/>
                            </div>
<!--                            详情图片-->
                            <div class="form-group col-md-12">
                                <label for="seo_keywords2">详情图片</label>
                                <img :src="`${play_detailphoto}?x-oss-process=image/resize,h_100,m_lfit`"/>
                                <input name="detailImage" type="file" value="" @change="uploadImage" id="seo_keywords2"/>
                            </div>
<!--                            价格-->
                            <div class="form-group col-md-12">
                                <label for="play_price">剧本价格</label>
                                <input type="text" class="form-control" id="play_price" name="play_price" value="" placeholder="请输入剧本价格" v-model="play_price"/>
                            </div>
<!--                            难易程度-->
                            <div class="form-group col-md-12">
                                <label for="play_type">难易程度</label>
                                <div class="form-controls">
                                    <select name="play_type" class="form-control" id="play_type" v-model="play_type">
                                        <option value="easy">入门</option>
                                        <option value="middle">进阶</option>
                                        <option value="difficult">烧脑</option>
                                    </select>
                                </div>
                            </div>
<!--                            人数-->
                            <div class="form-group col-md-12">
                                <label for="play_people">剧本人数</label>
                                <input type="text" class="form-control" id="play_people" name="play_people" value="" placeholder="请输入剧本人数--eg:3男3女，6人" v-model="play_people"/>
                            </div>
                            <!--                            剧本排序-->
                            <div class="form-group col-md-12">
                                <label for="play_sort">剧本排序</label>
                                <input type="text" class="form-control" id="play_sort" name="play_sort" value="" placeholder="请输入剧本排序" v-model="play_sort"/>
                            </div>


                            <!--                            <div class="form-group col-md-12">-->
<!--                                <label for="status">状态</label>-->
<!--                                <div class="clearfix">-->
<!--                                    <label class="lyear-radio radio-inline radio-primary">-->
<!--                                        <input type="radio" name="status" value="0"><span>禁用</span>-->
<!--                                    </label>-->
<!--                                    <label class="lyear-radio radio-inline radio-primary">-->
<!--                                        <input type="radio" name="status" value="1" checked><span>启用</span>-->
<!--                                    </label>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div class="form-group col-md-12">
                                <button type="button" class="btn btn-primary" @click="savePlay">确 定</button>
<!--                                <button type="button" class="btn btn-default" onclick="javascript:history.back(-1);return false;">返 回</button>-->
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from "axios";
    import qs from "qs";

    export default {
        name: "AddPlay",
        data(){
            return{
                play_number:"",
                play_name:"",
                play_detail:"",
                play_photo:"",
                play_detailphoto:"",
                play_price:"",
                play_type:"",
                play_people:"",
                play_sort:""
            }
        },        // 调用父页面方法
        inject:['changeTitle'],        //页面加载---生命周期
        mounted() {
            this.changeTitle('剧本-剧本新增')
            this.getPlayNumber()
        },
        methods:{
            //获取play_number
            getPlayNumber:function () {
                console.log("获取剧本编号列表")
                var that = this
                axios.get(that.GLOBAL.API_ROOT + "/get_playnumber", {params:{
                    }}).then(
                    function (response) {
                        that.play_number = response.data
                        console.log(response);
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            },

            //将图片上传到阿里云
            uploadImage:function (event) {
                console.log("传图片")
                var that=this;
                //    获取文件对象
                let imageFile = event.target.files[0]
                //    组装一个form数据
                let formData = new FormData()
                formData.append("imageFile",imageFile)
                let config = {
                    //指定传的数据类型
                    headers:{'Content-Type':'multipart/form-data'}
                }
                //准备调用接口
                axios.post(that.GLOBAL.API_ROOT + '/upload_image',formData,config)
                    .then(response=>{
                        console.log(response.data);
                        let imageUrl = response.data.imageUrl;
                        if (event.target.name == "coverImage") {
                            that.play_photo = imageUrl;
                        } else {
                            that.play_detailphoto = imageUrl;
                        }
                    })
            },

        //    保存所输入信息
            savePlay:function(){
                let that = this
                axios.post(that.GLOBAL.API_ROOT + "/add_play", qs.stringify({
                    "playNumber": that.play_number,
                    "playName": that.play_name,
                    "playDetail": that.play_detail,
                    "playPhoto": that.play_photo,
                    "playDetailphoto": that.play_detailphoto,
                    "playPrice": that.play_price,
                    "playType": that.play_type,
                    "playPeople": that.play_people,
                    "playSort": that.play_sort,
                })).then(
                    function (response) {
                        if(response.data.status === 'ok'){
                            that.$router.push("/playlist")
                        }else {
                            that.message()
                        }
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            },
        }
    }
</script>

<style scoped>

</style>
