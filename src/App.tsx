import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ProblemSection from './sections/ProblemSection'
import SolutionSection from './sections/SolutionSection'
import HowItWorks from './sections/HowItWorks'
import UseCases from './sections/UseCases'
import Deployment from './sections/Deployment'
import Team from './sections/Team'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <UseCases />
      <Deployment />
      <Team />
      <CTA />
      <Footer />
    </>
  )
}

export default App