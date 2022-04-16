import { Suspense } from "react"
import { NextPage } from "next"
import { Col, Row } from "react-bootstrap"
import { Accordion } from 'react-bootstrap'
import styles from './WordList.module.scss'

export const WordListPage: NextPage = () => {
    return (
        <>
            <Suspense fallback={<div>...loading</div>}>
                <Row className="page_header">
                    <h1>Слова</h1>
                </Row>
                <Row className="page_content">
                    <Col className={styles.cards}>
                        <Accordion className={styles.card}>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className={styles.accordion_header} style={{ background: "#29313C" }}>
                                    Криптовалюта бул
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
                                    Криптовалюта бул
                                </Accordion.Header>
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
                                    Криптовалюта бул
                                </Accordion.Header>
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
                                    Криптовалюта бул
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        - Тушунуксуз эле бир нерселер. Кобунчо графиктер менен иштейт
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Suspense>
        </>
    )
}

export default WordListPage