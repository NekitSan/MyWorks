var inputTextr;

var symbolStorageEngInSunn = {
	"A" : "/•",
	"B" : "^-",
	"C" : "θ",
	"D" : "[)",
	"E" : "Ξ",
	"F" : "≑",
	"G" : "Θ",
	"H" : "[-",
	"I" : "|•",
	"J" : "|+•",
	"K" : "|•<",
	"L" : "⇆",
	"M" : "W",
	"N" : "/•/",
	"O" : "⊙",
	"P" : "•",
	"Q" : "0\\",
	"R" : "₽",
	"S" : "~•",
	"T" : "|+|",
	"V" : "^=",
	"U" : "Ω",
	"W" : "=^",
	"X" : "x•",
	"Y" : "?-",
	"Z" : "°+°"
};

class translate
{
    constructor(inputText)
    {
        this.text = inputText;
	}
	// Перевод с Англиского в Солнечный
    interpreterEngInSunn()
    {
		var translateText = this.text.replace(/./gi,$0=>symbolStorageEngInSunn[$0.toUpperCase()]||$0);
		document.TextOutputTranslate.textLangeOutput.value = translateText;
    }
}

function translater()
{
	inputText = document.TextInputTranslate.textLangeInput.value;

	if(document.Menu.Lang[1].checked)
	{
		console.log("В разработке");
	}
	else
	{
		let sunnyText = new translate(inputText);

		console.log(sunnyText);
		sunnyText.interpreterEngInSunn();
	}
}
