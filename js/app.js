const nft_address = "0x77041F704d3de5776873479e60f364aFD4A16f5a"; //Ropsten Colors
const contract_abi = {
                        name: 'mint',
                        type: 'function',
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "_mintAmount",
                            "type": "uint256"
                          }
                        ]
                      };
const ERC721_abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const web3 = new Web3(window.ethereum)
const RCOL_contract = new web3.eth.Contract(ERC721_abi, nft_address);



//Created check function to see if the MetaMask extension is installed
const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

//Basic Actions Section
const onboardButton = document.getElementById('connectButton');
const addressDisplay = document.getElementById('addressDisplay');
const ETHDisplay = document.getElementById('ETHisplay');

//Mint SEction
const mintButton1 = document.getElementById('mintButton1');
const mintButton7 = document.getElementById('mintButton7');
const mintButton25 = document.getElementById('mintButton25');


const initialize = () => {
  /*************************** TODO: install metamask option ***************************/
  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      onboardButton.innerText = 'Please install MetaMask!';
      //When the button is clicked we call this function
      //onboardButton.onclick = onClickInstall;
      //The button is now disabled
      //onboardButton.disabled = false;
    } else {
		//If it is installed we change our button text
		onboardButton.innerText = 'Connect';
		//When the button is clicked we call this function to connect the users MetaMask Wallet
		onboardButton.onclick = onClickConnect;
		if(ethereum.selectedAddress != null){ onboardButton.innerText = 'Refresh'; }
    }
  };
  /*/We create a new MetaMask onboarding object to use in our app
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

  //This will start the onboarding proccess
  const onClickInstall = () => {
    onboardButton.innerText = 'Onboarding in progress';
    onboardButton.disabled = true;
    //On this object we have startOnboarding which will start the onboarding process for our end user
    onboarding.startOnboarding();
  };
*/
  
  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      addressDisplay.innerHTML = "0x" +  ethereum.selectedAddress[2] + ethereum.selectedAddress[3] + "..." + ethereum.selectedAddress[39] + ethereum.selectedAddress[40] + ethereum.selectedAddress[41] ;
      onboardButton.disabled=true;
      /******** Display Chain id *********/
      if(chainId == 1 ){ onboardButton.innerText = "Ethereum"; }
      else{
        if(chainId == 3 ) { onboardButton.innerText = "Ropsten" }
        else{
          if(chainId == 137 ) { onboardButton.innerText = "Polygon"; }
          else{ onboardButton.innerText = "Change Network"; }
        }
      }

      /******* GET RCOL balance ******/
      RCOL_contract.methods.balanceOf(ethereum.selectedAddress).call().then(function(result){
        RCOLDisplay.innerHTML = "RCOL: " + result;
      });
    } catch (error) {
      console.error(error);
    }
  };

  ethereum.on('accountsChanged', (accounts) => {
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
    addressDisplay.innerHTML = "0x" +  ethereum.selectedAddress[2] + ethereum.selectedAddress[3] + "..." + ethereum.selectedAddress[39] + ethereum.selectedAddress[40] + ethereum.selectedAddress[41] ;
    RCOL_contract.methods.balanceOf(ethereum.selectedAddress).call().then(function(result){
      RCOLDisplay.innerHTML = "RCOL: " + result;
    });
  });
  
  ethereum.on('chainChanged', (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    window.location.reload();
  });

  MetaMaskClientCheck();
  /*************** Minting *******************/
  var clickCount=0;
  
  /** 1 **/
  mintButton1.onclick = async () => {
	clickCount++;
    const amount = 1;
    const cost = amount * 0.05 *Math.pow(10,18);

    if( ethereum.selectedAddress.length > 0 && clickCount > 0 ){
      const encodedFunction = web3.eth.abi.encodeFunctionCall(contract_abi, [ethereum.selectedAddress, amount]);
      
      const transactionParameters = {
        to: nft_address,
        from: ethereum.selectedAddress,
        value: cost.toString(16),
        data: encodedFunction
      };              
      
      // txHash is a hex string
      // As with any RPC call, it may throw an error
      try {
        const txHash = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
      } catch (error){
        console.log(`Error: ${error.message}`);
      }
    } else{
      console.log("Error no address no amount");
    }    
    clickCount=0;
  }

  /** 7 **/
  mintButton7.onclick = async () => {
    clickCount++;
    const amount = 7;
    const cost = amount* 0.05 *Math.pow(10,18);
    console.log(mintButton1.innerText)

    if( ethereum.selectedAddress.length > 0 && clickCount > 0 ){
      const encodedFunction = web3.eth.abi.encodeFunctionCall(contract_abi, [ethereum.selectedAddress, amount]);
      
      const transactionParameters = {
        to: nft_address,
        from: ethereum.selectedAddress,
        value: cost.toString(16),
        data: encodedFunction
      };              
      
      // txHash is a hex string
      // As with any RPC call, it may throw an error
      try {
        const txHash = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
      } catch (error){
        console.log(`Error: ${error.message}`);
      }
    } else{
      console.log("Error no address no amount");
    }    
    clickCount=0;
  }

  /** 25 **/
  mintButton25.onclick = async () => {
    clickCount++;
    const amount = 25;
    const cost = amount* 0.05 * Math.pow(10,18);
    console.log(mintButton1.innerText)

    if( ethereum.selectedAddress.length > 0 && clickCount > 0 ){
      const encodedFunction = web3.eth.abi.encodeFunctionCall(contract_abi, [ethereum.selectedAddress, amount]);
      
      const transactionParameters = {
        to: nft_address,
        from: ethereum.selectedAddress,
        value: cost.toString(16),
        data: encodedFunction
      };              
      
      // txHash is a hex string
      // As with any RPC call, it may throw an error
      try {
        const txHash = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
      } catch (error){
        console.log(`Error: ${error.message}`);
      }
    } else{
      console.log("Error no address no amount");
    }    
	clickCount=0;
  }

}

window.addEventListener('DOMContentLoaded', initialize)
