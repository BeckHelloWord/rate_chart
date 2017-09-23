function getChart(dom) {
    $.get('./data/data.json', function (data) {
        if (data.isSccuess) {
            var data = data;
            //获取模板
            $.get('./chart-template.html', function (reg) {
                var render = template.compile(reg);
                var html = render(data);
                dom.innerHTML = html;
            })
        }
    })


    // promise写法
    /*var promise = new Promise((resolve, reject) => {
        $.get('./data/data.json', function (data) {
            if (data.isSccuess) {
                resolve(data);
            } else {
                reject('ajax请求失败');
            }
        })
    });
    promise.then(data => {
        $.get('./chart-template.html', function (reg) {
            var render = template.compile(reg);
            var html = render(data);
            document.getElementById('rate-box').innerHTML = html;
        })
    }).catch(message => console.log(message));*/
}