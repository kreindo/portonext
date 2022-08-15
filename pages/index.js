import Layout from '../components/Layout';
import Showcase from '../components/Showcase';
import Hero from '../components/Hero';
import Profile from '../components/Profile/Profile';

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <Hero />
        <Showcase title="Design" link="design" />
        <Showcase title="Web Dev" link="website" />
        {/* santris here */}
        <Profile />
      </Layout>
    </>
  );
}
