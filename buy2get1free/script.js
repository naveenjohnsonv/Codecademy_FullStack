let generateRandomNumber = number => Math.floor(Math.random()*number)
const items = {
    appliances: ['television','fan','fridge','washing machine','camera','piano','radio','computer','air conditioner','clock'],
    furnitures: ['sofa','chair','desk','table','door','window','drawer','bed','rug','carpet'],
    stationery: ['pen','notebook','pencil','eraser','whiteboard','sharpie','brush','white out','file']
}
let arrItems = []
for(let key in items) {
    let randomIndex = generateRandomNumber(items[key].length)
    switch(key) {
        case 'appliances':
            arrItems.push(`Buy a ${items[key][randomIndex]}`)
            break
        case 'furnitures':
            arrItems.push(`and a ${items[key][randomIndex]}`)
            break
        case 'stationery':
            arrItems.push(`and get a ${items[key][randomIndex]} for free!`)
            break
        default:
            arrItems.push('There is not enough info.')
    }
}
let discountMessage = () => console.log(arrItems.join(' '))
discountMessage()