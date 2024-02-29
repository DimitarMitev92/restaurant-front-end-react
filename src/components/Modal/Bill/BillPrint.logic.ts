import { useEffect, useState } from "react";
import { addressService } from "../../../services/addressService";

export const useBillPrint = (selectedAddressId: string) => {
  const [addressData, setAddressData] = useState({ address: "" });
  const [isLoading, setIsLoading] = useState(false);

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
    addressData,
    isLoading,
  };
};
