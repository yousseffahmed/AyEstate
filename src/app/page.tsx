import Head from 'next/head';
import styles from './Home.module.css';
import { Stint_Ultra_Condensed } from 'next/font/google';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyEstate</title>
        <meta name="description" content="AyEstate Home Listing Company" />
      </Head>
      <div className={styles.hero}>
        <header className={styles.header}>
          <div className={styles.logo}>AyEstate</div>
          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Listing</a>
            <a href="#">Company</a>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
          </nav>
          <button className={styles.contactButton}>Contact Us</button>
        </header>

        <div className={styles.content}>
          <main className={styles.main}>
            <h1 className={styles.title}>Discover Your Dream Home Today</h1>
            <p className={styles.description}>Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!</p>
            <div className={styles.actions}>
              <button className={styles.exploreButton}>Explore Now</button>
              <button className={styles.learnButton}>Learn More</button>
            </div>
          </main>
          <div className={styles.imageContainer}>
            <img src="/Placeholder Image.svg" alt="Home Image" className={styles.mainImage} />
          </div>
        </div>
      </div>
      <div className={styles.discover}>
        <div className={styles.sectionHeader}>
          <div className={styles.column}>
            <p className={styles.subheading}>Discover</p>
            <h1 className={styles.heading}>Find Your Dream <br></br> Property with Us</h1>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.text}>At our real estate agency, we offer a range of services to help you <br></br> with your property needs. Whether you're looking to buy, sell, or get a valuation, our experienced team is here to assist you every step of <br></br> the way.</p>
          </div>
        </div>
        <div className={styles.discoverContent}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h1 className={styles.titleCol}>Property Buying and Selling</h1>
              <p className={styles.textCol}>We provide expert guidance for buying and <br></br> selling properties, ensuring a smooth and <br></br>successful transaction.</p>
            </div>
            <div className={styles.col}>
              <h1 className={styles.titleCol}>Property Valuation Services</h1>
              <p className={styles.textCol}>Our team of certified appraisers offers accurate <br></br>property valuations to help you make informed decisions.</p>
            </div>
            <div className={styles.col}>
              <h1 className={styles.titleCol}>Real Estate Investment Advice</h1>
              <p className={styles.textCol}>Get expert advice on real estate investment <br></br> strategies to maximize your returns.</p>
            </div>
          </div>
          <div className={styles.actionsDiscover}>
            <button className={styles.learnButtonDiscover}>Learn More</button>
            <button className={styles.contactButtonDiscover}>Contact</button>
          </div>
        </div>
      </div>
      <div className={styles.simplify}>
        <div className={styles.sectionHeaderSimplify}>
          <div className={styles.columnSimplify}>
            <p className={styles.subheadingSimplify}>Simplify</p>
            <h1 className={styles.headingSimplify}>Streamline Your Property <br></br>Buying or Selling Process</h1>
            <p className={styles.textSimplify}>Our website provides a step-by-step guide to help you seamlessly navigate the <br></br>process of buying or selling property. From finding the perfect property to closing <br></br> the deal, we've got you covered.</p>
          </div>
        </div>
        <div className={styles.simplifyContent}>
          <div className={styles.rowSimp}>
            <div className={styles.colSimp}>
              <img src="Placeholder Image col 1.svg" alt="Property Image 1" className={styles.colImage} />
              <h1 className={styles.titleColSimp}>Find Your Dream <br></br>Property</h1>
              <p className={styles.textColSimp}>Browse through a wide selection of properties <br></br>that match your preferences and requirements.</p>
            </div>
            <div className={styles.colSimp}>
              <img src="/Placeholder Image col 2.svg" alt="Property Image 1" className={styles.colImage} />
              <h1 className={styles.titleColSimp}>Connect with Trusted Agents</h1>
              <p className={styles.textColSimp}>Our platform connects you with experienced and reliable real estate agents who will guide you <br></br> through the process.</p>
            </div>
            <div className={styles.colSimp}>
              <img src="/Placeholder Image col 3.svg" alt="Property Image 1" className={styles.colImage} />
              <h1 className={styles.titleColSimp}>Negotiate and Close the Deal</h1>
              <p className={styles.textColSimp}>Our experts will assist you in negotiating the best <br></br>terms and ensuring a smooth closing process.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inno}>
        <div className={styles.sectionHeaderInno}>
          <div className={styles.columnInno}>
            <p className={styles.subheadingInno}>Innovative</p>
            <h1 className={styles.headingInno}>Transforming the Real Estate Industry with Excellence</h1>
          </div>
          <div className={styles.textContainerInno}>
            <p className={styles.textInno}>At our company, we take pride in our exceptional success rate, <br></br> having listed thousands of properties, and ensuring client <br></br> satisfaction is our top priority.</p>
            <button className={styles.learnButtonDiscover}>Learn More</button>
          </div>
        </div>
        <div className={styles.rowInno}>
            <div className={styles.colInno}>
              <h1 className={styles.titleInno}>30%</h1>
              <p className={styles.textInno}>Success Rate</p>
            </div>
            <div className={styles.colInno}>
              <h1 className={styles.titleInno}>30%</h1>
              <p className={styles.textInno}>Properties Listed</p>
            </div>
            <div className={styles.colInno}>
              <h1 className={styles.titleInno}>30%</h1>
              <p className={styles.textInno}>Client Satisfaction</p>
            </div>
          </div>
      </div>
      <div className={styles.property}>
        <div className={styles.sectionHeaderProp}>
          <div className={styles.columnProp}>
            <p className={styles.subheadingProp}>Find</p>
            <h1 className={styles.headingProp}>Properties</h1>
            <p className={styles.text}>Explore our curated list of properties and find your dream home.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
