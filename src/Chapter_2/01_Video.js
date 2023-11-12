
// Props
// React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
// This file is to understand the JSX and Props in React
// here Props are passed as destructured way
// channel is prop passes with default name as "Sumit Tupe"
// see the different ways to pass props
// study children prop

// JSX
// JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file
// Rules
// 1) Return a single root element
// 2) Close all the tags
// 3) camelCase all most of the things!
// JSX with Curly Braces {}
// 1) JSX attributes inside quotes are passed as strings.
// 2) Curly braces let you bring JavaScript logic and variables into your markup. They work inside the JSX tag content or immediately after = in attributes.
// 3) {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

import "./01_Video.css";
function Video({ title, channel = "Sumit Tupe", views, time }) {

    let img_url = "https://picsum.photos/id/1/160/90";
    return (
        <div className="Thumbnail">
        <img src= {img_url}alt="Katherine_Johnson" />
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views_time">
            {views} views <span>.</span> {time}
        </div>
        </div>
    );
}
export default Video;
