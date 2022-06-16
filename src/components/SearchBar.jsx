import { setSearchQuery } from "../store/actions/search-action";
import { connect } from "react-redux";
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <h3 className="search-bar__detail">Search Questions</h3>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar__input"
      />
    </div>
  );
};

// Dari CS kasih data
// Menghubungkan state dari global/store ke komponen kita
// melaluai props komponen
const mapStateToProps = (state) => {
  return {
    searchQuery: state.search.searchQuery,
  };
};

// Function yang menghubungkan CS dengan kita
// Menghubungkan komponen kita dengan action creator/ form
// dengan komponen kita melalui props
const mapDispatchToProps = {
  setSearchQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
