let generateRandomNumber = number => Math.floor(Math.random()*number)
const items = {
    _appliances: ['television','fan','fridge','washing machine','camera','piano','radio','computer','air conditioner','clock'],
    _furnitures: ['sofa','chair','desk','table','door','window','drawer','bed','rug','carpet'],
    _stationery: ['pen','notebook','pencil','eraser','whiteboard','sharpie','brush','white out','file'],
    get _appliances() {
        return this._appliances
    },
    get _furnitures() {
        return this._furnitures
    },
    get _stationery() {
        return this._stationery
    }
}
