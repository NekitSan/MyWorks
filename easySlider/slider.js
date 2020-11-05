const VERSION = 0.9;
/*
    * Ease slider | Разработан: NekitSan. GitHub: https://github.com/NekitSan
*/
let slider = {
    "CheckPoints" : {
        "Block" : document.querySelector(".slider__button--items"),
        "Elements" : [
            document.querySelector(".slider__button--items input:nth-child(1)"),
            document.querySelector(".slider__button--items input:nth-child(2)"),
            document.querySelector(".slider__button--items input:nth-child(3)"),
            document.querySelector(".slider__button--items input:nth-child(4)"),
            document.querySelector(".slider__button--items input:nth-child(5)")
        ]
    },
    "Buttons" : {
        "L" : document.querySelector(".slider__button--left"), 
        "R" : document.querySelector(".slider__button--right")
    },
    "Slides" : [
        document.querySelector(".slider__slides .slide:nth-child(1)"),
        document.querySelector(".slider__slides .slide:nth-child(2)"),
        document.querySelector(".slider__slides .slide:nth-child(3)"),
        document.querySelector(".slider__slides .slide:nth-child(4)"),
        document.querySelector(".slider__slides .slide:nth-child(5)")
    ]
};

slider.CheckPoints.Block.onclick = function(e)
{
    if(e.target.value != undefined)
    {
        for (let i = 0; i < slider.Slides.length; i++) {
            if(i == e.target.value)
            {
                slider.Slides[i].classList.remove("deactiv");
            }
            else
            {
                slider.Slides[i].classList.add("deactiv");
            }
        }
    }
}

slider.Buttons.L.onclick = function ()
{
    let sizeObject = (slider.Slides.length) - 1;

    for (let i = 0; i < slider.Slides.length; i++) {
        if(slider.Slides[i].classList.contains("deactiv") == false)
        {
            if(i < 1)
            {
                slider.Slides[0].classList.add("deactiv");
                slider.Slides[sizeObject].classList.remove("deactiv");

                slider.CheckPoints.Elements[0].checked = "";
                slider.CheckPoints.Elements[sizeObject].checked = "checked";
            }
            else
            {
                slider.Slides[i].classList.add("deactiv");
                slider.Slides[i-1].classList.remove("deactiv");

                slider.CheckPoints.Elements[i].checked = "";
                slider.CheckPoints.Elements[i-1].checked = "checked";
            }
            break;
        }
    }
}
slider.Buttons.R.onclick = function ()
{
    let sizeObject = (slider.Slides.length) - 2;

    for (let i = 0; i < slider.Slides.length; i++) {
        if(slider.Slides[i].classList.contains("deactiv") == false)
        {
            if(i > sizeObject)
            {
                slider.Slides[i].classList.add("deactiv");
                slider.Slides[0].classList.remove("deactiv");

                slider.CheckPoints.Elements[i].checked = "";
                slider.CheckPoints.Elements[0].checked = "checked";
            }
            else
            {
                slider.Slides[i].classList.add("deactiv");
                slider.Slides[i+1].classList.remove("deactiv");

                slider.CheckPoints.Elements[i].checked = "";
                slider.CheckPoints.Elements[i+1].checked = "checked";
            }
            break;
        }
    }
}