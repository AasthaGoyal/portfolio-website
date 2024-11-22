import Video from "./videos/BuildingManagerDemo.mov";

function BuildingManagers() {
	return (
		<div id="portfolio-details" class="portfolio-details">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h2 class="portfolio-title">Active Building Management </h2>

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
								<strong>Client</strong>: Active Building Management
							</li>
							<li>
								<strong>Category</strong>: Building Management
							</li>
							<li>
								<strong>Project URL</strong>: <br />
								<a href="https://buildingmanagers.co.nz/">
									https://buildingmanagers.co.nz/
								</a>
							</li>
						</ul>

						<p>
							Wordpress website of the building managers company where they showcase
							all the latest Updated information of the company along with services it
							allows. It also includes detailed information of the different sectors
							within the company and the different staff members info within them.
						</p>

						<p>
							I was involved in making changes on the wordpress website based on client
							requiremnets, fixing the design with some HTML and CSS changes and adding
							important bits like sponsors etc which was previously missing from the
							current website.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BuildingManagers;
