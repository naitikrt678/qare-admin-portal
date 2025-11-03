import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockReports } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart, PieChart, TrendingUp, Users } from "lucide-react";

const AppointmentAnalytics = () => {
  const navigate = useNavigate();
  const [reports] = useState(mockReports);
  const [viewMode, setViewMode] = useState<'overview' | 'specializations' | 'hospitals'>('overview');

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Green Header */}
      <header className="bg-gradient-header text-primary-foreground shadow-government">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleBackToDashboard}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-light"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-government">QARE ADMIN PORTAL - ANALYTICS</h1>
                <p className="text-sm opacity-90">Digital Healthcare Platform - Appointment Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">Appointment Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">📊 Appointment Analytics Overview</h3>
                    <p className="text-sm text-green-700">View appointment trends, specializations, and hospital distribution.</p>
                  </div>
                  
                  {/* Toggle Controls */}
                  <div className="flex bg-white rounded-lg p-1 border">
                    <button
                      onClick={() => setViewMode('overview')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'overview'
                          ? 'bg-blue-500 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <BarChart className="h-4 w-4 inline mr-1" />
                      Overview
                    </button>
                    <button
                      onClick={() => setViewMode('specializations')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'specializations'
                          ? 'bg-red-500 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <PieChart className="h-4 w-4 inline mr-1" />
                      Specializations
                    </button>
                    <button
                      onClick={() => setViewMode('hospitals')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'hospitals'
                          ? 'bg-green-500 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Users className="h-4 w-4 inline mr-1" />
                      Hospitals
                    </button>
                  </div>
                </div>
                
                <div className="mb-4 bg-white rounded-lg p-6 min-h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 mx-auto text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Appointment Analytics Visualization</h3>
                    <p className="text-gray-600 mb-4">Interactive charts and graphs would be displayed here based on the selected view mode.</p>
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{reports.length}</div>
                        <div className="text-sm text-gray-600">Total Appointments</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{reports.filter(r => r.status === 'completed').length}</div>
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{reports.filter(r => r.status === 'pending').length}</div>
                        <div className="text-sm text-gray-600">Pending</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="font-semibold text-blue-600">{reports.length}</div>
                    <div className="text-gray-600">Total Appointments</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="font-semibold text-red-600">{reports.filter(r => r.urgency === 'critical').length}</div>
                    <div className="text-gray-600">Critical Cases</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="font-semibold text-yellow-600">{reports.filter(r => r.status === 'pending').length}</div>
                    <div className="text-gray-600">Pending</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="font-semibold text-green-600">{reports.filter(r => r.status === 'completed').length}</div>
                    <div className="text-gray-600">Completed</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Priority Levels:</h4>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Critical</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>High</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Medium</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AppointmentAnalytics;