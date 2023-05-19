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
          <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
          <link rel="stylesheet" href="css/animate.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="css/all.min.css" />
          <link rel="stylesheet" href="css/ionicons.min.css" />
          <link rel="stylesheet" href="css/themify-icons.css" />
          <link rel="stylesheet" href="css/linearicons.css" />
          <link rel="stylesheet" href="css/flaticon.css" />
          <link rel="stylesheet" href="css/simple-line-icons.css" />
          <link rel="stylesheet" href="owlcarousel/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="owlcarousel/css/owl.theme.css" />
          <link rel="stylesheet" href="owlcarousel/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/slick.css" />
          <link rel="stylesheet" href="css/slick-theme.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/responsive.css" />
          <link rel="stylesheet" href="css/rtl-style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
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
          <script src="/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
