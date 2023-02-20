// import Link from 'next/link'
import PageWrapper from '@/components/pageWrapper'
import { db } from '@/lib/firebase'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  getDoc,
  serverTimestamp,
  orderBy,
} from 'firebase/firestore'
import { debuglog } from 'util'

export default function AdminHostManagementPage() {
  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">Admin/Hosts</h1>
      <HostList />
    </PageWrapper>
  )
}

function HostList() {
  const hostsRef = collection(db, 'hosts')
  const query = orderBy('createdAt')
  const [querySnapshot] = useCollection(query)

  const hostRef = doc(db, 'hosts', 'MMI3wjjUq6oH6ymbz5CV')

  return (
    <>
      <h1>Hosts List:</h1>
    </>
  )
}
