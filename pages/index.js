import Head from 'next/head';
import styles from './style.module.scss';
import PreviewCard from "../components/PreviewCard";

export default function Home() {
  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"
          />

          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta property="og:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta property="og:type"
                content="website"
          />
          <meta property="og:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta property="og:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta property="og:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />

          <meta name="twitter:card"
                content="summary_large_image"
          />
          <meta property="twitter:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta name="twitter:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta name="twitter:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta name="twitter:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico"/>
        </Head>

        <main>
          <section className={styles.container}>
            <div className={styles.previewCardContainer}>
              <PreviewCard color={'#E28625'}
                           icon={'/icons/icon-sedans.svg'}
                           title={'Sedans'}
                           description={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'}
              />
              <PreviewCard color={'#006971'}
                           icon={'/icons/icon-suvs.svg'}
                           title={'SUVs'}
                           description={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'}
              />
              <PreviewCard color={'#004140'}
                           icon={'/icons/icon-luxury.svg'}
                           title={'Luxury'}
                           description={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '}
              />
            </div>
          </section>
        </main>
      </>
  );
}
