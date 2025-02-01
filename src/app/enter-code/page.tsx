'use client';
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { LibComponents } from "@/lib/components";


const QRCodeInputPage = () => {
    const [code, setCode] = useState("");
    const [scanning, setScanning] = useState(false);

    const handleScan = (result: string | null) => {
        if (result) {
            setCode(result);
            setScanning(false);
        }
    };

    const handleError = (error: any) => {
        console.error("QR Code Scan Error:", error);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md">
                <div className="p-6 space-y-4">
                    <h1 className="text-xl font-semibold text-center">Digite um código ou escaneie um QR Code</h1>
                    <LibComponents.Input
                        placeholder="Digite o código"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="flex justify-center space-x-4">
                        <LibComponents.Button onClick={() => setScanning(true)} text="Escanear QR Code" />
                        <LibComponents.Button onClick={() => setCode("")} text="Limpar" />
                    </div>
                    {scanning && (
                        <div className="mt-4">
                            <QrReader
                                onResult={(result, error) => {
                                    // if (result?.text) handleScan(result.text);
                                    // if (error) handleError(error);
                                }}
                                constraints={{ facingMode: "environment" }}
                            />
                        </div>
                    )}
                    {code && (
                        <p className="mt-4 text-center text-green-600">Código detectado: {code}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QRCodeInputPage;
