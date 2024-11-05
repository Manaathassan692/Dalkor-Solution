function Footer(){

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Main Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: <a href="tel:+0123456789" className="hover:underline">+0 123 456 789</a></p>
            <p className="mb-2">Email: <a href="mailto:manaathassan@gmail.com" className="hover:underline">manaathassan@gmail.com</a></p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="mb-2">Muqdisho, Somalia</p>
            <p className="mb-2">Hodan, KM4</p>

            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium">Subscribe for updates</label>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 rounded-l-lg text-gray-800"
                  placeholder="Enter your email" 
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Dalkor Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 

