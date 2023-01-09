var FRtable = []

num = FRtable.length
// console.log(num)
// console.table(FRtable)
tab = []
for(let i = 0; i < num; i++){
    const newDiv = document.createElement("div");

    // document.getElementById('displaytab').innerHTML = FRtable[i];
}
document.getElementById('textinput').select();
var copyText
function add(){
    val = document.getElementById('textinput').value
    document.getElementById('textinput').value = ""

    tab.push("\"" + val + "\"")
    document.getElementById('displaytab').innerHTML = "var TableName = [" + tab + "];"; //uncomment the "," + if you need just addind content to your tab
    return false;
}

document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        add()
    }
});