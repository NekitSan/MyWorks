// #Version 0.5.1
class BigSlider
{
    constructor()
    {
        this.preview = document.querySelector(".slider_preview__image img");

        this.buttonLeft = document.querySelector(".slider_control__button_left");
        this.buttonRight = document.querySelector(".slider_control__button_right");

        this.controlSlide = document.querySelector(".slider_list__slides");
        this.slideList = this.controlSlide.children;
        this.totalSlides = this.controlSlide.children.length;

        this.controlCheck = document.querySelector(".slider_control__list_check");
        this.chekList = this.controlCheck.children;
        this.totalCheck = this.controlCheck.children.length;
        
        this.chek = "slider_control__check";
        this.slide = "slider__slide";

        this.actChek = this.chek + "--active";
        this.actSlide = this.slide + "--active";

        this.step = 1;

    }

    eventsAttach()
    {
        this.buttonLeft.addEventListener("click", this.bildLeftButton.bind(this) );
        this.buttonRight.addEventListener("click", this.bildRightButton.bind(this) );

        this.controlCheck.addEventListener("click", this.editCheckList.bind(this) );
        this.controlSlide.addEventListener("click", this.editSlideList.bind(this) );
    }

    bildLeftButton()
    {
        for(let i = 0; i < this.totalSlides; i++)
        {
            if(this.slideList[i].classList.contains(this.actSlide) == true)
            {
                this.editPreviewButton("left", i);
                this.editStyleSlideLeft(i);
                this.editStyleCheckpLeft(i);
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
                this.editStyleCheckpRight(i);
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
    editStyleCheckpLeft(param)
    {
        if(param == 0)
        {
            this.chekList[param].classList.remove(this.actChek);
            this.chekList[this.totalSlides - this.step].classList.add(this.actChek);
        }
        else
        {
            this.chekList[param].classList.remove(this.actChek);
            this.chekList[param - this.step].classList.add(this.actChek);
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
    editStyleCheckpRight(param)
    {
        if( param == (this.totalSlides - this.step) )
        {
            this.chekList[param].classList.remove(this.actChek);
            this.chekList[0].classList.add(this.actChek);
        }
        else
        {
            this.chekList[param].classList.remove(this.actChek);
            this.chekList[param + this.step].classList.add(this.actChek);
        }
    }
    // Edit Slide
    editSlideList(e)
    {
        let trueArrSlides = Array.prototype.slice.call( this.slideList );

        if(e.target.classList.contains(this.slide) == true)
        {
            let indexSlide = trueArrSlides.indexOf(e.target); // Сам индекс
            for(let i = 0; i < this.totalSlides; i++)
            {
                this.chekList[i].classList.remove(this.actChek);
                this.slideList[i].classList.remove(this.actSlide);
            }

            e.target.classList.add(this.actSlide);
            this.chekList[indexSlide].classList.add(this.actChek);
            this.preview.setAttribute("src", trueArrSlides[indexSlide].children[0].getAttribute("src"));
        }
        else if(e.target.parentElement.classList.contains(this.slide) == true)
        {
            let indexSlide = trueArrSlides.indexOf(e.target.parentElement); // Сам индекс
            for(let i = 0; i < this.totalSlides; i++)
            {
                this.chekList[i].classList.remove(this.actChek);
                this.slideList[i].classList.remove(this.actSlide);
            }
            
            e.target.parentElement.classList.add(this.actSlide);
            this.chekList[indexSlide].classList.add(this.actChek);
            this.preview.setAttribute("src", trueArrSlides[indexSlide].children[0].getAttribute("src"));  
        }
    }
    // Edit Checkpoint
    editCheckList(e)
    {
        let trueArrChecks = Array.prototype.slice.call( this.chekList );
        let trueArrSlides = Array.prototype.slice.call( this.slideList );
        
        if( e.target.classList.contains(this.chek) == true )
        {
            if(e.target.parentElement.classList.contains(this.actChek) == false)
            {
                let indexCheck = trueArrChecks.indexOf(e.target); // Сам индекс

                for(let i = 0; i < this.totalCheck; i++)
                {
                    this.chekList[i].classList.remove(this.actChek);
                    this.slideList[i].classList.remove(this.actSlide);
                }

                e.target.classList.add(this.actChek);
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

// class EaseSlider extends BigSlider
// {

// }

let bigSlider = new BigSlider();
bigSlider.init();