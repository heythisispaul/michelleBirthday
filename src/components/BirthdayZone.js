import React from 'react';
import '../App.css';
import Brewery from './Brewery';
import breweries from '../breweries';

const BirthdayZone = (props) => {
    return (
        <div className="w3-animate-opacity container"  id="birthdayContainer">
            <div className="row">
                <div className="col">&nbsp;</div>
                <div className="col-sm-12 col-md-10">
                    <br/><h1 className="birthdayHeader">Congrats on it being your birthday.</h1><br/>
                    <p className="birthdayBody">Let's go get drunk about it. Here are all the breweries along the light rail from Mesa to Phoenix that I thought might be a good time. It gets a little quiet on the west side apparently so it kind of ends around central. I know we've been to some of these before but I wanted to keep us close to the light rail for maximum drinking action.</p>
                    <p className="birthdayBody">I hope you don't think this is lame! I love you so much and I thought it would be fun! Happy Birthday!</p>
                    {breweries.map((brewery, i) => {
                        return <Brewery
                            key={i}
                            title={brewery.title}
                            googleMapSource={brewery.googleMapSource}
                            details={brewery.details}
                            yelp={brewery.yelp}
                            website={brewery.website}
                            instagram={brewery.instagram}
                        />
                    })}
                </div>
                <div className="col">&nbsp;</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="toggleButton" onClick={() => props.toggleButton('love')}>LOVE!</p>
                </div>
            </div>
        </div>
    );
}

export default BirthdayZone;