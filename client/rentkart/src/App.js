import './styles/index.scss';
import Rentkart from './Component/Rentkart';
import Card from './Component/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rentkart />
 <Card img='https://www.verywellmind.com/thmb/ciMKi3Kbt6WjkSJZWNNKZv8ufkA=/1715x1286/smart/filters:no_upscale()/low-angle-view-of-building-against-cloudy-sky-750507801-5bc50e0b46e0fb0058c9ef64.jpg' description='abs' rent='free'/>        
     <Card img ='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2021-05/shutterstock_hauntedhouse.jpg?itok=h-cChspP' description='xyz' rent='free'/>
      </header>
    </div>
  );
}

export default App;
