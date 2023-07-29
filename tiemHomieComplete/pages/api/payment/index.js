import moment from 'moment';
import querystring from 'querystring';
import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method === 'GET') {
    if (req.query.action === 'create_payment_url') {
      res.json({ title: 'Tạo mới đơn hàng', amount: 10000 });
    } else if (req.query.action === 'querydr') {
      res.json({ title: 'Truy vấn kết quả thanh toán' });
    } else if (req.query.action === 'refund') {
      res.json({ title: 'Hoàn tiền giao dịch thanh toán' });
    } else {
      res.json({ title: 'Danh sách đơn hàng' });
    }
  } else if (req.method === 'POST') {
    process.env.TZ = 'Asia/Ho_Chi_Minh';

    const date = new Date();
    const createDate = moment(date).format('YYYYMMDDHHmmss');

    const ipAddr =
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    const tmnCode = process.env.VNPAY_TMN_CODE; // Replace with your VNPay TmnCode
    const secretKey = process.env.VNPAY_SECRET_KEY; // Replace with your VNPay Secret Key
    const vnpUrl = process.env.VNPAY_URL; // Replace with your VNPay URL
    const returnUrl = process.env.VNPAY_RETURN_URL; // Replace with your VNPay Return URL
    const orderId = moment(date).format('DDHHmmss');
    const amount = req.body.amount;
    const bankCode = req.body.bankCode;

    let locale = req.body.language;
    if (locale === null || locale === '') {
      locale = 'vn';
    }
    const currCode = 'VND';
    const vnp_Params = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: tmnCode,
      vnp_Locale: locale,
      vnp_CurrCode: currCode,
      vnp_TxnRef: orderId,
      vnp_OrderInfo: 'Thanh toan cho ma GD:' + orderId,
      vnp_OrderType: 'other',
      vnp_Amount: amount * 100,
      vnp_ReturnUrl: returnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };
    if (bankCode !== null && bankCode !== '') {
      vnp_Params['vnp_BankCode'] = bankCode;
    }

    const sortedParams = sortObject(vnp_Params);
    const signData = querystring.stringify(sortedParams, { encode: false });
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
    vnp_Params['vnp_SecureHash'] = signed;

    const vnpUrlWithParams = vnpUrl + '?' + querystring.stringify(vnp_Params, { encode: false });

    res.json({ paymentUrl: vnpUrlWithParams });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

function sortObject(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();
  for (const key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
