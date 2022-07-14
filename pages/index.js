import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main';
import CRMAcceleration from '../components/CRMAcceleration';
import CustomerReview from '../components/CustomerReview';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kently Frontend FullTime Assignment</title>
        <meta name="description" content="Sales Engagement Software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <CRMAcceleration />
      <CustomerReview />
    </div>
  )
}
