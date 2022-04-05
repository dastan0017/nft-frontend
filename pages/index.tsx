import { Suspense } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Row } from 'react-bootstrap'
import { Layout } from '../components'

const Home: NextPage = () => {

  return (
    <Suspense fallback={<div>...loading</div>}>
      <Layout>
        <Row className={styles.cards}>
          <div className={styles.card}>
            <h3 style={{ color: '#0ACF83' }}>Слова</h3>
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#2F7E79' }}>Задания</h3>
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#FA854C' }}>Тесты</h3>
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#6FDA44' }}>Анализы</h3>
          </div>
          <div className={styles.card}>
            <h3 style={{ color: '#3E7C78' }}>Презентации</h3>
          </div>
          <div className={styles.card}>
            <h3 style={{ color: 'rgba(0, 0, 0, 0.75)' }}>Статьи</h3>
          </div>
        </Row>
      </Layout>
    </Suspense>
  )
}

export default Home
