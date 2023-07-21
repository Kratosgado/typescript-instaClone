import { NavigationProps, Screens } from '../../navigation';

export type PopupProps = NavigationProps &  {
   visible: boolean;
   onClose: () => void;
};
 
type IconTypes = "archive" | "account" | "cookie-settings-outline" | "account-lock" | "lock" | "lock-outline" 
 |" account-circle "| "account-outline" | "qrcode" | "bookmark" |"bookmark-outline" | "account-tie" |" account-star" | "account-star-outline"
  | "credit-card" | " receipt" | "star-outline"

 export type SheetItemProps =  {
   name: string
   icon: IconTypes
   screen: Screens
 }

 export const sheetListItems: SheetItemProps[] = [
   {
     name: "Settings and Privacy",
     icon: "cookie-settings-outline",
     screen: "Settings"
   },
   {
     name: "Your activity",
     icon: "account-outline",
     screen: "Archive"
   },
   {
     name: "Archive",
     icon: "archive",
     screen: "Archive"
   },
   {
     name: "QR code",
     icon: "qrcode",
     screen: "QRCode"
   },
   {
     name: 'Saved',
     icon: 'bookmark-outline',
     screen: "CloseFriends"
   },
   {
     name: 'SuperVision',
     icon: "account-outline",
     screen: "OrdersPayments"
   },
   {
     name: "Oders and payments",
     icon: "credit-card",
     screen: "OrdersPayments"
   },
   {
     name: "Close friends",
     icon: "account-tie",
     screen: "CloseFriends"
   },
   {
     name: "Favourites",
     icon: "star-outline",
     screen: "FavouriteScreen"
   }
]

