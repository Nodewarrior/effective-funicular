import React, { useState, useEffect } from "react";

interface PokemonData {
	name: string;
	url: string;
}

interface PokemonResponse {
	count: number;
	results: PokemonData[];
}

function Pokemon() {
	const [pokemonData, setPokemonData] = useState<PokemonResponse | null>(null);
	const [filteredPokemonData, setFilteredPokemonData] =
		useState<PokemonResponse | null>(null);
	const [paginationData, setPaginationData] = useState({ page: 1, limit: 20 });
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/?offset=${
						(paginationData.page - 1) * paginationData.limit
					}&limit=${paginationData.limit}`
				);
				const data = await response.json();
				setPokemonData(data);
				setFilteredPokemonData(data);
			} catch (error) {
				console.log(error);
			}

			setIsLoading(false);
		};

		fetchData();
	}, [paginationData.page]);

	useEffect(() => {
		const filterPokemonData = () => {
			if (pokemonData) {
				const filteredData = pokemonData.results.filter((pokemon) =>
					pokemon.name.includes(searchTerm.toLowerCase())
				);
				setFilteredPokemonData({ ...pokemonData, results: filteredData });
			}
		};

		filterPokemonData();
	}, [pokemonData, searchTerm]);

	const handleNextClick = () => {
		setPaginationData({ ...paginationData, page: paginationData.page + 1 });
	};

	const handlePrevClick = () => {
		setPaginationData({ ...paginationData, page: paginationData.page - 1 });
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const pokemonRows = filteredPokemonData?.results.map((pokemon) => (
		<tr key={pokemon.name}>
			<td>{pokemon.name}</td>
		</tr>
	));

	return (
		<div>
			<div>
				<h1>Pokemon</h1>
				<input type="text" onChange={handleInputChange} />
				<h3>SearchTerm: {searchTerm}</h3>
			</div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>{pokemonRows}</tbody>
			</table>
			<div>
				<button onClick={handlePrevClick} disabled={paginationData.page === 1}>
					Prev
				</button>
				<button
					onClick={handleNextClick}
					disabled={
						!filteredPokemonData?.next ||
						isLoading ||
						filteredPokemonData?.results.length === 0
					}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Pokemon;
