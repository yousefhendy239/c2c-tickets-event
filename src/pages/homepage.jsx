import Navbar from "../components/homepage/homepage/Navbar";
import Hero from "../components/homepage/homepage/Hero";
import Categories from "../components/homepage/homepage/Categories";
import Events from "../components/homepage/homepage/Events";
import Works from "../components/homepage/homepage/how-it-works";
import Review from "../components/homepage/homepage/review";
import Newsletter from "../components/homepage/homepage/newsletter";
import Footer from "../components/homepage/homepage/footer";

export default function Homepage() {
  return (
	<div>

	<Navbar />

	<Hero />

	<Categories />

	<Events />

	<Works />

	<Review />

	<Newsletter />

	<Footer />

	</div>
  );
}
