import { toast } from "sonner";

export const successToast = (val: string) => {
  toast.success(val);
};
export const warningToast = (val: string) => {
  toast.warning(val);
};
export const infoToast = (val: string) => {
  toast.info(val);
};
export const errorToast = (val: string) => {
  toast.error(val);
};
