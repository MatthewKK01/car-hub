import { CarProps } from "@/types";

export async function fetchCars() {
    const header = {
        'X-RapidAPI-Key': '5402357d66msh24bf0363de52d4cp10fbe0jsn9e1e359e9067',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=sl320', { headers: header });

    const res = await response.json();
    return res
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
