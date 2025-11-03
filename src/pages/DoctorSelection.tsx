import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockAppointments, mockDoctors } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoctorSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  
  const report = mockAppointments.find(r => r.id === id);
  const availableDoctors = mockDoctors.filter(w => 
    w.category === report?.category && w.available
  );

  if (!report) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-xl font-semibold">Appointment not found</h1>
            <Button onClick={() => navigate("/dashboard")} className="mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleDoctorToggle = (doctorId: string) => {
    setSelectedDoctors(prev => 
      prev.includes(doctorId) 
        ? prev.filter(id => id !== doctorId)
        : [...prev, doctorId]
    );
  };

  const handleConfirm = () => {
    if (selectedDoctors.length === 0) {
      toast({
        title: "No doctors selected",
        description: "Please select at least one doctor to assign.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Doctors have been assigned",
      description: `${selectedDoctors.length} doctor(s) assigned to handle the appointment.`,
    });
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-header text-primary-foreground shadow-government">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(`/appointment/${id}`)}
              className="text-primary-foreground hover:bg-primary-light mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-government">Select Doctors</h1>
              <p className="text-sm opacity-90">Specialization: {report.category}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Summary */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Appointment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Request ID</p>
                <p className="font-medium">{report.requestId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Area</p>
                <p className="font-medium">{report.area}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Specialization</p>
                <p className="font-medium">{report.category}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Workers */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">Available Doctors</CardTitle>
            <p className="text-sm text-muted-foreground">
              Select one or more doctors to assign for this appointment
            </p>
          </CardHeader>
          <CardContent>
            {availableDoctors.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No doctors available for this specialization</p>
              </div>
            ) : (
              <div className="space-y-4">
                {availableDoctors.map((worker) => (
                  <div
                    key={worker.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedDoctors.includes(worker.id)
                        ? 'border-primary bg-accent'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleDoctorToggle(worker.id)}
                  >
                    <div className="flex items-start gap-4">
                      <Checkbox
                        checked={selectedDoctors.includes(worker.id)}
                        onCheckedChange={() => handleDoctorToggle(worker.id)}
                        className="mt-1"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{worker.name}</h3>
                          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Available
                          </Badge>
                        </div>
                        
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {worker.contact}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {worker.area}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate(`/appointment/${id}`)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={selectedDoctors.length === 0}
            className="bg-success hover:bg-success/90 text-success-foreground px-8"
          >
            CONFIRM ({selectedDoctors.length} selected)
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DoctorSelection;