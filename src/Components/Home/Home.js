import Medal from '../../Icons/goldmedal.png';
import './Home.css'

const Home = () => {
    return (
      <div className="home">
          <div className='home-container'>
            <h3 className='merit-title'>Merit</h3><img className='medal' src={Medal} />
          </div>
      </div>
    );
  };
  
  export default Home;