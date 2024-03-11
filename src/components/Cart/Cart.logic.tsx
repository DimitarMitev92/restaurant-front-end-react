import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useAddressesByUserId } from "../../hooks/useAddresses";
import { useOrderContext } from "../../context/OrderProvider";
import { CreateOrderFormData, IMeal } from "../../static/interfaces";
import { orderService } from "../../services/orderService";
import { mainRoute } from "../../static/endpoints";
import { Address } from "./Cart.static";
import { routes } from "../../routes/routes.static";
import { createPDF } from "../CreatePDF/CreatePDF";

export const useCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [showInvoice] = useState<boolean>(false);
  const [showPrintPreview, setShowPrintPreview] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();
  const { id } = useParams();
  const { addresses } = useAddressesByUserId(user?.user.id || "");
  const navigate = useNavigate();

  const {
    meals,
    addMealToBasket,
    removeMealFromBasket,
    addAdditionalNoteForMeal,
    additionalNoteForOrder,
    totalPrice,
    updateDeliveryMode,
    updateSelectedAddressId,
  } = useOrderContext();

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

    const mealsDataRefactor = meals.map((meal) => {
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

  const handleCreateAddress = () => {
    navigate(`${routes.PROFILE_CREATE_ADDRESS}`);
  };

  return {
    isLoading,
    deliveryMode,
    addresses,
    meals,
    totalPrice,
    selectedAddress,
    showInvoice,
    showPrintPreview,
    componentRef,
    selectedAddressId,
    handlePreviewInvoice,
    handleSwitchClick,
    handleConfirmOrder,
    handleAddressChange,
    onAddMealToBasket,
    onRemoveMealToBasket,
    onChangeAdditionalNote,
    handleClosePrintPreview,
    handleDownload,
    handleCreateAddress,
  };
};
