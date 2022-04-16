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
                </div>
                <div className={styles.navbar}>
                    <button onClick={handleModalShow}><Image width="50" height="50" src='/icons/hamburger.svg' alt="hamburger" /></button>
                </div>
                <Sidebar handleModalClose={handleModalClose} isModalOpen={isModalOpen} />
            </header>

            <main className={styles.main}>
                <div className={styles.page_container}>
                    {children}
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Layout
