import 'tailwindcss/tailwind.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './css/FortAwesome-Font-Awesome-7d3d774/css/fontawesome.css'
import './css/FortAwesome-Font-Awesome-7d3d774/css/brands.css'
import './css/FortAwesome-Font-Awesome-7d3d774/css/solid.css'

import './css/global.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
