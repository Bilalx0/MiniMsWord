// target the textarea  
const target = document.getElementById('main-textarea');

// function for textarea
// To ensure that the cursor always starts at the top-left corner 
var isFirstClick = true;

function setCursorToTopLeft() {
    if (isFirstClick) {
        target.setSelectionRange(0, 0);
        isFirstClick = false;
    }
}

function resetCursor() {
    isFirstClick = false; // Ensure that cursor behavior is normal after input
}


// function for changing font family
function handleSelectChange() {
    const select = document.getElementById('font-family');
    const selectedFont = select.value;
    target.style.fontFamily = selectedFont;
}


// function for changing text color
function changeFontColor() {
    const fontColour = document.getElementById('font-color');
    const selectedColor = fontColour.value;
    target.style.color = selectedColor;
}


// function for changing text color
function changeBackgroundColor() {
    const backgroundColour = document.getElementById('background-color');
    const selectedBackgroundColour = backgroundColour.value;
    target.style.backgroundColor = selectedBackgroundColour;
}

// Js code for increasing/decreasing font size
let fontsize = 17;

// increase function
function increaseFontSize() {
    fontsize += 1;
    target.style.fontSize = fontsize + "px";
}

//decrease function
function decreaseFontSize() {
    fontsize -= 1;
    target.style.fontSize = fontsize + "px";
}

// Js code for justification of text

// function for justify content left 
function alignLeft() {
    target.style.textAlign = 'left';
}

// function for justify content right
function alignRight() {
    target.style.textAlign = 'right';
}

// function for justify content center
function alignCenter() {
    target.style.textAlign = 'center';
}
// function for justify content normal 
function textJustify() {
    target.style.textAlign = 'justify';
}

// function for bold text
function textBold() {
    target.style.fontWeight = "bold";
} 

// function for italic text
function textItalic() {
    target.style.fontStyle = "italic";
}

// function for underline text
function textUnderline() {
    target.style.textDecoration = "underline";
}