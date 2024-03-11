import { useEffect, useState } from "react";
import { PackageDataApi } from "../../../../../static/interfaces";
import { packageService } from "../../../../../services/packageService";
import { usePopupContext } from "../../../../../context/PopupContext";

export const usePackage = () => {
  const [packages, setPackages] = useState<PackageDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isDeletePackagePopUpVisible,
    showDeletePackagePopUp,
    hideDeletePackagePopUp,
  } = usePopupContext();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setIsLoading(true);
        const packages = await packageService.fetchPackages();
        setPackages(packages);
      } catch (error) {
        setPackages([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPackages();
  }, [isDeletePackagePopUpVisible]);

  const handleDeletePackage = () => {
    showDeletePackagePopUp();
  };

  const handleCancelDelete = () => {
    hideDeletePackagePopUp();
  };

  return {
    packages,
    isLoading,
    handleDeletePackage,
    handleCancelDelete,
  };
};
