//精灵对象本象----------------------------------------------------------------------

let Sprite = function (type, name, PaintSheet, behaviors) {
    this.x = 0;
    this.y = 0;
    this.w = 30;
    this.h = 50;
    this.velocity = 2;
    this.self = this;
    this.body = "black";
    this.type = type;
    this.name = name;
    this.PaintSheet = PaintSheet;
    this.behaviors = behaviors || [];
}



Sprite.prototype = {
    //更新对象(物理计算，修改游戏数值，调用behavior)
    update: function (context, self) {
        this.Detection_object();

        /*for(let behavior of this.behaviors){
            alert(this.self)
            behavior.execute(this.self);
        }*/
        for (let i = 0; i < this.behaviors.length; i++) {
            this.behaviors[i].execute(this);
        }

    },
    //探测有没有别的对象
    Detection_object: function () {
        if (this.type) {

        }
    },
    //绘制对象（调用精灵表绘制器）
    paint: function (context) {
        this.PaintSheet.paint(this, context)


    },
    test: function () {
        alert("ok");
    }
}


//精灵表绘制器----------------------------------------------------------------------

function PaintSheet(cells) {

    this.cells = cells;
    this.cellIndex = 0;
}
PaintSheet.prototype = {
    paint: function (sprite, context) {
        let cell = this.cells[this.cellIndex];
        context.strokeStyle='red';
        
        context.strokeRect(sprite.x, sprite.y, sprite.w, sprite.h);

    },
    advance: function () {
        if (this.cellIndex < 2) {
            this.cellIndex++;
        }
        else {
            this.cellIndex = 0;

        }
        //console.log('cellIndex: ', this.cellIndex);
    }
}