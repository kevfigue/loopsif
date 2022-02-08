var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

// let wrapperEle = document.createElement("div");
// wrapperEle.setAttribute('class', 'wrapper');
// let eleImg = document.createElement('img');
// eleImg.setAttribute('class', 'autobot decepticon');

function eleMaker(val){
    let ele = document.createElement("div");

    ele.setAttribute('class', 'character');

    ele.innerHTML=val;

    document.body.appendChild(ele);
    let eleImg = document.createElement('img');
    ele.appendChild(eleImg);
    if(chrs.afl==="decepticon") {
        eleImg.setAttribute('class', 'decepticon');
        eleImg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png');
    }else{
        eleImg.setAttribute('class', 'autobot');
        eleImg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png');

    }
}
// function imgMaker(){
//     ele.appendChild(eleImg);
// }






// ele.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png');

// .style.color to change color

    // eleMaker("Name: "+chrs.name);
    // eleMaker("Class: "+chrs.class);
    // eleMaker("Vehicle: "+chrs.vehicle);
function writeItems() {
    for (let i = 0; i < chrs.length; i++) {
        eleMaker("Name: " + chrs[i].name);
        eleMaker("Class: " + chrs[i].class);
        eleMaker("Vehicle: " + chrs[i].vehicle);
    }
}
writeItems();

    // if(chrs.afl==="autobot") {
    //     chrs.appendChild();
    // }else if(chrs.afl==="decepticon"){
    //     chrs.push({class: "decepticon"});
    // }
// //
// console.log(chrs);

// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white

