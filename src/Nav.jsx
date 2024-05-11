import bag from "./assets/bag.svg";
import search from "./assets/search.svg";
import "./nav.css";

function Nav() {
  return (
    <>
      <div className="ttl">
        <div className="f1">
          <h1>iCOdeMas</h1>
          <img src={search} className="bag1" />
          <input type="search" name="Search" placeholder="Search" id="Search" />
        </div>

        <div className="f2">
          <ul>
            <li>Featured</li>
            <li>Shop</li>
            <li>FAQ</li>
            <img src={bag} className="bag2" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
