function partKaro(){
    console.log("chaloo party karne !!")
}
function homeWorkKaro(Subject, action ) {
    console.log(Subject + "ka Homework chal rha h");
    action();
}
homeWorkKaro("maths", hawa);


function hawa(){
    console.log("bakad bolu nko");
    
}
function mara(name , vishay){
    console.log(name + " tu chapat mar fakt");
    vishay()
    
}
mara("asafy", partKaro);
