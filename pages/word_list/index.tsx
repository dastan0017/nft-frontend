import { Suspense } from "react"
import { GetStaticProps } from "next"
import { Col } from "react-bootstrap"
import { Accordion } from 'react-bootstrap'
import styles from './WordList.module.scss'
import Image from "next/image"
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";

interface IWordsList {
    words: object[]
}

export const WordListPage = ({ words }: IWordsList) => {

    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <div className={styles.header_background}>
                    <Image width="1568" height="632" src='/images/words_list.gif' alt="Arrow bottom" />
                </div>
                <h1>Слова</h1>
            </div>
            <div className={styles.page_content}>
                <Col className={styles?.cards}>
                    {words.map(((el: any, idx) => {
                        return (
                            <Accordion className={styles.card} key={idx}>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className={styles.accordion_header} >
                                        <div>
                                            <h3>
                                                {el.title}
                                            </h3>
                                            <p>Project Crypto_trillioner</p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ReactMarkdown >
                                            {el.description}
                                        </ReactMarkdown>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    }))}
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
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const response: Response = await fetch('https://timelysoft-backend.herokuapp.com/jobs')
    const words = await response.json()
    return {
        props: {
            words,
        },
    }
}

WordListPage.propTypes = {
    words: PropTypes.array
}
export default WordListPage