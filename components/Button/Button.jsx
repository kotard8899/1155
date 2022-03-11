import Link from 'next/link'

function Button ({ children, className, href = '/#', onClick, shape, target }) {
  const classNames = [
    'inline-block',
    'px-6',
    'py-4',
    'bg-lootex-primary-0',
    'text-sm',
    'font-black',
    'text-center',
    'text-lootex-white',
    'duration-500',
    'cursor-pointer',
    'hover:bg-lootex-primary-light-3',
  ]

  let buttonElement

  'pill' === shape ? classNames.push('rounded-3xl') : classNames.push('rounded-lg')

  if (className) classNames.push(className)

  href = href.startsWith('/') || href.startsWith('https://') ? href : `/${href}`

  if ('function' === typeof onClick) {
    buttonElement = <button className={classNames.join(' ')} onClick={onClick}>{children}</button>
  } else {
    const aProps = {}

    if ('_blank' === target) {
      aProps.target = '_blank'
      aProps.rel = 'noreferrer'
    }

    buttonElement = <Link href={href}><a className={classNames.join(' ')} {...aProps}>{children}</a></Link>
  }

  return buttonElement
}

export default Button
