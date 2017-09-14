function download(url, savepath, callback){
    var http = require('http');
    var fs = require('fs');
    var outfile = fs.createWriteStream(savepath);

    var req = http.get(url, (res)=>{
        res.pipe(outfile);
        res.on('end',()=>{
            outfile.close();
            callback;
        })
    })
}

download("http://finance.naver.com/news/news_list.nhn?mode=LSS2D&section_id=101&section_id2=258&page=1", "finance_main.html",function(){console.log('ok.')});
