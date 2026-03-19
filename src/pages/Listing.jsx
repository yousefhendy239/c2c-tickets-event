import Navbar from "../components/navbar";
import EventCard from "../components/eventcard";
import Sidebar from "../components/sidebar";
import Pagination from "../components/pagination";
import Footer from "../components/footer";

function Listing(){
  return(
    <div className="app">

      <Navbar />

      <div className="main">
        
        <Sidebar />

        <div className="content">

          <div className="cards">
            <EventCard />
          </div>

          <Pagination />
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Listing;
