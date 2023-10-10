// ╔══════════════ Functions to be called from terminal only ════════════════╗

    function dummyText() { console.log("lorem ipsum"); }

    function conWipe() { console.clear(); }

    var whitespace = '              ';
    var newLine = '';

// ╚═════════════════════════════════════════════════════════════════════════╝

function arraypush() 
    {
        const chores = ['wash dishes', 'do laundry', 'take out trash'];
        console.log(chores);
        chores.push('heh', 'hah');
        console.log(chores);
    }

function popXmpl() 
    {
        const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
        console.log(chores2);
        chores2.pop();
        console.log(chores2);
    }

function arraymethodPlus() 
    {
        var whitespace = '              '
        const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    
        console.log('╔══════════════════════════════════╤ Unmodified ╤═══════════════════════════════════════╗');
            console.log();
            console.log(whitespace + groceryList);
            console.log();
    
        console.log('╠═════════════════════════════════════╤ Shift method ╤══════════════════════════════════╣');
            groceryList.shift();
            console.log();
            console.log(whitespace + groceryList);
            console.log();
    
        console.log('╠═════════════════════════════════════╤ unShift method ╤════════════════════════════════╣');
            groceryList.unshift('popcorn');
    
            console.log();
            console.log(whitespace + groceryList);
            console.log();
    
        console.log('╠═══════════════════════════════════╤ .slice method ╤═══════════════════════════════════╣');
    
            console.log(whitespace + whitespace + groceryList.slice(1, 4));
            //  console.log(groceryList);
      
        console.log('╠══════════════════════════════╤ .index method ╤════════════════════════════════════════╣');
            const pastaIndex = groceryList.indexOf('pasta');
            console.log();
            console.log(whitespace + whitespace + whitespace + pastaIndex);
            console.log();
        console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝');
    }



function forloop() 
    {
        for (let count = 0 + 5; count < 11; count++) { console.log(count); }
    }

function forLoopCountdown() 
    {
        for (let counter = 3; counter >= 0; counter--) { console.log(counter); }
    }

function nestedloop() 
    {
        let bobsFollowers = [ 'you', 'have', 'no', 'friends' ];
        let tinasFollowers = [ 'sorry', 'no', 'friends' ];
        let mutualFollowers = [];

        for (let i = 0; i < bobsFollowers.length; i++) 
            {
                for (let j = 0; j < tinasFollowers.length; j++) { 
                    if (bobsFollowers[i] === tinasFollowers[j]) { mutualFollowers.push(bobsFollowers[i]); }
                    }
            };
    }

function whileloop() 
    {
        const cards = ['diamond', 'spade', 'heart', 'club'];
        let currentCard;

        while (currentCard !== 'spade') {
            currentCard = cards[Math.floor(Math.random() * 4)];
            console.log(currentCard);
        }
    }

function do_while() 
    {
        let cupsOfSugarNeeded = 2;
        let cupsAdded = 0;

        do {cupsAdded++; console.log(cupsAdded + ' cup was added') } 
        while (cupsAdded < cupsOfSugarNeeded);
    }

function breakKey() 
    {
        const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

        for (let i = 0; i < rapperArray.length; i++){
            console.log(rapperArray[i]);
            if (rapperArray[i] === 'Notorious B.I.G.'){break;}
        }
        console.log("And if you don't know, now you know.");
    };

function forOfLoop() 
    {
        const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
        for (const hobby of hobbies) 
            { console.log(`I enjoy ${hobby}.`); }
    }

function objectliteral() 
    {
        // Creates fasterShip object
        fasterShip = {
            'Fuel Type': 'Turbo Fuel',
            color: 'silver',
            imposter: 'sus',
            amoegus: 7,
            'is sus': false, 
        }
            // Retrieves properties from fasterShip object, and stores them as separate variables
            let lorem = fasterShip.imposter;
            let ipsum = fasterShip.amoegus;
            let swaws = fasterShip['is sus'];
            
            //shows how to modify object properties
            function param_change() {
                fasterShip.alan = 'please add details';                 // create new alan property

                let agent47 = fasterShip.alan;      // see line 135
                console.log(agent47);
                delete fasterShip.agent47;       // removes property
            }

        function print()                        
        {
            console.log(lorem);         // Prints a string value
            console.log(ipsum);         // Prints a numeric value
            console.log(swaws);
        };
 
        print();
    };

function objectMethod() {
    let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

    const alienShip = {
        retreat () { console.log(retreatMessage); },
        takeOff () { console.log('Spim... Borp... Glix... Blastoff!'); } 
    };

    function alienLeave() {
        alienShip.retreat();
        alienShip.takeOff();
    };
    alienLeave();
}

function nestedObject() {
    const inception = {
        layer1: {
            firstlayer () { console.log('just'); }
        },
        layer2: {
            layer2a: {
                secondlayer () {console.log(whitespace + 'like');}
            }
        },
        layer3: {
            layer3a: {
                layer3b: {
                    thirdlayer () { console.log(whitespace + whitespace + 'Inception');}
                }
            }
        }
    }
        inception.layer1.firstlayer();
        inception.layer2.layer2a.secondlayer();
        inception.layer3.layer3a.layer3b.thirdlayer();
}

function privacy() {
    const robot = {
        _energyLevel: 100,
        recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
        }
    };
    robot._energyLevel = 'high';
    robot.recharge();
}

function getters() {
    const robot = {
        _model: '1E78V2',
        _energyLevel: 100,
        get energyLevel() {
            if(typeof this._energyLevel === 'number') {
                return 'My current energy level is ' + this._energyLevel
            } else { return "System malfunction: cannot retrieve energy level" }
        }
    };
    console.log(robot.energyLevel);
};

function setters() {
    const robot = {
        _model: '1E78V2',
        _energyLevel: 100,
        _numOfSensors: 15,

        get numOfSensors(){
            if(typeof this._numOfSensors === 'number') {
                return this._numOfSensors;
            } else { return 'Sensors are currently down.' }
        },
        set numOfSensors(num) {
            if (typeof num === 'number' && num >= 0)
                { this._numOfSensors = num; } 
            else { console.log('Pass in a number that is greater than or equal to 0') }   
        } 
    };
    robot.numOfSensors = 100;
    console.log(robot.numOfSensors);
}

function funcFactory() {
    const robotFactory = (model, mobile) => {
        return {
            model : model,
            mobile: mobile,
            beep () { console.log('Beep Boop'); }
        };
    };
    const tinCan = robotFactory('P-500', true);
    tinCan.beep();
}

function propValShort() {
    const robotFactory = (model, mobile) => {
        return {
            model,
            mobile,
            beep() { console.log('Beep Boop'); }
        }
    }
    // To check that the property value shorthand technique worked:
    const newRobot = robotFactory('P-501', false)
    console.log(newRobot.model)
    console.log(newRobot.mobile)
}

function destructAssign() {
    const robot = {
        model: '1E78V2',
        energyLevel: 100,

        functionality: {
            beep() { console.log('Beep Boop'); },
            fireLaser() { console.log('Pew Pew'); },
        }
    };
      
    const { functionality } = robot;
      
    functionality.beep();
}

function reduceMethod() {
    const newNumbers = [1, 3, 5, 7];

    const newSum = newNumbers.reduce (
        (accumulator, currentValue) => 
            {
                console.log('The value of accumulator: ', accumulator);
                console.log('The value of currentValue: ', currentValue);
                return accumulator + currentValue;
            },
        10
    );
    console.log(newSum);
};

function pxldepth() {
    let depth = screen.pixelDepth;
    console.log(depth);
}