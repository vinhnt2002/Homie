import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="assets/css/all.min.css" />
          <link rel="stylesheet" href="assets/css/ionicons.min.css" />
          <link rel="stylesheet" href="assets/css/themify-icons.css" />
          <link rel="stylesheet" href="assets/css/linearicons.css" />
          <link rel="stylesheet" href="assets/css/flaticon.css" />
          <link rel="stylesheet" href="assets/css/simple-line-icons.css" />
          <link rel="stylesheet" href="assets/owlcarousel/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.css" />
          <link rel="stylesheet" href="assets/owlcarousel/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="assets/css/slick.css" />
          <link rel="stylesheet" href="assets/css/slick-theme.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
          <link rel="stylesheet" href="assets/css/responsive.css" />
          {/* <link rel="stylesheet" href="assets/css/rtl-style.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="/js/jquery-3.6.0.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/jquery.superslides.min.js"></script>
          <script src="/js/inewsticker.js"></script>
          <script src="/js/bootsnav.js"></script>
          <script src="/js/images-loded.min.js"></script>
          <script src="/js/isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/baguetteBox.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>
          <script src="/js/custom.js"></script> */}

          <script src="assets/js/jquery-3.6.0.min.js"></script>
          <script src="assets/js/popper.min.js"></script>
          <script src="assets/bootstrap/js/bootstrap.min.js"></script>
          <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
          <script src="assets/js/magnific-popup.min.js"></script>
          <script src="assets/js/waypoints.min.js"></script>
          <script src="assets/js/parallax.js"></script>
          <script src="assets/js/jquery.countdown.min.js"></script>
          <script src="assets/js/imagesloaded.pkgd.min.js"></script>
          <script src="assets/js/isotope.min.js"></script>
          <script src="assets/js/jquery.dd.min.js"></script>
          <script src="assets/js/slick.min.js"></script>
          <script src="assets/js/jquery.elevatezoom.js"></script>
          <script src="assets/js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
