import type { NextPage } from 'next'
import Script from 'next/script'
import { useState } from 'react'

const Home: NextPage = () => {
  const [hasLoaded, setHasLoaded] = useState(false)

  return (
    <>
      <Script
        id="stripe-js"
        src="https://js.stripe.com/v3/"
        strategy="beforeInteractive"
        onLoad={() => {
          setHasLoaded(true);
          console.log('stripe has loaded')
        }}
      />
      {hasLoaded && <span>Stripe has loaded</span>}
    </>
  )
}

export default Home