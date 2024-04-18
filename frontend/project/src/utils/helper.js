export const validateemail=(email) =>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
};
// export const getinitials=(name)>{
//     if(!name){
//         return ""
//     }
//     const words=name.split("");
//     let initials="";
//     for (let i = 0;i<Math.min(words.length,2);i++){

//     }

// }