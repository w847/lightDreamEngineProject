let GameDemo = new Game("Demo", "Draw");
GameDemo.start();
GameDemo.addSprites(new Sprite("player", "p1", new PaintSheet({ a: "", b: "" }),
[
    {
        //behavior 精灵表索引自增
        execute: function (Sprite) {
            Sprite.PaintSheet.advance();
            //if(Sprite.Paintsheet.cellIndex == )
        }
    }, {
        //behavior 移动
        execute: function () {
            
        }
    }
]))
/*
GameDemo.addSprites(new Sprite("enemy", "1"))
GameDemo.addSprites(new Sprite("enemy", "1"))
GameDemo.addSprites(new Sprite("enemy", "1"))
GameDemo.addSprites(new Sprite("enemy", "1"))
GameDemo.addSprites(new Sprite("enemy", "1"))
*/


//添加键监听----------------------------------------------------------------------
GameDemo.addKeyListener({
    key: "left",
    value: function (self) {
        //alert("箭头左")
        let p1 = self.getSprites("p1");
        p1.x -= 20;
    }
})
GameDemo.addKeyListener({
    key: "up",
    value: function (self) {
        //alert("箭头上");
        let p1 = self.getSprites("p1");
        p1.y -= 20;
    }
})
GameDemo.addKeyListener({
    key: "right",
    value: function (self) {
        //alert("箭头右");
        let p1 = self.getSprites("p1");
        p1.x += 20;
    }
})
GameDemo.addKeyListener({
    key: "down",
    value: function (self) {
        //alert("箭头下");
        let p1 = self.getSprites("p1");
        p1.y += 20;
    }
})

//开始检测事件

window.onkeydown = (e) => { GameDemo.keyCode = e.keyCode; };

setInterval(() => {
    GameDemo.keyPressed();
    
}, 100)

