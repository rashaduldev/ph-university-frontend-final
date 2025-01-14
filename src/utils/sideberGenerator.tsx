import { TsideberItem, TUserPath } from "../types"
import { NavLink } from 'react-router-dom';

export const sideberGenerator=(items:TUserPath[],role:string)=>{
     const SideberItems=items.reduce((acc:TsideberItem[],item)=>{
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            }) 
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                }))
            })
        }
        return acc;
    },[])
    return SideberItems;
}