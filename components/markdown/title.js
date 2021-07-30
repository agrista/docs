import cn from 'classnames'

const Title = ({ center, children, className }) => {
  return (
    <h1 className={cn(
      "mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900", { "text-center": center },
      className
    )}>
      {children}
    </h1 >
  )
};

export default Title;