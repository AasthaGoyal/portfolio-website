import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import EuroPainters from "./EuroPainters";
import CleaningCompany from "./CleaningCompany";
import BuildingManagers from "./BuildingProject";
import Queenstown from "./QueenstownProject";
import Kiwinuts from "./KiwinutsProject";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/euroPaintersProject" element={<EuroPainters />} />
				<Route path="/cleaningProject" element={<CleaningCompany />} />
				<Route path="/buildingProject" element={<BuildingManagers />} />
				<Route path="/queenstownProject" element={<Queenstown />} />
				<Route path="/kiwinutsProject" element={<Kiwinuts />} />
			</Routes>
		</div>
	);
}

export default App;
