import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Footer = () => {
    return (
        <footer id='Contact' className="text-gray-600 body-font bg-gray-100">
            <div className="container mx-auto px-5 py-12">
                <div className="flex flex-wrap justify-between gap-8 md:flex-nowrap text-center md:text-left">
                 
                    <div className="w-full md:w-1/4">
                        <div className="text-2xl font-bold text-gray-800 mb-6">
                            Hekto
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white w-full py-2 px-4 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <button className="w-full bg-pink-600 text-white py-2 rounded-md">
                                Enter Email Address
                            </button>
                        </div>
                        <div className="mb-4">
                            <p>Contact Information</p>
                            <p>Phone: +1 234 567 890</p>
                            <p>Email: example@domain.com</p>
                        </div>
                        <div>
                            <p>Address: 1234 Some St, City, Country</p>
                        </div>
                    </div>

    
                    <div className="w-full md:w-3/4 flex justify-between gap-16">
                        <div className="flex flex-col">
                            <h2 className="font-medium text-black mb-4">CATEGORIES</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        First Link
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Second Link
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Third Link
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Fourth Link
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-medium text-black mb-4">CUSTOMER CARE</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Customer Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-medium text-black mb-4">PAGES</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-white">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 mt-8">
                <div className="container mx-auto flex justify-between text-center text-gray-500">
                    <p>&copy; 2024 Hekto</p>
                    <p>Privacy Policy | Terms & Conditions</p>
                </div>
            </div>

           
            <div className="bg-purple-600 text-white text-sm py-2">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10">
                  
                    <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                        <div className="flex items-center space-x-2">
                            <FaEnvelope />
                            <span>email@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt />
                            <span>+123 456 7890</span>
                        </div>
                    </div>

                   
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <span>English</span>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <span>USD</span>
                            <MdKeyboardArrowDown />
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <FaUser />
                                <span>Login</span>
                            </div>
                            <FaHeart className="cursor-pointer" />
                            <FaShoppingCart className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
