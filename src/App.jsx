import Navbar from './componentes/Navbar'
import Hero from './componentes/Hero'
import HomeCards from './componentes/HomeCards'
import JobListings  from './componentes/JobListings'
import ViewAllJobs from './componentes/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default App
