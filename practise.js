class CookieCutter {
    constructor(color){
        this.color = color;
    }
    getClass(){
        console.log(this.color)
    }
    setClass(color){
        this.color = color
    }

}

let cookieClassOne = new CookieCutter('blue');
let cookieClassTwo = new CookieCutter('green');

cookieClassOne.getClass();
cookieClassTwo.getClass();

cookieClassOne.setClass('white');

cookieClassOne.getClass();

