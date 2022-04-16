import { Suspense } from "react"
import { NextPage } from "next"
import { Col, Row } from "react-bootstrap"
import { Accordion } from 'react-bootstrap'
import styles from './WordList.module.scss'
import Image from "next/image"

export const WordListPage: NextPage = () => {
    return (
        <div className={styles.page_container}>
            <Suspense fallback={<div>...loading</div>}>
                <div className={styles.page_header}>
                    <div className={styles.header_background}>
                        <Image width="1568" height="632" src='/images/words_list.gif' alt="Arrow bottom" />
                    </div>
                    <h1>Слова</h1>
                </div>
                <div className={styles.page_content}>
                    <Col className={styles.cards}>
                        <Accordion className={styles.card}>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className={styles.accordion_header} >
                                    <div>
                                        <h3>
                                            Криптовалюта бул
                                        </h3>
                                        <p>Project Crypto_trillioner</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className={styles.card}>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className={styles.accordion_header}>
                                    <div>
                                        <h3>
                                            Криптовалюта бул
                                        </h3>
                                        <p>Project Crypto_trillioner</p>
                                    </div>                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className={styles.card}>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className={styles.accordion_header}>
                                    <div>
                                        <h3>
                                            Криптовалюта бул
                                        </h3>
                                        <p>Project Crypto_trillioner</p>
                                    </div>                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className={styles.card}>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className={styles.accordion_header}>
                                    <div>
                                        <h3>
                                            Криптовалюта бул
                                        </h3>
                                        <p>Project Crypto_trillioner</p>
                                    </div>                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </div>
                <div className={styles.page_footer}>
                    <Image width="40" height="40" src='/images/coin.gif' alt="Arrow bottom" />
                    <button className={styles.test_btn}>
                        тест
                    </button>

                    <div className={styles.mentor_section}>
                        <h2>мудрость от ментора</h2>
                        <Image width="100" height="100" src='/images/mentor.png' alt="Arrow bottom" />
                        <p className={styles.author_name}>Асылбеков Даниял</p>
                        <p className={styles.mentor_quote}>
                            «Биткоин сделает с банками то же самое, что электронная почта сделала с обычной»
                        </p>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default WordListPage