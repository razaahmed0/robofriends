import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";

export default class App extends Component {
	render() {
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox></SearchBox>
				<CardList robots={robots}></CardList>
			</div>
		);
	}
}
