import { ReactComponent as PhoneIcon } from '../assets/svgs/phone.svg';
import { ReactComponent as  MailIcon} from '../assets/svgs/mail.svg';
import { ReactComponent as  WebsiteIcon } from '../assets/svgs/website.svg';
import { ReactComponent as StackOverflowIcon } from '../assets/svgs/stackoverflow.svg';
import { ReactComponent as TwitterIcon } from '../assets/svgs/twitter.svg';

const MEDIA_TYPES = {
  phone: {
    icon: PhoneIcon,
    value: '+91-9952434420',
    url: 'tel:+919952434420'
  },
  mail: {
    icon: MailIcon,
    value: 'aswathprabhu.r@gmail.com',
    url: 'mailto:aswathprabhu.r@gmail.com'
  },
  website: {
    icon: WebsiteIcon,
    value: 'insanedev.netlify.app',
    url: 'https://insanedev.netlify.app/'
  },
  stackoverflow: {
    path: '/stackoverflow.png',
    url: 'https://stackoverflow.com/users/8175684/aswath',
    classes: 'h-10'
  },
  twitter: {
    icon: TwitterIcon,
    url: 'https://twitter.com/theInsaneDev',
    classes: 'h-10'
  },
  linkedin: {
    path: '/linkedin.png',
    url: 'https://www.linkedin.com/in/aswath-prabhu-359340132/',
    classes: 'h-10'
  },
  github: {
    path: '/github.png',
    url: 'https://github.com/Aswathprabhu'
  }
}
export default function Contact(props) {
  let { type, className } = props;
  const MEDIA_TYPE = MEDIA_TYPES[type];
  return (
    <div className={className}>
      <a
        className="inline-flex items-center"
        rel="noopener noreferrer"
        target="_blank"
        href={MEDIA_TYPE.url}
      >
        {MEDIA_TYPE.icon ? (
          <MEDIA_TYPE.icon className={MEDIA_TYPE.classes ? MEDIA_TYPE.classes : 'w-5 h-5 mr-2'} />
        ) : (
          <img
            className="h-10"
            src={MEDIA_TYPE.path}
            alt={MEDIA_TYPE.path}
          />
        )}
        <span>{MEDIA_TYPE.value}</span>
      </a>
    </div>
  )
}