import DexterImage from '../components/DexterImage'
import DexterIntro from '../components/DexterIntro'
import BackgroundVectors from '../components/BackgroundVectors'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-dark">
      <BackgroundVectors />
      <div className="vector-10 relative">
        <DexterIntro />
      </div>
      <DexterImage />
    </div>
  )
}

export default Home
