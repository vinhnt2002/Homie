import { useDispatch } from 'react-redux';
import style from './Cart.module.css';
import { incrementAmount, decrementAmount, removeItem} from '@/redux/reducers/cartSlice';
import { decrementCheckoutAmount, incrementCheckoutAmount, removeProduct } from '@/redux/reducers/checkoutSlice';

const Product = ({sku, name, price, image, amount, handleQuantityChange}) => {
    const dispatch = useDispatch();


    const handleDecrease = (e) => {
      e.preventDefault();
      if (amount === 1) {
        dispatch(removeItem({ name }));
        dispatch(removeProduct({ productId: sku }));
        return;
      }else
      dispatch(decrementAmount({ name }));
      dispatch(decrementCheckoutAmount({ name }));
    }
  
    const handleIncrease = (e) => {
      e.preventDefault();
      dispatch(incrementAmount({ name }));
      dispatch(incrementCheckoutAmount({ name }));
    }
  
    const handleRemove = (e) => {
      e.preventDefault();
      dispatch(removeItem({ name }))
      dispatch(removeProduct({ productId: sku }));
    }

    var formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

    

  return (
    <>
      <div className={style.cartRow}>
                <a href="#" title="">
                  <img src={image} alt={name} />
                </a>
                <div className={style.cartInfo}>
                  <div className={style.cartName}>
                    <a href="#" className={style.cartProductName}>
                      {name}
                    </a>
                    <span className={style.varientTitle}>Nâu</span>
                  </div>
                  <div className={style.flex}>
                    <div className="col col-6">
                      <label className={style.cartQuantity}>Số lượng</label>
                      <div className={style.inputGroupBtn}>
                        <button type="button" className={style.btnMinus}
                        onClick={handleDecrease}>
                          {" "}
                          -{" "}
                        </button>
                        <input
                          type="text"
                          className={style.productQuantity}
                          value={amount}
                          onChange={(event) => handleQuantityChange(event.target.value)}
                          readOnly
                        />
                        <button type="button" className={style.btnPlus} 
                        onClick={handleIncrease}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className={`${style.flexRight} col col-6`}>
                      <span className={style.productPrice}> {formattedPrice} </span>
                      <a href="#" className={style.btnRemove}
                       onClick={handleRemove}
                       >
                        Xoá
                      </a>
                    </div>
                  </div>
                  <div></div>
                </div>
        
        </div>
      </>
  )
}

export default Product
