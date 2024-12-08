import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <div className="bg-purple-600 text-white text-sm py-2">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10">
        
        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>email@gmail..com</span>
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
  );
};

export default Header;
