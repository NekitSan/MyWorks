// #Version 0.5
class BigSlider
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
        this.#buttonLeft.addEventListener("click", this.bildLeftButton.bind(this) );
        this.#buttonRight.addEventListener("click", this.bildRightButton.bind(this) );

        this.#buttonMoveChekpoint.addEventListener("click", this.editCheckpointList.bind(this) );
        this.#buttonMoveSlide.addEventListener("click", this.editSlideList.bind(this) );
    }

    bildLeftButton()
    {
        for(let i = 0; i < this.totalSlides; i++)
        {
            if(this.slideList[i].classList.contains(this.actSlide) == true)
            {
                this.editPreviewButton("left", i);
                this.editStyleSlideLeft(i);
                this.editStyleCheckpointLeft(i);
                break;
            }
        } 
    }

    bildRightButton()
    {
        for(let i = 0; i < this.totalSlides; i++)
        {
            if(this.slideList[i].classList.contains(this.actSlide) == true)
            {
                this.editPreviewButton("right", i);
                this.editStyleSlideRight(i);
                this.editStyleCheckpointRight(i);
                break;
            }
        } 
    }

    // Edit Preview
    editPreviewButton(condition, param)
    {
        switch(condition)
        {
            case "left":
                if(param == 0)
                {
                    this.preview.setAttribute("src", this.slideList[this.totalSlides - this.step].children[0].getAttribute("src"));
                }
                else
                {
                    this.preview.setAttribute("src", this.slideList[param - this.step].children[0].getAttribute("src"));
                }
            break;
            case "right":
                if( param == (this.totalSlides - this.step) )
                {
                    this.preview.setAttribute("src", this.slideList[0].children[0].getAttribute("src"));
                }
                else
                {
                    this.preview.setAttribute("src", this.slideList[param + this.step].children[0].getAttribute("src"));
                }
            break;
        }
    }

    // Button left
    editStyleSlideLeft(param)
    {
        if(param == 0)
        {
            this.slideList[param].classList.remove(this.actSlide);
            this.slideList[this.totalSlides - this.step].classList.add(this.actSlide);
        }
        else
        {
            this.slideList[param].classList.remove(this.actSlide);
            this.slideList[param - this.step].classList.add(this.actSlide);
        }
    }
    editStyleCheckpointLeft(param)
    {
        if(param == 0)
        {
            this.chekpointList[param].classList.remove(this.actChekpoint);
            this.chekpointList[this.totalSlides - this.step].classList.add(this.actChekpoint);
        }
        else
        {
            this.chekpointList[param].classList.remove(this.actChekpoint);
            this.chekpointList[param - this.step].classList.add(this.actChekpoint);
        }
    }

    // Button right
    editStyleSlideRight(param)
    {
        if( param == (this.totalSlides - this.step) )
        {
            this.slideList[param].classList.remove(this.actSlide);
            this.slideList[0].classList.add(this.actSlide);
        }
        else
        {
            this.slideList[param].classList.remove(this.actSlide);
            this.slideList[param + this.step].classList.add(this.actSlide);
        }
    }
    editStyleCheckpointRight(param)
    {
        if( param == (this.totalSlides - this.step) )
        {
            this.chekpointList[param].classList.remove(this.actChekpoint);
            this.chekpointList[0].classList.add(this.actChekpoint);
        }
        else
        {
            this.chekpointList[param].classList.remove(this.actChekpoint);
            this.chekpointList[param + this.step].classList.add(this.actChekpoint);
        }
    }

    // Edit Slide
    editSlideList(e)
    {
        let trueArrSlides = Array.prototype.slice.call( this.slideList );

        if(e.target.classList.contains(this.slide) == true)
        {
            let indexSlide = trueArrSlides.indexOf(e.target);
            for(let i = 0; i < this.totalSlides; i++)
            {
                this.chekpointList[i].classList.remove(this.actChekpoint);
                this.slideList[i].classList.remove(this.actSlide);
            }

            e.target.classList.add(this.actSlide);
            this.chekpointList[indexSlide].classList.add(this.actChekpoint);
            this.preview.setAttribute("src", trueArrSlides[indexSlide].children[0].getAttribute("src"));
        }
        else if(e.target.parentElement.classList.contains(this.slide) == true)
        {
            let indexSlide = trueArrSlides.indexOf(e.target.parentElement);
            for(let i = 0; i < this.totalSlides; i++)
            {
                this.chekpointList[i].classList.remove(this.actChekpoint);
                this.slideList[i].classList.remove(this.actSlide);
            }
            
            e.target.parentElement.classList.add(this.actSlide);
            this.chekpointList[indexSlide].classList.add(this.actChekpoint);
            this.preview.setAttribute("src", trueArrSlides[indexSlide].children[0].getAttribute("src"));  
        }
    }

    // Edit Checkpoint
    editCheckpointList(e)
    {
        let trueArrChecks = Array.prototype.slice.call( this.chekpointList );
        let trueArrSlides = Array.prototype.slice.call( this.slideList );
        
        if( e.target.classList.contains(this.chekpoint) == true )
        {
            if(e.target.parentElement.classList.contains(this.actChekpoint) == false)
            {
                let indexCheck = trueArrChecks.indexOf(e.target);

                for(let i = 0; i < this.totalCheckpoints; i++)
                {
                    this.chekpointList[i].classList.remove(this.actChekpoint);
                    this.slideList[i].classList.remove(this.actSlide);
                }

                e.target.classList.add(this.actChekpoint);
                this.slideList[indexCheck].classList.add(this.actSlide);

                this.preview.setAttribute("src", trueArrSlides[indexCheck].children[0].getAttribute("src"));
            }
        }
    }

    init()
    {
       this.eventsAttach();
    }
}

let bigSlider = new BigSlider();
bigSlider.init();