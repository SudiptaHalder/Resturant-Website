import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Menu from '../components/Menu';
import ExquisiteFlavors from '@/components/ExquisiteFlavors';
import RolledToPerfection from '@/components/RolledToPerfection';
import ReserveTable from '@/components/ReserveTable';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Menu />
      <ExquisiteFlavors />
      <RolledToPerfection />
      <ReserveTable />
       <Footer />
    </main>
  );
}