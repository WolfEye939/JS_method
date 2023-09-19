// ╔══════════════ Functions to be called from terminal only ════════════════╗

    function dummyText() { console.log("lorem ipsum"); }

    function conWipe() { console.clear(); }    

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