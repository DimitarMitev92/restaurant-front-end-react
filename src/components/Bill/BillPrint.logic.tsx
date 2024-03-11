import { useEffect, useState } from "react";
import { addressService } from "../../services/addressService";

export const useBillPrint = (selectedAddressId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] = useState({ address: "" });
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        setIsLoading(true);
        const data = await addressService.fetchAddressByUd(selectedAddressId);
        setAddressData(data);
      } catch (error) {
        console.error("Error fetching address data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAddressData();
  }, [selectedAddressId]);

  return {
    isLoading,
    addressData,
    currentDate,
  };
};
