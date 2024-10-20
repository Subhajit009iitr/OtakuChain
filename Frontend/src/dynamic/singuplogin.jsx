import {
    DynamicContextProvider,
    DynamicWidget,
    getAuthToken
  } from "@dynamic-labs/sdk-react-core";
  import { useNavigate } from "react-router-dom";

  import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

  
  export default function SignUpLogin() {
    const navigate = useNavigate();
  
    return (
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: process.env.REACT_APP_DYNAMIC_ENV_ID,
          walletConnectors: [EthereumWalletConnectors],
          events: {
            onAuthSuccess: (args) => {
              console.log('onAuthSuccess was called', args);
              // you can get the jwt by calling the getAuthToken helper function
              const authToken = getAuthToken();
              console.log('authToken', authToken);
              navigate("/");
            }
          }
        
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    );
  };