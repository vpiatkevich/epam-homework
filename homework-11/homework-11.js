class Sweet {
    constructor(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price){
        this.brandName = brandName;
        this.manufacturer = manufacturer;
        this.weightPerPackage = weightPerPackage;
        this.caloriesPer100G = caloriesPer100G;
        this.containsPeanuts = containsPeanuts;
        this.flavor = flavor;
        this.price = price;
    }

    static async packGift(){
        const gift = [];
        gift.push(rafaello, mamba, mAndMs, milka, toblerone, kinderChocolate, oreo, chipsAhoy);

        function calculateGiftWeight(){
            let totalWeight = 0;
            for (let i = 0; i < gift.length; i++) {
                totalWeight += gift[i].weightPerPackage;
            }
            return totalWeight;
        }

        function findLowCalSweets(){
            let lowCalSweets = [];
            for (let i = 0; i < gift.length; i++) {
                if (gift[i].caloriesPer100G < 400) {
                    lowCalSweets.push(gift[i].brandName);
                }
            }
            return lowCalSweets;
        }

        function findSweetsWithoutPeanuts(){
            let sweetsWithoutPeanuts = [];
            for (let i = 0; i < gift.length; i++) {
                if (gift[i].containsPeanuts === false) {
                    sweetsWithoutPeanuts.push(gift[i].brandName);
                }
            }
            return sweetsWithoutPeanuts;
        }

        gift.sort((x,y) => x.price - y.price);
        console.log(gift)

        console.log(
        `Gift is packed! Total weight is: ${calculateGiftWeight()}
        Low-cal options in the gift are: ${findLowCalSweets()}
        Options without peanuts: ${findSweetsWithoutPeanuts()}
        `);
    }
}

class Candy extends Sweet {
    constructor(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price, shape){
        super(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price);
        this.shape = shape;
    }
}

class ChocolateBar extends Sweet {
    constructor(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price, typeOfChocolate, hasFoil){
        super(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price);
        this.typeOfChocolate = typeOfChocolate;
        this.hasFoil = hasFoil;
    }
}

class Cookie extends Sweet {
    constructor(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price, containsChocolateChip){
        super(brandName, manufacturer, weightPerPackage, caloriesPer100G, containsPeanuts, flavor, price);
        this.containsChocolateChip = containsChocolateChip;
    }
}

const rafaello = new Candy('Rafaello', 'Ferrero', 80, 466, true, 'coconut', 4.25, 'round');
const mamba = new Candy('Mamba', 'Storck', 40, 290, false, 'lemon', 1.1, 'rectangle');
const mAndMs = new Candy('M&Ms', 'Mars', 40, 330, false, 'chocolate', 2.5, 'round');
const milka = new ChocolateBar('Milka', 'Mondelez', 90, 499, false, 'chocolate', 2.8, 'dark', false);
const toblerone = new ChocolateBar('Toblerone', 'Mondelez', 75, 543, true, 'chocolate', 3.15, 'milk', true);
const kinderChocolate = new ChocolateBar('Kinder Chocolate', 'Ferrero', 80, 512, false, 'chocolate', 2.6, 'milk', false);
const oreo = new Cookie('Oreo', 'Mondelez', 90, 540, false, 'creamy', 3, false);
const chipsAhoy = new Cookie('Chips Ahoy!', 'Nabisco', 70, 488, true, 'chocolate', 2.22, true);

Sweet.packGift();
