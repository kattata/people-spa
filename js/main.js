"use strict";

// family members array
let familyMembers = [
    {
        name: "Neska",
        age: 2020 - 2013,
        hairColor: "Ginger",
        relation: "Pet Rabbit",
        img: "../img/nesia.png"
    },
    {
        name: "Kamila",
        age: 2020 - 1994,
        hairColor: "Blonde",
        relation: "Sister",
        img: "../img/sis.jpg"
    },
    {
        name: "Bożena",
        age: 2020 - 1967,
        hairColor: "Brown",
        relation: "Mom",
        img: "../img/mom.jpg"
    },
    {
        name: "Wiesław",
        age: 2020 - 1966,
        hairColor: "Blonde",
        relation: "Dad",
        img: "../img/dad.jpg"
    },

];

// append family members to DOM
function appendFamily(members) {

    let htmlTemplate = "";

    for (const member of members) {
        htmlTemplate += `
        <article>
        <h3>${member.name}, ${member.age}</h3>
        <img src="${member.img}">
        <div class="person-property">
        <p>Hair Color: </p>
        <p>${member.hairColor}</p>
        </div>
        <div class="person-property">
        <p>Relation: </p>
        <p>${member.relation}</p>
        </div>
        </article>
        `
    }

    document.querySelector("#family-members-list").innerHTML = htmlTemplate;
}

appendFamily(familyMembers);

// teachers array

let teachers = [
    {
        name: "Rasmus Cederdorff",
        initials: "race",
        mail: "race@baaa.dk",
        phone: "7228 6318",
        address: "Ringvej Syd 104, 8260 Viby J",
        position: "Lecturer",
        img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp"
    },
    {
        name: "Martin Aagaard Nøhr",
        initials: "mnor",
        mail: "mnor@baaa.dk",
        phone: "7228 6349",
        address: "Ringvej Syd 104, 8260 Viby J",
        position: "Lecturer",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQElLjyVglReqw/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=hDUFJrkrpSm_-G2m5ov8EkPPmAIJhylSECOG3WAEyk8"
    },
    {
        name: "Birgitte Kirk Iversen",
        initials: "bki",
        mail: "bki@baaa.dk",
        phone: "7228 6316",
        address: "Ringvej Syd 104, 8260 Viby J",
        position: "Senior Lecturer",
        img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
    },


];

// append teachers to DOM
function appendTeachers(teachers) {
    for (const teacher of teachers) {
        document.querySelector("#teachers-list").innerHTML += `
            <article>
                <img src="${teacher.img}">
                <div class="person-property">
                <p>Name: </p>
                <p>${teacher.name}</p>
                </div>
                <div class="person-property">
                <p>Initials: </p>
                <p>${teacher.initials}</p>
                </div>
                <div class="person-property">
                <p>E-mail: </p>
                <p>${teacher.mail}</p>
                </div>
                <div class="person-property">
                <p>Phone: </p>
                <p>${teacher.phone}</p>
                </div>
                <div class="person-property">
                <p>Address: </p>
                <p>${teacher.address}</p>
                </div>
                <div class="person-property">
                <p>Position: </p>
                <p>${teacher.position}</p>
                </div>
                
            </article>
        `
    }
}
appendTeachers(teachers);

// expand add options
function expandAdd() {
    let addFields = document.querySelector(".add-fields");
    if (addFields.style.display === "none") {
        addFields.style.display = "flex";
    } else {
        addFields.style.display = "none";
    }
}

// search family members
function search(value) {
    console.log(value);
    let filteredMembers = [];
    for (const member of familyMembers) {
        let name = member.name.toLowerCase();
        if (name.includes(value.toLowerCase())) {
            filteredMembers.push(member);
        }
    }
    console.log(filteredMembers);
    appendFamily(filteredMembers);
}

// add new members
function createMember() {
    //get values from the input fields
    let name = document.querySelector(".add-fields input[name=name]").value;
    let age = document.querySelector(".add-fields input[name=age]").value;
    let hairColor = document.querySelector(".add-fields input[name=hair]").value;
    let relation = document.querySelector(".add-fields input[name=relation]").value;
    let img = document.querySelector(".add-fields input[name=img]").value;

    //create member
    let newMember = {
        name: name,
        age: age,
        hairColor: hairColor,
        relation: relation,
        img: img,
    };

    // push new object to array of members
    familyMembers.unshift(newMember);

    //reset grid
    document.querySelector("#family-members-list").innerHTML = "";

    //call the appendFamily function again
    appendFamily(familyMembers);
}
