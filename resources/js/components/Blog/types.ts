export type BlogPost = {
    id: number,
    title: string
    description: string
    avatar: string
    url: string
    author: {
        username: string
        url: string
        avatar: string
    }
    views: number
}


const yoosof = {
    name: 'مستغنای یزدی',
    avatar: '/images/yoosof.webp',
    url: '/authors/u3ef'
}


export const mockedPosts = [
    {
        id: 1,
        title: 'چگونه یک عکاس آنالوگ نشویم ؟',
        description: 'تو این پست همه کارای اشتباهی که باعث میشه شما عکاس آنالوگ نشین رو توضیح دادیم و توقع داریم که خوب به همش توجه کنین.',
        url: '/posts/عکاسی-آنالوگ-سخته',
        avatar: '/images/blog-1.webp',
        author: yoosof,
        views: 10322
    },
    {
        id: 2,
        title: 'فیلم های عکاسی به باسن علی سلیمان پور فرو شد!',
        description: 'فکر میکرد باقالی اسم گربه است اما نمیدونست توی نیشابور به هرچی که بشه شیاف کرد میگن باقالی. پس این شما و اینهم باقالی های اندکی مرطوب و خیس برای یک سلیمان پور اصل.',
        url: '/posts/عکاسی-آنالوگ-سخته',
        avatar: '/images/blog-2.webp',
        author: yoosof,
        views: 3200
    },
    {
        id: 3,
        title: 'آیا گی بودن ارتباطی با عکاسی خوب دارد؟',
        description: 'گی اینجا، گی اونجا، گی همه جا! آنالوگ شاید برای یه دختر جنبه فان و تفریح داره اما اگه یه پسر خوشگل یا بهتره بگیم خوشگل پسر عکاسی آنالوگ رو شروع کنه یقین بدونید که گیه.',
        url: '/posts/عکاسی-آنالوگ-سخته',
        avatar: '/images/blog-3.webp',
        author: yoosof,
        views: 800
    },
    {
        id: 4,
        title: 'نگاتیو برای اولین بار اصطلاح خوبی است!',
        description: 'شاید تنها جایی که بنظرتون شنیدن اصطلاح نگاتیو خوشایند باشه موقع اعلام آزمایش HIV هست اما خب باید بگم تنها نیستیم و در عکاسی آنالوگ هم نگاتیو اصطلاح مثبتیه!',
        url: '/posts/عکاسی-آنالوگ-سخته',
        avatar: '/images/blog-4.webp',
        author: yoosof,
        views: 2150
    }
]