import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmissionPage = () => {
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentId || !phoneNumber) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in both your Student ID and phone number.",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "Your email activation request has been sent to UGITS.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-8 pb-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">Request Received!</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your request has been received. You'll get an SMS once processing is done.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/steps">
                  <Button variant="outline" className="w-full">
                    <Smartphone className="w-4 h-4 mr-2" />
                    View Setup Steps
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => setIsSubmitted(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-md mx-auto flex items-center space-x-3">
          <GraduationCap className="w-8 h-8" />
          <h1 className="text-xl font-bold">UG Email Activation Support</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md lg:max-w-2xl">
          
          {/* Prompt Box */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardDescription className="text-base leading-relaxed text-foreground">
                Can't make it to UGITS to activate your student email? Submit your Student ID and active phone number. 
                We'll forward your request and notify you by SMS once it's ready. ✅ Setup only takes a few minutes via Microsoft Outlook.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Submit Your Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="studentId" className="text-sm font-medium">
                    Student ID
                  </Label>
                  <Input
                    id="studentId"
                    type="text"
                    placeholder="e.g., 10912345"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="e.g., 0244123456"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium"
                >
                  Submit Request
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <Link to="/steps" className="block">
                  <Button variant="ghost" className="w-full">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Not sure how to activate? View setup steps
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-noir text-white py-6 px-4 mt-8">
        <div className="max-w-md mx-auto lg:max-w-2xl text-center">
          <p className="text-sm opacity-90">
            🔧 Powered by <strong>Evander Akrasi</strong> & <strong>Michael Yeng</strong> 🤝 In collaboration with <strong>Radiiant Software Labs</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SubmissionPage;