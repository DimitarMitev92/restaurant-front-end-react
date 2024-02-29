import { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useAddressesByUserId } from "../../hooks/useAddresses";
import { CreateOrderFormData, IMeal } from "../../static/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { Address } from "./Cart.static";
import { orderService } from "../../services/orderService";
import { mainRoute } from "../../static/endpoints";
import { createPDF } from "../CreatePDF/CreatePDF";

export const useCartLogic = (
  meals: IMeal[],
  addMealToBasket: (arg0: IMeal[]) => void,
  removeMealFromBasket: (arg0: string) => void,
  addAdditionalNoteForMeal: (arg0: string, arg1: string) => void,
  additionalNoteForOrder: string,
  totalPrice: number,
  updateDeliveryMode: (arg0: boolean) => void,
  updateSelectedAddressId: (arg0: string) => void
) => {
  const { user } = useAuth();
  const { addresses } = useAddressesByUserId(user?.user.id || "");
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState<boolean>(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setIsLoading(true);
        if (
          user &&
          addresses &&
          addresses.address &&
          addresses.address.length > 0
        ) {
          setSelectedAddress(addresses[0]?.address);
        }
      } catch (error) {
        console.error("Error fetching user addresses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddresses();
  }, [user, addresses]);

  const handleSwitchClick = (mode: boolean) => {
    setDeliveryMode(mode);
    setSelectedAddress(undefined);
  };

  const handleConfirmOrder = async () => {
    const clientId = user?.user.id || "";
    const restaurantId = id || "";

    const mealsDataRefactor = meals.map((meal: IMeal) => {
      return { mealId: meal.id, count: meal.count };
    });
    const dataForResponseOrder: CreateOrderFormData = {
      clientId: clientId,
      restaurantId: restaurantId,
      pickMethod: deliveryMode ? "delivery" : "on-site",
      additionalInfo: additionalNoteForOrder || "",
      meals: mealsDataRefactor,
    };
    await orderService.createOrder(dataForResponseOrder);
    navigate(`${mainRoute.PROFILE_ORDERS_HISTORY}`);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAddress = e.target.value;

    const [{ id }] = addresses.filter(
      (ad: Address) => ad.address === selectedAddress
    );

    setSelectedAddressId(id);
    setSelectedAddress(e.target.value);
  };

  const onAddMealToBasket = (meal: IMeal) => {
    addMealToBasket([meal]);
  };

  const onRemoveMealToBasket = (meal: IMeal) => {
    removeMealFromBasket(meal.id);
  };

  const onChangeAdditionalNote = (
    mealId: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    addAdditionalNoteForMeal(mealId, e.target.value);
  };

  const handlePreviewInvoice = () => {
    setShowPrintPreview(true);

    updateDeliveryMode(deliveryMode);
    updateSelectedAddressId(selectedAddressId);
  };

  const handleClosePrintPreview = () => {
    setShowPrintPreview(false);
  };

  const handleDownload = () => {
    const bill = createPDF(meals, totalPrice);
    bill.save("bill.pdf");
    handlePreviewInvoice();
  };

  return {
    deliveryMode,
    addresses,
    selectedAddress,
    isLoading,
    showPrintPreview,
    selectedAddressId,
    handleSwitchClick,
    handleConfirmOrder,
    handleAddressChange,
    onAddMealToBasket,
    onRemoveMealToBasket,
    onChangeAdditionalNote,
    handleClosePrintPreview,
    handleDownload,
    handlePreviewInvoice,
  };
};
