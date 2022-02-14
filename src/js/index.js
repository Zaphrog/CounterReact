//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="four">{props.four}</div>
			<div className="three">{props.three}</div>
			<div className="two">{props.two}</div>
			<div className="one">{props.one}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	four: propTypes.number,
	three: propTypes.number,
	two: propTypes.number,
	one: propTypes.number,
};
let counter = 0;

setInterval(function () {
	const four = Math.floor((counter / 1000) % 10);
	const three = Math.floor((counter / 100) % 10);
	const two = Math.floor((counter / 10) % 10);
	const one = Math.floor((counter / 1) % 10);
	console.log(four, three, two, one);
	ReactDOM.render(
		<SimpleCounter one={one} two={two} three={three} four={four} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
