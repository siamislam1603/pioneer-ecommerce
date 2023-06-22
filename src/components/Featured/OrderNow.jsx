import TouchRipple from "@mui/material/ButtonBase/TouchRipple"
import { OrderNowButton } from "./styles"
import { useRef } from "react";

const OrderNow = () => {
    const rippleRef = useRef(null);
    const onRippleStart = (e) => {
      rippleRef.current.start(e);
    };
    const onRippleStop = (e) => {
      rippleRef.current.stop(e);
    };
  return (
    <OrderNowButton
      type="button"
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      variant="button"
    >
      Order Now
      <TouchRipple center={false} ref={rippleRef} className="ripple" />
    </OrderNowButton>
  )
}

export default OrderNow
