import * as yup from 'yup';

export const RegisterSemalar = yup.object().shape({
    email: yup.string().email("Email adresi geçerli değil").required("Email adresi zorunludur"),
    age: yup.number().positive("pozitif değer gir").integer("tam sayı gir").required("yaş alanı zorunlu"),
    password: yup.string().min(8, "en az 8 karakter giriniz").required("şifre alanı zorunludur"),
    ConfirmPassword: yup.string().oneOf([yup.ref('password')], 'Şifreler eşleşmiyor').required("Şifre onayı zorunludur"),
    term: yup.boolean().oneOf([true], "Kullanıcı sözleşmesini kabul etmelisiniz").required("Kullanıcı sözleşmesini kabul etmediniz")
})


