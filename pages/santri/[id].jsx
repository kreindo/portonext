import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Santri() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
        <div className="text-4xl flex flex-1 justify-center mt-8">
          <h2>This is {id} page</h2>
        </div>
      </Layout>
    </>
  );
}
