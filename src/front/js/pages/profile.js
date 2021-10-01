import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Tab } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Search } from "../component/search";
import { ProfileCarta } from "../component/ProfileCards";
import { ProfileNavbar } from "../component/ProfileNav";
import { FavoriteCarta } from "../component/FavoriteCards";
import { NewCocktail } from "../component/NewCocktailForm";
import "../../styles/profilecard.scss";

export const Account = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.allCocktailsDescription();
		actions.fetchnonalcoholicInfo();
	}, []);

	return (
		<div className="">
			<ProfileNavbar />
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pillstyle mb-3 pt-5">
				<Tab eventKey="favorite" title="Favorites" className="recipespill">
					<div className="scroll">
						{store.favorites.length > 0 ? (
							store.favorites.map((favorite, i) => {
								return (
									<FavoriteCarta
										key={i}
										strDrink={favorite.strDrink}
										strDrinkThumb={favorite.strDrinkThumb}
										idDrink={favorite.idDrink}
									/>
								);
							})
						) : (
							<Container style={{ height: "100vh", paddingTop: "100px" }}>
								<h1 className="m-auto">Your List is Empty</h1>
							</Container>
						)}
					</div>
				</Tab>
				<Tab eventKey="myBar" title="My Bar" className="recipespill">
					<div className="scroll">
						{store.favorites.length > 0 ? (
							store.favorites.map((favorite, i) => {
								return (
									<FavoriteCarta
										key={i}
										strDrink={favorite.strDrink}
										strDrinkThumb={favorite.strDrinkThumb}
										idDrink={favorite.idDrink}
									/>
								);
							})
						) : (
							<Container style={{ height: "100vh", paddingTop: "100px" }}>
								<h1 className="m-auto">Your List is Empty</h1>
							</Container>
						)}
					</div>
				</Tab>
				<Tab eventKey="profile" title="Search" className="searchPill">
					<Search />
					<div className="scroll">
						{store.filteredCocktails.map((cocktail, i) => {
							return (
								<ProfileCarta
									key={i}
									strDrink={cocktail.strDrink}
									strDrinkThumb={cocktail.strDrinkThumb}
									idDrink={cocktail.idDrink}
								/>
							);
						})}
					</div>
					<Row>
						<Col>
							<h1 className="text-center p-5" style={{ fontSize: "4rem" }}>
								Alcoholic
							</h1>
						</Col>
					</Row>
					{store.filteredCocktails.length === 0 && (
						<>
							<div className="scroll">
								{store.cocktails.map((cocktail, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={cocktail.strDrink}
											strDrinkThumb={cocktail.strDrinkThumb}
											idDrink={cocktail.idDrink}
										/>
									);
								})}
							</div>

							<Row>
								<Col>
									<h1 className="text-center p-5" style={{ fontSize: "4rem" }}>
										Non-Alcoholic
									</h1>
								</Col>
							</Row>

							<div className="scroll">
								{store.nonAlcoholic.map((nonAlcoholic, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={nonAlcoholic.strDrink}
											strDrinkThumb={nonAlcoholic.strDrinkThumb}
											idDrink={nonAlcoholic.idDrink}
										/>
									);
								})}
							</div>
						</>
					)}
				</Tab>
				<Tab eventKey="create" title="Create Your Own" className="recipespill">
					<NewCocktail />
				</Tab>
			</Tabs>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};
