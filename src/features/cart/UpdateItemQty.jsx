import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decItemQty, incItemQty } from "./cartSlice";

function UpdateItemQty({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItemQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQty;
