import React from 'react';

import Header from './Header';
import Home from './Home';

import { constants } from '../constants';

import fontAwesome from 'font-awesome/css/font-awesome.css';
import globalStyles from '../styles/index.css';
import styles from '../styles/portfolio.css';

import happyTummyDesktopImage from '../images/mac-happy-tummy-grill.png';
import happyTummyPhoneImage from '../images/iphone8-happy-tummy-grill.png';
import alisaSongDesktopImage from '../images/mac-alisa-song.png';
import alisaSongPhoneImage from '../images/iphone8-alisa-song.png';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: window[constants.previousLocation] === constants.pathHome,
            projects: [{
                buttons: [{
                    displayText: 'Visit Project',
                    link: 'http://www.happytummygrill.com'
                }, {
                    displayText: 'GitHub',
                    link: 'https://www.github.com/AlisaSong/happytummygrill.com'
                }],
                description: `I built this client's first website from the ground-up, making sure the site is clean and easy-to-read while showcasing the menu items and key business information. I incorporated Google Analytics to track the success of this site, and since its launch, website traffic regularly spikes before lunch and dinner times.`,
                descriptionTitle: 'The Project',
                imageDesktop: happyTummyDesktopImage,
                imagePhone: happyTummyPhoneImage,
                skills: [
                    'Web Development with JavaScript, HTML5, CSS3',
                    'Tools used include Visual Studio, GitHub, Font Awesome',
                    'Telemetry with Google Analytics',
                    'Web Copywriting'
                ],
                skillsTitle: 'Skills Used',
                title: 'HappyTummyGrill.com'
            }, {
                buttons: [{
                    displayText: 'GitHub',
                    link: 'https://www.github.com/AlisaSong/alisasong.com'
                }],
                description: `I built the first version of my personal website using React. I incorporated a variety of CSS animations across the site. I also created the contact form from scratch, using Amazon's Elastic Beanstalk service to set up a Rest API that runs on a Node.js server.`,
                descriptionTitle: 'The Project',
                imageDesktop: alisaSongDesktopImage,
                imagePhone: alisaSongPhoneImage,
                skills: [
                    'Web Development with React, JavaScript, HTML, CSS',
                    'Tools used include Node.js, Amazon Web Services SDK, Visual Studio, GitHub, Font Awesome',
                    'Telemetry with Google Analytics'
                ],
                skillsTitle: 'Skills Used',
                title: 'AlisaSong.com v1'
            }, {
                buttons: [{
                    displayText: 'GitHub',
                    link: 'https://www.github.com/AlisaSong/sananddesign.com'
                }],
                description: `I'm building San & Design's first website, using React, Redux and TypeScript. The site will prominently feature the floral designer's portfolio, services and contact information.`,
                descriptionTitle: 'The Project',
                skills: [
                    'Web Development with React, Redux, TypeScript, HTML, CSS',
                    'Tools used include Node.js, Visual Studio, GitHub',
                    'Telemetry with Google Analytics'
                ],
                skillsTitle: 'Skills I Am Using',
                title: 'SanAndDesign.com (currently building)'
            }],
            selectedProjectIndex: 0
        };
    }

    getFontClass(icon, index) {
        let classes = [globalStyles.faLink, fontAwesome.fa, fontAwesome['fa-' + icon]];
        if (index === this.state.selectedProjectIndex) {
            classes.push(styles.dotNavigationSelected);
        }
        return classes.join(' ');
    }

    getSectionClass() {
        let sectionClass = '';

        if (this.props.move) {
            sectionClass = this.props.move;
        } else if (this.state.isAnimating) {
            sectionClass = globalStyles.sectionMoveInFromBottom;
        }

        return sectionClass;
    }

    setProjectShown(index) {
        this.setState({
            selectedProjectIndex: index
        });
    }

    render() {
        return (
            <div>
                {this.state.isAnimating &&
                    <Home move={globalStyles.sectionMoveOutUp} />
                }
                <section className={this.getSectionClass()}>
                    <Header />
                    <article>
                        <div className={styles.portfolioWrapper}>
                            <h1 className={styles.portfolioTitle}>PORTFOLIO</h1>
                            {this.state.projects.map((project, indexProject) =>
                                <div className={styles.projectWrapper}
                                    key={indexProject}>
                                    {this.state.selectedProjectIndex == indexProject &&
                                        <div>
                                        <div className={styles.projectContentWrapper}>
                                                <div className={styles.projectContent}>
                                                    <h2 className={styles.projectTitle}>{project.title}</h2>
                                                    <h3 className={styles.projectDescriptionTitle}>{project.descriptionTitle}</h3>
                                                    <p className={styles.projectDescriptionText}>{project.description}</p>
                                                    <h3 className={styles.projectDescriptionTitle}>{project.skillsTitle}</h3>
                                                    <ul className={styles.projectDescriptionText}>
                                                        {project.skills.map((skill, indexSkill) =>
                                                            <li className={styles.projectBullet}
                                                                key={indexSkill}>
                                                                {skill}
                                                            </li>
                                                        )}
                                                    </ul>
                                                    <div className={styles.projectButtons}>
                                                        {project.buttons.map((button, indexButton) =>
                                                            <a className={styles.projectButtonLink}
                                                                href={button.link}
                                                                key={indexButton}
                                                                target="_blank">
                                                                {button.displayText}
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.projectMobileDisplay}>
                                                <div className={styles.projectPhoneImageWrapper}>
                                                    <img className={styles.projectPhoneImage} src={project.imagePhone} />
                                                </div>
                                            </div>
                                            <div className={styles.projectDesktopDisplay}>
                                                <div className={styles.projectDesktopImageWrapper}>
                                                    <img className={styles.projectDesktopImage} src={project.imageDesktop} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    </article>
                    <div className={styles.dotNavigation}>
                        {this.state.projects.map((pro, index) =>
                            <p key={index}>
                                <i className={this.getFontClass('circle', index)}
                                    onClick={() => { this.setProjectShown(index) }}
                                />
                            </p>
                        )}
                    </div>
                </section>
            </div>
        );
    }
}
