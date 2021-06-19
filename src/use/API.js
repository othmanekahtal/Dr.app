import {reactive, toRefs} from "vue";

// data() {
//     return {
//         password: null,
//         email: null
//     }
// },
// methods: {
//     FillPassword(data) {
//         this.password = data;
//     },
//     FillEmail(data) {
//         this.email = data
//     },
//     ShowData() {
//         console.log(this.password, this.email)
//     },
//     FlipOption(event) {
//         console.log(event)
//         console.log('eee')
//         let container = event.target.closest('.container');
//         container.classList.toggle('reverse');
//         [...container.children].forEach(child => {
//             child.classList.toggle('front-showed');
//             child.classList.toggle('back-visible')
//         })
//     },
//
// },
//----register :

// setup() {
//     const InfoUser = reactive({
//         email: null,
//         password: null
//     })
//     const Fill = (data, point) => {
//         console.log(InfoUser)
//         InfoUser[point] = data;
//         console.log(point)
//     }
//
//     const ShowData = () => {
//         console.log('working')
//         console.log(InfoUser.password, InfoUser.email)
//     }
//     return {...toRefs(InfoUser), Fill, ShowData}
// },


// export default {
//     setup() {
//         const Fill = (data, point) => {
//             console.log(Info)
//             Info[point] = data;
//             console.log(point)
//         }
//         const ShowData = () => {
//             let keysObj = [];
//             for (const entry of Object.keys(Info)) {
//                 keysObj.push(entry)
//             }
//             console.log('working')
//             console.log(keysObj)
//         }
//
//         return {...toRefs(Info),Info, Fill, ShowData}
//     }
// }

export default () => {
    const FetchOrgan = reactive({
        Result: [],
        Error: null,
        Loading: false
    })
    const call = (url, options) => {
        FetchOrgan.Loading = true;

        fetch(url, options).then(respond => respond.json())
            .then(result => FetchOrgan.Result = result)
            .catch(error => FetchOrgan.Error = error)
            .finally(() => FetchOrgan.Loading = false);

    }
    return {
        ...toRefs(FetchOrgan), call
    }
}