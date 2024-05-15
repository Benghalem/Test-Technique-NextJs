"use client"
import Image from "next/image"
import Link from "next/link"

/* icons */
import { 
    Search,
    Heart,
    Grid2X2,
    LayoutGrid,
    ShoppingCart,
    User, 
} from "lucide-react"
// type 
import { FormEvent } from "react"   
import { useRouter } from "next/navigation"
function Header() {
    
    const router = useRouter()
    /* handler for search submit */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const input = e.currentTarget.input.value;
        router.push(`/search?q=${input}`)
    }
  return (
    <header className="flex flex-col md:flex-row bg-weasydoo px-10 py-7 space-x-5 items-center">
    {/* ============== Logo Start Here ==================== */}
        <Link href="/" className="mb-5 md:mb-0"> 
            <Image 
            src="https://weasydoo.com/web/image/website/1/logo/Weasydoo?unique=b84b05b.png"
            alt="weasydoo logo"
            width={100}
            height={100}
            /> 
        </Link>
    {/* ============== SearchBox Start Here ==================== */}
        <form onSubmit={handleSubmit} className='flex h-10 items-center bg-white rounded-full w-full flex-1'>
            <input 
                name="input"
                type="text" 
                placeholder=" Search Evrything..." 
                className="flex-1 rounded-l-full px-4 outline-none placeholder:text-sm" />
            <button type="submit">
                <Search className="rounded-full h-8 px-2 w-8 bg-yellow-400 courspointer "/>
            </button>
        
        </form>            
    {/* ============== Logo End Here ==================== */}
    {/* ============== Departments Start Here ==================== */}
    <div className=" flex space-x-5 mt-5 md:mt-0">
        <Link 
            href={"/"}
            className="hidden xl:flex text-white font-smibold items-center space-x-2 text-sm"
        >
            <Grid2X2 size={20} />
            <p className="text-white">Departments</p>
        </Link>

        
        <Link 
            href={"/"}
            className="hidden xl:flex text-white font-smibold items-center space-x-2 text-sm"
        >
            <LayoutGrid size={20} />
            <p >Services</p>
        </Link>

        <Link 
            href={"/"}
            className="flex text-white font-smibold items-center space-x-2 text-sm"
        >
            <Heart size={20} />
            <div>
                <p className="text-xs font-extralight">Record</p>
                <p >My Items</p>
            </div>
        </Link>

        
        <Link 
            href={"/"}
            className="flex text-white font-smibold items-center space-x-2 text-sm"
        >
            <User size={20} />
            <div>
                <p className="text-xs font-extralight">Sign In</p>
                <p >Account</p>
            </div>
        </Link>
        
        <Link 
            href={"/"}
            className="flex text-white font-smibold items-center space-x-2 text-sm"
        >
            <ShoppingCart size={20} />
            <div>
                <p className="text-xs font-extralight">No Items</p>
                <p >$0.00</p>
            </div>
        </Link>
    </div>
    {/* ============== Departments End Here ==================== */}
    {/* ============== Cart End Here ==================== */}
    {/* ----------------------------------------------------- */}
    {/* ============== NavbarBottom Start Here ==================== */}
    {/* ============== NavbarBottom End Here ==================== */}

    </header>
  )
}

export default Header