import Utility from '../Utilities/util.js';
export default class Security {
 
    constructor ({Name, Price, Quantity, Sector, FNOAvailable}) {
            
        // eslint-disable-next-line no-unused-expressions
        this.Name=Name,
        this.Price=Price,
        this.Quantity=Quantity,
        this.Sector=Sector,
        this.FNOAvailable=FNOAvailable;
    
    }
  
    showLivePrice () {

        let randomLogic=Math.ceil(
            Math.random()*100,
            1
        )%2;
        let livePrice=0;

        if (randomLogic) {

            livePrice=Utility.RoundOff(
                Number(this.Price)+Math.random(),
                2
            );
        
        } else {

            livePrice=Utility.RoundOff(
                Number(this.Price)-Math.random(),
                2
            );
        
        }
        
        return this.Price<livePrice?livePrice.toString()+'▲':livePrice.toString()+'▼';
    
    }            

}
