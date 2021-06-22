<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-sm-6 col-lg-3">
                <div class="card bg-primary">
                    <div class="card-body clearfix">
                        <div class="pull-right">
                            <p class="h6 text-white m-t-0">剧本总数</p>
                            <p class="h3 text-white m-b-0 fa-1-5x">{{play_count}}</p>
                        </div>
                        <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-book-open-page-variant fa-1-5x"></i></span> </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card bg-info">
                    <div class="card-body clearfix">
                        <div class="pull-right">
                            <p class="h6 text-white m-t-0">预定总数</p>
                            <p class="h3 text-white m-b-0 fa-1-5x">{{order_count}}</p>
                        </div>
                        <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-collage fa-1-5x"></i></span> </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card bg-warning">
                    <div class="card-body clearfix">
                        <div class="pull-right">
                            <p class="h6 text-white m-t-0">玩家数量</p>
                            <p class="h3 text-white m-b-0 fa-1-5x">{{user_count}}</p>
                        </div>
                        <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-account-multiple fa-1-5x"></i></span> </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card bg-purple">
                    <div class="card-body clearfix">
                        <div class="pull-right">
                            <p class="h6 text-white m-t-0">管理人员数量</p>
                            <p class="h3 text-white m-b-0 fa-1-5x">{{manage_count}}</p>
                        </div>
                        <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-account-key fa-1-5x"></i></span> </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4>各月不同类型剧本玩家数量</h4>
                    </div>
                    <div class="card-body">
                        <div class="card-body" id="userPlatTypeReport" style="width: 800px;height: 600px">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h4>剧本分类</h4>
                    </div>
                    <div class="card-body">
                        <div class="card-body" id="playTypeReport" style="width: 800px;height: 600px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "HomePage",
        data(){
            return{
                play_count:"",
                order_count:"",
                user_count:"",
                manage_count:""

            }
        },
        // 调用父页面方法
        inject:['changeTitle'],        //页面加载---生命周期
        mounted() {
            this.changeTitle('首页')
            this.loadHomepage()
            this.readPLayType()
            this.showUserPlayType()
        },
        methods:{
            loadHomepage:function () {
                console.log("获取剧本总数量")
                var that = this
                axios.get(that.GLOBAL.API_ROOT + "/get_playcount", {params:{
                    }}).then(
                    function (response) {
                        that.play_count = response.data.play_count
                    },
                    function (err) {
                        console.log(err);
                    }
                )
                axios.get(that.GLOBAL.API_ROOT + "/get_ordercount", {params:{
                    }}).then(
                    function (response) {
                        console.log(response.data)
                        that.order_count = response.data.order_count
                    },
                    function (err) {
                        console.log(err);
                    }
                )
                axios.get(that.GLOBAL.API_ROOT + "/get_usercount", {params:{
                    }}).then(
                    function (response) {
                        console.log(response.data)
                        that.user_count = response.data.user_count
                    },
                    function (err) {
                        console.log(err);
                    }
                )
                axios.get(that.GLOBAL.API_ROOT + "/get_managecount", {params:{
                    }}).then(
                    function (response) {
                        console.log(response.data)
                        that.manage_count = response.data.manage_count
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            },

            //
            showUserPlayType:function(){
                let userPlatTypeReport = this.$echarts.init(document.getElementById('userPlatTypeReport'));

                var posList = [
                    'left', 'right', 'top', 'bottom',
                    'inside',
                    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
                    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
                ];

                var app=[]
                app.configParameters = {
                    rotate: {
                        min: -90,
                        max: 90
                    },
                    align: {
                        options: {
                            left: 'left',
                            center: 'center',
                            right: 'right'
                        }
                    },
                    verticalAlign: {
                        options: {
                            top: 'top',
                            middle: 'middle',
                            bottom: 'bottom'
                        }
                    },
                    position: {
                        options: posList.reduce(function (map, pos) {
                            map[pos] = pos;
                            return map;
                        }, {})
                    },
                    distance: {
                        min: 0,
                        max: 100
                    }
                };
                app.config = {
                    rotate: 90,
                    align: 'left',
                    verticalAlign: 'middle',
                    position: 'insideBottom',
                    distance: 15,
                    onChange: function () {
                        var labelOption = {
                            normal: {
                                rotate: app.config.rotate,
                                align: app.config.align,
                                verticalAlign: app.config.verticalAlign,
                                position: app.config.position,
                                distance: app.config.distance
                            }
                        };
                        userPlatTypeReport.setOption({
                            series: [{
                                label: labelOption
                            }, {
                                label: labelOption
                            }, {
                                label: labelOption
                            }]
                        });
                    }
                };


                var labelOption = {
                    show: true,
                    position: app.config.position,
                    distance: app.config.distance,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    rotate: app.config.rotate,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 16,
                    rich: {
                        name: {
                        }
                    }
                };

                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['入门', '进阶', '烧脑']
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {show: false},
                            data: ['1-2月', '3-4月', '5-6月', '7-8月', '9-10月','11-12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '入门',
                            type: 'bar',
                            barGap: 0,
                            label: labelOption,
                            emphasis: {
                                focus: 'series'
                            },
                            data: [400, 332, 301, 334, 390,400]
                        },
                        {
                            name: '进阶',
                            type: 'bar',
                            label: labelOption,
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 182, 191, 234, 290,200]
                        },
                        {
                            name: '烧脑',
                            type: 'bar',
                            label: labelOption,
                            emphasis: {
                                focus: 'series'
                            },
                            data: [150, 232, 201, 154, 190,190]
                        }
                    ]
                }
                userPlatTypeReport.setOption(option)

            },

            //动态获取剧本类型数量
            readPLayType:function(){
                console.log("获取剧本类型数量--饼状图")
                var that = this
                axios.get(that.GLOBAL.API_ROOT + "/get_playtypecount", {params:{
                    }}).then(
                    function (response) {
                        console.log(response.data)
                        let easy = response.data.easy
                        let middle = response.data.middle
                        let difficult = response.data.difficult
                        that.showPlayTpe(easy,middle,difficult)
                    },
                    function (err) {
                        console.log(err);
                    }
                )

            },
            showPlayTpe:function (easy,middle,difficult) {
                console.log(easy)
                console.log(middle)
                console.log(difficult)

                let PlayTypeReportChart = this.$echarts.init(document.getElementById('playTypeReport'));
                let option = {
                    title: {
                        text: '剧本分类图',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        data: ['入门', '进阶', '烧脑']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: '剧本种类',
                            type: 'pie',
                            radius: [20, 140],
                            center: ['50%', '50%'], //设置圆心偏离位置
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 5
                            },
                            data: [
                                {value: easy, name: '入门'},
                                {value: middle, name: '进阶'},
                                {value: difficult, name: '烧脑'},
                            ]
                        }
                    ]
                };
                PlayTypeReportChart.setOption(option)

            }

        }
    }
</script>

<style scoped>

</style>
