import './AboutMe__Timeline.css';

import PurpleStar from '../assets/svg/icon/PurpleStar.svg';
import OrangeStar from '../assets/svg/icon/OrangeStar.svg';
import PinkStar from '../assets/svg/icon/PinkStar.svg';
import BlueStar from '../assets/svg/icon/BlueStar.svg';

import TipRight from '../assets/svg/icon/TipRight.svg';
import TipLeft from '../assets/svg/icon/TipLeft.svg';
import TipUp from '../assets/svg/icon/TipUp.svg';


const TimelineSection = () => {
    return (
        <div className="timelinesection">
            <div className="timelinesection1">
                <div className="timelinesection-text-container">
                    <div className="heading">Основные вехи моей карьеры</div>
                </div>
                <div className="timelinesection-container">
                    <div className="sub-container">
                        <div className="progress-line-container">
                            <div className="progress-line-background" />
                            <div className="progress-line" />
                        </div>
                        <div className="container">
                            <div className="text-container">
                                <div className="text">Now</div>
                            </div>
                            <div className="sub-container1">
                                <div className="container1">
                                    <div className="sub-container2">
                                        <div className="paragraph">Продолжая свой путь роста и исследований, я расширяю свой набор навыков, вникая в новые технологии и тенденции</div>
                                        <div className="icon-container">
                                            <div className="icon">
                                                <img className="group-child" alt="" src={PurpleStar} />
                                            </div>
                                        </div>
                                    </div>
                                    <img className="tip-icon" alt="" src={TipRight} />
                                </div>
                                <div className="navigator">
                                    <div className="navigator-child" />
                                </div>
                                <div className="text-container1">
                                    <div className="date-wrapper">
                                        <div className="date">Путь в web-разработку</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container2">
                            <div className="sub-container3">
                                <div className="text-container2">
                                    <div className="date-container">
                                        <div className="date">Кадровое агентство Юнити</div>
                                    </div>
                                </div>
                                <div className="navigator">
                                    <div className="navigator-item" />
                                </div>
                                <div className="container3">
                                    <img className="tip-icon" alt="" src={TipLeft} />
                                    <div className="sub-container4">
                                        <div className="icon-container1">
                                            <div className="icon">
                                                <img className="group-child" alt="" src={OrangeStar} />
                                            </div>
                                        </div>
                                        <div className="paragraph1">
                                            <p className="fullstack">
                                                <b>Fullstack разработчик</b>
                                            </p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Создал внутренний сайт мониторинга деятельности сотрудников для 3 отделов, что поспособствовало выявлению утерянных, необработанных заявок в CRM.Ускорилась обработка вакансий с 10+ до 2-6 дней;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Создал страницу мониторинга дебетовой задолженности, благодаря которой сократились сроки задолженностей на десятки дней;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Создается проект ведения финансовых моделей, которая автоматизирует и ускорит проверку и согласование финансовых моделей;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Разработал frontend и backend внутреннего web-приложения на библиотеке dash (python);</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Автоматизировал функционал отдела казначейства с помощью Power Query;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Проверка и создание десяток моделей в месяц</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Обучил директоров всех отделов работе в web-приложении для контроля сотрудников и планирования работы отдела;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container4">
                            <div className="text-container">
                                <div className="text">2022</div>
                            </div>
                            <div className="sub-container1">
                                <div className="container1">
                                    <div className="sub-container4">
                                        <div className="paragraph">
                                            <p className="fullstack">
                                                <b>Аналитик отдела реализации проекта интеграции с ЦПЭ (ГПХ)</b>
                                            </p>
                                            <p className="fullstack">
                                                <b>&nbsp;</b>
                                            </p>
                                            <p className="fullstack">Разработал стандартную форму, позволяющие ускорить и упростить подписание соглашений о деятельности центров поддержки экспорта;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Обеспечено повышение качества подготовки плановой и отчетной документации центров поддержки экспорта;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Обучение двух стажеров— Созданные презентации дня защиты центров поддержки экспорта;</p>
                                            <p className="fullstack">&nbsp;</p>
                                            <p className="fullstack">Курирование деятельности 26 регионов поддержки экспорта;</p>
                                        </div>
                                        <div className="icon-container2">
                                            <div className="icon">
                                                <img className="group-child" alt="" src={PinkStar} />
                                            </div>
                                        </div>
                                    </div>
                                    <img className="tip-icon" alt="" src={TipRight} />
                                </div>
                                <div className="navigator">
                                    <div className="navigator-inner" />
                                </div>
                                <div className="text-container1">
                                    <div className="date-wrapper">
                                        <div className="date">Российский экспортный центр</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <div className="text">2021</div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-container7">
                        <img className="tip-icon3" alt="" src={TipUp} />
                        <div className="sub-container8">
                            <div className="icon-container3">
                                <div className="icon">
                                <img className="group-child" alt="" src={BlueStar} />
                                </div>
                            </div>
                            <div className="text-container6">
                                <div className="heading">Высшее образование (Бакалавр)</div>
                                <div className="paragraph3">
                                    <p className="fullstack">Всероссийская академия внешней торговли, Москва</p>
                                    <p className="fullstack">Факультет международных финансов, Финансы и кредит</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default TimelineSection;
