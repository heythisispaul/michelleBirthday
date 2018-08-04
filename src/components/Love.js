import React from 'react';
import '../App.css';


const Love = (props) => {
    return (
        <div className="w3-animate-opacity container"  id="loveContainer">
            <div className="row">
                <div className="col">&nbsp;</div>
                <div className="col-10">
                    <br/><h1 className="birthdayHeader">Michelle - I'm so lucky I married you.</h1><br/>
                    <p className="birthdayBody">I hope you know that I think about that every day. The day we got married I knew how lucky I really was. What I didn't know, was that that was just the start. Since we've been married I find myself reminded of that more and more each day.</p>
                    <p className="birthdayBody">No one, even the greatest authors, artists, and poets have been able to testify how much love a heart can hold. It's a great mystery that no machine or system can understand regardless the perfection of its engineering or the prowess of it's writing. I think because of that we find ourselves so quickly limited when trying to express our feelings for each other. 'I love you' is thrown around so easily by so many it seems unfair that this is the ultimate form of expression.</p>
                    <p className="birthdayBody">I love so many things with so little way to meaningfully discern my affection. It's one of the few ways I feel let down by the English language. It pains me to know that I'll never be able to demonstrate how much love my heart holds for you. People far smarter than me have been trying to come up with ways for centuries to no avail.</p>
                    <p className="birthdayBody">While that super bums me out, what's so exciting is I get to spend the rest of my life trying to figure it out. You amaze me more and more each day, so I know that with time I can only get closer and closer.</p>
                    <p className="birthdayBody">In the mean time just know that I'm working on it the best I can, and that I love you.</p>
                    <p className="sig">-Paul</p>
                </div>
                <div className="col">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="toggleButton" onClick={() => props.toggleButton('brews')}>BEER!</p>
                </div>
            </div>
        </div>
    )
}

export default Love;