const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,   #吸底模式
    autoplay: false,  #自动播放
    audio: [
	{
        name: 'love after the rain',      #歌名
        artist: '西二',  #歌手
        url: 'http://music.163.com/song/media/outer/url?id=1480595882.mp3',    #mp3的url地址
        cover: 'http://p1.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?' #歌的封面
    }
	]
});
