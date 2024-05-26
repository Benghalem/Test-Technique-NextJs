import Image from "next/image";
import  GrAidOption  from "@/components/GrAidOption";
/* images + icons */


export default function Home() {
  return (
    <main className="flex-1">
      {/*  ============= Banner start here  ================*/}
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GrAidOption 
          title="Sweet gift"
          image= "https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GrAidOption 
          title="Shop Wardrobe"
          image= "https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GrAidOption 
          title="Shop Home"
          image= "https://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GrAidOption 
          title="Shop Electronics"
          image= "https://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GrAidOption 
          title="Shop fashion"
          image= "https://links.papareact.com/m8e"
          className="bg-pink-200 h-full md:h-32"
        />
        <GrAidOption 
          title="Shop Toys"
          image= "https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GrAidOption 
          title="Shop Beaty"
          image= "https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GrAidOption 
          title="Shop Gadgets"
          image= "https://links.papareact.com/m8e"
          className="bg-pink-200 h-full md:h-32"
        />
        <GrAidOption 
        title="Shopy Sport"
        image= "https://links.papareact.com/sq2" 
        className="bg-blue-100  h-64"
        />
        <GrAidOption 
        title="Enjoy your life"
        image= "https://links.papareact.com/gs1" 
        className="bg-red-100  h-64"
      />
      {/*  ============= Banner End here  ================*/}
    </div>
    </main>
  );
}
