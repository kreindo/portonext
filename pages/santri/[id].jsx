import { useRouter } from 'next/router';import Layout from '../../components/Layout';

export default function Santri() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
        <div className="text-4xl flex flex-1 justify-center">
          This is {id} page
        </div>
      </Layout>
    </>
  );
}
