import Layout from '../components/Layout';
import Showcase from '../components/Showcase';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Hero />
        <Showcase />
        {/* santris here */}
      </Layout>
    </>
  );
}
