class Maze {
    constructor(){
        this.wall1 = createSprite(400,200,100,100);
        this.wall2 = createSprite(280,200,100,100);
        this.wall5 = createSprite(160,165,100,180);
        this.wall1.addImage(v);
        this.wall5.addImage(d);
        this.wall1.scale = 0.7;
        this.wall5.scale = 0.7;
    }
    display(){
        drawSprites();
    }
}