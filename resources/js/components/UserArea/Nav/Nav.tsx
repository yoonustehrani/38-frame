import { FC } from "react";
import NavItem from "./NavItem";

interface NavProps {
    
}
 
const Nav: FC<NavProps> = () => {
    return (
        <nav className="font-iran-sans mt-5 userarea-menu grow overflow-y-auto">
            <ul className="flex flex-col gap-2 a-full mb-2">
                <NavItem uri="/" title="داشبورد" active={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M19,24H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5ZM12,1.997c-.584,0-1.168,.172-1.678,.517L3.322,7.237c-.828,.558-1.322,1.487-1.322,2.486v9.276c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9.724c0-.999-.494-1.929-1.321-2.486L13.678,2.514c-.51-.345-1.094-.517-1.678-.517Z"/>
                    </svg>
                </NavItem>
                <NavItem uri="/finance" title="امور مالی">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M16.5,0c-4.206,0-7.5,1.977-7.5,4.5v2.587c-.483-.057-.985-.087-1.5-.087C3.294,7,0,8.977,0,11.5v8c0,2.523,3.294,4.5,7.5,4.5,3.407,0,6.216-1.297,7.16-3.131,.598,.087,1.214,.131,1.84,.131,4.206,0,7.5-1.977,7.5-4.5V4.5c0-2.523-3.294-4.5-7.5-4.5Zm5.5,12.5c0,1.18-2.352,2.5-5.5,2.5-.512,0-1.014-.035-1.5-.103v-1.984c.49,.057,.992,.087,1.5,.087,2.194,0,4.14-.538,5.5-1.411v.911ZM2,14.589c1.36,.873,3.306,1.411,5.5,1.411s4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5s-5.5-1.32-5.5-2.5v-.911Zm20-6.089c0,1.18-2.352,2.5-5.5,2.5-.535,0-1.06-.038-1.566-.112-.193-.887-.8-1.684-1.706-2.323,.984,.28,2.092,.435,3.272,.435,2.194,0,4.14-.538,5.5-1.411v.911Zm-5.5-6.5c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM7.5,9c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5Zm0,13c-3.148,0-5.5-1.32-5.5-2.5v-.911c1.36,.873,3.306,1.411,5.5,1.411s4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5Zm9-3c-.512,0-1.014-.035-1.5-.103v-1.984c.49,.057,.992,.087,1.5,.087,2.194,0,4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5Z"/>
                    </svg>
                </NavItem>
                <NavItem uri="/purchases" title="خریدها">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M20,10h-1v-2c0-2.206-1.794-4-4-4h-1.028c-.25-2.247-2.16-4-4.472-4S5.277,1.753,5.028,4h-1.028C1.794,4,0,5.794,0,8v6c0,2.757,2.243,5,5,5h1c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5v-5c0-2.206-1.794-4-4-4ZM9.5,2c1.207,0,2.217,.86,2.45,2H7.05c.232-1.14,1.242-2,2.45-2Zm-4.5,15c-1.654,0-3-1.346-3-3v-6c0-1.103,.897-2,2-2h1v2c0,.553,.448,1,1,1s1-.447,1-1v-2h5v2c0,.553,.448,1,1,1s1-.447,1-1v-2h1c1.103,0,2,.897,2,2v2h-7c-2.206,0-4,1.794-4,4v3h-1Zm17,2c0,1.654-1.346,3-3,3H11c-1.654,0-3-1.346-3-3v-5c0-1.103,.897-2,2-2h10c1.103,0,2,.897,2,2v5Zm-3-4v1c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1c0-.553,.448-1,1-1s1,.447,1,1v1c0,1.103,.897,2,2,2s2-.897,2-2v-1c0-.553,.448-1,1-1s1,.447,1,1Z"/>
                    </svg>
                </NavItem>
                <NavItem uri="/purchased-service" title="سفارشات لابراتوآر">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="m23.493,11.017c-.487-.654-1.234-1.03-2.05-1.03h-.443v-1.987c0-2.757-2.243-5-5-5h-5.056c-.154,0-.31-.037-.447-.105l-3.155-1.578c-.414-.207-.878-.316-1.342-.316h-2C1.794,1,0,2.794,0,5v13c0,2.757,2.243,5,5,5h12.558c2.226,0,4.15-1.432,4.802-3.607l1.532-6.116c.234-.782.089-1.605-.398-2.26ZM2,18V5c0-1.103.897-2,2-2h2c.154,0,.31.037.447.105l3.155,1.578c.414.207.878.316,1.342.316h5.056c1.654,0,3,1.346,3,3v1.987h-10.385c-1.7,0-3.218,1.079-3.789,2.72l-2.19,7.138c-.398-.509-.636-1.15-.636-1.845Zm19.964-5.253l-1.532,6.115c-.384,1.279-1.539,2.138-2.874,2.138H5c-.208,0-.411-.021-.607-.062l2.334-7.609c.279-.803,1.039-1.342,1.889-1.342h12.828c.242,0,.383.14.445.224.062.084.156.259.075.536Z"/>
                    </svg>
                </NavItem>
                <NavItem uri="/ads" title="مدیریت آگهی ها">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z"/>
                    </svg>
                </NavItem>
            </ul>
            {/* If Photographer */}
            <span className="mr-1 text-gray-900 font-bold text-sm">- عکاس</span>
            <ul className="flex flex-col gap-4 a-full mt-2 mb-4">
                <NavItem uri="/photography" title="مدیریت پروفایل عکاسی">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/><path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></svg>
                </NavItem>
            </ul>
            {/* EndIf Photographer */}
            {/* If Shop */}
            <span className="mr-1 text-gray-900 font-bold text-sm">- فروشگاه</span>
            <ul className="flex flex-col a-full mt-2 mb-4">
                <NavItem uri="/photography" title="ایجاد کالا" />
                <NavItem uri="/photography" title="مدیریت کالاها" />
                <NavItem uri="/photography" title="پیگیری فروش کالاها" />
                <NavItem uri="/photography" title="تنظیمات فروشگاه" />
            </ul>
            {/* EndIf Photographer */}
            {/* If Lab */}
            <span className="mr-1 text-gray-900 font-bold text-sm">- لابراتوآر</span>
            <ul className="flex flex-col a-full mt-2">
                <NavItem uri="/photography" title="پیگیری سفارشات" />
                <NavItem uri="/photography" title="تنظیمات لابراتوآر" />
            </ul>
            {/* EndIf Lab */}
        </nav>
    );
}
 
export default Nav;