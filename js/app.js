var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

// let wrapperEle = document.createElement("div");
// let eleImg = document.createElement("img");

function eleMaker(val){
    let wrapperEle = document.createElement("div");
    let nameEle = document.createElement("div");
    let classEle = document.createElement("div");
    let vehicleEle = document.createElement("div");
    let eleImg = document.createElement("img");

    wrapperEle.setAttribute("class", "character");

    document.body.appendChild(wrapperEle);
    wrapperEle.appendChild(eleImg);
    wrapperEle.appendChild(nameEle);
    wrapperEle.appendChild(classEle);
    wrapperEle.appendChild(vehicleEle);

    nameEle.innerHTML="Name: " +val.name;
    classEle.innerHTML="Class: " +val.class.toUpperCase();;
    vehicleEle.innerHTML="Vehicle: " +val.vehicle;

    vehicleEle.style.color = "green";

    if(val.afl==="decepticon") {
        wrapperEle.setAttribute('class', 'character decepticon');
        eleImg.setAttribute('class', 'decepticon');
        eleImg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png');
    }else {
        wrapperEle.setAttribute('class', 'character autobot');
        eleImg.setAttribute('class', 'autobot');
        eleImg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png');
    }


    if(val.vehicle==="truck"){
        vehicleEle.style.color = "blue";
    }else if(val.vehicle==="tank") {
        vehicleEle.style.color = "green";
    }else if(val.vehicle==="car") {
        vehicleEle.style.color = "gold";
    }else if(val.vehicle==="plane") {
        vehicleEle.style.color = "white";
    }

}
function writeItems() {
    for (let i = 0; i < chrs.length; i++) {
        eleMaker(chrs[i]);
    }
}
writeItems();
// function imgMaker(){
//     ele.appendChild(eleImg);
// }
//MAKE TEXT ALL UPPPERCASE FOR ARRAY CLASSES
// let result = text.toUpperCase();





// ele.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png');

// .style.color to change color

// eleMaker("Name: "+chrs.name);
// eleMaker("Class: "+chrs.class);
// eleMaker("Vehicle: "+chrs.vehicle);

// if(chrs.afl==="autobot") {
    //     chrs.appendChild();
    // }else if(chrs.afl==="decepticon"){
    //     chrs.push({class: "decepticon"});
    // }

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

