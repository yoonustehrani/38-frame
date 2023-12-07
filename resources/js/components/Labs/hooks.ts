import { useLayoutEffect, useMemo, useReducer, useState } from "react";
import { CityObject, initialFilters } from "./types";
import { fetchCity } from "./api";
import { filtersReducer} from "./reducers";

export type SetFunc = (payload: Partial<typeof initialFilters>) => void;
type RemoveFunc = () => void;

// <K extends readonly string[]>(keys: K)
export function useBrowserSearchParamsBulk(): [Partial<typeof initialFilters>, SetFunc, () => string]
{
    const searchParams = useMemo(() => {
        return new URL(window.location.href).searchParams
    }, []);
    // console.log(searchParams);
    
    const initialSearchParams = useMemo(getParams, [])
    const [params, setParam] = useReducer(filtersReducer, initialSearchParams as typeof initialFilters)
    function applyToBrowserHistory() {
        history.replaceState({}, "", `?${searchParams.toString()}`)
    }
    function getRealValue(t: keyof typeof initialFilters, value: string) {
        switch (typeof initialFilters[t]) {
            case 'boolean':
                return value === 'false' ? false : true
            case 'number':
                return Number(value)
            case 'object':
                if (Array.isArray(initialFilters[t])) {
                    return value.split(',')
                }
                return value
            default:
                return value
        }
    }
    function getParams() {
        const AllSearchParams = Object.fromEntries(Array.from(searchParams.entries()))
        const types = Object.keys(initialFilters) as Array<keyof typeof initialFilters>
        return Object.fromEntries(types.map(t => {
            return [t,  AllSearchParams[t] ? getRealValue(t, AllSearchParams[t]) : initialFilters[t]]
        })) as typeof initialFilters
    }
    // K = keyof typeof initialFilters
    function setSearchParam(key: string, value: any) {
        if (value == '' || value == null || value == -1) {
            return removeSearchParam(key)
        }
        if (searchParams.has(key)) {
            searchParams.set(key, String(value))
        } else {
            searchParams.append(key, String(value))
        }
    }
    function removeSearchParam(key: string) {
        searchParams.delete(key)
        applyToBrowserHistory()
    }
    function prepareQuery() {
        // let searchQuery = ''
        let queryParams = Object.entries(getParams()).filter(([key, value]) => initialFilters[key as keyof typeof initialFilters] !== value)
        return queryParams.map(([key, value], index) => {
            if (Array.isArray(value)) {
                return value.map((v, j) => {
                    return `${key}[]=${v}`
                }).join('&')
            } else {
                return `${key}=${value}`
            }
        }).join('&')
        // return searchQuery
    }
    return [params, function(payload: Partial<typeof initialFilters>) {
        setParam({type: 'SET_FILTER', payload})
        Object.entries(payload).map(([k, v]) => setSearchParam(k, v))
        applyToBrowserHistory()
    }, prepareQuery]
}


export function useBrowserSearchParam<T>(key: string, defaultValue: T): [T | null, (value: any) => void, RemoveFunc]
{
    let searchParams = new URL(window.location.href).searchParams;
    let [value, setValue] = useState<T | null>(getParam() ?? defaultValue)
    function apply() {
        history.replaceState({}, "", `?${searchParams.toString()}`)
    }
    function getParam(): T|null {
        return searchParams.get(key) as T
    }
    function setParam(value: any) {
        if (value == '' || value == null) {
            return removeParam()
        }
        setValue(value)
        if (searchParams.has(key)) {
            searchParams.set(key, String(value))
        } else {
            searchParams.append(key, String(value))
        }
        apply()
    }
    function removeParam() {
        setValue(null)
        searchParams.delete(key)
        apply()
    }
    return [
        value,
        setParam,
        removeParam
    ];
}

export function useDefaultCity(cityId: number | null) 
{
    const [defaultCity, setDefaultCity] = useState<CityObject | null>()
    useLayoutEffect(() => {
        if (cityId) {
            const [response, cancel] = fetchCity(cityId)
            response.then(r => {
                if (! r.hasErrors()) {
                    setDefaultCity(r.getContent<CityObject>())
                }
            })
            return () => cancel()
        }
        setDefaultCity(null)
    }, [])
    return defaultCity;
}