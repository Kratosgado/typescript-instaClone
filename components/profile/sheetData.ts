import { NavigationProps } from "../../navigation";

export type PopupProps = NavigationProps &  {
   visible: boolean;
   onClose: () => void;
 };
 
 export type SheetItemProps =  {
   name: string
   icon: "details"
 }
 
 export const sheetListItems: SheetItemProps[] = [
   {
     name: "settings",
     icon: "details"
   },
   {
     name: "algebra",
     icon: "details",
   },
   {
     name: "ahdl",
     icon: "details",
   },
   {
     name: "kdl",
     icon: "details",
   }
]

