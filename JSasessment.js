/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, action, runs) {
    const CRICKET = { 
        "name": name,
        "eyeColor": eyeColor,
        "action": action,
        "runs": runs
    }; 
    NFTs.push(CRICKET); // it pushes the new CRICKET object to the end of the array
    console.log("player " + name + " added");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("\n\nListing all NFTs:");
    for(let i=0;i<NFTs.length;i++)
     {
        console.log("\nName: " + NFTs[i].name);
        console.log("Eye Color: " + NFTs[i].eyeColor);
        console.log("Action: " + NFTs[i].action);
        console.log("Runs: " + NFTs[i].runs);
        console.log("-------------------------");
    };
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + NFTs.length);
}

// call your functions below this line

mintNFT("VIRAT", "BLACK", "BATTER", "764");
mintNFT("DHONI", "BROWN", "W-KEEPER", "400");
mintNFT("ROHIT", "GREEN", "CAPTAIN", "356");    
mintNFT("HARDIK", "BLUE", "ALL-ROUNDER", "456");    
mintNFT("ABHISHEK", "BLACK", "HITTER", "555");    
listNFTs();
getTotalSupply();
