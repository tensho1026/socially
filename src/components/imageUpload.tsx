// "use client";

// import { UploadDropzone } from "@/lib/uploadthing";
// import { XIcon } from "lucide-react";
// import type { OurFileRouter } from "@/app/api/uploadthing/core"; 

// interface ImageUploadProps {
//   onChange: (url: string) => void;
//   value: string;
//   endpoint: keyof OurFileRouter; // ✅ 修正: カスタムFileRouterを適用
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({ endpoint, onChange, value }) => {
//   if (value) {
//     return (
//       <div className="relative size-40">
//         <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
//         <button
//           onClick={() => onChange("")}
//           className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
//           type="button"
//         >
//           <XIcon className="h-4 w-4 text-white" />
//         </button>
//       </div>
//     );
//   }

//   return (
//     <UploadDropzone
//       endpoint={endpoint} // ✅ これでOK
//       onClientUploadComplete={(res) => {
//         if (res && res.length > 0) {
//           onChange(res[0].url);
//         }
//       }}
//       onUploadError={(error: Error) => {
//         console.error("Upload error:", error);
//       }}
//     />
//   );
// };

// export default ImageUpload;

"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}
export default ImageUpload;