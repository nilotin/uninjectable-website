type ModuleFolderIconProps = {
  active?: boolean
  className?: string
}

function ModuleFolderIcon({
  active = false,
  className = '',
}: ModuleFolderIconProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}modules/folder-pink.png`}
      alt=""
      aria-hidden="true"
      className={[
        'module-folder-image',
        active ? 'module-folder-image-active' : '',
        className,
      ].join(' ')}
    />
  )
}

export default ModuleFolderIcon