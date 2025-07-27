import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  Key, 
  Smartphone, 
  Shield, 
  CheckCircle,
  AlertCircle 
} from "lucide-react";

const StepsPage = () => {
  const steps = [
    {
      number: 1,
      title: "Download Microsoft Outlook",
      description: "Go to Google Play Store or App Store",
      detail: "Install the Microsoft Outlook app",
      icon: Download,
      color: "text-blue-600"
    },
    {
      number: 2,
      title: "Open the Outlook app",
      description: "Tap \"Add Account\"",
      detail: "",
      icon: Mail,
      color: "text-green-600"
    },
    {
      number: 3,
      title: "Enter your UG student email",
      description: "Format: YourStudentID@st.ug.edu.gh",
      detail: "(e.g. 10912345@st.ug.edu.gh)",
      icon: Mail,
      color: "text-purple-600"
    },
    {
      number: 4,
      title: "Enter your default email password",
      description: "This will be sent to you via SMS",
      detail: "",
      icon: Key,
      color: "text-orange-600"
    },
    {
      number: 5,
      title: "(iPhone Users Only)",
      description: "If prompted, tap \"Not IMAP\" in the top right corner",
      detail: "",
      icon: Smartphone,
      color: "text-gray-600"
    },
    {
      number: 6,
      title: "Choose Microsoft 365",
      description: "Tap \"Change Account Provider\"",
      detail: "Select Microsoft 365",
      icon: CheckCircle,
      color: "text-blue-600"
    },
    {
      number: 7,
      title: "Login again with your UG email and password",
      description: "",
      detail: "",
      icon: Shield,
      color: "text-green-600"
    },
    {
      number: 8,
      title: "Verify your account",
      description: "Select your preferred verification method (text or call)",
      detail: "",
      icon: Shield,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            </Link>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold">📲 How to Activate Your UG Student Email</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        
        {/* Introduction */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="pt-6">
            <p className="text-base lg:text-lg leading-relaxed text-foreground">
              Once you receive an SMS confirming your email has been activated, follow these steps:
            </p>
          </CardContent>
        </Card>

        {/* Steps Grid - Single column on mobile, two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.number} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base lg:text-lg font-semibold text-foreground leading-tight">
                        {step.title}
                      </CardTitle>
                    </div>
                    <IconComponent className={`w-5 h-5 ${step.color} flex-shrink-0`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="ml-11 space-y-1">
                    {step.description && (
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    )}
                    {step.detail && (
                      <p className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                        {step.detail}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Note */}
        <Card className="border-l-4 border-l-destructive bg-destructive/5 border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive mb-1">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  ⚠️ If it fails, reply to the SMS or visit UGITS for help
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="min-w-48">
              Submit New Request
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-noir text-white py-6 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm opacity-90">
            🔧 Powered by <strong>Evander Akrasi</strong> & <strong>Michael Yeng</strong> 🤝 In collaboration with <strong>Radiiant Software Labs</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StepsPage;