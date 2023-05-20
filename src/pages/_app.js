import '../sass/main.scss';
// import CMS from 'netlify-cms-app'

// // Initialize the CMS object
// CMS.init()
// // Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
