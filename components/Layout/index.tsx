import React from 'react'
import { useState } from 'react'
import styles from './Layout.module.scss'
import { Row, Button, Offcanvas } from 'react-bootstrap'
import { Sidebar } from '../Sidebar'
import Image from 'next/image'

interface ILayout {
    children: React.ReactNode
}

export const Layout = ({ children }: ILayout) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleModalShow = () => {
        setIsModalOpen(true)
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className="title">
                    <h2>Все о криптоволютах</h2>
                    <h3>Все в одном</h3>
                </div>
                <div className={styles.navbar}>
                    <Button variant="secondary" onClick={handleModalShow}><Image width="25" height="25" src='/icons/hamburger.svg' alt="hamburger" /></Button>
                </div>
                <Sidebar handleModalClose={handleModalClose} isModalOpen={isModalOpen} />
            </header>

            <main className={styles.main}>
                <Row className="page_container">
                    {children}
                </Row>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Layout
