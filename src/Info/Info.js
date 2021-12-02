import React from 'react';
import self from '../img/self.png';

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];

export const info = {
    firstName: "Aidan",
    lastName: "Urschel",
    initials: "AU", // 
    position: "Junior Developer",
    selfPortrait: self, //
    gradient: `linear-gradient(135deg, ${colors})`,
    miniBio: [
        ["aidanjinkyoo@gmail.com"],
    ],
    socials: [
        ["https://github.com/A-J-U", githubIcon()],
    ],
    bio: "Hello! I'm Aidan. I'm currently enrolled at UNH attending their Fullstack Development Bootcamp",
    hobbies: [
        ["Music"], 
        ["Traveling"],
        ["Gaming"],
        ["Cooking"]
    ],
    portfolio: [
        {
            title: "Password Generator",
            liveLink: "https://a-j-u.github.io/Jin-Kyoos-Password-Generator/", 
            sourceLink: "https://github.com/A-J-U/Jin-Kyoos-Password-Generator", 
        },
        {
            title: "Weather Dashboard",
            liveLink: "https://a-j-u.github.io/Jin-Kyoos-Weather-Dashboard/",
            sourceLink: "hhttps://github.com/A-J-U/Jin-Kyoos-Weather-Dashboard",
        },
        {
            title: "Chorus",
            liveLink: "https://ancient-sierra-36719.herokuapp.com/",
            sourceLink: "https://github.com/Justin7933/Chorus",
        },
        {
            title: "Enlightenment",
            liveLink: "https://jsiraco.github.io/Enlightenment/ ",
            sourceLink: "https://github.com/jsiraco/Enlightenment",
        },
    ]
}

function githubIcon() {
    return <i className="fa fa-github" aria-hidden="true"/>
};



