import React from 'react';
import '../App.css';


const Love = (props) => {
    return (
        <div className="w3-animate-opacity container"  id="loveContainer">
            <div className="row">
                <div className="col">&nbsp;</div>
                <div className="col-sm-12 col-md-10">
                    <br/><h1 className="birthdayHeader">Michelle - I'm so lucky I married you.</h1><br/>
                    <p className="birthdayBody">I hope you know that I think about that every day. The day we got married I knew how lucky I really was. What I didn't know, was that that was just the start. Since we've been married I find myself reminded of that more and more each day.</p>
                    <p className="birthdayBody">No one, even the greatest authors, artists, and poets have been able to express how much love a heart can hold. No sonnet can bring to life the depth of what love truly is, and no machine, regardless the perfection of its engineering, can measure this mystery with charts or graphs. I think because of this we find ourselves so quickly limited when trying to express our feelings of affection. ‘I love you’ is thrown around casually by so many it seems unfair that this is the ultimate form of articulation.</p>
                    <p className="birthdayBody">I love so many things with very little way to meaningfully discern my affection. I love my parents, and I love coffee. It’s one of the greatest failures of the English language that the magnitudes of difference can be so easily measured by the heart but so imprecisely by words. It pains me to know that words will always fail me when trying to demonstrate how much love my heart holds for you.</p>
                    <p className="birthdayBody">While this super bums me out, what’s so exciting is that I get to spend the rest of my life trying to get as close as I can. You amaze me more each day, and I know that with time I can only get closer. One day, I hope luck strikes for a second time and I'll be able to sincerely put into words the boundlessness of my devotion to you.</p>
                    <p className="birthdayBody">In the mean time, just know that I'm working on it the best I can, and that I love you.</p>
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