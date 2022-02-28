import React from 'react'

import Loading from '../loading'
import Error from '../error'
import useFetch from '../../utils/useFetch'
import { conversions } from '../../utils/conversions'

export default function Temperature() {
    const { loading, results, error } = useFetch('https://avwx.rest/api/metar/KTPA')
    const { celsiusToFahrenheit } = conversions

    return (
        <span>
            { loading && <Loading /> }
            { !loading && error ? <Error /> :
                `Tampa, FL
                ${celsiusToFahrenheit(results?.sample?.remarks_info?.temperature_decimal?.value)}` 
                ?? 'N/A'
            }&deg;
        </span>
    )
}