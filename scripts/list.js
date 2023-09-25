// ╔══════════════ Functions to be called from terminal only ════════════════╗

function dummyText() { console.log("lorem ipsum"); }

function conWipe() { console.clear(); }

var whitespace = '                 ';
var indent = '     ';
var newLine = '';

// ╚═════════════════════════════════════════════════════════════════════════╝

console.info('use the printlist function to see a list of all functions to execute in the console');

function printlist() {
    console.log("╔══ list of current functions ══╗");

    const samples = 
    [
        'arraypush',
        'popXmpl',
        'arraymethodPlus',
        'forloop',
        'forLoopCountdown',
        'nestedloop',
        'whileloop',
        'do_while',
        'breakKey',
        'forOfLoop',
        'objectliteral',
        'objectMethod',
        'nestedObject',
        'privacy',
        'getters',
        'setters',
        'funcFactory',
        'propValShort',
        'destructAssign',
        'TeamStats',
        'indexFindMethod'
    ]

    samples.forEach 
        ( samples => console.log(indent + samples) )
        
    console.log('╚═══════════════════════════════╝');
}




