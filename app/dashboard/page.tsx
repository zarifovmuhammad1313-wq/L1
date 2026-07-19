'use client';

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
      <p className="text-white/60 mb-8">Welcome to LaundryPro CRM</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6">
          <h3 className="text-sm text-white/60 uppercase mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-400">€12,450</p>
          <p className="text-xs text-white/40 mt-2">↑ 12% from last month</p>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-sm text-white/60 uppercase mb-2">Active Orders</h3>
          <p className="text-3xl font-bold text-cyan-400">24</p>
          <p className="text-xs text-white/40 mt-2">5 in progress</p>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-sm text-white/60 uppercase mb-2">Total Clients</h3>
          <p className="text-3xl font-bold text-yellow-400">156</p>
          <p className="text-xs text-white/40 mt-2">↑ 8 new this month</p>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-sm text-white/60 uppercase mb-2">Completed Orders</h3>
          <p className="text-3xl font-bold text-purple-400">342</p>
          <p className="text-xs text-white/40 mt-2">98% completion rate</p>
        </div>
      </div>
    </div>
  );
}
