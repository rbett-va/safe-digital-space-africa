import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface CertificateProps {
    studentName: string;
    courseName: string;
    date: string;
}

const Certificate = ({ studentName, courseName, date }: CertificateProps) => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const downloadCertificate = async () => {
        if (!certificateRef.current) return;

        const canvas = await html2canvas(certificateRef.current, {
            scale: 2,
            logging: false,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`${courseName.replace(/\s+/g, "_")}_Certificate.pdf`);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white border-none shadow-lg">
                    <Award className="mr-2 h-5 w-5" />
                    Get Certificate
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full bg-transparent border-none shadow-none p-0">
                <div className="flex flex-col items-center gap-4">
                    <div
                        ref={certificateRef}
                        className="w-full aspect-[1.414/1] bg-white text-black p-12 flex flex-col items-center justify-center text-center border-[12px] border-double border-amber-600 relative overflow-hidden"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
                        </div>

                        <div className="mb-8">
                            <Award className="h-24 w-24 text-amber-600" />
                        </div>

                        <h1 className="text-5xl font-bold text-amber-800 mb-4 uppercase tracking-widest">Certificate</h1>
                        <h2 className="text-2xl font-light text-amber-700 mb-8 uppercase tracking-widest">of Completion</h2>

                        <p className="text-xl text-gray-600 mb-2">This is to certify that</p>
                        <h3 className="text-4xl font-bold text-black mb-2 border-b-2 border-amber-600 pb-2 px-8 min-w-[300px]">
                            {studentName || "Student Name"}
                        </h3>

                        <p className="text-xl text-gray-600 mb-2 mt-6">has successfully completed the course</p>
                        <h3 className="text-3xl font-bold text-amber-800 mb-8">
                            {courseName}
                        </h3>

                        <div className="flex justify-between w-full max-w-2xl mt-12 px-12">
                            <div className="flex flex-col items-center">
                                <div className="w-40 border-b border-gray-400 mb-2"></div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Date</p>
                                <p className="font-medium">{date}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-40 border-b border-gray-400 mb-2 flex justify-center">
                                    <span className="font-script text-2xl text-amber-800">SafeDigitalAfrica</span>
                                </div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Signature</p>
                            </div>
                        </div>
                    </div>

                    <Button onClick={downloadCertificate} size="lg" className="mt-4">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Certificate;