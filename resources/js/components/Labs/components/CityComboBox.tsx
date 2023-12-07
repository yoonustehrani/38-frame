import { ThemeProvider } from "@emotion/react";
import { Autocomplete, CircularProgress, TextField, createTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { CityObject } from "../types";
import { fetchCities } from "../api";
import { useDefaultCity } from "../hooks";

interface CityComboBoxProps {
    cityId: number | null
    setCityId: (value: any) => void
}
 
const CityComboBox: FC<CityComboBoxProps> = ({cityId, setCityId}) => {
    const [cityQuery, setCityQuery] = useState<string>()
    const [cityloading, setCityLoading] = useState(false)
    const [cities, setCities] = useState<CityObject[]>([])
    const defaultCity = useDefaultCity(cityId);
    
    useEffect(() => {
        if (cityQuery && cityQuery.length > 1) {
            const [response, cancel] = fetchCities(cityQuery)
            setCityLoading(true)
            response.then(r => {
                if (! r.hasErrors()) {
                    setCities(r.getContent<CityObject[]>())
                }
                setCityLoading(false)
            })
            return () => cancel()
        }
        setCities([])
    }, [cityQuery])

    return (
        <ThemeProvider theme={createTheme({typography: {fontFamily: 'IranSansWeb',},})}>
            {typeof defaultCity !== 'undefined' && (
                <Autocomplete
                    id="grouped-demo"
                    options={cities.sort((a, b) => -b.province_name.localeCompare(a.province_name))}
                    groupBy={(option) => option.province_name}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    // loading={cityloading}
                    onInputChange={(e, value) => setCityQuery(value)}
                    onChange={(e, value) => {
                        if(value) {
                            setCityId(value.id)
                        } else {
                            setCityId(null)
                        }
                    }}
                    defaultValue={defaultCity}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                className="form-input py-1 px-2 w-64"
                                label="نام شهر"
                                placeholder="حداقل دو حرف وارد کنید"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {cityloading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                }}
                            />
                        )
                    }}
                />
            )}
        </ThemeProvider>
    );
}
 
export default CityComboBox;