import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ContactSchema = yup.object().shape({
  name: yup.string().min(2).required("نام الزامی میباشد"),
  lastName: yup.string().min(2).required("نام خانوادگی الزامی میباشد"),
  phone: yup.number().min(11).required("شماره تماس الزامی میباشد"),
  email: yup.string().email("ایمیل واررد شده معتبر نمیباشد").required("ایمیل الزامی میباشد"),
});
