const VERSION = 1.0;
/*
    * Ease slider | Разработан: NekitSan. GitHub: https://github.com/NekitSan
*/
let slider = {
    "CheckPoints" : {
        "Quantity" : document.querySelector(".slider__button--items").children.length,
        "Elements" : document.querySelector(".slider__button--items").children,
        "Element" : document.querySelector(".slider__button--items")
    },
    "Buttons" : {
        "L" : document.querySelector(".slider__button--left"), 
        "R" : document.querySelector(".slider__button--right")
    },
    "Slides" : {
        "Quantity" : document.querySelector(".slider__slides").children.length,
        "Elements" : document.querySelector(".slider__slides").children,
        "Block" : document.querySelector(".slider__slides")
    },
    maxQuantity(mod)
    {
        if(mod == "left")
        {
            return ( (slider.Slides.Quantity) - 1 );
        }
        else{
            return ( (slider.Slides.Quantity) - 2 );
        }
    }
};

if(slider.Slides.Quantity != slider.CheckPoints.Quantity)
{
    alert("Ошибка: Не совпадает число слайдов с числом чекпоинтов!");
}
else
{
    slider.CheckPoints.Element.onclick = function(e)
    {
        if(e.target.value != undefined)
        {
            for (let i = 0; i < slider.Slides.Quantity; i++) {
                if(i == e.target.value)
                {
                    slider.Slides.Elements[i].classList.remove("deactiv");
                }
                else
                {
                    slider.Slides.Elements[i].classList.add("deactiv");
                }
            }
        }
    }
    
    slider.Buttons.L.onclick = function ()
    {
        for (let i = 0; i < slider.Slides.Quantity; i++) {
            if(slider.Slides.Elements[i].classList.contains("deactiv") == false)
            {
                if(i < 1)
                {
                    slider.Slides.Elements[i].classList.add("deactiv");
                    slider.Slides.Elements[slider.maxQuantity('left')].classList.remove("deactiv");
    
                    slider.CheckPoints.Elements[slider.maxQuantity('left')].checked = "checked";
                }
                else
                {
                    slider.Slides.Elements[i].classList.add("deactiv");
                    slider.Slides.Elements[i-1].classList.remove("deactiv");
    
                    slider.CheckPoints.Elements[i-1].checked = "checked";
                }
                break;
            }
        }
    }
    
    slider.Buttons.R.onclick = function ()
    {
        for (let i = 0; i < slider.Slides.Quantity; i++) {
            if(slider.Slides.Elements[i].classList.contains("deactiv") == false)
            {
                if(i > slider.maxQuantity())
                {
                    slider.Slides.Elements[i].classList.add("deactiv");
                    slider.Slides.Elements[0].classList.remove("deactiv");
    
                    slider.CheckPoints.Elements[0].checked = "checked";
                }
                else
                {
                    slider.Slides.Elements[i].classList.add("deactiv");
                    slider.Slides.Elements[i+1].classList.remove("deactiv");
    
                    slider.CheckPoints.Elements[i+1].checked = "checked";
                }
                break;
            }
        }
    }
}