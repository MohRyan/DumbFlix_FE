// src/global.d.ts
interface Window {
    snap: {
        pay: (
            transactionToken: string,
            callbacks?: {
                onSuccess?: (result: any) => void;
                onPending?: (result: any) => void;
                onError?: (result: any) => void;
                onClose?: () => void;
            }
        ) => void;
        embed: (
            transactionToken: string,
            options?: {
                embedId: string;
                onSuccess?: (result: any) => void;
                onPending?: (result: any) => void;
                onError?: (result: any) => void;
                onClose?: () => void;
            }
        ) => void;
    };
}