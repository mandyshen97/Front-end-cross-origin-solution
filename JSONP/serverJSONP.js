let express = require('express'),
	app = express();
app.listen(8001, _ => { // 监听8001端口
	console.log('OK!');
});
app.get('/list', (req, res) => {
	let {
		callback = Function.prototype // callback如果没有，默认为空的函数
	} = req.query;
	let data = {
		code: 0,
		message: '返回jsonp请求的结果'
	};
	res.send(`${callback}(${JSON.stringify(data)})`); //=>后端需要处理好这样的数据格式
});