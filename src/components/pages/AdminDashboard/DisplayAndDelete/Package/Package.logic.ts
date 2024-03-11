import { useEffect, useState } from "react";
import { PackageDataApi } from "../../../../../static/interfaces";
import { packageService } from "../../../../../services/packageService";

export const usePackage = (onDelete: (arg0: string) => void) => {
  const [packages, setPackages] = useState<PackageDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);

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
  }, [triggerDelete]);

  const handleDeletePackage = async (packageId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this package?"
      );

      if (isConfirmed) {
        await packageService.deletePackagesById(packageId);
        setTriggerDelete((prev) => !prev);
        onDelete(packageId);
      }
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return {
    packages,
    isLoading,
    handleDeletePackage,
  };
};
