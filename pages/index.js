import Head from 'next/head';
import styles from '../styles/References.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reference List</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.container}>
        <img
          src="/logo_pollomyst.jpeg"
          alt="Pollomyst Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>References</h1>
        <ol className={styles.referenceList}>
          <li className={styles.referenceItem}>
            Albano, L. et al. (2024) &apos;The Chemistry of Sporopollenin Ektexine and Endexine Layers Isolated from Sunflower Pollen through an Ionic Liquid-Mediated Process,&apos; <em>ACS Omega</em>, 10(1), pp. 411–421.{' '}
            <a
              href="https://doi.org/10.1021/acsomega.4c06524"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.1021/acsomega.4c06524
            </a>
          </li>

          <li className={styles.referenceItem}>
            Antihistamines (2022).{' '}
            <a
              href="https://patient.info/allergies-blood-immune/allergies/antihistamines"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://patient.info/allergies-blood-immune/allergies/antihistamines
            </a>
          </li>

          <li className={styles.referenceItem}>
            Assistant Secretary for Health (ASH) (2024) <em>Pollen</em>.{' '}
            <a
              href="https://www.hhs.gov/climate-change-health-equity-environmental-justice/climate-change-health-equity/climate-health-outlook/pollen/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.hhs.gov/.../pollen/index.html
            </a>
          </li>

          <li className={styles.referenceItem}>
            Gross, T. (2024) Nasal sprays: How they work and how to use them correctly.{' '}
            <a
              href="https://www.covenanthealth.com/blog/nasal-sprays-how-they-work-and-how-to-use-them-correctly"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.covenanthealth.com/blog/nasal-sprays-how-they-work-and-how-to-use-them-correctly
            </a>
          </li>

          <li className={styles.referenceItem}>
            Grienenberger, E. and Quilichini, T.D. (2021) &apos;The Toughest Material in the Plant Kingdom: An Update on Sporopollenin,&apos; <em>Frontiers in Plant Science</em>, 12.{' '}
            <a
              href="https://doi.org/10.3389/fpls.2021.703864"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.3389/fpls.2021.703864
            </a>
          </li>

          <li className={styles.referenceItem}>
            Hay fever - Diagnosis and treatment - Mayo Clinic.{' '}
            <a
              href="https://www.mayoclinic.org/diseases-conditions/hay-fever/diagnosis-treatment/drc-20373045"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.mayoclinic.org/diseases-conditions/hay-fever/diagnosis-treatment/drc-20373045
            </a>
          </li>

          <li className={styles.referenceItem}>
            Immunotherapy - Allergy UK | National Charity (2024).{' '}
            <a
              href="https://www.allergyuk.org/resources/immunotherapy-factsheet/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.allergyuk.org/resources/immunotherapy-factsheet/
            </a>
          </li>

          <li className={styles.referenceItem}>
            Kim, S.-H., Park, H.-S. and Jang, J.-Y. (2011) &apos;Impact of meteorological variation on hospital visits of patients with tree pollen allergy,&apos; <em>BMC Public Health</em>, 11(1).{' '}
            <a
              href="https://doi.org/10.1186/1471-2458-11-890"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.1186/1471-2458-11-890
            </a>
          </li>

          <li className={styles.referenceItem}>
            Levison, J. (2025) &apos;Hay fever set to be more severe this year - here&apos;s why.&apos;{' '}
            <a
              href="https://news.sky.com/story/why-hay-fever-is-worse-this-year-and-what-you-can-do-about-it-13326241"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://news.sky.com/story/...13326241
            </a>
          </li>

          <li className={styles.referenceItem}>
            Ruggeri, A. (2025) &apos;Climate change is supercharging pollen and making allergies worse.&apos;{' '}
            <a
              href="https://www.bbc.co.uk/future/article/20250410-how-climate-driven-thunderstorms-supercharge-pollen-allergies"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.bbc.co.uk/future/article/...
            </a>
          </li>

          <li className={styles.referenceItem}>
            Singh, A.B. and Kumar, P. (2022) &apos;Climate change and allergic diseases: An overview,&apos; <em>Frontiers in Allergy</em>, 3.{' '}
            <a
              href="https://doi.org/10.3389/falgy.2022.964987"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.3389/falgy.2022.964987
            </a>
          </li>

          <li className={styles.referenceItem}>
            Steroid nasal sprays (2023).{' '}
            <a
              href="https://patient.info/treatment-medication/steroids/steroid-nasal-sprays"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://patient.info/treatment-medication/steroids/steroid-nasal-sprays
            </a>
          </li>

          <li className={styles.referenceItem}>
            Sublingual Immunotherapy (SLIT) | The Burghwood Clinic.{' '}
            <a
              href="https://www.burghwoodclinic.co.uk/clinical/treatments/sublingual-immunotherapy-slit"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.burghwoodclinic.co.uk/clinical/treatments/sublingual-immunotherapy-slit
            </a>
          </li>

          <li className={styles.referenceItem}>
            World Health Organisation (2024) &apos;Report of the WHO South-East Asia Regional meeting on nutrition and climate change,&apos; <em>WHO Regional Office for South-East Asia</em>.{' '}
            <a
              href="https://iris.who.int/bitstream/handle/10665/380407/SEA-NCD-112-eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://iris.who.int/.../SEA-NCD-112-eng.pdf
            </a>
          </li>

          <li className={styles.referenceItem}>
            Zhang, Y. and Steiner, A.L. (2022) &apos;Projected climate-driven changes in pollen emission season length and magnitude over the continental United States,&apos; <em>Nature Communications</em>, 13(1).{' '}
            <a
              href="https://doi.org/10.1038/s41467-022-28764-0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.1038/s41467-022-28764-0
            </a>
          </li>

          <li className={styles.referenceItem}>
            Zhou, Y. and Dobritsa, A.A. (2025) &apos;Forging the pollen fortress: Cell biological mechanisms of exine formation,&apos; <em>Current Opinion in Plant Biology</em>, 86, p. 102742.{' '}
            <a
              href="https://doi.org/10.1016/j.pbi.2025.102742"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.1016/j.pbi.2025.102742
            </a>
          </li>

          <li className={styles.referenceItem}>
            Ziska, L.H. et al. (2019) &apos;Temperature-related changes in airborne allergenic pollen abundance and seasonality across the northern hemisphere: a retrospective data analysis,&apos; <em>The Lancet Planetary Health</em>, 3(3), pp. e124–e131.{' '}
            <a
              href="https://doi.org/10.1016/s2542-5196(19)30015-4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://doi.org/10.1016/s2542-5196(19)30015-4
            </a>
          </li>
        </ol>
      </main>
    </>
  );
}
