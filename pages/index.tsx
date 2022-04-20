import { Suspense } from 'react'
import type { NextPage } from 'next'
import styles from './Home.module.scss'
import { Row } from 'react-bootstrap'
import Image from 'next/image'
import dictionary from '../public/images/dictionary.png'
import tasks from '../public/images/tasks.png'
import tests from '../public/images/tests.png'
import monitoring from '../public/images/monitoring.png'
import presentation from '../public/images/presentation.png'
import blogs from '../public/images/blogs.png'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <div className={styles.page_container}>
        <Row className={styles.page_header}>
          <div className={styles.section}>
            <p>раздел</p>
          </div>
          <h1>Главная</h1>
          <div className={styles.income_expense}>
            <div>
              <Image width="30" height="30" src='/icons/arrow_bottom.svg' alt="Arrow bottom" />
              <span>Income</span>
            </div>
            <div>
              <Image width="30" height="30" src='/icons/arrow_top.svg' alt="Arrow top" />
              <span>Expense</span>
            </div>
          </div>
        </Row>
        <div className={styles.page_content}>
          <div className={styles.cards}>
            <Link href="./word_list">
              <div className={styles.card}>
                <h3 style={{ color: '#DA4A54' }}>Слова</h3>
                <p>crypto_trillioner</p>
              </div>
            </Link>
            <Link href="./tasks">
              <div className={styles.card}>
                <h3 style={{ color: '#2F7E79' }}>Задания</h3>
                <p>crypto_trillioner</p>
              </div>
            </Link>
            <div className={styles.card}>
              <h3 style={{ color: '#FA854C' }}>Тесты</h3>
              <p>crypto_trillioner</p>
            </div>
            <div className={styles.card}>
              <h3 style={{ color: '#548AFF' }}>Анализы</h3>
              <p>crypto_trillioner</p>
            </div>
            <div className={styles.card}>
              <h3 style={{ color: '#3E7C78' }}>Презентации</h3>
              <p>crypto_trillioner</p>
            </div>
            <div className={styles.card}>
              <h3 style={{ color: 'rgba(0, 0, 0, 0.75)' }}>Статьи</h3>
              <p>crypto_trillioner</p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default Home
