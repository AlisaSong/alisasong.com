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
import sanAndDesignDesktopImage from '../images/mac-san-and-design.png';
import sanAndDesignPhoneImage from '../images/iphone8-san-and-design.png';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: window[constants.previousLocation] === constants.pathHome,
            projects: [{
                buttons: [{displayText: 'Visit Project',
                    link: 'http://www.sananddesign.com/home'
                }, {
                    displayText: 'GitHub',
                    link: 'https://www.github.com/AlisaSong/sananddesign.com'
                }],
                description: `I built the first website for this Bellevue-based floral design shop, using React and TypeScript. This is the third website I have worked on. I worked with the client to design a site that fits her new business' needs, and created the website completely from scratch. The site features a gallery that serves as the designer's portfolio, outlines her services for potential clients, and has a built in contact form that allows clients to email her.`,
                descriptionTitle: 'The Project',
                imageDesktop: sanAndDesignDesktopImage,
                imagePhone: sanAndDesignPhoneImage,
                scroller: undefined,
                skills: [
                    'Web Development with React, TypeScript, HTML, CSS',
                    'Tools used include Node.js, Visual Studio, GitHub',
                    'Telemetry with Google Analytics'
                ],
                skillsTitle: 'Skills Used',
                title: 'SanAndDesign.com'
            }, {
                buttons: [{
                    displayText: 'Visit Project',
                    link: 'http://www.alisasong.com'
                }, {
                    displayText: 'GitHub',
                    link: 'https://www.github.com/AlisaSong/alisasong.com'
                }],
                description: `I built my personal website from scratch using React to show off my skills and work as a front-end developer. I incorporated a variety of CSS animations across the site. I set up a Node.js server with a Rest API so that visitors can use this site's contact form to send me mail directly.`,
                descriptionTitle: 'The Project',
                imageDesktop: alisaSongDesktopImage,
                imagePhone: alisaSongPhoneImage,
                scroller: undefined,
                skills: [
                    'Web Development with React, JavaScript, HTML, CSS',
                    'Tools used include Node.js, Amazon Web Services SDK, Visual Studio, GitHub, Font Awesome',
                    'Telemetry with Google Analytics'
                ],
                skillsTitle: 'Skills Used',
                title: 'AlisaSong.com v1'
            }, {
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
                scroller: undefined,
                skills: [
                    'Web Development with JavaScript, HTML5, CSS3',
                    'Tools used include Visual Studio, GitHub, Font Awesome',
                    'Telemetry with Google Analytics',
                    'Web Copywriting'
                ],
                skillsTitle: 'Skills Used',
                title: 'HappyTummyGrill.com'
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
        //this.scroller.scrollTop = 0;
        this.state.projects[index].scroller.scrollIntoView();
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
                    <article ref={scroller => this.scroller = scroller}>
                        <div className={styles.portfolioWrapper}>
                            <h1 className={styles.portfolioTitle}>PORTFOLIO</h1>
                            {this.state.projects.map((project, indexProject) =>
                                <div className={styles.projectWrapper}
                                    key={indexProject}>
                                    <div>
                                        <div className={styles.projectContentWrapper}>
                                            <div className={styles.projectContent}>
                                                <h2 className={styles.projectTitle} ref={scroller => project.scroller = scroller}>{project.title}</h2>
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
                                        {project.imagePhone &&
                                            <div className={styles.projectMobileDisplay}>
                                                <div className={styles.projectPhoneImageWrapper}>
                                                    <img className={styles.projectPhoneImage} src={project.imagePhone} />
                                                </div>
                                            </div>
                                        }
                                        {project.imageDesktop &&
                                            <div className={styles.projectDesktopDisplay}>
                                                <div className={styles.projectDesktopImageWrapper}>
                                                    <img className={styles.projectDesktopImage} src={project.imageDesktop} />
                                                </div>
                                            </div>
                                        }
                                    </div>
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
