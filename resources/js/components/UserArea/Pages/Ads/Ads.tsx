import { FC, useEffect, useState } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import PlusIcon from "../../../Icons/PlusIcon";
import { fetchAds } from "./api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";


interface AdsProps {
    
}

const theme = createTheme({
    typography: {
        fontFamily: 'IranSansWeb',
    },
});

const jdateTime = new Intl.DateTimeFormat('fa-IR', { 
    dateStyle: 'short',
    timeStyle: 'short'
});
const jdate = new Intl.DateTimeFormat('fa-IR', { 
    dateStyle: 'short'
});
const formatJalali = (date: string, time = false) => {
    if (time) {
        return jdateTime.format(new Date(date)).replace(',', '\n')
    }
    return jdate.format(new Date(date))
    // return time ? str : str;
}
const Ads: FC<AdsProps> = () => {
    const [ads, setAds] = useState<{[key: string]: any}[] | null>(null)
    useEffect(() => {
        let [request, cancel] = fetchAds()
        request.then(res => {
            setAds(res.getContent() as {[key: string]: any}[])
        })
        return () => {
            cancel()
        }
    }, [])
    return (
        <section>
            <h1 className="font-bold text-2xl">مدیریت آگهی ها</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                <BreadCrumbItem>لیست آگهی ها</BreadCrumbItem>
            </BreadCrumb>
            <section className="w-full border border-black/5 shadow-md rounded-lg py-3 px-5">
                <div className="w-full mt-3">
                    <Link className="button-x-dark-blue-outline" to="/ads/create">
                        <span className="inline-block pl-3">آگهی جدید</span>
                        <PlusIcon size={20} color="inherit"/>
                    </Link>
                </div>
                <section className="w-full mt-6">
                    {ads && (
                        <ThemeProvider theme={theme}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">ردیف</TableCell>
                                        <TableCell align="center">عنوان آگهی</TableCell>
                                        <TableCell align="center">تعداد بازدید</TableCell>
                                        <TableCell align="center">فعال تا</TableCell>
                                        <TableCell align="center">وضعیت</TableCell>
                                        <TableCell align="center">تاریخ ایجاد</TableCell>
                                        <TableCell align="center">آخرین تغییر</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ads.map((ad, index) => (
                                        <TableRow
                                        key={ad.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center" scope="row">
                                                <Link to={`/ads/${ad.id}`}>{ad.title}</Link>
                                            </TableCell>
                                            <TableCell align="center">{0}</TableCell>
                                            <TableCell align="center" style={{ whiteSpace: "pre-line" }}>{
                                                ad.expires_at ? (formatJalali(ad.expires_at, true)) : '---'
                                            }</TableCell>
                                            <TableCell align="center" >{ad.status_fa}</TableCell>
                                            <TableCell align="center">{formatJalali(ad.created_at)}</TableCell>
                                            <TableCell align="center">{formatJalali(ad.updated_at)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ThemeProvider>
                    )}
                </section>
            </section>
        </section>
    );
}
 
export default Ads;