import cn from 'classnames'

const Subtitle = ({ center, children }) => {
  return (
    <p className={cn("mb-10 text-2xl tracking-tight", { "text-center": center })}>
      {children}
    </p>
  )
};

export default Subtitle;