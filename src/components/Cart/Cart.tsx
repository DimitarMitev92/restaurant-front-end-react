import React, { useEffect, useState, ChangeEvent } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useAddressesByUserId } from "../../hooks/useAddresses";
import Select from "../ui-elements/select";
import TextArea from "../ui-elements/textArea";
import Switch from "./Switch";
import {
  CartWrapper,
  SidebarWrapper,
  SidebarHeader,
  SidebarTitle,
  SidebarContent,
  CartLabel,
  CartButton,
  StyledPriceDiv,
} from "./Cart.style";
import { Address, CartItem } from "./Cart.static";
import UnifiedInput from "../ui-elements/input";

export const ShoppingCart: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined
  );
  const [showNoteTextArea, setShowNoteTextArea] = useState<boolean>(false);
  const [additionalNote, setAdditionalNote] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const { user } = useAuth();
  const { address } = useAddressesByUserId(user?.user.id || "");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        if (user && address && address.address && address.address.length > 0) {
          setAddresses(address);
          setSelectedAddress(address[0]?.address);
        }
      } catch (error) {
        console.error("Error fetching user addresses:", error);
      }
    };

    fetchAddresses();
  }, [user, address]);

  const handleSwitchClick = (mode: boolean) => {
    setDeliveryMode(mode);
    setSelectedAddress(undefined);
  };

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalNote(e.target.value);
  };

  const handleNoteCheckboxChange = () => {
    setShowNoteTextArea(!showNoteTextArea);
  };

  const handleConfirmOrder = () => {
    // TODO: Submit order implementation
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleAddressChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAddress = e.target.value;

    const [{ id }] = address.filter(
      (ad: Address) => ad.address === selectedAddress
    );

    setSelectedAddressId(id);
    setSelectedAddress(e.target.value);
  };

  return (
    <CartWrapper>
      <SidebarWrapper>
        <SidebarHeader>
          <SidebarTitle>Cart</SidebarTitle>
          <Switch
            deliveryMode={deliveryMode}
            handleSwitchClick={handleSwitchClick}
          />
        </SidebarHeader>
        <SidebarContent>
          <>
            <div>
              <UnifiedInput
                type="checkbox"
                checked={showNoteTextArea}
                onChange={handleNoteCheckboxChange}
                value={""}
              />
              <CartLabel htmlFor="additional-note">Additional Note:</CartLabel>
            </div>
            {showNoteTextArea && (
              <div>
                <TextArea
                  placeholder="Additional Note"
                  value={additionalNote}
                  onChange={handleNoteChange}
                />
              </div>
            )}
            {deliveryMode && addresses && (
              <>
                <CartLabel htmlFor="address-select">
                  Select Delivery Address:
                </CartLabel>
                <Select
                  onChange={handleAddressChange}
                  value={selectedAddress || ""}
                  options={
                    address &&
                    address.map((address: Address) => ({
                      value: address.address,
                      label: `${address.address}`,
                    }))
                  }
                />
              </>
            )}
            <StyledPriceDiv>
              Total Price: ${totalPrice.toFixed(2)}
            </StyledPriceDiv>
          </>
          <CartButton onClick={handleConfirmOrder}>Confirm Order</CartButton>
        </SidebarContent>
      </SidebarWrapper>
    </CartWrapper>
  );
};
