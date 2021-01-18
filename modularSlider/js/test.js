class Test
{
    #btn = document.querySelector(".slider_control__button_left");
    constructor() {
        this.a = 88;
        this.b = 55;
    }

    eventsAttach()
    {
        this.#btn.addEventListener('click', this.summa.bind(this) );
    }

    summa()
    {
        let sum = this.a + this.b;
        console.log("sum = ", sum);
    }


    init(){
       this.eventsAttach()
    }
}

let slider = new Test();
slider.init();










/*
class Test {
  #btn;
  #summ = 0;
  #a = 88;
  #b = 55;
  constructor(selector){
      this.#btn = document.querySelector(selector)
  } 
  render(){
      this.#btn.textContent = summ
  }
  set a(val){this.#a = val}
  set b(val){this.#b = val} 
  get summ(){ return this.#a + this.#b }
  get log(){ console.log(this.summ) }
  eventsAttach(){
     this.#btn.addEventListener('click', this.log.bind(this))
  }
  init(){
     this.eventsAttach()
  }
}

const tst = new Test('.btn')
tst.init()
*/