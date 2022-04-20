import { Col } from "react-bootstrap";
import styles from "./Tasks.module.scss";
import Image from "next/image";

export const TasksPage = () => {
	return (
		<div className={styles.page_container}>
			<div className={styles.page_header}>
				<div className={styles.header_background}>
					<Image
						width="1568"
						height="632"
						src="/images/words_list.gif"
						alt="Arrow bottom"
					/>
				</div>
				<h1>Задания</h1>
			</div>
			<div className={styles.page_content}>
				<Col className={styles.cards}>
					<div className={styles.card}>
						<div className={styles.card_image}>
							<Image
								width="1568"
								height="632"
								src="/images/words_list.gif"
								alt="Arrow bottom"
							/>
						</div>
						<div>
							<div>
								<h2>Верификация</h2>
								<p>урок 1</p>
							</div>
							<button>Подробнее</button>
						</div>
					</div>
				</Col>
			</div>
			<div className={styles.page_footer}>
				<Image
					width="40"
					height="40"
					src="/images/coin.gif"
					alt="Arrow bottom"
				/>
				<button className={styles.test_btn}>тест</button>

				<div className={styles.mentor_section}>
					<h2>мудрость от ментора</h2>
					<Image
						width="100"
						height="100"
						src="/images/mentor.png"
						alt="Arrow bottom"
					/>
					<p className={styles.author_name}>Асылбеков Даниял</p>
					<p className={styles.mentor_quote}>
						«Биткоин сделает с банками то же самое, что электронная почта
						сделала с обычной»
					</p>
				</div>
			</div>
		</div>
	);
};

export default TasksPage;
