import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

export default function Contact() {
    return (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="grid md:grid-cols-2 gap-8 w-[500px] items-center">
                <div className="flex flex-col items-center space-x-3 text-base">
                    <div className="flex items-center space-x-2">
                        <BsFillTelephoneFill className="text-blue-500" />
                        <div className="font-semibold">Whatsapp/Telegram/Viber:</div>
                    </div>
                    <div>
                        <div>+(994)-50-649-16-23</div>
                    </div>
                </div>
                <div className="flex flex-col items-center space-x-3 text-base">
                    <div className="flex items-center space-x-2">
                        <GrMail className="text-blue-500" />
                        <div className="font-semibold">E-Mail:</div>
                    </div>
                    <div>
                        <div>Setvin.team@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
