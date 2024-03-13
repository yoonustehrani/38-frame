import TabularComponent from "../../components/TabularComponent";

const UpdateShop = () => {
    return (
        <>
            <h1 className="font-bold text-2xl">تنظیمات فروشگاه شما</h1>
            <nav className="my-4 text-sm">
                <ul className="flex gap-4 text-gray-700">
                    <li>
                        <a className="hover:text-gray-900 hover:underline underline-offset-8 duration-500" href="/shop">فروشگاه من</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"/></svg>
                    </li>
                    <li className="text-gray-500">تنظیمات فروشگاه شما</li>
                </ul>
            </nav>
            <TabularComponent tabs={[
                { text: 'تنظیمات اصلی', uri: '/shop/setting' },
                { text: 'مدیریت فروشگاه', uri: '/shop/settings/finance' },
                // { text: 'اطلاعیه ها', uri: '/shop/settings/notifications' },
                { text: 'شبکه های اجتماعی', uri: '/shop/setting/social' },
                // { text: 'امنیت حساب', uri: '/settings/auth' }
            ]} />
        </>
    );
}
 
export {UpdateShop as Component};