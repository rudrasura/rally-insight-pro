import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { 
  Upload, 
  Video, 
  CheckCircle, 
  AlertCircle,
  FileVideo,
  Clock
} from "lucide-react";

export const VideoUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a video file (MP4, MOV, AVI, etc.)",
        variant: "destructive",
      });
      return;
    }

    // Check file size (max 500MB for demo)
    if (file.size > 500 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a video smaller than 500MB",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload successful!",
            description: "Your match video is being analyzed. This usually takes 2-3 minutes.",
          });
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to
            <span className="block text-secondary">Analyze Your Game?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your match video and get professional insights in minutes
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {!uploadedFile ? (
              <div className="text-center">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 mb-6 hover:border-primary/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upload Your Match Video</h3>
                  <p className="text-muted-foreground mb-6">
                    Drag and drop your video file here, or click to browse
                  </p>
                  
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload">
                    <Button variant="default" size="lg" className="cursor-pointer">
                      <Video className="mr-2 h-5 w-5" />
                      Select Video File
                    </Button>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <FileVideo className="h-4 w-4 mr-2" />
                    MP4, MOV, AVI supported
                  </div>
                  <div className="flex items-center justify-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Max file size: 500MB
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Analysis: ~3 minutes
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center mb-6">
                  {uploadProgress < 100 ? (
                    <Video className="h-8 w-8 text-primary mr-3" />
                  ) : (
                    <CheckCircle className="h-8 w-8 text-secondary mr-3" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{uploadedFile.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(uploadedFile.size)}
                    </p>
                  </div>
                </div>

                {isUploading && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Uploading...</span>
                      <span>{Math.round(uploadProgress)}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                {uploadProgress === 100 && (
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      <div>
                        <h4 className="font-semibold text-secondary">Upload Complete!</h4>
                        <p className="text-sm text-muted-foreground">
                          Your video is being analyzed. You'll receive an email when it's ready.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 justify-center">
                  <Button variant="secondary" onClick={() => setUploadedFile(null)}>
                    Upload Another Video
                  </Button>
                  {uploadProgress === 100 && (
                    <Button variant="default">
                      View Analysis Dashboard
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Card>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-3">
                <AlertCircle className="h-5 w-5 text-accent mr-2" />
                <h4 className="font-semibold">Best Results Tips</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Record from courtside for optimal angle</li>
                <li>• Ensure good lighting throughout</li>
                <li>• Keep camera steady during recording</li>
                <li>• Capture the entire court if possible</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-semibold">Processing Time</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 10-30 min matches: ~2-3 minutes</li>
                <li>• 30-60 min matches: ~4-6 minutes</li>
                <li>• 60+ min matches: ~8-12 minutes</li>
                <li>• You'll get an email notification</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};