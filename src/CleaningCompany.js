import Video from "./videos/cleaningCompany.mp4";

function CleaningCompany() {
 return (
  <div id="portfolio-details" class="portfolio-details">
   <div class="container">
    <div class="row">
     <div class="col-lg-8">
      <h2 class="portfolio-title">
       Swaach Cleaning - Cleaning Services Website{" "}
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
        <strong>Client</strong>: Swaach Cleaning Ltd.
       </li>
       <li>
        <strong>Category</strong>: Cleaning
       </li>
       <li>
        <strong>Project URL</strong>:
        <a href="/"> Business not online anymore </a>
       </li>
      </ul>

      <p>
       A cleaning company website which allows users to:
       <ul>
        <li>
         - View the cleaning services information along with the business
         information
        </li>
        <li>
         {" "}
         - Get Quotation for their houses based on the service they need{" "}
        </li>
        <li>- Book and pay online for the service</li>
        <li>- Contact the company and see past reviews</li>
       </ul>
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default CleaningCompany;
