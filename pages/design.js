import Layout from '../components/Layout';import Showcase from '../components/Showcase';
export default function Design() {
  return (
    <>
      <Layout title="Designs">
        <div className="flex justify-center my-8">
          <h1 className="text-5xl">this is design page</h1>
        </div>

        <Showcase title="Design" disabled/>
      </Layout>
    </>
  );
}
