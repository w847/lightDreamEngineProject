let Game = function (name, canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.self = this;
    this.context = this.canvas.getContext("2d");
    this.gameName = name;

    //canvas元素宽高
    this.width = this.canvas.width = 640;
    this.height = this.canvas.height = 480;

    //监听按键
    this.keyListeners = [];

    //fps
    this.fps = 60;
    this.start_fps = 60;

    //精灵
    this.sprites = [];



    //声音
    this.soundOn = true;
    this.soundChannels = [];
    this.audio = new Audio();
    this.soundChannels_num = 10
    for (let i = 0; i < this.soundChannels_num; i++) {
        this.soundChannels.push(new Audio());
    }

    //暂停状态
    this.paused_timeout = 100;
    this.paused = false





    



}


//游戏引擎主体代码

Game.prototype = {
    //开始循环
    start: function () {
        let self = this;
        window.requestAnimationFrame(
            function (time) {
                self.animate.call(self, time);
            }
        )

    },
    //游戏循环内容
    animate: function (time) {
        let self = this;
        if (this.paused) {
            setTimeout(function () { self.animate.call(self, this); }, paused_timeout);
        }
        else {
            this.tick();
            this.clearScreen()

            this.startAnimate(time);
            this.paintUnderSprites();
            this.updateSprites();
            this.paintSprites();
            this.paintOverSprites();

            this.endAnimate();

            window.requestAnimationFrame(
                function (time) {
                    self.animate.call(self, time);
                }
            )
        }
    },



    //开始动画时执行
    startAnimate: function (time) {

    },

    //在精灵对象绘制前执行
    paintUnderSprites: function () {
        this.context.fillStyle = 'pink';

        this.context.fillRect(0, 0, this.width, this.height);

    },

    //更新精灵
    updateSprites: function (time) {
        for (let i = 0; i < this.sprites.length; i++) {
            this.sprites[i].update(this.context, this.self);
        }
    },

    //绘制精灵
    paintSprites: function (time) {
        for (let i = 0; i < this.sprites.length; i++) {
            this.sprites[i].paint(this.context);
        }
    },

    //在精灵对象绘制后执行
    paintOverSprites: function () {

    },

    //结束动画时执行
    endAnimate: function () {

    },


    //tick
    tick: function () {

    },


    //清除屏幕
    clearScreen: function () {
        this.context.clearRect(0, 0, this.width, this.height);

    },

    //添加精灵对象
    addSprites: function (TheSprites) {
        this.sprites.push(TheSprites);
    },
    //获取精灵对象
    getSprites: function (name) {
        for (let i in this.sprites) {
            if (this.sprites[i].name === name) {    
                return this.sprites[i];
            }
            return null;
        }
    },





    //切换暂停
    togglePaused: function () {
        this.paused = !paused;
    },

    //对象帧速率计算
    pixelsPerFrame: function (time, velocity) {
        return velocity / this.fps;
    },


    //添加键监听
    addKeyListener: function (keyListenerJson) {
        
        this.keyListeners.push(keyListenerJson);

    },

    //寻找监听对应函数
    findKeyListener: function (key) {
        
        let Listener = undefined;
        this.keyListeners.forEach((ListenerKeyValue)=>{
            let ListenerKey = ListenerKeyValue;
            if (ListenerKeyValue.key === key) {
                
                Listener = ListenerKeyValue.value;

            }
        })
        return Listener;
    },

    //按下键时调用
    keyPressed: function () {
        let Listener = undefined,
            key = undefined;

        switch (this.keyCode) {
            case 37: key = 'left'; break;
            case 38: key = 'up'; break;
            case 39: key = 'right'; break;
            case 40: key = 'down'; break;

        }
        Listener = this.findKeyListener(key);
        
        if (Listener) {
            Listener(this.self);
        }
        this.keyCode = "";
    }
    


}