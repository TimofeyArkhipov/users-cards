export default function UserCard({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-1 bg-black bg-opacity-50 flex items-center justify-center z-100">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        <h2 className="text-xxl font-bold mb-4">{user.username}</h2>
        <p><strong>Full name:</strong> {user.name}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Street:</strong> {user.street}</p>
        <p><strong>City:</strong> {user.city}</p>    
        <p><strong>Zip:</strong> {user.zip}</p>


        <div className="mt-4 flex justify-end gap-2">
            <button
            onClick={() => window.print()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Print
          </button>

          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Close
          </button>
      
        </div>
      </div>
    </div>
  );
}