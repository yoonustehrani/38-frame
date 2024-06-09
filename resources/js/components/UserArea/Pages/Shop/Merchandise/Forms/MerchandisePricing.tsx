import { useState } from "react";
import Input from "../../../../../WebPanel/components/Formik/Input";
import { FormControl, FormControlLabel, Radio, RadioGroup, ThemeProvider, createTheme } from "@mui/material";
import { useField } from "formik";
import SelectBox from "../../../../../WebPanel/components/Formik/SelectBox";

function MerchandisePricing() {
    const [hasOfferField] = useField({name: '__hasOffer'})
    const [offerTypeField] = useField({name: 'offer_type'})
    const [priceField] = useField({name: 'price', type: 'number'})
    return (
        <>
            <Input required type="number" name="price" id="price" label="قیمت کالا" className="ltr py-2 px-3"/>
            <div className="col-span-full">
                <ThemeProvider theme={createTheme({typography: {fontFamily: 'IranSansWeb',},})}>
                    <FormControl>
                        <label className="text-gray-600 mb-2">کالا تخفیف دارد؟</label>
                        <RadioGroup
                            {...hasOfferField}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="بله" />
                            <FormControlLabel value="no" control={<Radio />} label="خیر" />
                        </RadioGroup>
                    </FormControl>
                </ThemeProvider>
            </div>
            {hasOfferField.value === 'yes' && (
                <>
                    <SelectBox required name="offer_type" id="offer_type" className="form-input py-1 pt-3 px-3" label='مدل تخفیف' placeholder="نوع تخفیف را مشخص کنید"
                        options={[
                            {value: 'percentage', text: 'بر مبنای درصد'},
                            {value: 'on-price', text: 'بر مبنای قیمت'}
                        ]}
                    />
                    <Input required type="number" min={1} max={offerTypeField.value === 'percentage' ? 99 : priceField.value - 1000} name="offer_value" id="offer_value" label={offerTypeField.value === 'percentage' ? "میزان تخفیف (درصد)" : "میزان تخفیف (تومان)"} className="ltr py-2 px-3"/>
                </>
            )}
        </>
    )
}

export default MerchandisePricing;