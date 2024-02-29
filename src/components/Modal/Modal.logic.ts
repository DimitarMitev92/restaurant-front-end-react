export const useModal = (addAdditionalNoteForOrder: (arg0: string) => void) => {
  const onChangeAdditionalNoteOrder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = (e.target as HTMLInputElement).value;
    addAdditionalNoteForOrder(value);
  };

  return { onChangeAdditionalNoteOrder };
};
