import { Suspense } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Row } from 'react-bootstrap'
import { Layout } from '../components'
import Image from 'next/image'
import dictionary from '../public/images/dictionary.png'
import tasks from '../public/images/tasks.png'
import tests from '../public/images/tests.png'
import monitoring from '../public/images/monitoring.png'
import presentation from '../public/images/presentation.png'
import blogs from '../public/images/blogs.png'

const Home: NextPage = () => {

  return (
    <Suspense fallback={<div>...loading</div>}>
      <Layout>
        <Row className={styles.page_header}>
          <h1>Главная</h1>
        </Row>
        <Row className={styles.cards}>
          <div className={styles.card}>
            <h3 style={{ color: '#DA4A54' }}>Слова</h3>
            <Image src={dictionary} alt="Dictionary icon" width="50px" height="50px" />
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#2F7E79' }}>Задания</h3>
            <Image src={tasks} alt="Tasks icon" width="50px" height="50px" />
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#FA854C' }}>Тесты</h3>
            <Image src={tests} alt="Tests icon" width="50px" height="50px" />
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#548AFF' }}>Анализы</h3>
            <Image src={monitoring} alt="Monitoring icon" width="50px" height="50px" />
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#3E7C78' }}>Презентации</h3>
            <Image src={presentation} alt="Presentation icon" width="50px" height="50px" />
          </div>
          <div className={styles.card}>
            <h3 style={{ color: 'rgba(0, 0, 0, 0.75)' }}>Статьи</h3>
            <Image src={blogs} alt="Blog icon" width="50px" height="50px" />
          </div>
        </Row>
      </Layout>
    </Suspense>
  )
}

export default Home
