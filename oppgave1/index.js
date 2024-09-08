//import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

  const longestWord = () => {
    //vi setter opp ordene slik at det blir til array ved å splitte på mellomrom
    const words = text.split(' ');
    
    //dermed så velger vi første ordet som det lengste som en start på sammenligningen
    let longest = words[0];
    
    //vi itererer gjennom alle ordene og sammenligner lengden på ordene
    words.forEach(word => {
      // vi setter slik at med regex vill matcge alle bosktaver og tall og at den skal beholde mellomrom. og vi legger til at vi ikke skal ha noe som ikke er bokstav, tall eller understrek
      let cleanedWord = word.replace(/[^\w]/g, '');
      
      // Sjekker om ordet er lengre enn det lengste ordet vi har funnet til nå
      if (cleanedWord.length > longest.length) {
        longest = cleanedWord;
      }
    });
  
    // Returner det lengste ordet
    return longest;
  };
  

console.log(longestWord());

