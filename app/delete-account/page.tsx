const DeleteAccountPage = () => {
    return (
        <div className="font-sans leading-relaxed mx-10 my-10 text-gray-800">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-black mb-4">Delete Your Account</h1>

                <p className="mb-6">
                    If you would like to delete your account, you can do so directly within the mobile application.
                </p>

                <div className="bg-gray-100 p-4 border-l-4 border-blue-500 mb-6">
                    <strong>Steps to delete your account:</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li>Open the app</li>
                        <li>Go to <strong>Profile</strong></li>
                        <li>Navigate to <strong>Account Settings</strong></li>
                        <li>Select <strong>Delete Account</strong></li>
                    </ol>
                </div>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Data Handling</h2>
                <p className="mb-2">We respect your privacy. Once your account is deleted:</p>
                <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>All associated data is permanently deleted.</li>
                    <li>We do not retain any personal user data.</li>
                    <li>No data is stored after deletion.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Need Help?</h2>
                <p className="mb-2">
                    If you are unable to delete your account through the app, please contact us at:
                </p>
                <p className="mb-4"><strong>Email:</strong> support@yourapp.com</p>

                <p>We will process your request as soon as possible.</p>
            </div>
        </div>
    )
}

export default DeleteAccountPage