import { useRouter } from 'next/router';import Layout from '../../components/Layout';

export default function Santri() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
        <div className="text-4xl flex flex-1 justify-center my-8">
          <h1 className="text-5xl">This is {id} page</h1>
        </div>
      </Layout>
    </>
  );
}
