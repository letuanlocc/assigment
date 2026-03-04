function caculatechuvi(a,b,callback){
    const chuvi = (a+b)*2;
    callback(chuvi);
}
function caculatedientich(a,b,callback){
    const dientich = (a*b);
    callback(dientich);
}
function caldientich(dientich){
    document.getElementById("dientichResult").innerText = "Diện tích hcn: " + dientich;
}
function calchuvi(chuvi){
    document.getElementById("chuviResult").innerText = "Chu vi hcn: " + chuvi;
}

function caculation(){
    const lenght = parseFloat(document.getElementById("lenght").value);
    const width = parseFloat(document.getElementById("width").value);
    caculatedientich(lenght,width,caldientich);
    caculatechuvi(lenght,width,calchuvi);
}