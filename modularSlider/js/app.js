class Slider
{
    #buttonLeft = document.querySelector(".slider_control__button_left");
    #buttonRight = document.querySelector(".slider_control__button_right");
    #buttonMoveChekpoint = document.querySelector(".slider_control__list_checkpoints");
    #buttonMoveSlide = document.querySelector(".slider_list__slides");

    constructor()
    {
        this.preview = document.querySelector(".slider_preview__image img");


        this.chekpointList = document.querySelector(".slider_control__list_checkpoints").children;
        this.totalCheckpoints = document.querySelector(".slider_control__list_checkpoints").children.length;
        
        this.slideList = document.querySelector(".slider_list__slides").children;
        this.totalSlides = document.querySelector(".slider_list__slides").children.length;

        this.actChekpoint = "slider_control__checkpoint--active";
        this.actSlide = "slider__slide--active";
        
        this.chekpoint = "slider_control__checkpoint";
        this.slide = "slider__slide";

        this.step = 1;
    }

    eventsAttach()
    {
        this.#buttonLeft.addEventListener("click", this.clickButtonLeft.bind(this) );
        this.#buttonRight.addEventListener("click", this.clickButtonRight.bind(this) );

        this.#buttonMoveChekpoint.addEventListener("click", this.clickExcretion.bind(this) );
        this.#buttonMoveSlide.addEventListener("click", this.clickExcretion.bind(this) );
    }

    clickButtonLeft()
    {
        for(let i = 0; i < this.totalSlides; i++)
        {
            if(this.slideList[i].classList.contains(this.actSlide) == true)
            {
                if(i == 0)
                {
                    //edit style slide list
                    this.slideList[i].classList.remove(this.actSlide);
                    this.slideList[this.totalSlides - this.step].classList.add(this.actSlide);
                    
                    //edit style check list
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.chekpointList[this.totalSlides - this.step].classList.add(this.actChekpoint);

                    //edit preview
                    this.preview.setAttribute("src", this.slideList[this.totalSlides - this.step].children[0].getAttribute("src"));
                }
                else
                {
                    //edit style slide list
                    this.slideList[i].classList.remove(this.actSlide);
                    this.slideList[i - this.step].classList.add(this.actSlide);

                    //edit style check list
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.chekpointList[i - this.step].classList.add(this.actChekpoint);

                    //edit preview
                    this.preview.setAttribute("src", this.slideList[i - this.step].children[0].getAttribute("src"));
                }
                break;
            }
        } 
    }

    clickButtonRight()
    {
        for(let i = 0; i < this.totalSlides; i++)
        {
            if(this.slideList[i].classList.contains(this.actSlide) == true)
            {
                if(i == (this.totalSlides - this.step))
                {
                    //edit style slide list
                    this.slideList[i].classList.remove(this.actSlide);
                    this.slideList[0].classList.add(this.actSlide);

                    //edit style check list
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.chekpointList[0].classList.add(this.actChekpoint);

                    //edit preview
                    this.preview.setAttribute("src", this.slideList[0].children[0].getAttribute("src"));
                }
                else
                {
                    //edit style slide list
                    this.slideList[i].classList.remove(this.actSlide);
                    this.slideList[i + this.step].classList.add(this.actSlide);

                    //edit style check list
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.chekpointList[i + this.step].classList.add(this.actChekpoint);

                    //edit preview
                    this.preview.setAttribute("src", this.slideList[i + this.step].children[0].getAttribute("src"));
                }
                break;
            }
        } 
    }

    clickExcretion(e)
    {
        // Преобразую колекцию/DOM-object в массив
        let trueArrChecks = Array.prototype.slice.call( this.chekpointList );
        let trueArrSlides = Array.prototype.slice.call( this.slideList );
        
        // Перещелкивеи чеки
        if( e.target.classList.contains(this.chekpoint) == true )
        {
            if(e.target.parentElement.classList.contains(this.actChekpoint) == false)
            {
                let indexCheck = trueArrChecks.indexOf(e.target); // Сам индекс

                for(let i = 0; i < this.totalCheckpoints; i++)
                {
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.slideList[i].classList.remove(this.actSlide);
                }

                e.target.classList.add(this.actChekpoint);
                this.slideList[indexCheck].classList.add(this.actSlide);

                this.preview.setAttribute("src", trueArrSlides[indexCheck].children[0].getAttribute("src"));
                console.log("indexCheck", indexCheck);
            }
        }

        // Перещелкивеи слайды
        if(e.target.classList.contains(this.slide) == true )
        {
            console.log(e.target);
            if(e.target.parentElement.classList.contains(this.actSlide) == false)
            {
                let indexSlide = trueArrSlides.indexOf(e.target.parentElement); // Сам индекс

                for(let i = 0; i < this.totalCheckpoints; i++)
                {
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.slideList[i].classList.remove(this.actSlide);
                }

                e.target.parentElement.classList.add(this.actSlide);
                this.chekpointList[indexSlide].classList.add(this.actChekpoint);

                this.preview.setAttribute("src", trueArrSlides[indexSlide].children[0].getAttribute("src"));
            }
        }
    }

    init()
    {
       this.eventsAttach();
    }
}

let slider = new Slider();
slider.init();