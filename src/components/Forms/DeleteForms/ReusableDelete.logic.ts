import { useNavigate } from "react-router-dom";

interface DeleteService {
  (id: string): Promise<void>;
}

interface HidePopup {
  (): void;
}
export const useDeleteMessageModalLogic = (
  deletedId: string,
  deleteService: DeleteService,
  endpoint: string,
  hideDeletePopup: HidePopup
) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteService(deletedId);
      hideDeletePopup();
      navigate(endpoint);
    } catch (error) {
      console.error("Failed to delete:", error);
      hideDeletePopup();
    }
  };
  return { handleDelete };
};
