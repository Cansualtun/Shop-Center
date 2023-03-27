import Image from "next/image"
import Button from "@/components/UI/Button/Button"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link"

export default function Error () {
    const { t, lang } = useTranslation('common')
    const returnHome = t('Return to Home Page')
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-20 gap-10">
            <h1 className="gap-10 text-lg font-medium hover:font-bold tracking-wide italic">Page Not Found</h1>
            <Image src="/404.svg" width="500" height="500" alt="404" />
            <Link href="/">
            <Button variant="third">{returnHome}</Button>
            </Link>
            </div>
        </div>
    )
}
