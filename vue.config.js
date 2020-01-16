/* 代理 */
module.exports = {
    // baseUrl:"./",
    publicPath:"./",
    devServer:{
        host:"127.0.0.1",
        port:8081,
        open:true,
        // cnpm install http-proxy-middleware -D
        // 代理设置完之后，要重启。
        // 代理只是在开发环境当中起效果。
        proxy:{
            
            "/dui":{// 当你访问的地址是以/ele开头的话，就会使用该代理服务器
                target:"https://www.duitang.com",// 所要代理的服务器  接口的服务器
                changeOrigin:true,// 是否允许代理
                pathRewrite:{
                    "^/dui":""
                }
            },
        }
    }
}