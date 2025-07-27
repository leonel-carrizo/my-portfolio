function Button ({ text, icon, onClick }) {
  return (
    <>
      <button className='button' onClick={onClick} type='<button'>
        {icon}{text}
      </button>
    </>
  )
}

export default Button
