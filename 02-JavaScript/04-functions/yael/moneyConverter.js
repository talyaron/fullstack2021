function moneyConverter (price){
    //    A function that converts a price in Israeli shekels to dollars/euro/yen.
    
        const dollarValue=3.14;
        const euroValue=3.54;
        const yenValue=0.028;
        const BahtValue=0.094;
    
        let currency=prompt("enter the currency you want to convert to: dollars/euro/yen/baht");
        switch (currency) {
        case 'dollars':
            currency= dollarValue * price;
            break;
        case 'euro':
            currency= euroValue * price;
            break;
        case 'yen':
            currency=yenValue*price;
            break;
        case 'baht':
            currency=BahtValue*price;
            break;
        default:
            console.log("non valid input");
            return;
    }
            console.log("The converted price is:"+ currency);
    }
    
    moneyConverter(799);