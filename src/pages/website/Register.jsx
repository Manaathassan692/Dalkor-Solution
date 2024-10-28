import React, { useState } from 'react';

const Register = () => {
    const [meterNumber, setMeterNumber] = useState('');
    const [usage, setUsage] = useState(null);
    const [amount, setAmount] = useState('');
    const [tokenNumber, setTokenNumber] = useState('');

    const handleCheckUsage = () => {
        const mockUsage = Math.floor(Math.random() * 100); // Mock response
        setUsage(mockUsage);
    };

    const handlePurchase = () => {
        alert(`Token purchased for ${amount} kW`);
        setAmount(''); // Clear the input after alert
    };

    const handleTopUp = () => {
        alert(`Top up successful for Meter: ${meterNumber} with Token: ${tokenNumber}`);
        setMeterNumber(''); // Clear the meter number input
        setTokenNumber(''); // Clear the token number input
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Prepaid Electricity Management</h1>
            <div className="flex flex-wrap -mx-4">
                {/* Monitor Electricity Usage */}
                <div className="flex-1 p-4 h-80">
                    <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                        <h2 className="text-lg font-semibold mb-4">Monitor Electricity Usage</h2>
                        <input
                            type="text"
                            placeholder="Enter Meter Number"
                            value={meterNumber}
                            onChange={(e) => setMeterNumber(e.target.value)}
                            className="border p-2 rounded-md w-full mb-4"
                        />
                        <button
                            onClick={handleCheckUsage}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Check Usage
                        </button>
                        {usage !== null && (
                            <p className="mt-4">Remaining kW: <strong>{usage}</strong></p>
                        )}
                    </div>
                </div>

                {/* Purchase Token */}
                <div className="flex-1 p-4 h-80">
                    <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                        <h2 className="text-lg font-semibold mb-4">Purchase Token</h2>
                        <input
                            type="number"
                            placeholder="Enter Amount in kW"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="border p-2 rounded-md w-full mb-4"
                        />
                        <button
                            onClick={handlePurchase}
                            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                        >
                            Purchase Token
                        </button>
                    </div>
                </div>

                {/* Top Up Electricity */}
                <div className="flex-1 p-4 h-80">
                    <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                        <h2 className="text-lg font-semibold mb-4">Top Up Electricity</h2>
                        <input
                            type="text"
                            placeholder="Enter Meter Number"
                            value={meterNumber}
                            onChange={(e) => setMeterNumber(e.target.value)}
                            className="border p-2 rounded-md w-full mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Enter Token Number"
                            value={tokenNumber}
                            onChange={(e) => setTokenNumber(e.target.value)}
                            className="border p-2 rounded-md w-full mb-4"
                        />
                        <button
                            onClick={handleTopUp}
                            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
                        >
                            Top Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
