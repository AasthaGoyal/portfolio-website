import Video from "./videos/kiwinuts.mov";

function Kiwinuts() {
	return (
		<div id="portfolio-details" class="portfolio-details">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h2 class="portfolio-title">KiwiNuts - IT Consultancy Company </h2>

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
								<strong>Client</strong>: Kiwinuts
							</li>
							<li>
								<strong>Category</strong>: IT Consultancy
							</li>
							<li>
								<strong>Project URL</strong>: <br />
								<a href="https://kiwinuts.com/">https://kiwinuts.com/</a>
							</li>
						</ul>

						<p>
							An IT consultancy simple 5 page website which shows all the information
							about the company, the services it offers, and their about us details. It
							also has a contact us page which allows user to send a message to the
							company.
						</p>

						<p>
							The Whole website is made on wordpress where we used a free template and
							changed the design to meet the client requirements, added all the content
							and images and used HTML and CSS to redesign some of the wordpress
							components
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Kiwinuts;
