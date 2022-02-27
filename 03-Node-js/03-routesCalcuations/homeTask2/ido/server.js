const data = [
    {brand : 'nike' ,title:'Jordan 1 Low' , description : 'Travis Scott', price : 2000 ,freeText : 'nike Jordan 1 Retro Low', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-Low-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&q=90&dpr=1&trim=color&updated_at=1606317345'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'Travis Scott' , price : 3220 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&q=90&dpr=1&trim=color&updated_at=1608736403'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'Travis Scott' , price : 3220 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&q=90&dpr=1&trim=color&updated_at=1628097985'  },
    {brand : 'nike' ,title:'Jordan 1 Low' , description : 'Fragment x Travis Scott' , price : 1570 ,freeText : 'nike Jordan 1 Retro Low', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Low-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&q=90&dpr=1&trim=color&updated_at=1629307046'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'A Ma Maniére' , price : 600 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-A-Ma-Maniere-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1638286909&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High Zoom ' , description : 'Stadium Green' , price : 250 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-High-Zoom-CMFT-Stadium-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1618343390&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'COJP Midnight Navy (2020)' , price : 400 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Midnight-Navy-2020-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1616187368&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'Shadow 2.0 (GS)' , price : 300 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-White-Light-Smoke-Grey-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1621454282&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'Hyper Royal Smoke Grey' , price : 400 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1619201606&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro High' , description : 'SB LA to Chicago' , price : 700 ,freeText : 'nike Jordan 1 Retro High', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-SB-Lakers-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1607649923&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro Low' , description : 'Starfish' , price : 200 ,freeText : 'nike Jordan 1 Retro Low', picUrl : 'https://images.stockx.com/images/Air-Air-Jordan-1-Low-OG-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1630615309&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro Low' , description : 'Diamond Shorts' , price : 200 ,freeText : 'nike Jordan 1 Retro Low', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Low-Diamond-Shorts-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1645637133&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro Low' , description : 'Black Toe' , price : 600 ,freeText : 'nike Jordan 1 Retro Low', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Low-Black-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1606320100&fm=avif'  },
    {brand : 'nike' ,title:'Jordan 1 Retro Low' , description : 'Shadow' , price : 10 ,freeText : 'nike Jordan 1 Retro Low', picUrl : 'https://images.stockx.com/images/Air-Jordan-1-Retro-Low-Golf-Shadow-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1645775572&fm=avif'  },
    {brand : 'nike' ,title:'Dunk Low' , description : 'Purple Pulse ' , price : 300 ,freeText : 'nike Dunk Low', picUrl : 'https://images.stockx.com/images/Nike-Dunk-Low-Purple-Pulse-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1629131386&fm=avif'  },
    {brand : 'nike' ,title:'Dunk Low' , description : 'Green Glow ' , price : 220 ,freeText : 'nike Dunk Low', picUrl : 'https://images.stockx.com/images/Nike-Dunk-Low-Green-Glow-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1619204705&fm=avif'  },
    {brand : 'nike' ,title:'Dunk Low' , description : 'Kentucky' , price : 700 ,freeText : 'nike Dunk Low', picUrl : 'https://images.stockx.com/images/Nike-Dunk-Low-SP-Kentucky_Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1606322330&fm=avif'  },
    {brand : 'nike' ,title:'Dunk Low' , description : 'Laser Orange' , price : 250 ,freeText : 'nike Dunk Low', picUrl : 'https://images.stockx.com/images/Nike-Dunk-Low-Laser-Orange-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1643888311&fm=avif'  },
    {brand : 'nike' ,title:'Dunk Low' , description : 'Easter Candy' , price : 160 ,freeText : 'nike Dunk Low', picUrl : 'https://images.stockx.com/images/Nike-Dunk-Low-SE-Easter-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1620407163&fm=avif'  },
    {brand : 'nike' ,title:'Dunk Low' , description : 'Travis Scott' , price : 2500 ,freeText : 'nike Dunk Low', picUrl : 'https://images.stockx.com/images/Nike-SB-Dunk-Low-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1606325738&fm=avif'  },
    {brand : 'adidas' ,title:'Yeezy Boost 350' , description : 'light' , price : 400 ,freeText : 'adidas Yeezy Boost 350', picUrl : 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Light-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1629383966&fm=avif'  },
    {brand : 'adidas' ,title:'Yeezy Boost 350' , description : 'Mono Cinder' , price : 350 ,freeText : 'adidas Yeezy Boost 350', picUrl : 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Mono-Cinder-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1635434704&fm=avif'  },
    {brand : 'adidas' ,title:'Yeezy Boost 350' , description : 'Beluga Reflective' , price : 300 ,freeText : 'adidas Yeezy Boost 350', picUrl : 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1638996919&fm=avif'  },
    {brand : 'adidas' ,title:'Yeezy Boost 350' , description : 'MX Rock' , price : 350 ,freeText : 'adidas Yeezy Boost 350', picUrl : 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1634917162&fm=avif'  },
    {brand : 'adidas' ,title:'Yeezy Boost 350' , description : 'MX Oat' , price : 300 ,freeText : 'adidas Yeezy Boost 350', picUrl : 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1634917162&fm=avif'  },
    {brand : 'nike' ,title:'Nike Dunk High' , description : 'Orange Acid Wash' , price : 160 ,freeText : 'nike ', picUrl : 'https://images.stockx.com/images/Nike-Dunk-High-1985-Orange-Blue.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1644617774&fm=avif'  },
    {brand : 'nike' ,title:'Nike Dunk High' , description : 'AMBUSH Deep Royal' , price : 260 ,freeText : 'nike', picUrl : 'https://images.stockx.com/images/Nike-Dunk-High-AMBUSH-Deep-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&auto=compress&trim=color&q=90&dpr=1&updated_at=1645432118&fm=avif'  },
  ]
 
const express = require('express')
const app = express()
const port = 4004

app.use(express.static('public'))

app.get('/data',(req, res) => {res.send(data)})

app.get('/searched-data',(req , res) => {

  let filteredList = [];
  
  const input = req.query.input
  const regex = new RegExp(input,'i');

  filteredList = data.filter(item => regex.test(item.freeText))

  res.send(filteredList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



