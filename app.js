let pronoun = ['el','la'];
let adj = ['gran', 'enorme' ];
let noun = ['web','app'];

var domains = document.getElementById('result');

for ( let word in pronoun) {
    
    for(let i=0 ; i<adj.length ; i++){

        for (let y = 0; y < noun.length; y++) {
            const element = noun[y];
            

            document.write(pronoun[word]);
            document.write(adj[i]);
            document.write(noun[y]);

             document.write('<br>');


        }

    }
    
 
}

