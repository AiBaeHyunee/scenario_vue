<script>
    // 定义一些公共的属性和方法
    const API_ROOT = "http://127.0.0.1:8181"
    // const API_ROOT = "http://10.7.189.99:8080"

    function commonFun() {
        console.log("公共方法")
    }
    // 暴露出这些属性和方法
    export default {
        API_ROOT,
        commonFun
    }
</script>
