// import {app,database} from '../firebase'

// export default defineEventHandler(async () => {
//     try {
//         let sitemapArray: any = [];
//         let pages: any = [];
//         let categories: any = [];
//         let blogs: any = [];
//         let cases: any = [];
//         let services: any = [];

//         const snapshot = await database.ref('/').once('value')
//         const data = snapshot.val();
//         for (let key in data) {
//             if (key == "services") {
//                 for (let serviceKey in data[key]) {
//                     services.push(data[key][serviceKey]);
//                 }
//             }
//             if (key == "blogs") {
//                 for (let blogKey in data[key]) {
//                     blogs.push(data[key][blogKey]);
//                 }
//             }
//             if (key == "categories") {
//                 for (let categoryKey in data[key]) {
//                     categories.push(data[key][categoryKey]);
//                 }
//             }
//             if (key == "cases") {
//                 for (let caseKey in data[key]) {
//                     cases.push(data[key][caseKey]);
//                 }
//             }
//             if (key == "pages") {
//                 for (let pageKey in data[key]) {
//                     pages.push(data[key][pageKey]);
//                 }
//             }
//         }

//         categories.filter((category: any) => {
//             sitemapArray.push({ loc: `/case-studies/${category.slug}`, lastmod: new Date() });
//         })

//         pages.map((c: any) => {
//             sitemapArray.push({ loc: `/${c.slug}`, lastmod: new Date() })
//         })

//         blogs.map((c: any) => {
//             sitemapArray.push({ loc: `/blogs/${c.slug}`, lastmod: new Date() })
//         })

//         services.map((c: any) => {
//             sitemapArray.push({ loc: `/${c.slug}`, lastmod: new Date() })
//         })
        
//         return sitemapArray
//     } catch (err) {
//         console.log('error for sitemap -> ', err)
//     }
// })