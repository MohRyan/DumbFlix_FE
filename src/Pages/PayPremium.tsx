import { Button } from '@/components/ui/button';
import { API } from '@/lib/api';
import { useState } from 'react'
import { GoPaperclip } from "react-icons/go";
import { Link } from 'react-router-dom';

const PayPremium = () => {
    const dumbFlix = <b className='text-red-500'>DUMBFLIX</b>
    const [snapToken, setSnapToken] = useState<string | null>(null);
    // const navigate = useNavigate()
    const [pending, setPending] = useState<boolean>(false)

    const handlePaymentPremium = async () => {
        try {
            const response = await API.post('/createTransaction', { amount: 1000000 });
            const token = response.data.token
            const url = response.data.redirect_url
            console.log("🚀 ~ handlePaymentPremium ~ url:", url)
            console.log("🚀 ~ url:", snapToken)
            setSnapToken(token);

            // Memanggil Snap.js dari Midtrans untuk memproses pembayaran
            window.snap.embed(token, {
                embedId: "snap-container",
                onSuccess: (result: any) => {
                    console.log('Payment success:', result);
                },
                onPending: (result: any) => {
                    setPending(true)
                    console.log('Payment pending:', result);
                },
                onError: (result: any) => {
                    console.log('Payment error:', result);
                },
                onClose: () => {
                    console.log('Payment popup closed');
                },
            });
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
    };

    // useEffect(() => {
    //     // Create a script element to load Snap.js
    //     const script = document.createElement('script');
    //     script.src = 'https://app.snap.com/snap.js'; // Replace with your Snap.js script URL
    //     script.async = true;
    //     script.onload = () => {
    //       window.snap.embed('YOUR_SNAP_TOKEN', {
    //         embedId: 'snap-container',
    //         onSuccess: (result) => {
    //           // Payment success
    //           console.log('Payment success:', result);
    //           // You can perform additional actions here, e.g., update UI, redirect
    //         },
    //         onPending: (result) => {
    //           // Payment pending
    //           console.log('Payment pending:', result);
    //           // You can display a loading indicator or message
    //         },
    //         onError: (result) => {
    //           // Payment error
    //           console.log('Payment error:', result);
    //           // Handle the error, e.g., display an error message
    //         },
    //         onClose: () => {
    //           // Payment closed
    //           console.log('Payment closed');
    //           // You can handle the closure, e.g., display a message
    //         },
    //       });
    //     };
    //     document.body.appendChild(script);

    //     return () => {
    //       // Clean up the script when the component unmounts
    //       document.body.removeChild(script);
    //     };
    //   }, []);

    return (
        <div className='h-screen bg-black'>
            <div className="flex flex-col items-center h-[80%] gap-8 justify-center text-white">
                <b className='text-6xl'>Premium</b>
                <p className='text-xl'>Bayar sekarang dan nikmati streaming film-film yang kekinian dari {dumbFlix}</p>
                <b className='text-2xl'>{dumbFlix} : nomor random</b>
                <input className='h-10 pl-3 rounded-md w-96' placeholder='Input your account number' type="text" />
                <label htmlFor="premium" className='flex items-center justify-between h-10 px-5 bg-white rounded-md w-96'>
                    <b className='text-red-500'>Attache proof of transfer</b>
                    <b className='text-red-500'><GoPaperclip /></b>
                </label>
                <input type="file" id='premium' className='hidden' />
                <Button className='w-96' onClick={handlePaymentPremium}>Kirim</Button>
                <div id='snap-container' className="snap-container"></div>
                {
                    pending ?
                        <>
                            <Link to={"https://simulator.sandbox.midtrans.com/bca/va/index"} target='_blank'>
                                <Button className='bg-blue-600'>Bayar Sekarang</Button>
                            </Link>
                        </>
                        :
                        ""
                }
            </div>
        </div>
    )
}

export default PayPremium