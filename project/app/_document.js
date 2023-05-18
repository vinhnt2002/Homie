import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getStaticProps(ctx) {
    const initialProps = await Document.getStaticProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta content="Anil z" name="author" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Shopwise is Powerful features and You Can Use The Perfect Build this Template For Any eCommerce Website. The template is built for sell Fashion Products, Shoes, Bags, Cosmetics, Clothes, Sunglasses, Furniture, Kids Products, Electronics, Stationery Products and Sporting Goods." />
          <meta name="keywords" content="ecommerce, electronics store, Fashion store, furniture store,  bootstrap 4, clean, minimal, modern, online store, responsive, retail, shopping, ecommerce store" />

          <title>Shopwise - eCommerce Bootstrap 5 HTML Template</title>
          <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
          <link rel="stylesheet" href="assets/css/animate.css" />
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
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
          <link rel="stylesheet" href="assets/css/rtl-style.css" />
          <link rel="stylesheet" href="assets/css/rtl-style.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.superslides.min.js"></script>
          <script src="/js/bootstrap-select.js"></script>
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
