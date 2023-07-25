import Document, { Html, Head, Main, NextScript } from 'next/document'
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
 

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      })
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
 
  render() {
    return (
      <Html lang="en">
        <Head>

        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />

        <link href="/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        <link href="/css/style.css" rel="stylesheet" />

       </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/vendor/purecounter/purecounter_vanilla.js"></script>
          <script src="/vendor/aos/aos.js"></script>
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/vendor/glightbox/js/glightbox.min.js"></script>
          <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="/vendor/waypoints/noframework.waypoints.js"></script>
          <script src="/vendor/php-email-form/validate.js"></script>

          <script src="/js/main.js"></script>
        </body>
      </Html>
    )
  }
}
 
export default MyDocument






// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
