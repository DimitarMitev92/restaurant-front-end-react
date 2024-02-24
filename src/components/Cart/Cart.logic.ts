import { useState, useEffect, ChangeEvent } from 'react';
import { Address, CartItem } from './Cart.static';
import { useAddressesByUserId } from '../../hooks/useAddresses';
import { useAuth } from '../../context/AuthProvider';


interface CartHook {
  deliveryMode: boolean;
  selectedAddress: string | undefined;
  showNoteTextArea: boolean;
  additionalNote: string;
  totalPrice: number;
  cartItems: CartItem[];
  addresses: Address[];

  handleSwitchClick: (mode: boolean) => void;
  handleNoteChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleNoteCheckboxChange: () => void;
  handleConfirmOrder: () => void;
  handleAddressChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const useCart = (): CartHook => {
  const [deliveryMode, setDeliveryMode] = useState<boolean>(true);
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(undefined);
  const [showNoteTextArea, setShowNoteTextArea] = useState<boolean>(false);
  const [additionalNote, setAdditionalNote] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);

  const { user } = useAuth(); 
  const addressQuery = useAddressesByUserId(user?.user.id || "");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        if (user && addressQuery && addressQuery.addresses && addressQuery.addresses.length > 0) {
          setAddresses(addressQuery.addresses);
          setSelectedAddress(addressQuery.addresses[0]?.id);
        }
      } catch (error) {
        console.error('Error fetching user addresses:', error);
      }
    };
  
    fetchAddresses();
  }, [user, addressQuery]);

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
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleAddressChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAddress(e.target.value);
  };

  return {
    deliveryMode,
    selectedAddress,
    showNoteTextArea,
    additionalNote,
    totalPrice,
    cartItems,
    addresses,
    handleSwitchClick,
    handleNoteChange,
    handleNoteCheckboxChange,
    handleConfirmOrder,
    handleAddressChange,
  };
};

export default useCart;
