import Image from "next/image"
import Link from "next/link"

const LinkLogo = () => {
  return (
    <div className="flex items-center px-[6px] lg:h-[40px] lg:[6px]">
      <Link href='/' className="flex items-center gap-2 text-lg font-semibold">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} />
        <span className="truncate font-semibold">TanoShokan</span>
      </Link>
    </div>
  )
}
export default LinkLogo
