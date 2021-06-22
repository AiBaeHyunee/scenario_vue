<template>
    <div class="lyear-layout-web" id="app">
        <div class="lyear-layout-container">
            <!--左侧导航-->
            <aside class="lyear-layout-sidebar">

                <!-- logo -->
                <div id="logo" class="sidebar-header">
                    <router-link to="/homepage"><img src="/static/images/scenario_logo1.jpg" title="LightYear" alt="LightYear" /></router-link>
                </div>
                <div class="lyear-layout-sidebar-scroll">

                    <nav class="sidebar-main">
                        <ul class="nav nav-drawer">
                            <li class="nav-item"> <router-link to="/homepage"><i class="mdi mdi-home"></i> 首页</router-link></li>

                            <li class="nav-item nav-item-has-subnav" @click="switchMenu">
                                <a href="javascript:void(0)"><i class="mdi mdi-book-open-page-variant"></i>剧本</a>
                                <ul class="nav nav-subnav" @click.stop="chilsClick">
                                    <li> <router-link to="/playlist">剧本列表</router-link></li>
                                    <li> <router-link to="/addplay">剧本新增</router-link> </li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-has-subnav" @click="switchMenu">
                                <a href="javascript:void(0)"><i class="mdi mdi-account-multiple"></i>用户管理</a>
                                <ul class="nav nav-subnav" @click.stop="chilsClick">
                                    <li><router-link to="/play_userlist">玩家用户列表</router-link></li>
                                    <li> <router-link to="/manage_userlist">管理人员列表</router-link> </li>
                                </ul>
                            </li>
                            <li class="nav-item nav-item-has-subnav" @click="switchMenu">
                                <a href="javascript:void(0)"><i class="mdi mdi-collage"></i>剧本预定</a>
                                <ul class="nav nav-subnav" @click.stop="chilsClick">
                                    <li><router-link to="/orderlist">预定列表</router-link> </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>

<!--                    <div class="sidebar-footer">-->
<!--                        <p class="copyright">Copyright &copy; 2019. <a target="_blank" href="http://lyear.itshubao.com">IT书包</a> All rights reserved.</p>-->
<!--                    </div>-->
                </div>

            </aside>
            <!--End 左侧导航-->

            <!--头部信息-->
            <header class="lyear-layout-header">

                <nav class="navbar navbar-default">
                    <div class="topbar">

                        <div class="topbar-left">
                            <div class="lyear-aside-toggler">
                                <span class="lyear-toggler-bar"></span>
                                <span class="lyear-toggler-bar"></span>
                                <span class="lyear-toggler-bar"></span>
                            </div>
                            <span class="navbar-page-title">{{title}}</span>
                        </div>

                        <ul class="topbar-right">
                            <li class="dropdown dropdown-profile">
                                <a href="javascript:void(0)" data-toggle="dropdown">
                                    <img class="img-avatar img-avatar-48 m-r-10" src="/static/images/users/avatar.jpg" alt="笔下光年" />
                                    <span>admin<span class="caret"></span></span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li> <a href="lyear_pages_profile.html"><i class="mdi mdi-account"></i> 个人信息</a> </li>
                                    <li> <a href="lyear_pages_edit_pwd.html"><i class="mdi mdi-lock-outline"></i> 修改密码</a> </li>
                                    <li> <a href="javascript:void(0)"><i class="mdi mdi-delete"></i> 清空缓存</a></li>
                                    <li class="divider"></li>
                                    <li> <a href="lyear_pages_login.html"><i class="mdi mdi-logout-variant"></i> 退出登录</a> </li>
                                </ul>
                            </li>
<!--                            &lt;!&ndash;切换主题配色&ndash;&gt;-->
<!--                            <li class="dropdown dropdown-skin">-->
<!--                                <span data-toggle="dropdown" class="icon-palette"><i class="mdi mdi-palette"></i></span>-->
<!--                                <ul class="dropdown-menu dropdown-menu-right" data-stopPropagation="true">-->
<!--                                    <li class="drop-title"><p>主题</p></li>-->
<!--                                    <li class="drop-skin-li clearfix">-->
<!--                                        <span class="inverse">-->
<!--                                            <input type="radio" name="site_theme" value="default" id="site_theme_1" checked>-->
<!--                                            <label for="site_theme_1"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="site_theme" value="dark" id="site_theme_2">-->
<!--                                            <label for="site_theme_2"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="site_theme" value="translucent" id="site_theme_3">-->
<!--                                            <label for="site_theme_3"></label>-->
<!--                                        </span>-->
<!--                                    </li>-->
<!--                                    <li class="drop-title"><p>LOGO</p></li>-->
<!--                                    <li class="drop-skin-li clearfix">-->
<!--                                        <span class="inverse">-->
<!--                                            <input type="radio" name="logo_bg" value="default" id="logo_bg_1" checked>-->
<!--                                            <label for="logo_bg_1"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_2" id="logo_bg_2">-->
<!--                                            <label for="logo_bg_2"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_3" id="logo_bg_3">-->
<!--                                            <label for="logo_bg_3"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_4" id="logo_bg_4">-->
<!--                                            <label for="logo_bg_4"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_5" id="logo_bg_5">-->
<!--                                            <label for="logo_bg_5"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_6" id="logo_bg_6">-->
<!--                                            <label for="logo_bg_6"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_7" id="logo_bg_7">-->
<!--                                            <label for="logo_bg_7"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="logo_bg" value="color_8" id="logo_bg_8">-->
<!--                                            <label for="logo_bg_8"></label>-->
<!--                                        </span>-->
<!--                                    </li>-->
<!--                                    <li class="drop-title"><p>头部</p></li>-->
<!--                                    <li class="drop-skin-li clearfix">-->
<!--                                        <span class="inverse">-->
<!--                                            <input type="radio" name="header_bg" value="default" id="header_bg_1" checked>-->
<!--                                            <label for="header_bg_1"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_2" id="header_bg_2">-->
<!--                                            <label for="header_bg_2"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_3" id="header_bg_3">-->
<!--                                            <label for="header_bg_3"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_4" id="header_bg_4">-->
<!--                                            <label for="header_bg_4"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_5" id="header_bg_5">-->
<!--                                            <label for="header_bg_5"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_6" id="header_bg_6">-->
<!--                                            <label for="header_bg_6"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_7" id="header_bg_7">-->
<!--                                            <label for="header_bg_7"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="header_bg" value="color_8" id="header_bg_8">-->
<!--                                            <label for="header_bg_8"></label>-->
<!--                                        </span>-->
<!--                                    </li>-->
<!--                                    <li class="drop-title"><p>侧边栏</p></li>-->
<!--                                    <li class="drop-skin-li clearfix">-->
<!--                                        <span class="inverse">-->
<!--                                            <input type="radio" name="sidebar_bg" value="default" id="sidebar_bg_1" checked>-->
<!--                                            <label for="sidebar_bg_1"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_2" id="sidebar_bg_2">-->
<!--                                            <label for="sidebar_bg_2"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_3" id="sidebar_bg_3">-->
<!--                                            <label for="sidebar_bg_3"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_4" id="sidebar_bg_4">-->
<!--                                            <label for="sidebar_bg_4"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_5" id="sidebar_bg_5">-->
<!--                                            <label for="sidebar_bg_5"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_6" id="sidebar_bg_6">-->
<!--                                            <label for="sidebar_bg_6"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_7" id="sidebar_bg_7">-->
<!--                                            <label for="sidebar_bg_7"></label>-->
<!--                                        </span>-->
<!--                                        <span>-->
<!--                                            <input type="radio" name="sidebar_bg" value="color_8" id="sidebar_bg_8">-->
<!--                                            <label for="sidebar_bg_8"></label>-->
<!--                                        </span>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </li>-->
<!--                            &lt;!&ndash;切换主题配色&ndash;&gt;-->
                        </ul>
                    </div>
                </nav>
            </header>
            <!--End 头部信息-->

            <!--页面主要内容-->
            <main class="lyear-layout-content">
                <!--                注意main.js 对应于ProductList.vue-->
                <router-view name="content"></router-view>
            </main>
            <!--End 页面主要内容-->
        </div>
    </div>
</template>



<script>

    export default {
        name: 'Layout',
        //将该方法暴露出去,前面changeTitle为暴露出去的，this为本身有的
        provide() {
            return {
                changeTitle: this.changeTitle
            }
        },
        data(){
            return{
                title:'首页'
            }
        },
        mounted() {
            // let recaptchaScript1 = document.createElement('script')
            // recaptchaScript1.setAttribute('src', './static/js/perfect-scrollbar.min.js')
            // document.head.appendChild(recaptchaScript1)
            // let recaptchaScript = document.createElement('script')
            // recaptchaScript.setAttribute('src', './static/js/main.min.js')
            // document.head.appendChild(recaptchaScript)
        },
        methods:{
            switchMenu(event){
                if(event.currentTarget.className == 'nav-item nav-item-has-subnav'){
                    event.currentTarget.className = 'nav-item nav-item-has-subnav active open'
                }else {
                    event.currentTarget.className = 'nav-item nav-item-has-subnav'
                }
            },
            chilsClick(){

            },

            changeTitle(title){
                this.title = title
            }
        },

    }
</script>
<style scoped>
</style>


