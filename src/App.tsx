import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ProblemSection from './sections/ProblemSection'
import SolutionSection from './sections/SolutionSection'
import HowItWorks from './sections/HowItWorks'
import UseCases from './sections/UseCases'
import Deployment from './sections/Deployment'
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
      <CTA />
      <Footer />
    </>
  )
}

export default App