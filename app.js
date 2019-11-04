const express = require('express')
const app = express()

let photoArray = [
   ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkTybOBVac0ZTqz7KCZa8fb_jQmlcHLhUWJasbLG5EMxTwkH4&s',

    ' https://previews.123rf.com/images/stevanovicigor/stevanovicigor1512/stevanovicigor151200259/50260323-old-book-wooden-library-desk-retro-toned-image-selective-focus.jpg',
  
    ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExoAf7zzzhdmE2Ge3hH0yErDRYLp2iDCwhKd3DXPGQqs4bXfc0g&s',
    
   ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExoAf7zzzhdmE2Ge3hH0yErDRYLp2iDCwhKd3DXPGQqs4bXfc0g&s',

   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CgVGg5OjY7d64jvpXLs4MsWpykLmzOa_I6ClH2zLvycZ5J2c4g&s',

  ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RI4olGPQWTo2TYzIIMhNnXhmadVqPxEq5rPbkM2M4HvpzIsxgw&s',

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwfosW6PfuMKaPnabKzj1UzAfOQpxZzqVvkFzEonna0iSUgyVWg&s',

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAf_z-8GF_U2V_g60hvQNjAnaiLURBm1CuGI91d91-icuBwZnHWQ&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDk7iUfabv0jx2a3MpG34CHM_-qybQZa_w3CgZjbORpipDHmTgiQ&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EtBXv5spQAu1_0jat1vfMXFwS-TY87EZ-D3T2wSO_4HfKTM7&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8TxTUc7MHMhrz7qzo2e2zujSXS82_pCPim7HB8OyHl3gfuaqyg&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidbEOkKXa9-pkDFkRXqkGlDvtTigtBnXwvq4WyvDe1GEzCuYLrQ&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTlYUYvNFYUCccumFqYKUlTFt4mKyk_cLgUbuShIn5SmO1syRPw&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrqnkVHcmj0nWzYB8tiNaqve6d6j6GSHr2KuoiOt1xSWK1YYY-g&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPo5HtDxjdSgkochrYbTG9sS8PyZ_l7d1qnnjREVCuha9nnPe2&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz7KCFkoikCHEdSlDgj7on5AybOCgTd6MX26B7CLT5ZU30uutjA&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxsnxbD0jpyJDCE1po419MT9IWrxm44ojSvZMZKyeLABVF9ml&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhk8r7LFzMcicNkOAlmC2Vmt4-biRiVyZsdYEq6GOq07eZp_N_&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmNYp3-Rx1Seoq-eFEdT6bdKLACkl5_FydRZ8ypaLhWDwJ5A0&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RI4olGPQWTo2TYzIIMhNnXhmadVqPxEq5rPbkM2M4HvpzIsxgw&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1TDCUFUX3DNO9TUAjRDSpcTRmcEzzR1dSOs8Henb5GnbeLEK4w&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmwbvBss7McSUPYMW5Yc6dJeIOhRroPQn_ela0877sMvwQmxh&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVdLkC7hvC-O2uyZ5vM8ldI6Ao6IjaQ1m42oL7yudAhnFqqI4&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5e2gNsfT1ObjGOkX7D-0SLNj7KzPg88Bk8SGGlN_Bs64ueyLBQ&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1W0lHe_4U8pF3j7Ij_wxw-qx_N8ww713xOLWwBolGcUbBFvt5&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZZY4f09HhOGG0RSqHa57L98FBJFbHGUuuTPAUuTiXZHeLCfj-Q&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix9zOJJGibFOrW7XNwK5Ll2XVSCbnYnnDhtzu6ojaGaNzjChPpA&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosdXEz5gxha3Pn7sR8ELCAg87XUSV41UXRiZqEqnAOzPBxBX_-w&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsJyHyNo7ti5yhcrg7lq0ZXOsn1o-ZfOUmo6G5PioxW8pErBv&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRuSlmkRHzXFDkoDvDUHWXi7_Vu6Hhgu_JTlt4i74odEdbNHq&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa86a9TDuo-t1E78M4am3BvzfFQZ-wh7eiYL1ix7JKiF2ar936&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8I7OO-DOaq_xsSJ2NDRzminBe2FMEGQSA77c25LL-NTWNyBG&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mGVthSU-35ur9gxioxJXCXgcjE0BzZhR12OY6uVwGpL_AORP&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsIRyX-BZBcIi7u-GViAf83wB7P01bIi3bv3ev9JaRKsE2jcb&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJR9mO8gEiR1JtCFSwOMTYx03zWJ8xXHWAavLUKi5qQRJLqHd&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-fGJ9DyOHsXot2i_Xwy9MqqjiuUUCvqofSlBN85ayBn8lF8U&s',
'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/03/SEI_55214064.jpg?quality=90&strip=all&zoom=1&resize=540%2C359&ssl=1',
'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/proba-v_images_smoke_plumes_from_borneo/21116002-1-eng-GB/Proba-V_images_smoke_plumes_from_Borneo_card_medium.png',

'https://res.cloudinary.com/demo/image/upload/h_250/boat_lake2.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyxWdMbuGTFkil-igMDAz5u2V5xt54EhJ19JA4Fm47o6ZnO-V&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbXAs_6IoOMv3M7BnER0nddiodqy9Z6pziGz53GOCUaPMQW19&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DeaSlYL1zmYt5bHe9uvBSg-OG1Nld3OgS0iiUYM3LeNrGTiV&s',
'https://cdn3.movieweb.com/i/article/cNS9nJ8qiJ8eGBKCvJif5rSdIrKZw9/798:50/Godzilla-2-King-Of-Monsters-King-Ghidorah-Photo.jpg',
'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHHemUjQ4D1g%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHHemUjQ4D1g&docid=nSueQews79oBnM&tbnid=GICYp_9_zRmzQM%3A&vet=1&w=1280&h=720&safe=active&bih=657&biw=1366&ved=2ahUKEwjehsOEkc7lAhWRJFAKHXY1BsgQxiAoBXoECAEQIQ&iact=c&ictx=1',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_OcYe6PevFHjD_7uWiNEfi9jJ8e5lewuFNDymZQ4yA5rx0Ja&s',

];
app.get('/', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.send({
        photo: photoArray
    })
});
module.exports = app;