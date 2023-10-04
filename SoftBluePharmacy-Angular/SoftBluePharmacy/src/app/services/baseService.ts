import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Medicine } from "../models/medicine";
import { Unit } from "../models/unit";
import { UnitMedicine } from "../models/unitMedicine";

export class BaseService<T>{

    apiBase: string = "http://localhost:5213/api";
    
    constructor(protected httpClient: HttpClient, private resourceName: string){}
    
    public get(id: number): Observable<T>
    {
        const url = `${this.apiBase}/${this.resourceName}/${id}`;
        return this.httpClient.get<T>(url)
    }
    
    public getAll(): Observable<T[]>
    {
        const url = `${this.apiBase}/${this.resourceName}`;
        return this.httpClient.get<T[]>(url)
    }

    public put(entity: T): Observable<T>
    {
        const url = `${this.apiBase}/${this.resourceName}`;
        return this.httpClient.put<T>(url, entity)
    }

    public post(entity: T): Observable<T>
    {
        const url = `${this.apiBase}/${this.resourceName}`;
        return this.httpClient.post<T>(url, entity)
    }

    public delete(id: number): Observable<T>
    {
        const url = `${this.apiBase}/${this.resourceName}/${id}`;
        return this.httpClient.delete<T>(url)
    }
}

@Injectable({
    providedIn: 'root'
})
export class MedicineService extends BaseService<Medicine>{
    constructor(protected override httpClient: HttpClient){super(httpClient, "medicine")}
}

@Injectable({
    providedIn: 'root'
})
export class UnitService extends BaseService<Unit>{
    constructor(protected override httpClient: HttpClient){super(httpClient, "unit")}
}

@Injectable({
    providedIn: 'root'
})
export class UnitMedicineService extends BaseService<UnitMedicine>{
    constructor(protected override httpClient: HttpClient){super(httpClient, "unitmedicine")}
}