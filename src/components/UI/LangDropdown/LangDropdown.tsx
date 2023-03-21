import { useRouter } from 'next/router'

function LangDropdown() {
  const router = useRouter()

  const changeLanguage = (language : any) => {
    router.push(router.pathname, router.asPath, { locale: language })
  }

  return (
    <div className="flex items-center">
      <button
        className={`${
          router.locale === 'en' ? 'bg-transparent' : ''
        } text-gray-700 py-2 px-3 rounded-l`}
        onClick={() => changeLanguage('en')}
      > 
      <div className='flex flex-row gap-2'>
        English
        <img width={20} height={20} src="/united-states.png" alt="English" />
        </div>   
      </button>
      <button
        className={`${
          router.locale === 'tr' ? 'bg-transparent' : ''
        } text-gray-700 py-2 px-3 rounded-r`}
        onClick={() => changeLanguage('tr')}
      >
        <div className='flex flex-row gap-2'>
        Turkish
        <img width={20} height={20} src="/turkey.png" alt="turkish" />
        </div>
      </button>
    </div>
  )
}

export default LangDropdown
