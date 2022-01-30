import { Education } from "./education";
import { Experience } from "./experience";

export interface Employee {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    position: string;
    salary: number;
    experience: Experience[];
    education: Education[];
}