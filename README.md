# reactProxy
我请求的是聚合数据的新闻头条api。采用 webpack-dev-server --history-api-fallback 启动前端行项目，
在webpack.config.js 里面添加proxy 配置。采用isomorphic-fetch 来请求资源的。

文件不好找的话，请看我“本地工程目录.png”文件

准备工作：
1，Nodejs的安装
	安装官网https://nodejs.org/en/
	NPM官网https://www.npmjs.com/
2，检查安装成功命令
	node-v
	npm-v
3,NodeJs配置国内源
	在npmrc文件中添加：registry=https://registry.npm.taobao.org
	npmrc默认路径：windows：Nodejs安装目录下，nodejs\node_modules\npm\npmrc
					MAC：~下的.npmrc
4,使用NPM配置react开发环境
	npm项目初始化：npm -init
5,webpack热加载配置上
	npm install -g webpack
	npm install -g webpack-dev-server
6,以上都设置好后
	初始化我已经在webpack.config.js文件配置好了
	命令窗口运行webpack-dev-server --history-api-fallback 启动前端行项目
7，如果报错，那么请阅读-思维导图.jpg文件  
	