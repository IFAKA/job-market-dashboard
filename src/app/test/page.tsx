export default function TestPage() {
  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-600 mb-8">Tailwind CSS Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 1</h2>
            <p className="text-gray-600">This is a test card with Tailwind classes.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 2</h2>
            <p className="text-gray-600">Another test card with different styling.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 3</h2>
            <p className="text-gray-600">Third test card to verify styling.</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <p className="font-medium">✅ If you can see this styled content, Tailwind CSS is working!</p>
        </div>
      </div>
    </div>
  );
}
