import Image from 'next/image'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import MetaLinks from '../components/blocks/meta-links'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Modal from '../components/modal'
import Stars from '../components/stars'
import styles from '../styles/Home.module.css'

export default function Home() {
  let [loading, setLoading] = useState(true);

  useEffect(()=> {
    $('.'+ styles.h1).fadeOut(1000);
    setLoading(loading = false);
  },[]);

  const handleModalOpen = () => {
    $('.modalWindow').fadeIn(300);
  };

  return (
   <>
    <MetaLinks />
    <Stars />
    <Header />
    {loading ? <Loader /> : <div className={styles.main}>
      <section className={styles.section} style={{background: 'url(/images/oars_vs_jedi_scimus.webp) no-repeat center'}}>
        <div className='section-container'>
          <h1 className={styles.h1}>Trusted Web Development &<br></br> Quality Assurance Company</h1>
          <p className={styles.subtitle}>We offer customized software development and QA services that power your company's operations. As industry professionals, we leverage our expertise to build full-cycle scalable web and mobile solutions that help you navigate advanced digital transformations.</p>
          <button className={styles.headerGetInTouch} onClick={handleModalOpen}>Get In Touch</button>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Services</h2>

      </section>
      <section className={styles.section}><h1>3</h1></section>
    </div>}
    <Modal />
    </>
  )
}
