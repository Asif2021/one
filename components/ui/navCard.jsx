import Image from "next/image";
import Link from "next/link";
import { MoveRight, ArrowRight  } from 'lucide-react';


const NavCards = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">Munshi</h1>
          <Image
             src="/images/4.jpg"
              alt="image"
              width={240}
              height={150}
              className="w-full h-auto object-cover rounded-xl"
            />
   <Link href="#" className="hover:underline flex items-start p-5">
  <span>Payment management solution for cash disbursements and approvals</span>
  <ArrowRight className="text-orange-500" />
</Link>   
      </div>
           <div className="flex flex-col gap-6">
        <h1 className="font-bold">Cams</h1>
          <Image
             src="/images/4.jpg"
              alt="image"
              width={240}
              height={150}
              className="w-full h-auto object-cover rounded-xl"/>
   <Link href="#" className="hover:underline flex items-start p-5">
  <span>Payment management solution for cash disbursements and approvals</span>
  <ArrowRight className="text-orange-500" />
</Link>       </div>
            <div className="flex flex-col gap-6">
        <h1 className="font-bold">E-Tickets</h1>
          <Image
             src="/images/4.jpg"
              alt="image"
              width={240}
              height={150}
              className="w-full h-auto object-cover rounded-xl"
            />
            <Link href="#" className="hover:underline flex items-start p-5">
  <span>Payment management solution for cash disbursements and approvals</span>
  <ArrowRight className="text-orange-500" />
</Link>  
      </div>

    </div>
    
  )
}

export default NavCards;