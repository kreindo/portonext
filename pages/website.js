import Layout from '../components/Layout';import Showcase from '../components/Showcase';
export default function Website() {
  return (
    <>
      <Layout title="Websites">
        <div className="flex justify-center my-8">
          <h1 className="text-5xl">this is website page</h1>
        </div>
        <Showcase title="Web Dev" />
      </Layout>
    </>
  );
}
