//const jquery371 = require("./jQuery/jquery-3.7.1");

function createNewDiv() {
    const d = document.createElement("span");
    d.classList.add("test");
    return d;
}
function createNewBr() {
    const b = document.createElement("br");
    return b;
}

const div = createNewDiv();
const br = createNewBr();
//div.appendChild(br);

const parent = document.getElementById("textarea");
parent.appendChild(div);

parent.addEventListener("keydown", (ev) => {
   
    if (ev.key == "Enter") {
        
        changeLine();
        ev.preventDefault();
        const newLine = document.createElement('br'); // <br> for a line break
        const div1 = createNewDiv();
        const br = createNewBr();
       // div1.appendChild(br);

        parent.appendChild(div1);
        
       
    }
    if (ev.keyCode >= 65 && ev.keyCode <= 91) {
        
        ev.preventDefault();
        var data = document.getElementById("b")
        var text = data.textContent
        console.log(text)
        data.textContent = text + ev.key
        setCaretPosition()
    }
    

});
function setCaretPosition() {
    var text_div = document.getElementById("b");

    // select text from a window
    var selectedText = window.getSelection();

    // create a range
    var selectedRange = document.createRange();

    // set starting position of the cursor in the texts
    selectedRange.setStart(text_div.childNodes[0], 45);

    // collapse the range at boundaries
    selectedRange.collapse(true);

    // remove all ranges
    selectedText.removeAllRanges();

    // add a new range to the selected text
    selectedText.addRange(selectedRange);

    // focus the cursor
    text_div.focus();
}
function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}


function bold() {
    const b1 = document.createElement("strong");
   // b1.classList.add("bold");
    b1.setAttribute("id", "b");
    parent.appendChild(b1);
    //selectElementContents(el);
}









// const newLine = document.createElement('div'); // <div> for a new block-level line
/*else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
}*/
        // Insert the new line element at the caret position
        //const selection = window.getSelection();
        //const range = selection.getRangeAt(0);
        //range.deleteContents();
        //range.insertNode(newLine);

        // Move the caret to the new line
        // const newRange = document.createRange();
        // newRange.setStartAfter(newLine);
        // newRange.collapse(true);
        // selection.removeAllRanges();
        // selection.addRange(newRange);