
export default function Footer() {
  return (
    <footer className="bg-dark-light py-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-hydrogen">DR.WATER</h2>
            <p className="text-gray-400 mt-2">Advanced Hydrogen Water Technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-medium mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1 mt-6 md:mt-0">
              <h3 className="text-white font-medium mb-3">Subscribe</h3>
              <p className="text-gray-400 mb-3">Get optimization tips and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-dark border border-gray-700 rounded-l px-4 py-2 w-full focus:outline-none focus:border-hydrogen"
                />
                <button className="bg-hydrogen hover:bg-hydrogen-light text-white px-4 py-2 rounded-r transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DR.WATER. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-hydrogen transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
