



function Contact({data: {id, name, number}, onDelete}) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete contact</button>
    </div>
  )
}

export default Contact;