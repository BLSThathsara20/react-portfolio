import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, Loader } from 'lucide-react';

const Badge = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'online':
        return {
          icon: Wifi,
          text: 'API Online',
          bgColor: 'bg-green-500/20',
          textColor: 'text-green-400',
          borderColor: 'border-green-500/20'
        };
      case 'offline':
        return {
          icon: WifiOff,
          text: 'API Offline',
          bgColor: 'bg-red-500/20',
          textColor: 'text-red-400',
          borderColor: 'border-red-500/20'
        };
      case 'loading':
        return {
          icon: Loader,
          text: 'Loading...',
          bgColor: 'bg-blue-500/20',
          textColor: 'text-blue-400',
          borderColor: 'border-blue-500/20'
        };
      default:
        return {
          icon: Wifi,
          text: 'Unknown',
          bgColor: 'bg-gray-500/20',
          textColor: 'text-gray-400',
          borderColor: 'border-gray-500/20'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 
                  rounded-full ${config.bgColor} ${config.textColor} 
                  backdrop-blur-sm border ${config.borderColor}`}
    >
      <Icon className={`w-4 h-4 ${status === 'loading' ? 'animate-spin' : ''}`} />
      <span className="text-sm font-medium">{config.text}</span>
    </motion.div>
  );
};

export default Badge;