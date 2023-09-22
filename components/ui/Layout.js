import Header from './Header'
import Footer from './Footer'
import HeroBanner from '../blocks/HeroBanner'
import { oswald, robotoCondensed } from '@/app/utils/fonts'
import Image from 'next/image'
import Head from 'next/head'

export default function Layout({ children, meta }) {
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="fr">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        name="description"
                        content="Je suis David, Développeur Front End, spécialisé dans la librairie React. Javascript est un langage de programmation incontournable pour apporter du dynamisme à vos pages web."
                    />
                    <link rel="shortcut icon" href="./favicon.svg" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto&family=Roboto+Condensed&family=Poppins&display=swap"
                        rel="stylesheet"
                    />
                </head>
                <body className={oswald.className}>
                    <div className={`${robotoCondensed.className} container`}>
                        <Header />

                        <main className="content-wrapper">
                            {children}

                            {/* <div className="row">
                                <h2 className="title-h2" id="learning">
                                    `A propos<span>Mon parcours`</span>
                                </h2>
                            </div>
                            <section className="main row">
                                <div className="left">
                                    <div className="skills">
                                        <h3 className="title-section">
                                            Compétences
                                        </h3>

                                        <ul>
                                            <li>
                                                <strong>
                                                    Développement d’applications
                                                    orientées Javascript
                                                </strong>
                                            </li>
                                            <li>
                                                <strong>
                                                    Architecture logicielle avec
                                                    UML
                                                </strong>
                                            </li>
                                            <li>
                                                <strong>
                                                    Pratique de la méthode AGILE
                                                </strong>
                                            </li>
                                            <li>
                                                <strong>
                                                    utilisation d’API
                                                </strong>
                                            </li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li>
                                                Conception graphique et
                                                prototypage dynamique
                                            </li>
                                            <li>
                                                Intégration de design / mobile
                                            </li>
                                            <li>
                                                Gestion du Responsive Design
                                            </li>
                                            <li>
                                                Compatibilité cross-plateforms
                                            </li>
                                            <li>
                                                Connaissances des contraintes
                                                d’accessibilité Web
                                            </li>
                                            <li>
                                                Respect des standards du Web /
                                                Optimisation SEO
                                            </li>
                                            <li>
                                                Conception affiches, flyers,
                                                cartes de visite, retouche photo
                                                ...
                                            </li>
                                        </ul>
                                        <div className="view-more">
                                            <a
                                                href="#skills-modal"
                                                className="js-modal"
                                                title="Compétences de David le Codeur"
                                            >
                                                Détails +
                                            </a>
                                        </div>
                                        <aside
                                            id="skills-modal"
                                            className="modal-wrapper"
                                        >
                                            <div className="modal-content">
                                                <div className="js-close-wrapper">
                                                    <button className="js-close-modal">
                                                        Fermer
                                                    </button>
                                                </div>
                                                <h2 className="modal-title">
                                                    Mes compétences
                                                </h2>
                                                <h3>Développement Front End</h3>
                                                <p>
                                                    <strong>Javascript</strong>{' '}
                                                    est le langage Front que
                                                    j'utilise principalement
                                                    couplé à des librairies
                                                    issues de son écosystèmes
                                                    tels que
                                                    <strong>Express Js</strong>,
                                                    <strong>Jest</strong>,
                                                    <strong>Mocka</strong>
                                                    <strong>Axios</strong> ainsi
                                                    que divers outils tels que
                                                    <strong>
                                                        Node JS / npm
                                                    </strong>
                                                    ,<strong>Github</strong>. Il
                                                    n'y a que des solutions!
                                                </p>
                                                <h3>Conception graphique</h3>
                                                <p>
                                                    C'est au travers de plus
                                                    d'une centaine de projets
                                                    que j'ai affiné mes
                                                    compétences de
                                                    <strong>
                                                        Webdesigner
                                                    </strong>{' '}
                                                    cumulant ainsi les
                                                    casquettes d'
                                                    <strong>UX</strong>
                                                    et d'<strong>UI</strong>.
                                                    Figma est mon terrain de jeu
                                                    actuel ^^.
                                                </p>
                                                <p>
                                                    A chaque projet, une
                                                    identité visuelle attractive
                                                    propre à l'entreprise, une
                                                    optimisation de l'ergonomie
                                                    pour un site le plus
                                                    intuitif possible dans son
                                                    utilisation. Mes outils
                                                    <br />
                                                    <br />
                                                </p>
                                                <h3>
                                                    Intégration HTML/CSS desktop
                                                    & mobile
                                                </h3>
                                                <p>
                                                    En constante évolution,
                                                    <strong>HTML</strong> et
                                                    <strong>CSS</strong> est un
                                                    apprentissage sans fin. J'ai
                                                    abordé ces langages à leur
                                                    débuts jusqu'à présent.
                                                </p>
                                                <p>
                                                    Une application ou site
                                                    <strong>
                                                        responsive
                                                    </strong>{' '}
                                                    reste un défi quotidien tant
                                                    il y a de cas différent. Les
                                                    possibilités sont sans fin
                                                    et lorsqu'une nouveauté
                                                    apparait, rien n'est plus
                                                    jouissif que d'aller la
                                                    décortiquer, pour en tirer
                                                    le substrat pour le{' '}
                                                    <strong>
                                                        Web de demain
                                                    </strong>
                                                    .
                                                    <br />
                                                    <br />
                                                </p>
                                                <h3>
                                                    Responsive & Mobile First
                                                </h3>
                                                <p>
                                                    Un site optimisé pour Mobile
                                                    & Tablette est le point de
                                                    départ de toute intégration.
                                                    Le respect des standards
                                                    établi pour une expérience
                                                    optimale.
                                                    <br />
                                                    <br />
                                                </p>
                                                <h3>Optimisation SEO</h3>
                                                <p>
                                                    Les bonnes pratiques pour
                                                    une optimisation pour les
                                                    moteurs de recherches sont
                                                    pléthores. La sémantique
                                                    reste l'un des points clés
                                                    sur lesquels j'ai pu
                                                    travailler. Google n'a qu'à
                                                    bien se tenir!
                                                    <br />
                                                    <br />
                                                </p>
                                            </div>
                                        </aside>
                                    </div>

                                    <div className="training" id="training">
                                        <h3 className="title-section">
                                            Formations
                                        </h3>
                                        <div className="description promote arrow-left">
                                            <p>
                                                <span className="date">
                                                    2021 // DEVELOPPEUR
                                                    FULL-STACK / PHP SYMFONY
                                                </span>
                                            </p>
                                            <p>Digital Campus Live - Studi</p>
                                        </div>
                                        <div className="description promote">
                                            <p>
                                                <span className="date">
                                                    2004 - 2005 // WEBDESIGNER
                                                    INTÉGRATEUR
                                                </span>
                                            </p>
                                            <p>
                                                Centre de Formation IMAGE -
                                                Nimes
                                            </p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                <span className="date">
                                                    2001 - 2003 // CINÉMA
                                                    D’ANIMATION
                                                </span>
                                            </p>
                                            <p>
                                                ILOI (Institut de l’Image de
                                                l’Océan)
                                            </p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                <span className="date">
                                                    1998 - 2000 // DEUG MIAS
                                                </span>
                                            </p>
                                            <p>
                                                Mathématiques et Informatiques
                                                Appliquées aux Sciences
                                            </p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                <span className="date">
                                                    1997 - 1998 // BAC S -
                                                    OPTION MATHÉMATHIQUES
                                                </span>
                                            </p>
                                            <p>
                                                Lycée Roland Garros - Ile de la
                                                Réunion
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div
                                        className="experiences"
                                        id="experiences"
                                    >
                                        <h3 className="title-section">
                                            Expériences
                                        </h3>
                                        <div className="description">
                                            <p>
                                                <span className="date">
                                                    2017 - 2020 // PHOTOGRAPHE
                                                    INDÉPENDANT
                                                </span>
                                            </p>
                                            <p className="place">
                                                Bedejiel Photographie -
                                                Occitanie
                                            </p>
                                            <p>
                                                Evénementiel: mariage,
                                                anniversaire, baptême, concerts,
                                                reportages... Prise de vue:
                                                lumière naturelle & studio
                                                Developpement des photos sous
                                                Lightroom / Photoshop
                                            </p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                <span className="date">
                                                    2005 - 2014 // WEBDESIGNER -
                                                    INTÉGRATEUR - GRAPHISTE
                                                </span>
                                            </p>
                                            <p className="place">
                                                Neteor - Saint Victor La Coste
                                            </p>
                                            <p>
                                                Gestion de la relation client -
                                                Etablissement du cahier des
                                                charges - Conception de zoning /
                                                wireframe / prototypage HD -
                                                Intégration HTML5 / CSS3 -
                                                Optimisation SEO - Compatibilité
                                                cross platform - Création
                                                d’affiches événementielles,
                                                flyers publicitaires
                                            </p>
                                        </div>
                                        <div className="description">
                                            <p>
                                                <span className="date">
                                                    2003 // DESIGNER PROPS
                                                </span>
                                            </p>
                                            <p className="place">
                                                Seahorse Productions - Montrouge
                                            </p>
                                            <p>
                                                Designer props: design d’objets
                                                pour dessin d’animation
                                            </p>
                                        </div>
                                    </div>

                                    <div className="barcode"></div>
                                </div>
                            </section>

                            <section className="apps row">
                                <div className="extra" id="extra">
                                    <div className="content">
                                        <div>
                                            <h3 className="title-section">
                                                Logiciels
                                            </h3>
                                            <ul>
                                                <li>VS Code</li>
                                                <li>PHP Storm</li>
                                                <li>Adobe XD / Figma</li>
                                                <li>Photoshop</li>
                                                <li>Illustrator</li>
                                                <li>Indesign</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Langages web</h3>
                                            <ul>
                                                <li>Javascript</li>
                                                <li>React</li>
                                                <li>CSS 3 / HTML 5</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Outils</h3>
                                            <ul>
                                                <li>Github</li>
                                                <li>NodeJs</li>
                                                <li>Bootstrap</li>
                                                <li>SASS</li>
                                                <li>Wordpress</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pell-mell">
                                    <div>
                                        <Image
                                            src={'/pell-mell.svg'}
                                            alt=""
                                            width={370}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="projects row" id="projects">
                                <div className="row-section">
                                    <h2 className="title-h2">
                                        `Ce que j'ai fait
                                        <span>Mes projets`</span>
                                    </h2>
                                    <div className="projects-list"></div>
                                </div>
                            </section> */}
                            <div>
                                <a className="up" href="#home"></a>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </body>
            </html>
        </>
    )
}
