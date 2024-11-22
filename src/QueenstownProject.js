import Video from "./videos/Reduced.mp4";

function Queenstown() {
	return (
		<div id="portfolio-details" class="portfolio-details">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h2 class="portfolio-title">
							Queenstown Car Rentals - Car Rental Company
						</h2>

						<div class="portfolio-details-slider swiper">
							<video src={Video} width="800" height="400" controls />
							<div class="swiper-wrapper align-items-center">
								<div class="swiper-slide">
									<img src="./images/img1.png" alt="" />
								</div>
								<div class="swiper-slide">
									<img src="./images/img2.png" alt="" />
								</div>
							</div>
							<div class="swiper-pagination"></div>
						</div>
					</div>

					<div class="col-lg-4 portfolio-info">
						<h3>Project information</h3>
						<ul>
							<li>
								<strong>Type</strong>: Website Application
							</li>
							<li>
								<strong>Client</strong>: Queenstown Car Rentals Ltd.
							</li>
							<li>
								<strong>Category</strong>: Car Rentals
							</li>
							<li>
								<strong>Project URL</strong>: <br />
								<a href="https://queenstowncarrental.nz/">
									https://queenstowncarrental.nz/
								</a>
							</li>
						</ul>

						<p>
							Website for car rental company based on Queenstown NZ which allows users
							to browse, search and filter all the cars available to the users, see the
							various price per day. Main feature of the website is the booking system
							where they can select a pickup and dropoff location and time and be able
							to book a car within 3-4 steps completed with integration with stripe
							payment method.
						</p>

						<p>
							Its a wordpress website as well but I used a plugin called VikCarRental
							to implement the online booking system which is coded completely in PHP.
							I used HTMl and CSS to redesign the whole booking system to match the
							company's design and color theme and coded all the car booking pages
							using PHP along with implementing features like autocomplete search where
							users can start typing in the search box of a pickup or dropoff location
							and the search related results would come in dropdown menu which can be
							selected and used for further booking. My work also involves updating the
							website data as it changes along with fixing design on the website as
							client requests.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Queenstown;
