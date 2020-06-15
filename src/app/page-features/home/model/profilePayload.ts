import { Department } from '../../management/models/department';
import { Skill } from './skillPayload';

export interface Profile{
   
    surName: string,
    brankCompany: string,
    dob: string,
    email: string,
    id: number,
    idCard: number,
    image: string,
    name: string,
    dateStart: string,
    numberBank: string,
    phoneNumber: string,
    readmine: string,
    address:string,
    status:string,
    department: Department | null,
    skills:Skill[] |null,
    totalPage:number,
    totalRow:number,
    pageLimit:number,
}