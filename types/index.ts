import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit"
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}
export interface FilterProps {
    manufacturer: string
    year: number,
    fuel: string
    limit: number,
    model: string
}

export interface HomeProps {
    searchParams: FilterProps
}

export interface searchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}