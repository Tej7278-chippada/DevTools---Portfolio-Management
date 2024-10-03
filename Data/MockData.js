import Security from '../Entities/Security.js';

let Securities=[
    {
        "FNOAvailable": 'Yes',
        "Name": 'Apple Inc.',
        "Price": 173.25,
        "Quantity": 35,
        "Sector": 'Technology'
        
    },
    {
        "FNOAvailable": 'Yes',
        "Name": 'Amazon.com Inc.',
        "Price": 1436.22,
        "Quantity": 50,
        "Sector": 'E-Commerce'
      
    },
    {
        "FNOAvailable": 'Yes',
        "Name": 'Netflix Inc.',
        "Price": 298.07,
        "Quantity": 100,
        "Sector": 'Media'
        
    },
    {
        "FNOAvailable": 'NA',
        "Name": 'Time Warner Inc',
        "Price": 96.71,
        "Quantity": 100,
        "Sector": 'Media'
      
    }
];

let AvailableFund = 26000;


let ClassifiedSecurities=[];

for (const currSecurity of Securities) {

    ClassifiedSecurities.push(new Security(currSecurity));

}


let RecomendedSecurities=[
    { 
        "FNOAvailable": 'NA',
        "ID": 0,
        "Name": 'Zydus Inc',
        "Rating": 'AAA',
        "Sector": 'Pharmaceutics',
      
        [Symbol('PremiumContent')]: 'Zydus Uint 6 USFDA clearance is due and stock is expected to rise by 13%'
    },

    {
        "FNOAvailable": 'Yes',
        "ID": 1,
        "Name": 'Pfizer',
        "Rating": 'AA+',
        "Sector": 'Pharmaceutics',
        
        [Symbol('PremiumContent')]: 'Pfizer to launch new APIs in EU and stock is expected to rise by 8%'
    },
    {
        "FNOAvailable": 'Yes',
        "ID": 2,
        "Name": 'Softbank NA',
        "Rating": 'AAA',
        "Sector": 'Banking',
      
        [Symbol('PremiumContent')]: 'Softbank joins hands with Amazon for IOT and stock is expected to rise by 20% '
    },
    {
        "FNOAvailable": 'NA',
        "ID": 3,
        "Name": 'Atlantis NA',
        "Rating": 'AAA+',
        "Sector": 'Miscellanous',
       
        [Symbol('PremiumContent')]: 'Stock to soar by 5-6% on account of strategic aliance with Nokia'
    },
    {
        "FNOAvailable": 'Yes',
        "ID": 4,
        "Name": 'BMC Inc',
        "Rating": 'AA',
        "Sector": 'IT',
        [Symbol('PremiumContent')]: 'Stock to rise by 15-16% on 3 strong domestic acquisitions in latin America'
    },
    {   
        "FNOAvailable": 'NA',
        "ID": 5,
        "Name": 'Cilantro Foods',
        "Rating": 'A+',
        "Sector": 'Food Manufacturing',
        
        [Symbol('PremiumContent')]: 'Cilantro starts online delivery. Sales up by 15%. Stock may see an upside of 6-7%'
    }
];

export {ClassifiedSecurities, RecomendedSecurities, AvailableFund};

