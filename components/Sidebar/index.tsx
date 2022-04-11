import { Offcanvas } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import dictionary from '../../public/images/dictionary.png'
import tasks from '../../public/images/tasks.png'
import tests from '../../public/images/tests.png'
import monitoring from '../../public/images/monitoring.png'
import presentation from '../../public/images/presentation.png'
import blogs from '../../public/images/blogs.png'
import styles from './Sidebar.module.scss'
import { useRouter } from 'next/router'

interface ISidebar {
    isModalOpen: boolean,
    handleModalClose: () => void
}

export const Sidebar: React.FC<ISidebar> = ({ isModalOpen, handleModalClose }: ISidebar) => {
    const router = useRouter()
    return (
        <>
            <Offcanvas show={isModalOpen} onHide={handleModalClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Modal heading</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className={styles.nav_links}>
                        <Link href="./">
                            <div className={`${styles.nav_link} ${router.pathname === '/' && styles.active_link}`}>
                                <h3 >Главная</h3>
                            </div>
                        </Link>
                        <Link href="./word_list">
                            <div className={`${styles.nav_link} ${router.pathname === '/word_list' && styles.active_link}`}>
                                <Image src={dictionary} alt="Dictionary icon" width="30px" height="20px" />
                                <h3 >Слова</h3>
                            </div>
                        </Link>
                        <div className={styles.nav_link}>
                            <Image src={tasks} alt="Tasks icon" width="30px" height="20px" />
                            <h3>Задания</h3>
                        </div>
                        <div className={styles.nav_link}>
                            <Image src={tests} alt="Tests icon" width="30px" height="20px" />
                            <h3>Тесты</h3>
                        </div>
                        <div className={styles.nav_link}>
                            <Image src={monitoring} alt="Monitoring icon" width="30px" height="20px" />
                            <h3>Анализы</h3>
                        </div>
                        <div className={styles.nav_link}>
                            <Image src={presentation} alt="Presentation icon" width="30px" height="20px" />
                            <h3>Презентации</h3>
                        </div>
                        <div className={styles.nav_link}>
                            <Image src={blogs} alt="Blog icon" width="30px" height="20px" />
                            <h3>Статьи</h3>
                        </div>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}