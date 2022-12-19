import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import data from './data/data.json';
import Heading from './components/Heading.js'
import StartProduct from './components/StartProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="START PRODUCTS"/>
      <StartProduct starProduct={data.starProduct}/>
      <Heading text="Hot Accessories"/>
      <HotAccessoriesMenu/>

      {/* <Route exact path="/music">
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       </Route>   */}

       <Heading text="Product Reviews"/>

       <ProductReviews productReviews={data.productReviews}/>

       <Heading text="Videos"/>
       <Videos videos={data.videos}/>

       <Heading text="In The Press"/>
       <Banner banner={data.banner}/>

       <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
