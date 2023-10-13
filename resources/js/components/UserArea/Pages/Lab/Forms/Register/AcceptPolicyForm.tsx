import { FC } from "react";
import { Checkbox } from "@mui/material";
import { useField } from "formik";

interface AcceptPolicyFormProps {
    
}
 
const AcceptPolicyForm: FC<AcceptPolicyFormProps> = () => {
    let [policyField, meta, helpers] = useField({ name: 'accpect_policy' })
    return (
        <div className="col-span-full px-6">
            <p className="text-gray-700 leading-loose">
                <span className="font-bold">- شرایط و قوانین ایجاد فروشگاه و فروش در سایت ۳۸فریم :</span>
                <br />
                ماده ۱ : فروشنده یا ایجاد کننده فروشگاه در سایت ۳۸فریم موظف به پذیرش تمامی مفاد شرایط و قوانین عمومی سایت ۳۸ فریم می‌باشد.
                <br />
                ماده ۲ : فروشنده یا ایجاد کننده فروشگاه ۳۸فریم متعهد به ارائه اطلاعات صحیح و تکمیل فرم‌های ثبت نام فروشگاه در سایت ۳۸فریم با اطلاعات حقیقی می‌باشد.
                <br />
                ماده ۳ : بررسی و پیگیری به جهت حل هر گونه اختلاف فی ما بین فروشنده و خریدار نخست توسط شورای حل اختلاف سایت ۳۸فریم انجام می‌شود. در صورتی که داوری شورای فوق الذکر اثر بخش در حل اختلاف نبود؛ سایت ۳۸فریم مسئولیتی برای حل مشکل طرفین اختلاف ندارد و ایشان می‌توانند خودشان چاره مشکل خویش بیابند. 
                <br />
                ماده ۴ : فروشنده یا ایجاد کننده فروشگاه موظف به ارائه اطلاعات صحیح و کامل از کالاهای فروشگاه خود است و فروش کالا‌های مجاز بر اساس لیست کالاهای مجاز ۳۸فریم تنها امکان پذیر است.
                <br />
                توجه داشته باشید کلیه اصول و رویه‌های سایت ۳۸فریم منطبق با قوانین حاکمیت کشوری ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا فروشنده نیز موظف به رعایت قوانین مربوطه است.
            </p>
            <div className="flex items-center px-2 mt-8">
                <label className="text-gray-800 font-bold cursor-pointer" htmlFor="policy">شرایط و ضوابط ایجاد فروشگاه در ۳۸ فریم را خواندم و با آن موافق هستم.</label>
                <Checkbox {...policyField} id="policy" color="success" size="medium"/>
            </div>
        </div>
    );
}
 
export default AcceptPolicyForm;