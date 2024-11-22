import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import EuroPainters from "./EuroPainters";
import CleaningCompany from "./CleaningCompany";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/euroPaintersProject" element={<EuroPainters />} />
				<Route path="/cleaningProject" element={<CleaningCompany />} />
			</Routes>
		</div>
	);
}

export default App;
