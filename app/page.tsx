import Image from "next/image";
import Card from "@/components/ui/card";

export default function Home() {
  return (
    <div className='bg-gray-500  h-full  '>

      <main className="p-5 text-white  flex text-center items-center h-full">
           <div className="bg-black container">
              Hola 
              <Card></Card>
           </div>
      </main>
    </div>
  );
}
