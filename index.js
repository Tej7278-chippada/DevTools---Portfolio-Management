
import Utility from './Utilities/util.js';

import Do from './Midlayer/midlayer.js';





const Title ='Portfolio Management'; 

Utility.SetElementValue('lblTitle',Title);

setInterval(()=>Do.DisplaySecurities(), 1000);


Do.DisplayRecommendations();


Do.setAvailableBalance();

const SecurityForm=Utility.GetElementById('frmsecurity');

Utility.AddEventListener('btnSubmitSecurity','click',(e)=>{
  e.preventDefault();                                                         
  let newSecurity=Utility.FetchFormValues(SecurityForm);
 
  Do.AddSecurity(newSecurity)
    .then(successMessage=>
    {
      console.log(successMessage);
      Utility.ResetFormValues(SecurityForm);
    })                                                                                                                    
    .catch(errorMessage=>alert(errorMessage));                                                           
});


Do.setAvailableSecuritiesForBuyOrSell();

Do.enableFormResetWhenRequired(SecurityForm);

Do.setTransactionUtility();
 


 





