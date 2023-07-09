import { useDispatch } from 'react-redux';
import style from './WishList.module.css';
import { incrementAmount, decrementAmount, removeWishListItem} from '@/redux/reducers/cartSlice';

const WishList = ({ name, price, image, amount, handleQuantityChange}) => {
    const dispatch = useDispatch();

    var formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

    

  return (
    <>
      <div className= {`${style.cartRow}`}  >
                <a href="#" title="">
                  <img src={image} alt={name} />
                </a>
                <div className={style.cartInfo}>
                  <div className={style.cartName}>
                    <a href="#" className={style.cartProductName}>
                      {name}
                    </a>
                    {/* <span className={style.varientTitle}>Nâu</span> */}
                  </div>
                  <div className={style.flex}>
                    <div className={`${style.flexRight}`}>
                      <span className={style.productPrice}> {formattedPrice} </span>
                      <a href="#" className={style.btnRemove}
                       onClick={() => {dispatch(removeWishListItem({name}))}}
                       >
                        Xoá
                      </a>
                    </div>
                  </div>
                </div>
        
        </div>
      </>
  )
}

export default WishList
