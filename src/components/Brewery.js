import React from 'react';
import '../App.css';
import instagram from '../assets/instagram-32.png';
import yelp from '../assets/yelp-2-32.png';
import internet from '../assets/internet-32.png';

const Brewery = (props) => {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <h1 className="brewTitle">{props.title}</h1>
                </div>
            </div>
            <div className="row brewContent">
                <div className="col-sm-12 col-md-6">
                    <iframe src={props.googleMapSource} width="100%" height="300px" frameBorder="0" allowfullscreen></iframe>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p className="birthdayBody">{props.details}</p>
                    <span>
                        <a href={props.yelp}><img className="mediaButton" src={yelp} alt="some text" /></a>
                    </span>
                    <span>
                        <a href={props.instagram}><img className="mediaButton" src={instagram} alt="some text" /></a>
                    </span>
                    <span>
                        <a href={props.website}><img className="mediaButton" src={internet} alt="some text" /></a>
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Brewery;