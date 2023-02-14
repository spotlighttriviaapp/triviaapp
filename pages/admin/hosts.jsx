// import Link from 'next/link'
import PageWrapper from "@/components/pageWrapper";
// import getHosts from "@/hooks/db";

export default function Hosts() {
  // const hostName = await getHosts();
  const value = "Hosts";

  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">
        Admin/Hosts Management Page /
      </h1>
      <h2>{value}</h2>
    </PageWrapper>
  );
}

// const user = await db.collection('users').doc('leerob').get();

// if (!user.exists) {
//   notFound();
// }

// return <div>Hello, {user.data().name}!</div>;
