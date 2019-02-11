import React, { Component } from "react";
import "./reset.css"
import "./style.css";
import { Beer, Burger, Burger2, Frenchfry, Hotdog, Ketchup, Melts, Mustard, Popcorn, Potatoewedge, Royale, Sliders } from "../List/index.js";

const alreadyClicked = [];

let currentScore = 0;
let justClicked;

function shuffle() {
    var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
console.log("shuffle now")
};

// handle click event
// compare image value to already clicked array
// if === -1 then increment score else set score to 0
// then shuffle

class Game extends Component {
    state = {
        score: 0
    };

beerClick = event => {
    justClicked = "beer";
    this.handleClick()
};

burgerClick = event => {
    justClicked = "burger";
    this.handleClick()
};

burger2Click = event => {
    justClicked = "burger2";
    this.handleClick()
};

frenchfryClick = event => {
    justClicked = "frenchfry";
    this.handleClick()
};

hotdogClick = event => {
    justClicked = "hotdog";
    this.handleClick()
};

ketchupClick = event => {
    justClicked = "ketchup";
    this.handleClick()
};

meltsClick = event => {
    justClicked = "melts";
    this.handleClick()
};

mustardClick = event => {
    justClicked = "mustard";
    this.handleClick()
};

popcornClick = event => {
    justClicked = "popcorn";
    this.handleClick()
};

potatoewedgeClick = event => {
    justClicked = "potatoewedge";
    this.handleClick()
};

royaleClick = event => {
    justClicked = "royale";
    this.handleClick()
};

slidersClick = event => {
    justClicked = "sliders";
    this.handleClick()
};

handleClick = event => {
    console.log(justClicked + "test")
    if (alreadyClicked.indexOf(justClicked) < 0) {
        currentScore ++;
        this.setState({
            score: currentScore
        });
        alreadyClicked.push(justClicked);
        console.log(alreadyClicked);
    } else {
        currentScore = 0;
        this.setState({
            score: currentScore
        });
        alreadyClicked.length = 0;
    };
    console.log("shuffle!!")
    shuffle();
};

render () {
    return(
        <div class="container">
            <h1>Everything on the Menu!</h1>
            <h3>Click each menu option, but don't order anything more than once!</h3>
            <h2>Score: {currentScore}</h2>
            <ul>
                <li>
                    <button onClick={this.beerClick}>
                    <Beer />
                    </button>
                </li>
                <li>
                    <button onClick={this.burgerClick}>
                    <Burger/>
                    </button>
                </li>
                <li>
                    <button onClick={this.burger2Click}>
                    <Burger2 />
                    </button>
                </li>
                <li>
                    <button onClick={this.frenchfryClick}>
                    <Frenchfry />
                    </button>
                </li>
                <li>
                    <button onClick={this.hotdogClick}>
                    <Hotdog />
                    </button>
                </li>
                <li>
                    <button onClick={this.ketchupClick}>
                    <Ketchup />
                    </button>
                </li>
                <li>
                    <button onClick={this.meltsClick}>
                    <Melts />
                    </button>
                </li>
                <li>
                    <button onClick={this.mustardClick}>
                    <Mustard />
                    </button>
                </li>
                <li>
                    <button onClick={this.popcornClick}>
                    <Popcorn />
                    </button>
                </li>
                <li>
                    <button onClick={this.potatoewedgeClick}>
                    <Potatoewedge />
                    </button>
                </li>
                <li>
                    <button onClick={this.royaleClick}>
                    <Royale />
                    </button>
                </li>
                <li>
                    <button onClick={this.slidersClick}>
                    <Sliders />
                    </button>
                </li>
            </ul>
        </div>
    );
}
}
export default Game;