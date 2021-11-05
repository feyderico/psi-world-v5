const GmN_address = "0x4a574D4f0bDD815969575412D0F82067BB5faa62"; //Guess_my_number
const GmN_abi = [
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "loser",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contract_reward",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winning_number",
				"type": "uint256"
			}
		],
		"name": "YOU_LOSE",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "YOU_WON",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ETH_SUPPLY",
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
		"inputs": [],
		"name": "MAX_VALUE",
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
				"name": "Even_0__Odd_1",
				"type": "uint256"
			}
		],
		"name": "Play_Even_Or_Odd",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "Play_Guess",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const web3 = new Web3(window.ethereum)
const GmN_contract = new web3.eth.Contract(GmN_abi,GmN_address);



//Created check function to see if the MetaMask extension is installed
const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

//Basic Actions Section
const onboardButton = document.getElementById('connectButton');
const addressDisplay = document.getElementById('addressDisplay');
const ETHDisplay = document.getElementById('ETHDisplay');

//Play Section
var max_value = 0;
const numberInput = document.getElementById('numberInput');
const amountInput = document.getElementById('amountInput');
const sendButton = document.getElementById('sendButton');
const outputDisplay = document.getElementById('outputDisplay');

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
      if(chainId == 3 ){ 
		  onboardButton.innerText = "Ropsten";
		  outputDisplay.innerHTML = "Ready"
		}
      else{ 
		  onboardButton.innerText = "set ropsten";
		  outputDisplay.innerHTML = "Wrong network, set Ropsten and refresh"

		}

      /******* GET ETH balance ******/
      web3.eth.getBalance(ethereum.selectedAddress, function(error,result){
        if(error){
			console.log("Error with address display");
		}else{
		  ETHDisplay.innerHTML = "ETH: " + Math.round( result*Math.pow(10,-14))/10000;
		}
	  });
	  /************ Get Max Value *********/
	  GmN_contract.methods.MAX_VALUE().call().then(function(result){
		max_value = Math.round(result * Math.pow(10,-15))/1000;
		amountInput.placeholder = "ETH amount (max " + max_value + ")";
	  });
    } catch (error) {
      console.error(error);
    }

  };

  ethereum.on('accountsChanged', (accounts) => {
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
    addressDisplay.innerHTML = "0x" +  ethereum.selectedAddress[2] + ethereum.selectedAddress[3] + "..." + ethereum.selectedAddress[39] + ethereum.selectedAddress[40] + ethereum.selectedAddress[41] ;
	web3.eth.getBalance(ethereum.selectedAddress, function(error,result){
        if(error){
			console.log("Error with address display");
		}else{
		  ETHDisplay.innerHTML = "ETH: " + Math.round( result*Math.pow(10,-14))/10000;
		}
	  });
  });
  
  ethereum.on('chainChanged', (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    window.location.reload();
  });

  MetaMaskClientCheck();
  /*************** Send *******************/
  var clickCount=0;

  sendButton.onclick = async () => {
	clickCount++;
	outputDisplay.innerHTML = "Loading..."
	const number = numberInput.value;
    const amount = amountInput.value; //in ETH
    const cost = amount * Math.pow(10,18); //in gwei
	const conditions = ethereum.selectedAddress.length > 0 && clickCount > 0 && number > -1 && number < 6 && amount <= max_value; 

    if(conditions){
      const encodedFunction = web3.eth.abi.encodeFunctionCall({
		"name": "Play_Guess",
		"stateMutability": "payable",
		"type": "function",
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],		
		"outputs": []		
	}, [number]);
      
      const transactionParameters = {
        to: GmN_address,
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
	if(conditions){
		outputDisplay.innerHTML = "Loading... Your guess: " + number + " with " + amount + " ETH"
		amountInput.value="";
		numberInput.value="";
		/******Get event******/
		GmN_contract.events.YOU_LOSE().on('data',function(event){
			outputDisplay.innerHTML = "You lose, the winning number is: " + event.returnValues.winning_number + " try again";
		});
		GmN_contract.events.YOU_WON().on('data',function(event){
			reward = Math.round( event.returnValues.reward  * Math.pow(10,-15))/1000
			outputDisplay.innerHTML = "Congratulation you WON: " + event.returnValues.reward + " ETH";
		});
	}
	else{
		outputDisplay.innerHTML = "Something went wrong, retry or refresh."
	}
	
}
  } 

window.addEventListener('DOMContentLoaded', initialize)
