import { IDKitWidget, VerificationLevel} from '@worldcoin/idkit'
import BackendClient from '../BackendClient';

export default function UserVerify() {
    const handleVerify = async (proof) => {
        try {
            const res = await BackendClient.post("/api/verify", proof, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (res.status !== 200) {
                throw new Error("Verification failed.");
            }
    
            // Handle successful verification here
        } catch (error) {
            console.error(error.message);
            // Handle error appropriately
        }
    };
    const onSuccess = () => {
        // This is where you should perform any actions after the modal is closed
        // Such as redirecting the user to a new page
        window.location.href = "/";
    };
    
    
    return (
        <div>
            <IDKitWidget
                app_id={process.env.REACT_APP_WORLDCOIN_APP_ID} // obtained from the Developer Portal
                action={process.env.REACT_APP_WORLDCOIN_ACTION} // obtained from the Developer Portal
                onSuccess={onSuccess} // callback when the modal is closed
                handleVerify={handleVerify} // callback when the proof is received
                verification_level={VerificationLevel.Orb}
            >
                {({ open }) =>
                    // This is the button that will open the IDKit modal
                    <button onClick={open}>Verify with World ID</button>
                }
            </IDKitWidget>

        </div>
    );
};