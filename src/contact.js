import {motion} from 'framer-motion';

export default function ContactPage(){
    return(
        <>
        <motion.div className='contact-panel' initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 0.6 }}>
        <h1 className="text-6xl font-montserrat">Contact Form</h1>
        <form class="w-full max-w-sm flex flex-col" action="https://formspree.io/f/mwkjqrvq" method="POST">
            <div class="flex items-center border-b border-white py-2">
                <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" name="email" placeholder="Email" aria-label="Full name" />
            </div>
            <div class="flex items-center border-b border-white py-2">
                <textarea name="message" class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Message" aria-label="Full name" />
                <button class="flex-shrink-0 bg-purple-300 hover:bg-purple-400 border-purple-300 hover:border-purple-400 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Send Message
                </button>
            </div>
        </form>
        </motion.div>
        </>
    )
}