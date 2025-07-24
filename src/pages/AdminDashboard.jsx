import React, { useState } from 'react';
import { useSupabase } from '../contexts/SupabaseContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiEdit, FiImage, FiMessageSquare, FiClock, FiLogOut } = FiIcons;

const AdminDashboard = () => {
  const { user, supabase } = useSupabase();
  const [activeTab, setActiveTab] = useState('timeline');

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (!user) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-blue text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <SafeIcon icon={FiShield} className="text-gold-shoulder text-2xl" />
          <h1 className="text-xl font-playfair">Admin Dashboard</h1>
        </div>
        <button
          onClick={handleSignOut}
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          <SafeIcon icon={FiLogOut} />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="flex">
        <nav className="w-64 bg-white shadow-lg h-screen">
          <div className="p-4">
            <AdminNavItem
              icon={FiEdit}
              label="Timeline"
              active={activeTab === 'timeline'}
              onClick={() => setActiveTab('timeline')}
            />
            <AdminNavItem
              icon={FiImage}
              label="Gallery"
              active={activeTab === 'gallery'}
              onClick={() => setActiveTab('gallery')}
            />
            <AdminNavItem
              icon={FiMessageSquare}
              label="Messages"
              active={activeTab === 'messages'}
              onClick={() => setActiveTab('messages')}
            />
            <AdminNavItem
              icon={FiClock}
              label="Time Capsule"
              active={activeTab === 'timecapsule'}
              onClick={() => setActiveTab('timecapsule')}
            />
          </div>
        </nav>

        <main className="flex-1 p-8">
          {activeTab === 'timeline' && <TimelineEditor />}
          {activeTab === 'gallery' && <GalleryManager />}
          {activeTab === 'messages' && <MessageModerator />}
          {activeTab === 'timecapsule' && <TimeCapsuleManager />}
        </main>
      </div>
    </div>
  );
};

const AdminNavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
      active
        ? 'bg-navy-blue text-white'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <SafeIcon icon={icon} />
    <span>{label}</span>
  </button>
);

const AdminLogin = () => {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-navy-blue flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <SafeIcon icon={FiShield} className="text-gold-shoulder text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-playfair text-navy-blue">Admin Access</h2>
          <p className="text-gray-600">Enter your credentials to manage the tribute site</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

const TimelineEditor = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-playfair text-navy-blue mb-6">Timeline Editor</h2>
    <p className="text-gray-600">Manage commissioning journey timeline events.</p>
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500">Timeline management interface would be implemented here.</p>
    </div>
  </div>
);

const GalleryManager = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-playfair text-navy-blue mb-6">Gallery Manager</h2>
    <p className="text-gray-600">Upload and organize commissioning photos.</p>
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500">Photo upload and management interface would be implemented here.</p>
    </div>
  </div>
);

const MessageModerator = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-playfair text-navy-blue mb-6">Message Moderator</h2>
    <p className="text-gray-600">Review and approve guestbook messages.</p>
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500">Message moderation interface would be implemented here.</p>
    </div>
  </div>
);

const TimeCapsuleManager = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-playfair text-navy-blue mb-6">Time Capsule Manager</h2>
    <p className="text-gray-600">Schedule future message reveals.</p>
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500">Time capsule scheduling interface would be implemented here.</p>
    </div>
  </div>
);

export default AdminDashboard;