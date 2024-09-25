import scrollama from "scrollama";

const scroller = scrollama();

const dependent=[36, 35, 24, 6, 7, 3, 9, 22, 17, 8, 2, 30, 34, 29, 28, 1, 25, 18, 13, 19, 23, 12];
const finaid=[35, 24, 6, 7, 3, 17, 8, 2, 34, 29, 28, 1, 25, 18, 13, 19, 23, 12];

var responses = document.querySelector("#responses");
var responses2 = document.querySelector("#responses-2");
var rest = document.querySelector("#nonresponses");
var rest2 = document.querySelector("#nonresponses-2");

var last = 0;


function init(){
    console.log("start");
    scroller
        .setup({
            step: "#scrolly .scrolly-overlay .step",
            offset: 0.45,
            debug: false
        })
        .onStepEnter(function({ element, index, direction}) {
            if (direction === "down"){
                if (index === 1 && last != 1){
                    console.log(responses);
                    for(var i = 0; i < responses.children.length; i++){
                        responses.children[i].style.fill="#8db8fc";
                        responses.children[i].setAttribute("cx",Number(responses.children[i].cx.baseVal.value)+150);
                    }
                    for(var i = 0; i < responses2.children.length; i++){
                        console.log(responses2.children[i]);
                        responses2.children[i].style.fill="#8db8fc";
                        responses2.children[i].setAttribute("cx",Number(responses2.children[i].cx.baseVal.value)+50);
                    }
                    rest.style.opacity="0";
                    rest2.style.opacity="0";
                }
                if(index === 2 && last != 2){
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="#10133b";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                    }
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="#10133b";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="orange";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)-20);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="orange";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)-20);
                    }
                    document.querySelector("#circle37").setAttribute("cx",Number(document.querySelector("#circle37").cx.baseVal.value)+40);
                    document.querySelector("#circle37").setAttribute("cy",Number(document.querySelector("#circle37").cy.baseVal.value)+20);
                    document.querySelector("#circle37").style.fill="#7D7D7D";
                    document.querySelector("#circle37-2").setAttribute("cx",Number(document.querySelector("#circle37-2").cx.baseVal.value)+40);
                    document.querySelector("#circle37-2").setAttribute("cy",Number(document.querySelector("#circle37-2").cy.baseVal.value)+20);
                    document.querySelector("#circle37-2").style.fill="#7D7D7D";
                }
                if(index === 3 && last != 3){
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="#7D7D7D";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                    }
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="#7D7D7D";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="#7D7D7D";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)+20);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="#7D7D7D";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)+20);
                    }
                    document.querySelector("#circle37").style.fill="#7D7D7D";
                    document.querySelector("#circle37").setAttribute("cx",Number(document.querySelector("#circle37").cx.baseVal.value)-40);
                    document.querySelector("#circle37").setAttribute("cy",Number(document.querySelector("#circle37").cy.baseVal.value)-20);
                    document.querySelector("#circle37-2").style.fill="#7D7D7D";
                    document.querySelector("#circle37-2").setAttribute("cx",Number(document.querySelector("#circle37-2").cx.baseVal.value)-40);
                    document.querySelector("#circle37-2").setAttribute("cy",Number(document.querySelector("#circle37-2").cy.baseVal.value)-20);
                    setTimeout(()=>{
                        finaid.forEach((item) => {
                            document.querySelector("#circle"+item).style.fill="#3d6ef5";
                            document.querySelector("#circle"+item+"-2").style.fill="#3d6ef5";
                          });
                    },325);
                }
                if(index === 4 && last != 4){
                    dependent.forEach((item) => {
                        document.querySelector("#circle"+item).style.fill="#69b87e";
                        document.querySelector("#circle"+item+"-2").style.fill="#69b87e";
                    });
                }
            }
            if (direction === "up"){
                if (index === 0 && last != 0){
                    console.log(responses);
                    for(var i = 0; i < responses.children.length; i++){
                        responses.children[i].style.fill="#7D7D7D";
                        responses.children[i].setAttribute("cx",Number(responses.children[i].cx.baseVal.value)-150);
                    }
                    for(var i = 0; i < responses2.children.length; i++){
                        responses2.children[i].style.fill="#7D7D7D";
                        responses2.children[i].setAttribute("cx",Number(responses2.children[i].cx.baseVal.value)-50);
                    }
                    rest.style.opacity="1";
                    rest2.style.opacity="1";
                }
                if(index === 1 && last != 1){
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="#8db8fc";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                    }
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="#8db8fc";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="#8db8fc";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)+20);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="#8db8fc";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)+20);
                    }
                    document.querySelector("#circle37").setAttribute("cx",Number(document.querySelector("#circle37").cx.baseVal.value)-40);
                    document.querySelector("#circle37").setAttribute("cy",Number(document.querySelector("#circle37").cy.baseVal.value)-20);
                    document.querySelector("#circle37").style.fill="#8db8fc";
                    document.querySelector("#circle37-2").setAttribute("cx",Number(document.querySelector("#circle37-2").cx.baseVal.value)-40);
                    document.querySelector("#circle37-2").setAttribute("cy",Number(document.querySelector("#circle37-2").cy.baseVal.value)-20);
                    document.querySelector("#circle37-2").style.fill="#8db8fc";
                }
                if(index === 2 && last != 2){
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="#10133b";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                    }
                    for(var i=1; i<34; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="#10133b";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i));
                        item.style.fill="orange";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)-20);
                    }
                    for(var i=34; i<37; i++){
                        var item = document.querySelector("#circle"+String(i)+"-2");
                        item.style.fill="orange";
                        item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                        item.setAttribute("cy",Number(item.cy.baseVal.value)-20);
                    }
                    document.querySelector("#circle37").style.fill="#7D7D7D";
                    document.querySelector("#circle37").setAttribute("cx",Number(document.querySelector("#circle37").cx.baseVal.value)+40);
                    document.querySelector("#circle37").setAttribute("cy",Number(document.querySelector("#circle37").cy.baseVal.value)+20);
                    document.querySelector("#circle37-2").style.fill="#7D7D7D";
                    document.querySelector("#circle37-2").setAttribute("cx",Number(document.querySelector("#circle37-2").cx.baseVal.value)+40);
                    document.querySelector("#circle37-2").setAttribute("cy",Number(document.querySelector("#circle37-2").cy.baseVal.value)+20);
                    // setTimeout(()=>{
                    //     dependent.forEach((item) => {
                    //         document.querySelector("#circle"+item).style.fill="#69b87e";
                    //         document.querySelector("#circle"+item+"-2").style.fill="#69b87e";
                    //       });
                    // },325);
                }
                if(index === 3 && last != 3){
                    setTimeout(()=>{
                        dependent.filter(n => !finaid.includes(n)).forEach((item) => {
                            document.querySelector("#circle"+item).style.fill="#7D7D7D";
                            document.querySelector("#circle"+item+"-2").style.fill="#7D7D7D";
                        });
                        finaid.forEach((item) => {
                            document.querySelector("#circle"+item).style.fill="#3d6ef5";
                            document.querySelector("#circle"+item+"-2").style.fill="#3d6ef5";
                          });
                    },325);   
                }
            }
            last = index;
        })
        .onStepExit(function({ element, index, direction}){
        })
}

document.addEventListener('DOMContentLoaded', init);
init();
