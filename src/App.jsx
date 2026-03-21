import Hero from './components/Hero'
import Screenshots from './components/Screenshots'
import Features from './components/Features'
import Updates from './components/Updates'
import Community from './components/Community'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Hero />
      <Screenshots />
      <Features />
      <Updates />
      <Community />
      <Footer />
    </div>
  )
}
