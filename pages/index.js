import Head from 'next/head';

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

      <main
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '3rem 2rem',
          fontFamily: "'Fira Sans', sans-serif",
          background: '#fff',
          color: '#000',
          fontSize: '1.125rem', // ≈18px
          lineHeight: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>References</h1>
        <ol>
          <li style={{ marginBottom: '1.5rem' }}>
            Albano, L. et al. (2024) 'The Chemistry of Sporopollenin Ektexine and Endexine Layers Isolated
            from Sunflower Pollen through an Ionic Liquid-Mediated Process,' <em>ACS Omega</em>, 10(1),
            pp. 411–421.{' '}
            <a
              href="https://doi.org/10.1021/acsomega.4c06524"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.1021/acsomega.4c06524
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Assistant Secretary for Health (ASH) (2024) <em>Pollen</em>.{' '}
            <a
              href="https://www.hhs.gov/climate-change-health-equity-environmental-justice/climate-change-health-equity/climate-health-outlook/pollen/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://www.hhs.gov/.../pollen/index.html
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Grienenberger, E. and Quilichini, T.D. (2021) 'The Toughest Material in the Plant Kingdom: An
            Update on Sporopollenin,' <em>Frontiers in Plant Science</em>, 12.{' '}
            <a
              href="https://doi.org/10.3389/fpls.2021.703864"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.3389/fpls.2021.703864
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Kim, S.-H., Park, H.-S. and Jang, J.-Y. (2011) 'Impact of meteorological variation on hospital
            visits of patients with tree pollen allergy,' <em>BMC Public Health</em>, 11(1).{' '}
            <a
              href="https://doi.org/10.1186/1471-2458-11-890"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.1186/1471-2458-11-890
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Levison, J. (2025) 'Hay fever set to be more severe this year - here's why.'{' '}
            <a
              href="https://news.sky.com/story/why-hay-fever-is-worse-this-year-and-what-you-can-do-about-it-13326241"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://news.sky.com/story/...13326241
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Ruggeri, A. (2025) 'Climate change is supercharging pollen and making allergies worse.'{' '}
            <a
              href="https://www.bbc.co.uk/future/article/20250410-how-climate-driven-thunderstorms-supercharge-pollen-allergies"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://www.bbc.co.uk/future/article/...
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Singh, A.B. and Kumar, P. (2022) 'Climate change and allergic diseases: An overview,'{' '}
            <em>Frontiers in Allergy</em>, 3.{' '}
            <a
              href="https://doi.org/10.3389/falgy.2022.964987"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.3389/falgy.2022.964987
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            World Health Organisation (2024) 'Report of the WHO South-East Asia Regional meeting on
            nutrition and climate change,' <em>WHO Regional Office for South-East Asia</em>.{' '}
            <a
              href="https://iris.who.int/bitstream/handle/10665/380407/SEA-NCD-112-eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://iris.who.int/.../SEA-NCD-112-eng.pdf
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Zhang, Y. and Steiner, A.L. (2022) 'Projected climate-driven changes in pollen emission season
            length and magnitude over the continental United States,' <em>Nature Communications</em>,
            13(1).{' '}
            <a
              href="https://doi.org/10.1038/s41467-022-28764-0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.1038/s41467-022-28764-0
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Zhou, Y. and Dobritsa, A.A. (2025) 'Forging the pollen fortress: Cell biological mechanisms of
            exine formation,' <em>Current Opinion in Plant Biology</em>, 86, p. 102742.{' '}
            <a
              href="https://doi.org/10.1016/j.pbi.2025.102742"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.1016/j.pbi.2025.102742
            </a>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            Ziska, L.H. et al. (2019) 'Temperature-related changes in airborne allergenic pollen abundance
            and seasonality across the northern hemisphere: a retrospective data analysis,'{' '}
            <em>The Lancet Planetary Health</em>, 3(3), pp. e124–e131.{' '}
            <a
              href="https://doi.org/10.1016/s2542-5196(19)30015-4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a0dab', textDecoration: 'underline' }}
            >
              https://doi.org/10.1016/s2542-5196(19)30015-4
            </a>
          </li>
        </ol>
      </main>
    </>
  );
}
