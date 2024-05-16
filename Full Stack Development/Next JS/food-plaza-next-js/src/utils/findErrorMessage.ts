export const findErrorMessage = (fieldName: string, errors: any) => {
  return errors
    .filter((item: any) => {
      return item.path.includes(fieldName);
    })
    .map((item: any) => item.message);
};
