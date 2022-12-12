import Image from 'next/image'
import MetaLinks from '../components/blocks/meta-links'
import Header from '../components/Header'
import Modal from '../components/modal'
import Stars from '../components/stars'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <MetaLinks />
    <Stars />
    <Header />
    <div className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Trusted Web Development &<br></br> Quality Assurance Company</h1>
      </section>
      <section className={styles.section}>
        <h2>Services</h2>

      </section>
      <section className={styles.section}><h1>3</h1></section>
    </div>
    <Modal />
    </>
  )
}
