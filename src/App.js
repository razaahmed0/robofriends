import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});

		if (this.state.robots.length > 0) {
			return (
				<div className="tc">
					<h1 className="f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}></SearchBox>
					<Scroll>
						<CardList robots={filteredRobots}></CardList>
					</Scroll>
				</div>
			);
		} else {
			return <h1 className="f2 tc"> Loading...</h1>;
		}
	}
}
