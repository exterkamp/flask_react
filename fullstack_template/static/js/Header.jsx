import React from "react";
// import portrait from '../img/portrait.jpg' 

export default class Header extends React.Component {
    render() { 
        return (
            <div className="index_title_container">
                {/* <img src={portrait} /> */}
                <p className="index_title">Shane Exterkamp</p>
                <p className="index_title_subtext">Software Engineer</p>
            </div>
        );
    }
}