import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Verify bitcoin address signature online';
export const siteTitle = 'Verify bitcoin address online';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/VerifySignature/favicon.png" />
        <meta
          name="description"
          content={name}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

        <br/>
        <br/>

        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">This page works offline. <a href={'https://github.com/BlueWallet/VerifySignature'} target={'_blank'}>Fork me on Github!</a></span> <br/>
            </div>
        </footer>
    </div>
  );
}
