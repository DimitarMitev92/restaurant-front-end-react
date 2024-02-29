export interface ReusableProps {
  formHeading: string;
  inputsData: {
    options?:
      | {
          value: string;
          label: string;
        }[]
      | undefined;
    htmlFor: string;
    labelTitle: string;
    type: string;
    name: string;
    placeholder: string;
  }[];
  initialValues: {
    name?: string;
    type?: string;
    price?: string;
    weight?: string;
    imageUrl?: string;
    picture?: string;
    description?: string;
    openHour?: string;
    closeHour?: string;
    startHour?: string;
    endHour?: string;
    startDate?: string;
    endDate?: string;
    firstName?: string;
    lastName?: string;
    locationId?: string;
    restaurantId?: string;
    menuTypeId?: string;
    menuId?: string;
    categoryId?: string;
    packageId?: string;
    address?: string;
    email?: string;
    password?: string;
    newPassword?: string;
    comparePassword?: string;
    error: string;
  };
  validationSchema: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => Promise<void>;
  buttonText: string;
}

export interface FormValues {
  email: string;
  password: string;
  error: string;
  [key: string]: string;
}
