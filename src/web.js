import './web.css';
import mylogo from './mylogo.png';
import { Link } from 'react-router-dom';
function Nav() {
  function burger() {
    var x = document.getElementById("list");
    x.classList.toggle('v-resp');
    var y = document.getElementById("mynav");
    y.classList.toggle('h-resp');
    var icons = document.getElementById("icons");
    icons.classList.toggle('v-icons');
    var s = document.getElementById("search");
    s.classList.toggle('v-search');


  }
  return (

    <div className='Navigation h-resp' id='mynav'>
      <div className='logo'>
        <Link to="/"> <img src={mylogo} /></Link>
      </div>

      <div className='links v-resp' id='list'>
        <ul>
          <li><Link to="/shopmen">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/homeliving">Home&Living</Link></li>
          <li><Link to="/beauty">Beauty</Link></li>
          <li><a href="#">Studio<span><sup>New</sup></span></a></li>

        </ul>
      </div>
      <div className='search v-search' id="search">
        <input type='text' placeholder='search for products, brands and more'></input>
      </div>

      <div className='icons v-icons' id='icons'>
        <div className="dropdown">
          <div className='icon1'>

            <i class='bx bx-user'></i>

            <div className='ico'>Profile</div>
            <div className="dropdown-content">
              <p>Welcome</p>
              <p>To access account and manage orders</p>
              <button>Login/signup</button>
              <hr />

              <div className="profile-list">
                <a href="#">Orders</a><br />
                <a href="#">Wishlist</a><br />
                <a href="#">Gift Cards</a><br />
                <a href="#">Contact us</a><br />
                <a href="#">Myntra Insider</a>
                <hr />
                <a href="#">Myntra Credit</a><br />
                <a href="#">Coupons</a><br />
                <a href="#">Saved Cards</a><br />
                <a href='#'>Saved VPA</a><br />
                <a href="#">Saved Addresses</a>
              </div>
            </div>



          </div>
        </div>
        <div className="icon2">
          <i class='bx bx-heart'></i>
          <div className='ico'>Wishlist</div>
        </div>
        <div className="icon3">
          <i class='bx bx-cart' ></i>
          <div className='ico'>Bag</div>
        </div>
      </div>
      <div className="burger">
        <i class='bx bx-menu' onClick={burger}></i>
      </div>
    </div>



  );
}

export default Nav;  