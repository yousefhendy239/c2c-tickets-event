import Navbar from "../components/listing/navbar";
import EventCard from "../components/listing/eventcard";
import Sidebar from "../components/listing/sidebar";
import Pagination from "../components/listing/pagination";
import Footer from "../components/listing/footer";

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
