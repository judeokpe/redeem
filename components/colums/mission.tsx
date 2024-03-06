'use client'
import { Separator } from "@radix-ui/react-separator";
import { CheckCircleIcon } from "lucide-react";

const Mission = () => {
    return ( 
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center px-4 md:px-10 space-x-3 py-4">
            <div className="bg-gradient-to-r from-green-500 to-blue-200 rounded-tl-lg p-2 mb-4">
                <h2 className="font-bold text-2xl">Our Mission</h2>
                <hr/>
                <p className="pt-2">To share the love of Christ, make disciples, and transform lives.</p>
            </div>
            <div className="bg-gradient-to-r from-red-100 via-sky-500 to-blue-200 rounded-tl-lg p-2 mb-4">
                <h2>Our Vision</h2>
                <p className="pt-2">A community where all are welcomed, inspired, and equipped to live out God's purpose.</p>
                </div>
            <div className="bg-gradient-to-r from-yellow-500 via-sky-500 to-red-200 rounded-tl-lg p-2 mb-4">
                <h2>Core Values</h2>
                <ul className="mx-auto max-w-[600px] grid gap-2 text-left md:gap-4 lg:gap-2">
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Faith: Trusting in God's love and grace.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Community: Supporting and caring for one another.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Service: Sharing God's love through action.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Inclusion: Welcoming all with open hearts and minds.</p>
          </li>
        </ul>
                </div>
        </div>
     );
}
 
export default Mission;