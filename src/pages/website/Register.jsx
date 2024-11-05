import React, { useState } from 'react';

const Register = () => {
    const [provider, setProvider] = useState('');
    const [tokenNumber, setTokenNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [userData, setUserData] = useState(null); // State cusub

    // Tusaalaha xogta user-ka
    const userDatabase = {
        '12345': { Name: 'Ali', dagmo: 'Hodan', houseNo: 'A12' },
        '67890': { Name: 'Aisha', dagmo: 'Warta Nabadda', houseNo: 'B34' },
        'abcde': { Name: 'Mohamed', dagmo: 'Xamar Weyne', houseNo: 'C56' }
    };

    const handleTokenCheck = () => {
        if (userDatabase[tokenNumber]) {
            setError('');
            setSuccessMessage(`Token ${tokenNumber} is valid! Proceed to payment.`);
            setUserData(userDatabase[tokenNumber]); // Kaydi xogta user-ka
        } else {
            setError('Your token number is not registered or does not exist.');
            setSuccessMessage('');
            setUserData(null); // Nadiifi xogta user-ka haddii token-ka qaldan
        }
    };

    const handlePayment = () => {
        if (!provider || !tokenNumber || !paymentMethod) {
            setError('Please fill in all fields before proceeding.');
            return;
        }

        if (paymentMethod === 'EVC' && !userDatabase[tokenNumber]) {
            alert('Invalid Token Number. Please check and try again.');
            return;
        }

        alert(`Payment of token ${tokenNumber} made using ${paymentMethod} with provider ${provider}.`);
        setProvider('');
        setTokenNumber('');
        setPaymentMethod('');
        setError('');
        setSuccessMessage('');
        setUserData(null); // Nadiifi xogta user-ka kadib lacag bixinta
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Prepaid Electricity Management</h1>
                
                <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Choose Your Provider</label>
                    <select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a provider</option>
                        <option value="Beco">Beco</option>
                        <option value="Mugadishu">Mugadishu</option>
                        <option value="Sompower">Sompower</option>
                        <option value="NecoSom">NecoSom</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Enter Your Token Number</label>
                    <input
                        type="text"
                        placeholder="Enter Token Number"
                        value={tokenNumber}
                        onChange={(e) => setTokenNumber(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleTokenCheck}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full mt-2"
                    >
                        Check Token
                    </button>
                </div>

                {userData && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-md">
                        <h2 className="font-bold text-gray-700">User Information:</h2>
                        <p><strong>Name:</strong> {userData.Name}</p>
                        <p><strong>Dagmo:</strong> {userData.dagmo}</p>
                        <p><strong>House No:</strong> {userData.houseNo}</p>
                    </div>
                )}

                <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Choose Payment Method</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="EVC">EVC</option>
                        <option value="ZAAD">ZAAD</option>
                        <option value="SALAAM BANK">SALAAM BANK</option>
                        <option value="E-DAHAB">E-DAHAB</option>
                    </select>
                </div>

                <button
                    onClick={handlePayment}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full"
                >
                    Make Payment
                </button>

                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
            </div>
        </div>
    );
};

export default Register;
