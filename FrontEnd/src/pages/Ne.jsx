import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';

export default function Ne() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        {/* Animated Profile Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <UserCircle size={64} className="text-indigo-600" />
        </motion.div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Profile Form
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Interest Type Select */}
        <div className="mb-6">
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
            Interest Type
          </label>
          <select
            id="interest"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Interest</option>
            <option value="tech">Technology</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
