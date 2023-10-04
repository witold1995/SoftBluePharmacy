import { Medicine } from "./medicine";
import { Unit } from "./unit";

export interface UnitMedicine
{
    id?: number;
    unitId: number;
    medicineId: number;
    amountAvailable: number; 
    medicine?: Medicine;
    unit?: Unit;
}