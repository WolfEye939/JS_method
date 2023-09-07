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


























 
   